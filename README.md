# 💬 Adsjoint Demo

A minimal demo showing how to integrate the **@adsjoint/sdk** into an LLM-based chat app. 

> 🧩 Adsjoint helps LLM apps monetize through context-aware ads — automatically placed in chat with smart delivery.

---
## 🖼️ Live Example — What Inline Ads Look Like
Here’s an example of what the Adsjoint inline ad looks like inside a chat interface:
<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/fa937877-7e3e-479f-a74a-54e2d946a068" />
<br><br>
## 🤝 Adsjoint Early Partner Program
Be one of the first LLM apps to integrate Adsjoint, and unlock permanent benefits.
### 🎁 Early Partner Benefits
1. 100% revenue share during the testing period
2. Highest revenue share after GA (locked permanently)
3. Top priority for the first real advertisers once campaigns begin 
4. Influence product decisions (ad UI, frequency rules, categories)

### 🛠️ What you get today
1. High-quality demo ads (travel, finance, tech, food, fitness, etc.)
2. Context-aware inline ads insertion
3. Real event tracking and analysis report.
<br><br>
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
npm login --registry=https://npm.pkg.github.com --scope=@adsjoint
npm install @adsjoint/sdk
```
#### 2. Initialization with Your Publisher Credentials
In src/App.jsx (or wherever you set up your chat logic), initialize the Adsjoint SDK with your assigned credentials:
```bash
initAdsjoint({
  publisherName: "demo_llm_app",    // unique name of your LLM app (e.g., "ChatGPT", "MyAwesomeBot")
  publisherId: "01234567890",        // your publisher ID (string), provided by Adsjoint
  apiKey: "adj_xxxxxxxxxxxxxxxxx",  // your Adsjoint API key, provided by Adsjoint
});
```
💡 These credentials identify your app to the Adsjoint platform and ensure impressions/clicks are properly tracked.
#### 3. Inline Ads Placement
In src/App.jsx (or wherever you set up your chat logic), insert the Adsjoint ad component where your AI messages are displayed
```bash
<InlineAdBanner message={msg} />
```
### 4️⃣ Run
```bash
  npm start
```
### Minimal Usage Example
```js
import { initAdsjoint, initAdLogic, InlineAdBanner } from "@adsjoint/sdk";

initAdsjoint({
  publisherName: "demo_llm_app",
  publisherId: "01234567890",
  apiKey: "adj_xxxxxxxxxxxxxxxxx"
});

initAdLogic(true);

export default function App() {
  const [messages, setMessages] = useState([]);

  return (
    <div>
      {messages.map((msg, i) => (
        <div key={i}>
          <MessageBubble msg={msg} />
          <InlineAdBanner message={msg} />
        </div>
      ))}
    </div>
  );
}
```
## 💬 Support
📧 Email: admin@adsjoint.ai \
🌐 Website: https://adsjoint.ai (WIP)
