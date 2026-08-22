from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import os

app = FastAPI(title="OmniSpec AI Backend")

# Allow CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class URLRequest(BaseModel):
    url: str

@app.get("/")
def read_root():
    return {"status": "OmniSpec Engine is Live"}

@app.post("/api/extract/pdf")
async def extract_pdf(file: UploadFile = File(...)):
    """
    Feature 1: PDF Ingestion
    """
    if not file.filename.endswith('.pdf'):
        raise HTTPException(status_code=400, detail="Only PDF files are supported here")
    
    # Read file content
    content = await file.read()
    
    # TODO: Implement PyMuPDF extraction
    # TODO: Send text to Grok API
    # TODO: Format response as Golden Record
    
    return {
        "status": "success",
        "filename": file.filename,
        "message": "PDF parsed successfully. Grok integration pending."
    }

@app.post("/api/extract/url")
async def extract_url(req: URLRequest):
    """
    Feature 1: URL Ingestion
    """
    # TODO: Implement BeautifulSoup extraction
    # TODO: Send text to Grok API
    
    return {
        "status": "success",
        "url": req.url,
        "message": "URL parsed successfully. Grok integration pending."
    }
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
