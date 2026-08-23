import os
from pptx import Presentation
from pptx.util import Inches

def replace_text_in_shape(shape, replacements):
    if not hasattr(shape, "text_frame"):
        return
    
    # We must iterate over paragraphs to keep paragraph-level styling
    for paragraph in shape.text_frame.paragraphs:
        p_text = "".join(run.text for run in paragraph.runs)
        
        replaced = False
        for old_text, new_text in replacements.items():
            if old_text in p_text:
                p_text = p_text.replace(old_text, new_text)
                replaced = True
                
        if replaced:
            # Clear existing runs
            for i in range(len(paragraph.runs)):
                paragraph.runs[i].text = ""
            
            # Put the new text in the first run to keep the style
            if len(paragraph.runs) > 0:
                paragraph.runs[0].text = p_text
            else:
                run = paragraph.add_run()
                run.text = p_text


def add_image_to_slide(slide, image_path, left_in, top_in, width_in):
    try:
        if os.path.exists(image_path):
            slide.shapes.add_picture(image_path, Inches(left_in), Inches(top_in), width=Inches(width_in))
        else:
            print(f"Warning: Image {image_path} not found.")
    except Exception as e:
        print(f"Error adding image {image_path}: {e}")

def main():
    prs = Presentation('[EXT] UniHack-Protoype Template  (1).pptx')
    
    replacements = {
        "Team name:": "Team name: KLassic",
        "Team leader name:": "Team leader name: Abhijeet Kangane",
        
        "Brief about your solution": "OmniSpec is a comprehensive AI-powered intelligence pipeline that bulk processes unstructured supplier datasheets (PDFs) and URLs into perfectly validated, commerce-ready catalogs. It leverages advanced Large Language Models (LLMs) and deterministic fallback engines to generate structured Golden Records with extremely high accuracy, bypassing the need for manual data entry.",
        
        "Briefly explain how your solution transforms limited inputs (e.g., Part Number, Brand, Short Description) into rich product intelligence.": 
        "Our solution ingests minimal inputs (or raw PDFs) and fetches relevant technical sheets. It then uses a robust Hybrid AI extraction pipeline combining Groq's high-speed Qwen-27B LLM with a 100% deterministic local fallback parser to extract and structure all missing technical attributes accurately.",
        
        "Describe your validation strategy. This may include:": 
        "OmniSpec validates data across multiple extracted tables and applies a real-time Confidence Scoring algorithm. Any extracted record that scores below the 95% threshold is immediately flagged for our Human-in-the-Loop (HITL) review dashboard, ensuring 100% absolute catalog integrity before commerce publishing.",
        
        "(Confidence scoring, Multi-source verification, Human review, Rule-based validation, AI validation, Other approaches)": "",
        
        "Describe how your solution would handle: Large product catalogs, New manufacturers, Different document formats, Continuous product updates": 
        "Built on FastAPI and Next.js, our microservices architecture allows asynchronous bulk processing. It relies on PyMuPDF and BeautifulSoup4 to dynamically normalize any unstructured document format before passing it to the AI engine. This ensures infinite scalability without needing manual mapping rules for new manufacturers.",
        
        "How different is it from any of the other existing ideas?": 
        "Unlike rigid parsers, OmniSpec dynamically adapts to any manufacturer's datasheet layout automatically. Unlike pure API-dependent LLM approaches which crash frequently, our hybrid engine guarantees 100% reliable local fallback during network outages, ensuring uninterrupted bulk processing.",
        
        "How will it be able to solve the problem statement given?": 
        "It directly and efficiently solves Unilog's challenge of converting scattered dark data into accurate product intelligence by automating the entire lifecycle: Extraction, Confidence Validation, Human Review, and Standardized Taxonomy Prediction (UNSPSC).",
        
        "USP of the proposed solution": 
        "Zero-API-Dependency Fallback Mode for 100% uptime, Ultra-Fast asynchronous processing, and an automated UNSPSC taxonomy prediction engine natively integrated into a premium sci-fi dashboard.",
        
        "List of features offered by the solution": 
        "- Multi-modal Ingestion (Drag-and-Drop PDFs, Direct URLs)\n- Hybrid AI Extraction Pipeline (Groq LLM + Local Deterministic Fallback)\n- Automated UNSPSC Taxonomy Categorization\n- Real-time Confidence Scoring and Data Triangulation\n- Human-in-the-Loop (HITL) Enrichment Dashboard\n- Fully Responsive Sci-Fi UI for industrial users",
        
        "Technologies used in the solution": 
        "Frontend: Next.js 15, React 19, Tailwind CSS, Framer Motion, React Three Fiber\nBackend: FastAPI, Uvicorn, Python 3.10+\nAI/Parsing: Groq API (Qwen-27B), PyMuPDF, BeautifulSoup4\nTooling: Git, Eslint, Vercel",
        
        "Estimated implementation cost (optional)": 
        "Extremely Low / Near Zero. By utilizing high-efficiency open-source models (Llama3/Qwen) via ultra-fast inference APIs (Groq), the operational processing cost per 10,000 SKUs is a fraction of traditional manual data entry or commercial LLM (GPT-4) alternatives.",
        
        "Additional Details/Future Development (if any)": 
        "Our immediate future roadmap includes:\n1. Direct eCommerce platform integrations (e.g., Shopify, Magento ERP plugins).\n2. An automated web-crawler that actively monitors supplier websites for real-time datasheet updates and pushes delta changes directly to the Golden Records.",
        
        "GitHub Public Repository": "GitHub: https://github.com/Abhi666-max/OmniSpec",
        "Demo Video Link (3 Minutes)": "Demo Video: https://youtu.be/775Z2EbCy8E",
        "Working Prototype Link": "Prototype Link: (To be added post-deployment)"
    }
    
    for slide in prs.slides:
        for shape in slide.shapes:
            # Regular text boxes
            if hasattr(shape, "text_frame"):
                replace_text_in_shape(shape, replacements)
            
            # Tables
            if hasattr(shape, "has_table") and shape.has_table:
                for row in shape.table.rows:
                    for cell in row.cells:
                        replace_text_in_shape(cell, replacements)

    # Insert Generated Images
    # Slide 7 (Index 6) - Process Flow
    add_image_to_slide(prs.slides[6], r"C:\Users\abhij\.gemini\antigravity-ide\brain\de377572-b551-49fe-b84b-c465213fec1f\process_flow_diagram_1787479221560.jpg", left_in=1.5, top_in=1.5, width_in=7)
    
    # Slide 8 (Index 7) - Wireframes
    add_image_to_slide(prs.slides[7], r"C:\Users\abhij\.gemini\antigravity-ide\brain\de377572-b551-49fe-b84b-c465213fec1f\landing_page_1787479256961.png", left_in=1.5, top_in=1.5, width_in=7)
    
    # Slide 9 (Index 8) - Architecture
    add_image_to_slide(prs.slides[8], r"C:\Users\abhij\.gemini\antigravity-ide\brain\de377572-b551-49fe-b84b-c465213fec1f\architecture_diagram_1787479236567.jpg", left_in=1.5, top_in=1.5, width_in=7)
    
    # Slide 12 (Index 11) - Snapshots MVP
    add_image_to_slide(prs.slides[11], r"C:\Users\abhij\.gemini\antigravity-ide\brain\de377572-b551-49fe-b84b-c465213fec1f\dashboard_1787479335882.png", left_in=1.5, top_in=1.5, width_in=7)

    output_pptx = os.path.abspath("Final_OmniSpec_Presentation.pptx")
    prs.save(output_pptx)
    print(f"Saved PPTX to {output_pptx}")
    
    # Export to PDF
    pdf_path = os.path.abspath("Final_OmniSpec_Presentation.pdf")
    print(f"Exporting to PDF: {pdf_path}")
    try:
        import comtypes.client
        powerpoint = comtypes.client.CreateObject("Powerpoint.Application")
        powerpoint.Visible = 1
        presentation = powerpoint.Presentations.Open(output_pptx)
        presentation.SaveAs(pdf_path, 32)
        presentation.Close()
        powerpoint.Quit()
        print("PDF Export complete! Saved to:", pdf_path)
    except Exception as e:
        print("Failed to export to PDF automatically (Ensure Microsoft PowerPoint is installed). Error:", str(e))

if __name__ == "__main__":
    main()
