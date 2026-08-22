"use client";
import { useState } from "react";
import { UploadCloud, FileType } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Dropzone() {
  const [isHovered, setIsHovered] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUpload = () => {
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 3000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleUpload}
        className={`relative flex flex-col items-center justify-center w-full h-72 rounded-2xl border border-dashed transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-xl
          ${isHovered ? "border-white bg-white/5" : "border-[#333] bg-black/40"}
        `}
      >
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
      </motion.div>
    </div>
  );
}
