interface FunctionCall {
    /**
     * The arguments to call the function with, as generated by the model in JSON
     * format. Note that the model does not always generate valid JSON, and may
     * hallucinate parameters not defined by your function schema. Validate the
     * arguments in your code before calling your function.
     */
    arguments?: string;
    /**
     * The name of the function to call.
     */
    name?: string;
}
/**
 * Shared types between the API and UI packages.
 */
interface Message {
    id: string;
    createdAt?: Date;
    content: string;
    ui?: string | JSX.Element | JSX.Element[] | null | undefined;
    role: 'system' | 'user' | 'assistant' | 'function';
    /**
     * If the message has a role of `function`, the `name` field is the name of the function.
     * Otherwise, the name field should not be set.
     */
    name?: string;
    /**
     * If the assistant role makes a function call, the `function_call` field
     * contains the function call name and arguments. Otherwise, the field should
     * not be set.
     */
    function_call?: string | FunctionCall;
}

/**
 * A prompt constructor for Anthropic models.
 * Does not support `function` messages.
 * @see https://docs.anthropic.com/claude/reference/getting-started-with-the-api
 */
declare function experimental_buildAnthropicPrompt(messages: Pick<Message, 'content' | 'role'>[]): string;

/**
 * A prompt constructor for the HuggingFace StarChat Beta model.
 * Does not support `function` messages.
 * @see https://huggingface.co/HuggingFaceH4/starchat-beta
 */
declare function experimental_buildStarChatBetaPrompt(messages: Pick<Message, 'content' | 'role'>[]): string;
/**
 * A prompt constructor for HuggingFace OpenAssistant models.
 * Does not support `function` or `system` messages.
 * @see https://huggingface.co/OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5
 */
declare function experimental_buildOpenAssistantPrompt(messages: Pick<Message, 'content' | 'role'>[]): string;
/**
 * A prompt constructor for HuggingFace LLama 2 chat models.
 * Does not support `function` messages.
 * @see https://huggingface.co/meta-llama/Llama-2-70b-chat-hf and https://huggingface.co/blog/llama2#how-to-prompt-llama-2
 */
declare function experimental_buildLlama2Prompt(messages: Pick<Message, 'content' | 'role'>[]): string;

export { experimental_buildAnthropicPrompt, experimental_buildLlama2Prompt, experimental_buildOpenAssistantPrompt, experimental_buildStarChatBetaPrompt };
