<div align="center">
  <img src="frontend/public/logo.jpg" alt="OmniSpec Logo" width="200" height="200" style="border-radius: 20px;" />
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

## The Vision
Industrial companies manage massive amounts of product information across multiple sources such as websites, catalogs, and technical PDF documents. Converting this scattered dark data into accurate and structured product intelligence is a challenging and time-consuming process.

**OmniSpec** is an AI-powered intelligence pipeline that bulk processes unstructured supplier datasheets and URLs into perfectly validated, commerce-ready catalogs. It leverages state-of-the-art Large Language Models (LLMs) and a deterministic extraction engine to generate **Golden Records**.

<details>
<summary><strong>View Core Features</strong></summary>

- **Multi-modal Ingestion:** Drop PDFs or paste URLs. Our extraction engine parses dense technical tables and messy layouts with ease using `PyMuPDF`.
- **Hybrid AI Extraction:** Uses advanced LLMs (like Qwen/Llama3) backed by deterministic local extraction engines to guarantee 100% reliable data processing.
- **Golden Record Generation:** Normalizes extracted data into strict schemas and predicts UNSPSC taxonomy categories automatically.
- **Confidence Scoring:** Triangulates data points and assigns a confidence score, flagging uncertain records for Human-In-The-Loop (HITL) review.
- **Ultra-Fast Modern UI:** A premium, sci-fi inspired dashboard built with Next.js 15, Framer Motion, and Tailwind CSS.
</details>

---

## Tech Stack

<details>
<summary><strong>Frontend Architecture</strong></summary>

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Icons:** [Lucide React](https://lucide.dev/)
</details>

<details>
<summary><strong>Backend Architecture</strong></summary>

- **Framework:** [FastAPI](https://fastapi.tiangolo.com/) (Python)
- **AI/LLM Engine:** Custom LLM Pipeline via Groq (`qwen/qwen3.6-27b`)
- **Document Parsing:** `PyMuPDF` (PDFs) & `BeautifulSoup4` (URLs)
- **Server:** `uvicorn`
</details>

---

## File Structure

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

## Getting Started

<details>
<summary><strong>1. Start the Backend (FastAPI)</strong></summary>

```bash
cd backend
python -m venv venv
# Windows: .\venv\Scripts\activate
# Mac/Linux: source venv/bin/activate
pip install -r requirements.txt
python main.py
```
> The backend will run on `http://localhost:8000`.
</details>

<details>
<summary><strong>2. Start the Frontend (Next.js)</strong></summary>

```bash
cd frontend
npm install
npm run dev
```
> The frontend will run on `http://localhost:3000`.
</details>

---

## Credits
Designed & Engineered by **[Abhi666-max](https://github.com/Abhi666-max)**.

---
<p align="center">
  <i>"Turning Dark Data Into Golden Records."</i>
</p>
