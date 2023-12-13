// solid/use-chat.ts
import { createSignal } from "solid-js";
import { useSWRStore } from "solid-swr-store";
import { createSWRStore } from "swr-store";

// shared/stream-parts.ts
var textStreamPart = {
  code: "0",
  name: "text",
  parse: (value) => {
    if (typeof value !== "string") {
      throw new Error('"text" parts expect a string value.');
    }
    return { type: "text", value };
  }
};
var functionCallStreamPart = {
  code: "1",
  name: "function_call",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("function_call" in value) || typeof value.function_call !== "object" || value.function_call == null || !("name" in value.function_call) || !("arguments" in value.function_call) || typeof value.function_call.name !== "string" || typeof value.function_call.arguments !== "string") {
      throw new Error(
        '"function_call" parts expect an object with a "function_call" property.'
      );
    }
    return {
      type: "function_call",
      value
    };
  }
};
var dataStreamPart = {
  code: "2",
  name: "data",
  parse: (value) => {
    if (!Array.isArray(value)) {
      throw new Error('"data" parts expect an array value.');
    }
    return { type: "data", value };
  }
};
var errorStreamPart = {
  code: "3",
  name: "error",
  parse: (value) => {
    if (typeof value !== "string") {
      throw new Error('"error" parts expect a string value.');
    }
    return { type: "error", value };
  }
};
var assistantMessage = {
  code: "4",
  name: "assistant_message",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("id" in value) || !("role" in value) || !("content" in value) || typeof value.id !== "string" || typeof value.role !== "string" || value.role !== "assistant" || !Array.isArray(value.content) || !value.content.every(
      (item) => item != null && typeof item === "object" && "type" in item && item.type === "text" && "text" in item && item.text != null && typeof item.text === "object" && "value" in item.text && typeof item.text.value === "string"
    )) {
      throw new Error(
        '"assistant_message" parts expect an object with an "id", "role", and "content" property.'
      );
    }
    return {
      type: "assistant_message",
      value
    };
  }
};
var assistantControlData = {
  code: "5",
  name: "assistant_control_data",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("threadId" in value) || !("messageId" in value) || typeof value.threadId !== "string" || typeof value.messageId !== "string") {
      throw new Error(
        '"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.'
      );
    }
    return {
      type: "assistant_control_data",
      value: {
        threadId: value.threadId,
        messageId: value.messageId
      }
    };
  }
};
var streamParts = [
  textStreamPart,
  functionCallStreamPart,
  dataStreamPart,
  errorStreamPart,
  assistantMessage,
  assistantControlData
];
var streamPartsByCode = {
  [textStreamPart.code]: textStreamPart,
  [functionCallStreamPart.code]: functionCallStreamPart,
  [dataStreamPart.code]: dataStreamPart,
  [errorStreamPart.code]: errorStreamPart,
  [assistantMessage.code]: assistantMessage,
  [assistantControlData.code]: assistantControlData
};
var StreamStringPrefixes = {
  [textStreamPart.name]: textStreamPart.code,
  [functionCallStreamPart.name]: functionCallStreamPart.code,
  [dataStreamPart.name]: dataStreamPart.code,
  [errorStreamPart.name]: errorStreamPart.code,
  [assistantMessage.name]: assistantMessage.code,
  [assistantControlData.name]: assistantControlData.code
};
var validCodes = streamParts.map((part) => part.code);
var parseStreamPart = (line) => {
  const firstSeparatorIndex = line.indexOf(":");
  if (firstSeparatorIndex === -1) {
    throw new Error("Failed to parse stream string. No separator found.");
  }
  const prefix = line.slice(0, firstSeparatorIndex);
  if (!validCodes.includes(prefix)) {
    throw new Error(`Failed to parse stream string. Invalid code ${prefix}.`);
  }
  const code = prefix;
  const textValue = line.slice(firstSeparatorIndex + 1);
  const jsonValue = JSON.parse(textValue);
  return streamPartsByCode[code].parse(jsonValue);
};

// shared/read-data-stream.ts
var NEWLINE = "\n".charCodeAt(0);
function concatChunks(chunks, totalLength) {
  const concatenatedChunks = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    concatenatedChunks.set(chunk, offset);
    offset += chunk.length;
  }
  chunks.length = 0;
  return concatenatedChunks;
}
async function* readDataStream(reader, {
  isAborted
} = {}) {
  const decoder = new TextDecoder();
  const chunks = [];
  let totalLength = 0;
  while (true) {
    const { value } = await reader.read();
    if (value) {
      chunks.push(value);
      totalLength += value.length;
      if (value[value.length - 1] !== NEWLINE) {
        continue;
      }
    }
    if (chunks.length === 0) {
      break;
    }
    const concatenatedChunks = concatChunks(chunks, totalLength);
    totalLength = 0;
    const streamParts2 = decoder.decode(concatenatedChunks, { stream: true }).split("\n").filter((line) => line !== "").map(parseStreamPart);
    for (const streamPart of streamParts2) {
      yield streamPart;
    }
    if (isAborted == null ? void 0 : isAborted()) {
      reader.cancel();
      break;
    }
  }
}

// shared/utils.ts
import { customAlphabet } from "nanoid/non-secure";
var nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7
);
function createChunkDecoder(complex) {
  const decoder = new TextDecoder();
  if (!complex) {
    return function(chunk) {
      if (!chunk)
        return "";
      return decoder.decode(chunk, { stream: true });
    };
  }
  return function(chunk) {
    const decoded = decoder.decode(chunk, { stream: true }).split("\n").filter((line) => line !== "");
    return decoded.map(parseStreamPart).filter(Boolean);
  };
}
var COMPLEX_HEADER = "X-Experimental-Stream-Data";

// shared/parse-complex-response.ts
async function parseComplexResponse({
  reader,
  abortControllerRef,
  update,
  onFinish,
  generateId = nanoid,
  getCurrentDate = () => /* @__PURE__ */ new Date()
}) {
  const createdAt = getCurrentDate();
  const prefixMap = {
    data: []
  };
  for await (const { type, value } of readDataStream(reader, {
    isAborted: () => (abortControllerRef == null ? void 0 : abortControllerRef.current) === null
  })) {
    if (type === "text") {
      if (prefixMap["text"]) {
        prefixMap["text"] = {
          ...prefixMap["text"],
          content: (prefixMap["text"].content || "") + value
        };
      } else {
        prefixMap["text"] = {
          id: generateId(),
          role: "assistant",
          content: value,
          createdAt
        };
      }
    }
    let functionCallMessage = null;
    if (type === "function_call") {
      prefixMap["function_call"] = {
        id: generateId(),
        role: "assistant",
        content: "",
        function_call: value.function_call,
        name: value.function_call.name,
        createdAt
      };
      functionCallMessage = prefixMap["function_call"];
    }
    if (type === "data") {
      prefixMap["data"].push(...value);
    }
    const responseMessage = prefixMap["text"];
    const merged = [functionCallMessage, responseMessage].filter(
      Boolean
    );
    update(merged, [...prefixMap["data"]]);
  }
  onFinish == null ? void 0 : onFinish(prefixMap);
  return {
    messages: [prefixMap.text, prefixMap.function_call].filter(
      Boolean
    ),
    data: prefixMap.data
  };
}

// shared/call-chat-api.ts
async function callChatApi({
  api,
  messages,
  body,
  credentials,
  headers,
  abortController,
  appendMessage,
  restoreMessagesOnFailure,
  onResponse,
  onUpdate,
  onFinish,
  generateId
}) {
  var _a;
  const response = await fetch(api, {
    method: "POST",
    body: JSON.stringify({
      messages,
      ...body
    }),
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    signal: (_a = abortController == null ? void 0 : abortController()) == null ? void 0 : _a.signal,
    credentials
  }).catch((err) => {
    restoreMessagesOnFailure();
    throw err;
  });
  if (onResponse) {
    try {
      await onResponse(response);
    } catch (err) {
      throw err;
    }
  }
  if (!response.ok) {
    restoreMessagesOnFailure();
    throw new Error(
      await response.text() || "Failed to fetch the chat response."
    );
  }
  if (!response.body) {
    throw new Error("The response body is empty.");
  }
  const reader = response.body.getReader();
  const isComplexMode = response.headers.get(COMPLEX_HEADER) === "true";
  if (isComplexMode) {
    return await parseComplexResponse({
      reader,
      abortControllerRef: abortController != null ? { current: abortController() } : void 0,
      update: onUpdate,
      onFinish(prefixMap) {
        if (onFinish && prefixMap.text != null) {
          onFinish(prefixMap.text);
        }
      },
      generateId
    });
  } else {
    const createdAt = /* @__PURE__ */ new Date();
    const decode = createChunkDecoder(false);
    let streamedResponse = "";
    const replyId = generateId();
    let responseMessage = {
      id: replyId,
      createdAt,
      content: "",
      role: "assistant"
    };
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      streamedResponse += decode(value);
      if (streamedResponse.startsWith('{"function_call":')) {
        responseMessage["function_call"] = streamedResponse;
      } else {
        responseMessage["content"] = streamedResponse;
      }
      appendMessage({ ...responseMessage });
      if ((abortController == null ? void 0 : abortController()) === null) {
        reader.cancel();
        break;
      }
    }
    if (streamedResponse.startsWith('{"function_call":')) {
      const parsedFunctionCall = JSON.parse(streamedResponse).function_call;
      responseMessage["function_call"] = parsedFunctionCall;
      appendMessage({ ...responseMessage });
    }
    if (onFinish) {
      onFinish(responseMessage);
    }
    return responseMessage;
  }
}

// shared/process-chat-stream.ts
async function processChatStream({
  getStreamedResponse,
  experimental_onFunctionCall,
  updateChatRequest,
  getCurrentMessages
}) {
  while (true) {
    const messagesAndDataOrJustMessage = await getStreamedResponse();
    if ("messages" in messagesAndDataOrJustMessage) {
      let hasFollowingResponse = false;
      for (const message of messagesAndDataOrJustMessage.messages) {
        if (message.function_call === void 0 || typeof message.function_call === "string") {
          continue;
        }
        hasFollowingResponse = true;
        if (experimental_onFunctionCall) {
          const functionCall = message.function_call;
          const functionCallResponse = await experimental_onFunctionCall(
            getCurrentMessages(),
            functionCall
          );
          if (functionCallResponse === void 0) {
            hasFollowingResponse = false;
            break;
          }
          updateChatRequest(functionCallResponse);
        }
      }
      if (!hasFollowingResponse) {
        break;
      }
    } else {
      const streamedResponseMessage = messagesAndDataOrJustMessage;
      if (streamedResponseMessage.function_call === void 0 || typeof streamedResponseMessage.function_call === "string") {
        break;
      }
      if (experimental_onFunctionCall) {
        const functionCall = streamedResponseMessage.function_call;
        const functionCallResponse = await experimental_onFunctionCall(getCurrentMessages(), functionCall);
        if (functionCallResponse === void 0)
          break;
        updateChatRequest(functionCallResponse);
      }
    }
  }
}

// solid/use-chat.ts
var uniqueId = 0;
var store = {};
var chatApiStore = createSWRStore({
  get: async (key) => {
    var _a;
    return (_a = store[key]) != null ? _a : [];
  }
});
function useChat({
  api = "/api/chat",
  id,
  initialMessages = [],
  initialInput = "",
  sendExtraMessageFields,
  experimental_onFunctionCall,
  onResponse,
  onFinish,
  onError,
  credentials,
  headers,
  body,
  generateId = nanoid
} = {}) {
  const chatId = id || `chat-${uniqueId++}`;
  const key = `${api}|${chatId}`;
  const messages = useSWRStore(chatApiStore, () => [key], {
    initialData: initialMessages
  });
  const mutate = (data) => {
    store[key] = data;
    return chatApiStore.mutate([key], {
      status: "success",
      data
    });
  };
  const [error, setError] = createSignal(void 0);
  const [streamData, setStreamData] = createSignal(
    void 0
  );
  const [isLoading, setIsLoading] = createSignal(false);
  let abortController = null;
  async function triggerRequest(messagesSnapshot, options) {
    try {
      setError(void 0);
      setIsLoading(true);
      abortController = new AbortController();
      const getCurrentMessages = () => chatApiStore.get([key], {
        shouldRevalidate: false
      });
      const previousMessages = getCurrentMessages();
      mutate(messagesSnapshot);
      let chatRequest = {
        messages: messagesSnapshot,
        options
      };
      await processChatStream({
        getStreamedResponse: async () => {
          var _a;
          const existingData = (_a = streamData()) != null ? _a : [];
          return await callChatApi({
            api,
            messages: sendExtraMessageFields ? chatRequest.messages : chatRequest.messages.map(
              ({ role, content, name, function_call }) => ({
                role,
                content,
                ...name !== void 0 && { name },
                ...function_call !== void 0 && {
                  function_call
                }
              })
            ),
            body: {
              ...body,
              ...options == null ? void 0 : options.body
            },
            headers: {
              ...headers,
              ...options == null ? void 0 : options.headers
            },
            abortController: () => abortController,
            credentials,
            onResponse,
            onUpdate(merged, data) {
              mutate([...chatRequest.messages, ...merged]);
              setStreamData([...existingData, ...data != null ? data : []]);
            },
            onFinish,
            appendMessage(message) {
              mutate([...chatRequest.messages, message]);
            },
            restoreMessagesOnFailure() {
              if (previousMessages.status === "success") {
                mutate(previousMessages.data);
              }
            },
            generateId
          });
        },
        experimental_onFunctionCall,
        updateChatRequest(newChatRequest) {
          chatRequest = newChatRequest;
        },
        getCurrentMessages: () => getCurrentMessages().data
      });
      abortController = null;
    } catch (err) {
      if (err.name === "AbortError") {
        abortController = null;
        return null;
      }
      if (onError && err instanceof Error) {
        onError(err);
      }
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }
  const append = async (message, options) => {
    var _a;
    if (!message.id) {
      message.id = generateId();
    }
    return triggerRequest(
      ((_a = messages()) != null ? _a : []).concat(message),
      options
    );
  };
  const reload = async (options) => {
    const messagesSnapshot = messages();
    if (!messagesSnapshot || messagesSnapshot.length === 0)
      return null;
    const lastMessage = messagesSnapshot[messagesSnapshot.length - 1];
    if (lastMessage.role === "assistant") {
      return triggerRequest(messagesSnapshot.slice(0, -1), options);
    }
    return triggerRequest(messagesSnapshot, options);
  };
  const stop = () => {
    if (abortController) {
      abortController.abort();
      abortController = null;
    }
  };
  const setMessages = (messages2) => {
    mutate(messages2);
  };
  const [input, setInput] = createSignal(initialInput);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = input();
    if (!inputValue)
      return;
    append({
      content: inputValue,
      role: "user",
      createdAt: /* @__PURE__ */ new Date()
    });
    setInput("");
  };
  return {
    messages,
    append,
    error,
    reload,
    stop,
    setMessages,
    input,
    setInput,
    handleSubmit,
    isLoading,
    data: streamData
  };
}

// solid/use-completion.ts
import { createSignal as createSignal2 } from "solid-js";
import { useSWRStore as useSWRStore2 } from "solid-swr-store";
import { createSWRStore as createSWRStore2 } from "swr-store";

// shared/call-completion-api.ts
async function callCompletionApi({
  api,
  prompt,
  credentials,
  headers,
  body,
  setCompletion,
  setLoading,
  setError,
  setAbortController,
  onResponse,
  onFinish,
  onError,
  onData
}) {
  try {
    setLoading(true);
    setError(void 0);
    const abortController = new AbortController();
    setAbortController(abortController);
    setCompletion("");
    const res = await fetch(api, {
      method: "POST",
      body: JSON.stringify({
        prompt,
        ...body
      }),
      credentials,
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      signal: abortController.signal
    }).catch((err) => {
      throw err;
    });
    if (onResponse) {
      try {
        await onResponse(res);
      } catch (err) {
        throw err;
      }
    }
    if (!res.ok) {
      throw new Error(
        await res.text() || "Failed to fetch the chat response."
      );
    }
    if (!res.body) {
      throw new Error("The response body is empty.");
    }
    let result = "";
    const reader = res.body.getReader();
    const isComplexMode = res.headers.get(COMPLEX_HEADER) === "true";
    if (isComplexMode) {
      for await (const { type, value } of readDataStream(reader, {
        isAborted: () => abortController === null
      })) {
        switch (type) {
          case "text": {
            result += value;
            setCompletion(result);
            break;
          }
          case "data": {
            onData == null ? void 0 : onData(value);
            break;
          }
        }
      }
    } else {
      const decoder = createChunkDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        result += decoder(value);
        setCompletion(result);
        if (abortController === null) {
          reader.cancel();
          break;
        }
      }
    }
    if (onFinish) {
      onFinish(prompt, result);
    }
    setAbortController(null);
    return result;
  } catch (err) {
    if (err.name === "AbortError") {
      setAbortController(null);
      return null;
    }
    if (err instanceof Error) {
      if (onError) {
        onError(err);
      }
    }
    setError(err);
  } finally {
    setLoading(false);
  }
}

// solid/use-completion.ts
var uniqueId2 = 0;
var store2 = {};
var completionApiStore = createSWRStore2({
  get: async (key) => {
    var _a;
    return (_a = store2[key]) != null ? _a : [];
  }
});
function useCompletion({
  api = "/api/completion",
  id,
  initialCompletion = "",
  initialInput = "",
  credentials,
  headers,
  body,
  onResponse,
  onFinish,
  onError
} = {}) {
  const completionId = id || `completion-${uniqueId2++}`;
  const key = `${api}|${completionId}`;
  const data = useSWRStore2(completionApiStore, () => [key], {
    initialData: initialCompletion
  });
  const mutate = (data2) => {
    store2[key] = data2;
    return completionApiStore.mutate([key], {
      data: data2,
      status: "success"
    });
  };
  const completion = data;
  const [error, setError] = createSignal2(void 0);
  const [streamData, setStreamData] = createSignal2(
    void 0
  );
  const [isLoading, setIsLoading] = createSignal2(false);
  let abortController = null;
  const complete = async (prompt, options) => {
    var _a;
    const existingData = (_a = streamData()) != null ? _a : [];
    return callCompletionApi({
      api,
      prompt,
      credentials,
      headers: {
        ...headers,
        ...options == null ? void 0 : options.headers
      },
      body: {
        ...body,
        ...options == null ? void 0 : options.body
      },
      setCompletion: mutate,
      setLoading: setIsLoading,
      setError,
      setAbortController: (controller) => {
        abortController = controller;
      },
      onResponse,
      onFinish,
      onError,
      onData: (data2) => {
        setStreamData([...existingData, ...data2 != null ? data2 : []]);
      }
    });
  };
  const stop = () => {
    if (abortController) {
      abortController.abort();
      abortController = null;
    }
  };
  const setCompletion = (completion2) => {
    mutate(completion2);
  };
  const [input, setInput] = createSignal2(initialInput);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = input();
    if (!inputValue)
      return;
    return complete(inputValue);
  };
  return {
    completion,
    complete,
    error,
    stop,
    setCompletion,
    input,
    setInput,
    handleSubmit,
    isLoading,
    data: streamData
  };
}
export {
  useChat,
  useCompletion
};
