# 💬 Adsjoint Demo App

A minimal demo showing how to integrate the **@adsjoint/sdk** into an LLM-based chat app. 

> 🧩 Adsjoint helps LLM apps monetize through context-aware inline ads — automatically placed in chat.

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
```bash
@adsjoint:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```
🪪 Replace YOUR_GITHUB_TOKEN with your GitHub Personal Access Token
(must include read:packages permission). 
This allows npm to authenticate with GitHub Packages and download the private SDK.
### 3️⃣ Install & Run
```bash
npm install @adsjoint/sdk
npm start
```
The demo app will start on http://localhost:5173 (if using Vite) or http://localhost:3000 (if using Create React App).
