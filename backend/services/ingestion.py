import pymupdf
from bs4 import BeautifulSoup
import httpx
import io

def parse_pdf(file_bytes: bytes) -> str:
    """
    Extracts raw text from a PDF document using PyMuPDF.
    """
    text = ""
    with pymupdf.open(stream=file_bytes, filetype="pdf") as doc:
        for page in doc:
            text += page.get_text("text") + "\n"
    return text.strip()

async def parse_url(url: str) -> str:
    """
    Extracts raw text from a webpage using BeautifulSoup.
    """
    async with httpx.AsyncClient() as client:
        response = await client.get(url, timeout=10.0)
        response.raise_for_status()
        
    soup = BeautifulSoup(response.text, "html.parser")
    
    # Remove script and style elements
    for script in soup(["script", "style"]):
        script.extract()
        
    text = soup.get_text(separator=' ')
    
    # Clean up whitespace
    lines = (line.strip() for line in text.splitlines())
    chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
    text = '\n'.join(chunk for chunk in chunks if chunk)
    
    return text
