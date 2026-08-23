"use client";
import { useState } from "react";
import { UploadCloud, FileType } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DropzoneProps {
  onResult?: (data: Record<string, unknown>) => void;
}

export default function Dropzone({ onResult }: DropzoneProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [url, setUrl] = useState("");

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    e.target.value = ''; // Reset input to allow re-uploading the same file
    if (!file) return;

    setIsProcessing(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/api/extract/pdf", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (onResult) {
        onResult(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsProcessing(true);

    try {
      const res = await fetch("http://localhost:8000/api/extract/url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (onResult) {
        onResult(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      {/* URL Input Section */}
      <form onSubmit={handleUrlSubmit} className="flex gap-2 w-full relative z-20">
        <input
          type="url"
          placeholder="Paste Supplier URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={isProcessing}
          className="flex-1 bg-black/40 border border-[#333] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#666] focus:outline-none focus:border-white transition-colors backdrop-blur-xl"
        />
        <button
          type="submit"
          disabled={isProcessing || !url}
          className="bg-white text-black px-6 py-3 rounded-xl font-medium text-sm hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
        >
          Extract
        </button>
      </form>

      <div className="relative flex items-center justify-center my-2">
        <div className="border-t border-[#333] w-full absolute"></div>
        <span className="bg-black text-[#666] text-xs px-4 relative z-10 uppercase tracking-widest">OR</span>
      </div>

      <label
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative flex flex-col items-center justify-center w-full flex-1 min-h-[300px] rounded-2xl border border-dashed transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-xl
          ${isHovered ? "border-white bg-white/5" : "border-[#333] bg-black/40"}
        `}
      >
        <input type="file" className="hidden" accept=".pdf" onChange={handleUpload} disabled={isProcessing} />
        <AnimatePresence mode="wait">
          {!isProcessing ? (
            <motion.div
              key="upload"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center gap-4 z-10"
            >
              <div className={`p-4 rounded-full transition-colors duration-300 ${isHovered ? "bg-white text-black" : "bg-[#111] border border-[#222] text-[#888]"}`}>
                <UploadCloud className="w-8 h-8" />
              </div>
              <div className="text-center font-sans">
                <p className="text-xl text-white font-medium tracking-tight mb-2">
                  Click or drag files to upload
                </p>
                <p className="text-xs uppercase tracking-widest text-[#888]">
                  PDF, JPG, PNG, or Technical Manuals
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="processing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center gap-6 z-10 w-full px-12"
            >
              <FileType className="w-10 h-10 text-white animate-pulse" />
              <div className="w-full max-w-md font-sans">
                <div className="flex justify-between text-xs uppercase tracking-widest mb-3">
                  <span className="text-[#888]">Parsing product specifications</span>
                  <span className="text-white font-mono">Processing</span>
                </div>
                <div className="w-full h-1 bg-[#222] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.8, ease: "easeInOut" }}
                    className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </label>
    </div>
  );
}
