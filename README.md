# 💬 Adsjoint Demo

A minimal demo showing how to integrate the **@adsjoint/sdk** into an LLM-based chat app. 

> 🧩 Adsjoint helps LLM apps monetize through context-aware inline ads — automatically placed in chat with smart delivery.

---

## 🚀 Quick Start
### 0️⃣ Get Access
Contact **admin@adsjoint.ai** to request your publisher credentials and API key (required for SDK access and package installation).
### 1️⃣ Clone the Repo
```bash
git clone https://github.com/adsjoint/adsjoint-demo.git
cd adsjoint-demo
```
### 2️⃣ Add Your .npmrc File
Create a new .npmrc file and open it in your default text editor, paste the following content inside the file:
```bash
@adsjoint:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```
🪪 Replace YOUR_GITHUB_TOKEN with your GitHub Personal Access Token
(must include read:packages permission). 
This allows npm to authenticate with GitHub Packages and download the private SDK.
### 3️⃣ SDK Integration
#### 1. Installation
```bash
npm install @adsjoint/sdk
```
#### 2. Initialization with Your Publisher Credentials
In src/App.jsx, initialize the Adsjoint SDK with your assigned credentials:
```bash
initAdsjoint({
  publisherName: "demo_llm_app",    // unique name of your LLM app (e.g., "ChatGPT", "MyAwesomeBot")
  publisherId: "01234567890",        // your publisher ID (string), provided by Adsjoint
  apiKey: "adj_xxxxxxxxxxxxxxxxx",  // your Adsjoint API key, provided by Adsjoint
});
```
💡 These credentials identify your app to the Adsjoint platform and ensure impressions/clicks are properly tracked.
#### 3. Inline Ads Placement
In src/App.jsx, insert the Adsjoint ad component where your AI messages are displayed
```bash
<InlineAdBanner message={msg} />
```
### 4️⃣ Run
```bash
  npm start
```
The demo app will start on http://localhost:5173 (if using Vite) or http://localhost:3000 (if using Create React App).
