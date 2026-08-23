import os
from pptx import Presentation
from pptx.util import Inches, Pt

def replace_text_in_shape(shape, replacements):
    if not hasattr(shape, "text_frame"):
        return
    for paragraph in shape.text_frame.paragraphs:
        p_text = "".join(run.text for run in paragraph.runs)
        replaced = False
        for old_text, new_text in replacements.items():
            if old_text in p_text:
                p_text = p_text.replace(old_text, new_text)
                replaced = True
                
        if replaced:
            for i in range(len(paragraph.runs)):
                paragraph.runs[i].text = ""
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

def add_body_text(slide, text):
    # Adds a text box below the title
    txBox = slide.shapes.add_textbox(Inches(1), Inches(1.5), Inches(8), Inches(5))
    tf = txBox.text_frame
    tf.word_wrap = True
    p = tf.add_paragraph()
    p.text = text
    p.font.size = Pt(20)

def main():
    prs = Presentation('[EXT] UniHack-Protoype Template  (1).pptx')
    
    # 1. DELETE FIRST SLIDE (Guidelines)
    xml_slides = prs.slides._sldIdLst
    slides = list(xml_slides)
    xml_slides.remove(slides[0])
    # Now old Slide 1 (Team Details) is index 0
    
    replacements = {
        "Team name:": "Team name: KLassic",
        "Team leader name:": "Team leader name: Abhijeet Kangane",
        "Working Prototype Link": "Prototype Link: https://omni-spec-one.vercel.app/",
        "Demo Video Link (3 Minutes)": "Demo Video: https://youtu.be/775Z2EbCy8E",
        "GitHub Public Repository": "GitHub: https://github.com/Abhi666-max/OmniSpec"
    }
    
    # Replace exact text
    for slide in prs.slides:
        for shape in slide.shapes:
            if hasattr(shape, "text_frame"):
                replace_text_in_shape(shape, replacements)
            if hasattr(shape, "has_table") and shape.has_table:
                for row in shape.table.rows:
                    for cell in row.cells:
                        replace_text_in_shape(cell, replacements)

    # ADD DENSE TEXT TO SLIDES THAT WERE PREVIOUSLY BLANK (Because they lacked body text boxes)
    
    # New Slide 1: Brief about your solution
    add_body_text(prs.slides[1], "OmniSpec is a comprehensive AI-powered intelligence pipeline that bulk processes unstructured supplier datasheets (PDFs) and URLs into perfectly validated, commerce-ready catalogs. It leverages advanced Large Language Models (LLMs) and deterministic fallback engines to generate structured Golden Records with extremely high accuracy, bypassing the need for manual data entry.")
    
    # New Slide 2: Questions (Enrichment, Validation, Scalability)
    # This slide already has text boxes, so we replace text
    add_body_text(prs.slides[2], "1. Enrichment: Ingests minimal inputs and fetches technical sheets, using a Hybrid AI extraction pipeline (Qwen-27B LLM + Deterministic Fallback).\n\n2. Validation: Applies real-time Confidence Scoring. Anything below 95% is flagged for Human-in-the-Loop (HITL) review to ensure 100% integrity.\n\n3. Scalability: Built on FastAPI and Next.js microservices for asynchronous bulk processing. Uses PyMuPDF/BS4 to dynamically normalize any unstructured document format.")

    # New Slide 3: Opportunities
    add_body_text(prs.slides[3], "Unlike rigid parsers, OmniSpec dynamically adapts to any manufacturer's layout automatically. \n\nUnlike pure API-dependent LLMs which crash frequently, our hybrid engine guarantees 100% reliable local fallback during network outages. \n\nUSP: Zero-API-Dependency Fallback Mode for 100% uptime, Ultra-Fast asynchronous processing, and an automated UNSPSC taxonomy prediction engine natively integrated into a premium sci-fi dashboard.")
    
    # New Slide 4: Features
    add_body_text(prs.slides[4], "• Multi-modal Ingestion (Drag-and-Drop PDFs, Direct URLs)\n• Hybrid AI Extraction Pipeline (Groq LLM + Local Deterministic Fallback)\n• Automated UNSPSC Taxonomy Categorization\n• Real-time Confidence Scoring and Data Triangulation\n• Human-in-the-Loop (HITL) Enrichment Dashboard\n• Fully Responsive Sci-Fi UI for industrial users")
    
    # New Slide 8: Technologies Used
    add_body_text(prs.slides[8], "Frontend: Next.js 16.3, React 19, Tailwind CSS, Framer Motion\nBackend: FastAPI, Uvicorn, Python 3.10+\nAI/Parsing: Groq API (Qwen-27B), PyMuPDF, BeautifulSoup4\nDeployment: Vercel (Frontend), Render (Backend)\nTooling: Git, Eslint")
    
    # New Slide 9: Cost
    add_body_text(prs.slides[9], "Extremely Low / Near Zero.\n\nBy utilizing high-efficiency open-source models (Llama3/Qwen) via ultra-fast inference APIs (Groq), the operational processing cost per 10,000 SKUs is a fraction of traditional manual data entry or commercial LLM (GPT-4) alternatives.")
    
    # New Slide 11: Future Dev
    add_body_text(prs.slides[11], "Our immediate future roadmap includes:\n\n1. Direct eCommerce platform integrations (e.g., Shopify, Magento ERP plugins).\n2. An automated web-crawler that actively monitors supplier websites for real-time datasheet updates and pushes delta changes directly to the Golden Records.")

    # INSERT GENERATED IMAGES (Perfectly centered, not breaking titles)
    # New Slide 5 - Process Flow
    add_image_to_slide(prs.slides[5], r"C:\Users\abhij\.gemini\antigravity-ide\brain\de377572-b551-49fe-b84b-c465213fec1f\process_flow_diagram_1787479221560.jpg", left_in=1, top_in=1.8, width_in=8)
    
    # New Slide 6 - Wireframes (Landing Page)
    add_image_to_slide(prs.slides[6], r"C:\Users\abhij\.gemini\antigravity-ide\brain\de377572-b551-49fe-b84b-c465213fec1f\landing_page_1787479256961.png", left_in=1, top_in=1.8, width_in=8)
    
    # New Slide 7 - Architecture
    add_image_to_slide(prs.slides[7], r"C:\Users\abhij\.gemini\antigravity-ide\brain\de377572-b551-49fe-b84b-c465213fec1f\architecture_diagram_1787479236567.jpg", left_in=1, top_in=1.8, width_in=8)
    
    # New Slide 10 - Snapshots MVP (Dashboard)
    add_image_to_slide(prs.slides[10], r"C:\Users\abhij\.gemini\antigravity-ide\brain\de377572-b551-49fe-b84b-c465213fec1f\dashboard_1787479335882.png", left_in=1, top_in=1.8, width_in=8)

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
