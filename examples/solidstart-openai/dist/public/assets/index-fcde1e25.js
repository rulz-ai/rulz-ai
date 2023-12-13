import{g as getNextElement,a as getNextMarker,i as insert,c as createComponent,F as For,d as createRenderEffect,b as addEventListener,t as template}from"./entry-client-e2f3eefd.js";import{c as customAlphabet,u as useChat}from"./index-0b421805.js";var textStreamPart={code:"0",name:"text",parse:t=>{if(typeof t!="string")throw new Error('"text" parts expect a string value.');return{type:"text",value:t}}},functionCallStreamPart={code:"1",name:"function_call",parse:t=>{if(t==null||typeof t!="object"||!("function_call"in t)||typeof t.function_call!="object"||t.function_call==null||!("name"in t.function_call)||!("arguments"in t.function_call)||typeof t.function_call.name!="string"||typeof t.function_call.arguments!="string")throw new Error('"function_call" parts expect an object with a "function_call" property.');return{type:"function_call",value:t}}},dataStreamPart={code:"2",name:"data",parse:t=>{if(!Array.isArray(t))throw new Error('"data" parts expect an array value.');return{type:"data",value:t}}},errorStreamPart={code:"3",name:"error",parse:t=>{if(typeof t!="string")throw new Error('"error" parts expect a string value.');return{type:"error",value:t}}},assistantMessage={code:"4",name:"assistant_message",parse:t=>{if(t==null||typeof t!="object"||!("id"in t)||!("role"in t)||!("content"in t)||typeof t.id!="string"||typeof t.role!="string"||t.role!=="assistant"||!Array.isArray(t.content)||!t.content.every(e=>e!=null&&typeof e=="object"&&"type"in e&&e.type==="text"&&"text"in e&&e.text!=null&&typeof e.text=="object"&&"value"in e.text&&typeof e.text.value=="string"))throw new Error('"assistant_message" parts expect an object with an "id", "role", and "content" property.');return{type:"assistant_message",value:t}}},assistantControlData={code:"5",name:"assistant_control_data",parse:t=>{if(t==null||typeof t!="object"||!("threadId"in t)||!("messageId"in t)||typeof t.threadId!="string"||typeof t.messageId!="string")throw new Error('"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.');return{type:"assistant_control_data",value:{threadId:t.threadId,messageId:t.messageId}}}},streamParts=[textStreamPart,functionCallStreamPart,dataStreamPart,errorStreamPart,assistantMessage,assistantControlData];textStreamPart.code+"",functionCallStreamPart.code+"",dataStreamPart.code+"",errorStreamPart.code+"",assistantMessage.code+"",assistantControlData.code+"";textStreamPart.name+"",textStreamPart.code,functionCallStreamPart.name+"",functionCallStreamPart.code,dataStreamPart.name+"",dataStreamPart.code,errorStreamPart.name+"",errorStreamPart.code,assistantMessage.name+"",assistantMessage.code,assistantControlData.name+"",assistantControlData.code;streamParts.map(t=>t.code);var nanoid=customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",7);new TextDecoder("utf-8");const _tmpl$=template('<div class="flex flex-col w-full max-w-md py-24 mx-auto stretch"><div class="bg-gray-200 mb-8"></div><!#><!/><form><input class="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl" placeholder="Say something...">'),_tmpl$2=template('<pre class="whitespace-pre-wrap">'),_tmpl$3=template('<div class="whitespace-pre-wrap"><strong></strong><!#><!/><br><br>');function Chat(){const functionCallHandler=async(chatMessages,functionCall)=>{if(functionCall.name==="eval_code_in_browser"&&functionCall.arguments){const parsedFunctionCallArguments=JSON.parse(functionCall.arguments);eval(parsedFunctionCallArguments.code);const functionResponse={messages:[...chatMessages,{id:nanoid(),name:"eval_code_in_browser",role:"function",content:parsedFunctionCallArguments.code}]};return functionResponse}},{messages,input,setInput,handleSubmit,data}=useChat({api:"/api/chat-with-functions",experimental_onFunctionCall:functionCallHandler}),roleToColorMap={system:"red",user:"black",function:"blue",assistant:"green"},handleInputChange=t=>{setInput(t.target.value)};return(()=>{const t=getNextElement(_tmpl$),e=t.firstChild,c=e.nextSibling,[n,d]=getNextMarker(c.nextSibling),s=n.nextSibling,o=s.firstChild;return insert(e,createComponent(For,{get each(){return data()},children:r=>(()=>{const a=getNextElement(_tmpl$2);return insert(a,()=>JSON.stringify(r)),a})()})),insert(t,createComponent(For,{get each(){return messages()},children:r=>(()=>{const a=getNextElement(_tmpl$3),i=a.firstChild,p=i.nextSibling,[l,m]=getNextMarker(p.nextSibling);return l.nextSibling,insert(i,()=>`${r.role}: `),insert(a,()=>r.content||JSON.stringify(r.function_call),l,m),createRenderEffect(()=>roleToColorMap[r.role]!=null?a.style.setProperty("color",roleToColorMap[r.role]):a.style.removeProperty("color")),a})()}),n,d),addEventListener(s,"submit",handleSubmit),o.addEventListener("change",handleInputChange),createRenderEffect(()=>o.value=input()),t})()}export{Chat as default};