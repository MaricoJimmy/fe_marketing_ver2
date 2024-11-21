// components/DialogflowChatbot.js
import Script from "next/script";
import React, { useEffect } from "react";

const DialogflowChatbot = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"
      />

      <div className="fixed bottom-4 right-4 z-[999] shadow-md rounded-full">
        <df-messenger
          location="asia-southeast1"
          project-id="phonic-network-442303-r8"
          agent-id="4012d315-3839-43cc-99cb-38101d5a2274"
          language-code="vi"
          max-query-length="-1"
          style={{
            "--df-messenger-font-color": "#000",
            "--df-messenger-font-family": "Google Sans",
            "--df-messenger-chat-background": "#f3f6fc",
            "--df-messenger-message-user-background": "#d3e3fd",
            "--df-messenger-message-bot-background": "#fff",
          }}
        >
          <df-messenger-chat-bubble chat-title="aichatbot-agent">
            {" "}
          </df-messenger-chat-bubble>
        </df-messenger>
      </div>
      {/* Using lazyOnload strategy for the script */}
      <Script
        strategy="lazyOnload"
        src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"
      />
    </>
  );
};

export default DialogflowChatbot;
