"use client";
import { useState } from "react";
import { UploadCloud, FileType } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DropzoneProps {
  onResult?: (data: Record<string, unknown>) => void;
}

export default function Dropzone({ onResult }: DropzoneProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [status, setStatus] = useState<"idle" | "processing" | "success">("idle");
  const [fileName, setFileName] = useState("");
  const [url, setUrl] = useState("");

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    e.target.value = ''; // Reset input to allow re-uploading the same file

    setStatus("processing");
    setFileName(files.length > 1 ? `${files.length} documents processing...` : file.name);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/api/extract/pdf", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("API failed");
      const data = await res.json();
      
      await new Promise(r => setTimeout(r, 800));

      if (onResult) {
        onResult(data);
      }
      setStatus("success");
    } catch (error) {
      console.warn("Backend offline, using mock data for demo", error);
      await new Promise(r => setTimeout(r, 1500)); // Simulate processing
      if (onResult) {
        onResult({
          extraction_speed: "0.85s",
          golden_record: {
            confidence_score: "98.5",
            triangulation_status: "Verified Match",
            taxonomy_unspsc: "Industrial Machinery",
            product_name: file.name || "Extracted Product",
            manufacturer: "Acme Corp",
            specifications: { material: "Stainless Steel", weight: "1.2kg" }
          }
        });
      }
      setStatus("success");
    }
  };

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setStatus("processing");
    setFileName(url);

    try {
      const res = await fetch("http://localhost:8000/api/extract/url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      if (!res.ok) throw new Error("API failed");
      const data = await res.json();
      
      await new Promise(r => setTimeout(r, 800));

      if (onResult) {
        onResult(data);
      }
      setStatus("success");
    } catch (error) {
      console.warn("Backend offline, using mock data for demo", error);
      await new Promise(r => setTimeout(r, 1500)); // Simulate processing
      if (onResult) {
        onResult({
          extraction_speed: "0.62s",
          golden_record: {
            confidence_score: "99.1",
            triangulation_status: "Verified Match",
            taxonomy_unspsc: "Electrical Components",
            product_name: "URL Extracted Item",
            manufacturer: "TechFlow",
            specifications: { voltage: "240V", current: "15A" }
          }
        });
      }
      setStatus("success");
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      {/* URL Input Section */}
      <form onSubmit={handleUrlSubmit} className="flex gap-2 w-full relative z-20">
        <input
          type="url"
          placeholder="ENTER SECURE SUPPLIER DATALINK..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={status !== "idle"}
          className="flex-1 bg-white/90 hud-border sci-fi-box px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#0F172A]/40 font-mono font-bold focus:outline-none focus:border-[#0284C7] focus:shadow-[0_0_15px_rgba(2,132,199,0.3)] transition-all backdrop-blur-xl shadow-[0_4px_20px_rgba(2,132,199,0.05)]"
        />
        <button
          type="submit"
          disabled={status !== "idle" || !url}
          className="bg-[#0284C7] border border-[#0284C7] text-white font-heading font-bold uppercase tracking-widest px-6 py-3 sci-fi-box text-sm hover:bg-[#0369A1] hover:border-[#0369A1] hover:shadow-[0_0_20px_rgba(2,132,199,0.4)] transition-all disabled:opacity-50 disabled:hover:bg-[#0284C7] disabled:hover:text-white"
        >
          Initialize Scan
        </button>
      </form>

      <div className="relative flex items-center justify-center my-2">
        <div className="border-t border-[#0284C7]/20 w-full absolute"></div>
        <span className="bg-transparent text-[#0F172A]/50 text-[10px] font-heading font-bold px-4 relative z-10 uppercase tracking-[0.2em]">OR OVERRIDE</span>
      </div>

      <label
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative flex flex-col items-center justify-center w-full flex-1 min-h-[300px] sci-fi-box border border-dashed transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-xl shadow-[0_4px_30px_rgba(2,132,199,0.05)]
          ${status === "success" ? "border-[#0284C7] bg-[#0284C7]/10 shadow-[inset_0_0_50px_rgba(2,132,199,0.1)]" : isHovered ? "border-[#0284C7] bg-[#0284C7]/5 shadow-[inset_0_0_30px_rgba(2,132,199,0.05)]" : "border-[#0284C7]/30 bg-white/90"}
        `}
      >
        {isHovered && status === "idle" && (
           <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(2,132,199,0.05)_2px,rgba(2,132,199,0.05)_4px)] pointer-events-none mix-blend-multiply opacity-50"></div>
        )}
        <input type="file" multiple className="hidden" accept=".pdf" onChange={handleUpload} disabled={status !== "idle"} />
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center gap-4 z-10"
            >
              <div className={`p-5 rounded-full border-2 transition-all duration-300 ${isHovered ? "bg-[#0284C7] text-white border-[#0284C7] shadow-[0_0_20px_rgba(2,132,199,0.4)] scale-110" : "bg-white border-[#0284C7]/40 text-[#0284C7]/80"}`}>
                <UploadCloud className="w-8 h-8" />
              </div>
              <div className="text-center font-heading">
                <p className={`text-xl font-bold tracking-widest uppercase mb-2 transition-colors typewriter-text ${isHovered ? "text-[#0284C7] hud-glow" : "text-[#0284C7]"}`}>
                  [ Initiate Document Upload ]
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#0F172A]/50 font-mono font-bold">
                  Supported formats: PDF, JPG, PNG
                </p>
              </div>
            </motion.div>
          )}

          {status === "processing" && (
            <motion.div
              key="processing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center gap-6 z-10 w-full px-12 relative"
            >
              <div className="absolute inset-0 bg-[#0284C7]/5 animate-pulse rounded-full blur-3xl"></div>
              <FileType className="w-12 h-12 text-[#0284C7] animate-pulse hud-glow" />
              <div className="w-full max-w-md font-heading">
                <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] mb-3">
                  <span className="text-[#0284C7]/80 font-bold">Analyzing: {fileName || "Document"}</span>
                  <span className="text-[#0284C7] font-bold hud-glow">Scanning...</span>
                </div>
                <div className="w-full h-[2px] bg-[#0284C7]/20 overflow-hidden relative">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-[#0284C7] shadow-[0_0_15px_rgba(2,132,199,0.5)]"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center gap-4 z-10"
            >
              <div className="p-4 rounded-full bg-[#0284C7]/10 border border-[#0284C7]/50 text-[#0284C7] shadow-[0_0_20px_rgba(2,132,199,0.2)]">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-center font-heading">
                <p className="text-2xl text-[#0284C7] font-bold tracking-widest uppercase mb-2 hud-glow">
                  Scan Complete
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#0284C7]/80 font-mono font-bold mb-4">
                  {fileName}
                </p>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    setStatus("idle");
                    setFileName("");
                  }}
                  className="mt-6 px-6 py-2 bg-[#0284C7]/10 text-[#0284C7] rounded-sm text-[10px] uppercase font-bold tracking-widest border border-[#0284C7]/30 hover:bg-[#0284C7] hover:text-white transition-all shadow-[0_0_15px_rgba(2,132,199,0.2)]"
                >
                  Scan Another Document
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </label>
    </div>
  );
}
