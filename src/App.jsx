/**
 * Minimal Adsjoint SDK Integration Demo
 *
 * This example shows EXACTLY how to integrate @adsjoint/sdk
 * into a simple LLM chat-style app.
 
 * Generally, there are two steps to integrate the Adsjoint SDK:
 * 1. Initialize the SDK once at app startup with your app info.
 * 2. Render inline ads at appropriate places in your app UI.
 * 
 * 🧩  All SDK-related code is clearly marked between
 *      ==== 🔶 SDK INTEGRATION START ==== 
 *      ==== 🔶 SDK INTEGRATION END ====
 */

import React, { useState, useEffect } from "react";
import { initAdsjoint, initAdLogic, InlineAdBanner } from "@adsjoint/sdk";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // ============================================================
  // 🔶 SDK INTEGRATION START
  // 1️⃣  Initialize the SDK once at app startup with your app info.
  // ------------------------------------------------------------
  useEffect(() => {
    // Step 1 (Required): initialize the Adsjoint SDK with your app info
    initAdsjoint({
      publisherName: "demo_llm_app",    // unique name of your LLM app (e.g., "ChatGPT", "MyAwesomeBot")
      publisherId: "01234567890",        // your publisher ID (string), provided by Adsjoint
      apiKey: "adj_xxxxxxxxxxxxxxxxx",  // your Adsjoint API key, provided by Adsjoint
    });

    // Step 2 (Optional): enable/disable ads globally (by default, ads are enabled)
    const adsEnabled = true; 
    initAdLogic(adsEnabled);
    console.log("[Demo] Adsjoint SDK initialized ✅");
  }, []);
  // 🔶 SDK INTEGRATION END
  // ============================================================

  const sendMessage = (text) => {
    if (!text.trim()) return;
    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    // Simulate AI reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: `AI reply about ${text}` },
      ]);
    }, 600);
  };

  return (
    <div style={{ padding: 24, maxWidth: 600, margin: "0 auto" }}>
      <h2>💬 LLM Chat + Adsjoint SDK Demo</h2>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: 12,
          minHeight: 300,
          background: "#fafafa",
        }}
      >
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

            {/* ====================================================
                🔶 SDK INTEGRATION START
                2️⃣  Render inline ads.
                ---------------------------------------------------- 
                The SDK decides automatically when to show an ad. */}
            <InlineAdBanner message={msg} />
            {/* 🔶 SDK INTEGRATION END */
            /* ==================================================== */}
          </React.Fragment>
        ))}
      </div>

      <div style={{ marginTop: 16 }}>
        <input
          style={{ width: "70%", marginRight: 8 }}
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
        />
        <button onClick={() => sendMessage(input)}>Send</button>
      </div>
    </div>
  );
}