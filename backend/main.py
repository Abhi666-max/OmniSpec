from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import os
import time
from services.ingestion import parse_pdf, parse_url
from services.ai_engine import extract_product_specs, extract_demo_product

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

class DemoRequest(BaseModel):
    product_hint: str

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
    
    start_time = time.time()
    
    # Extract raw text using PyMuPDF
    raw_text = parse_pdf(content)
    
    # Process through Grok API
    golden_record = await extract_product_specs(raw_text)
    
    processing_time = round(time.time() - start_time, 2)
    
    # Feature 6: Golden Record Generation
    return {
        "status": "success",
        "filename": file.filename,
        "extraction_speed": f"{processing_time}s",
        "golden_record": golden_record
    }

@app.post("/api/extract/url")
async def extract_url(req: URLRequest):
    """
    Feature 1: URL Ingestion
    """
    start_time = time.time()
    
    # Extract raw text from URL
    raw_text = await parse_url(req.url)
    
    # Process through Grok API
    golden_record = await extract_product_specs(raw_text)
    
    processing_time = round(time.time() - start_time, 2)
    
    return {
        "status": "success",
        "url": req.url,
        "extraction_speed": f"{processing_time}s",
        "golden_record": golden_record
    }

@app.post("/api/extract/demo")
async def extract_demo(req: DemoRequest):
    """
    Feature: Bulk Processing Endpoint for Demo Catalog
    """
    start_time = time.time()
    
    golden_record = await extract_demo_product(req.product_hint)
    
    processing_time = round(time.time() - start_time, 2)
    
    return {
        "status": "success",
        "extraction_speed": f"{processing_time}s",
        "golden_record": golden_record
    }
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
