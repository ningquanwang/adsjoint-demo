# 💬 Adsjoint Demo App

A minimal demo showing how to integrate the **@adsjoint/sdk** into an LLM-based chat app.

> 🧩 Adsjoint helps LLM apps monetize through context-aware inline ads — automatically placed in chat, with frequency control and built-in analytics.

---

## 🚀 Quick Start

### 1️⃣ Clone and install

```bash
git clone https://github.com/adsjoint/adsjoint-demo.git
cd adsjoint-demo
npm install
npm start

The demo will run on http://localhost:5173 (if using Vite) or http://localhost:3000 (if using Create React App).

🧩 SDK Integration Overview

You only need two steps to integrate Adsjoint SDK into any React chat app.

Step 1: Initialize the SDK

Add this inside your main app file (App.js):

useEffect(() => {
  initAdsjoint({
    publisherName: "your_llm_app_name",   // unique app name
    publisherId: "1234567890",            // ID provided by Adsjoint
    apiKey: "adj_xxxxxxxxxxxxxxxxxxxx"    // API key from Adsjoint
  });

  // Optional: enable or disable ad rendering globally
  initAdLogic(true);
}, []);

📘 This tells the SDK who the publisher is and ensures that all events (impressions/clicks) are properly attributed.

Step 2: Render Inline Ads

Insert the Adsjoint ad component where your AI messages are displayed:

{/* ===============================================================
    🔶 SDK INTEGRATION START
    2️⃣  Render inline ads for each AI message
    --------------------------------------------------------------
    The SDK automatically decides when to show an ad based on
    message content, category, and frequency rules.
============================================================== */}
<InlineAdBanner message={msg} />
{/* ===============================================================
    🔶 SDK INTEGRATION END
============================================================== */}

💡 You don’t need to manually control when ads appear — the SDK uses built-in logic based on message keywords like travel, game, finance, etc.

🧠 How It Works
	1.	The SDK analyzes outgoing AI messages (e.g., “Let’s plan your next trip!”).
	2.	If the message matches an ad category (e.g., travel), it injects a relevant inline ad.
	3.	Impressions and clicks are automatically tracked to Adsjoint’s backend.

🧱 File Structure (Simplified)

adsjoint-demo/
├── src/
│   ├── App.js          # main demo file (SDK integration shown here)
│   └── index.js        # app entry point
├── package.json
└── README.md

🧩 Example Output

When you send a message like “travel plans,” Adsjoint injects an ad block inline:

AI: Sure! Here are some travel ideas...
[Promoted] Lonely Planet — Explore the World
🖼️ [Ad image here]

📊 Analytics (Automatic)

Adsjoint automatically tracks:
	•	Impressions (when an ad appears)
	•	Clicks (when a user clicks an ad)

All events are securely stored via the Adsjoint backend (Supabase-based).

🪪 Get Your Publisher Credentials

To use Adsjoint SDK in your own app:
	1.	Email support@adsjoint.com
	2.	Provide your app name and contact info
	3.	Receive your unique:
	•	publisherId
	•	publisherName
	•	adj_... API key

Then replace them in your initAdsjoint() call.

🧰 Dependencies
	•	React 17+ or 18+
	•	Node.js 18+
	•	Installed package: @adsjoint/sdk

🧾 License

MIT © Adsjoint

💬 Contact

Website: https://adsjoint.com
Support: support@adsjoint.com
Twitter/X: @adsjoint

---

### ✅ Notes

- Fully Markdown-ready for GitHub (renders beautifully on dark or light mode).  
- Includes clear code fences for SDK sections (matching your App.js).  
- Uses neutral, professional tone with lightweight emoji icons to guide readers.  

---

Would you like me to make a **version with screenshot placeholders** (so you can later drop in demo images or GIFs of inline ads)? It’s the ideal version for when you share the repo publicly or with LLM partners.