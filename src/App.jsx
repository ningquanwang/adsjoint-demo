import React, { useState } from "react";
import InlineAdBanner from "./components/InlineAdBanner";
import { initAds } from "@adsjoint/sdk";

initAds({
  apiKey: "ADSJOINT_DEMO_KEY" // optional placeholder
});

export default function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: `AI reply about ${text}` }
      ]);
    }, 800);
  };

  return (
    <div style={{ padding: 24, maxWidth: 600, margin: "0 auto" }}>
      <h2>💬 LLM Chat Demo + Adsjoint SDK</h2>

      <div style={{ border: "1px solid #ccc", padding: 16, borderRadius: 8 }}>
        {messages.map((msg, idx) => (
          <React.Fragment key={idx}>
            <div
              style={{
                textAlign: msg.sender === "ai" ? "left" : "right",
                margin: "8px 0",
              }}
            >
              <b>{msg.sender}:</b> {msg.text}
            </div>
            <InlineAdBanner message={msg} />
          </React.Fragment>
        ))}
      </div>

      <div style={{ marginTop: 16 }}>
        <input
          style={{ width: "70%", marginRight: 8 }}
          placeholder="Type a message"
          onKeyDown={(e) => e.key === "Enter" && sendMessage(e.target.value)}
        />
        <button onClick={() => sendMessage("travel plans")}>Send</button>
      </div>
    </div>
  );
}