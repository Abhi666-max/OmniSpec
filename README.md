<div align="center">
  <img src="https://socialify.git.ci/Abhi666-max/OmniSpec/image?description=1&font=Rajdhani&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark" alt="OmniSpec" width="640" height="320" />
</div>

<h1 align="center">OmniSpec: AI-Powered Product Intelligence for Industrial Commerce</h1>

<p align="center">
  <strong>Forging Raw Data into Commerce-Ready Golden Records.</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#credits">Credits</a>
</p>

---

## 🏆 Hackathon Project: UniHack (by Unilog)
This project was built for **UniHack**, an AI innovation hackathon focused on building prototype solutions for Unilog's content and commerce challenges. OmniSpec addresses the challenge of converting scattered information from unstructured sources (PDFs, URLs) into accurate, structured product data.

## 🚀 The Challenge
Industrial companies manage massive amounts of product information across multiple sources such as websites, catalogs, and technical PDF documents. Converting this scattered dark data into accurate and structured product intelligence is a challenging and time-consuming process.

## 💡 Our Solution: OmniSpec
**OmniSpec** is an AI-powered intelligence pipeline that bulk processes unstructured supplier datasheets and URLs into perfectly validated, commerce-ready catalogs. It leverages state-of-the-art Large Language Models (LLMs) and a deterministic extraction engine to generate **Golden Records**.

### Key Features
- **📄 Multi-modal Ingestion:** Drop PDFs or paste URLs. Our extraction engine parses dense technical tables and messy layouts with ease using `PyMuPDF`.
- **🧠 Hybrid AI Extraction:** Uses advanced LLMs (like Qwen/Llama3) backed by deterministic local extraction engines to guarantee 100% reliable hackathon demos.
- **🎯 Golden Record Generation:** Normalizes extracted data into strict schemas and predicts UNSPSC taxonomy categories automatically.
- **✅ Confidence Scoring:** Triangulates data points and assigns a confidence score, flagging uncertain records for Human-In-The-Loop (HITL) review.
- **⚡ Ultra-Fast Modern UI:** A premium, sci-fi inspired dashboard built with Next.js 15, Framer Motion, and Tailwind CSS.

---

## 💻 Tech Stack

### Frontend
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Icons:** [Lucide React](https://lucide.dev/)

### Backend
- **Framework:** [FastAPI](https://fastapi.tiangolo.com/) (Python)
- **AI/LLM Engine:** Custom LLM Pipeline via Groq (`qwen/qwen3.6-27b`)
- **Document Parsing:** `PyMuPDF` (PDFs) & `BeautifulSoup4` (URLs)
- **Server:** `uvicorn`

---

## 📂 File Structure

```text
OmniSpec/
├── frontend/                 # Next.js Web Application
│   ├── src/app/              # Next.js App Router (Pages & Layout)
│   ├── src/components/       # Reusable UI Components (Hero, Dropzone, BentoGrid)
│   ├── tailwind.config.ts    # Tailwind CSS Configuration
│   └── package.json          # Node dependencies
│
└── backend/                  # FastAPI Python Server
    ├── main.py               # API Entry Point & Routes
    ├── services/
    │   ├── ai_engine.py      # Core AI Logic & Fallback Extraction
    │   └── ingestion.py      # PyMuPDF & BeautifulSoup Scrapers
    └── requirements.txt      # Python dependencies
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- Python 3.10+
- (Optional) Groq API Key

### 1. Start the Backend (FastAPI)
```bash
cd backend
python -m venv venv
# Windows: .\venv\Scripts\activate
# Mac/Linux: source venv/bin/activate
pip install -r requirements.txt
python main.py
```
> The backend will run on `http://localhost:8000`.

### 2. Start the Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```
> The frontend will run on `http://localhost:3000`.

---

## 👨‍💻 Credits
Built with 🩵 by **[Abhi666-max](https://github.com/Abhi666-max)** for UniHack.
Special thanks to Unilog for the amazing problem statement!

---
<p align="center">
  <i>"Turning Dark Data Into Golden Records."</i>
</p>
