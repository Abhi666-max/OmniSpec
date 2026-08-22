"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center pt-40 pb-20 text-center px-4 max-w-5xl mx-auto mt-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-[#222] text-xs uppercase tracking-widest text-[#888] mb-8 font-sans"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
        OmniSpec Engine v3.0
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-6xl md:text-8xl font-sans font-semibold tracking-tighter text-white mb-6 leading-[1.1]"
      >
        Transform Dark Data into <br className="hidden md:block" />
        <span className="text-[#888]">Structured Assets.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-lg md:text-xl text-[#888] max-w-2xl font-sans mb-10 tracking-tight"
      >
        The definitive intelligence platform for industrial commerce. Extract, enrich, and validate specifications with absolute precision.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <button className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-black font-sans font-medium rounded-full hover:scale-105 transition-transform duration-300">
          Start Extraction <ArrowRight className="w-4 h-4" />
        </button>
        <button className="px-8 py-3.5 bg-black/40 backdrop-blur-md text-white font-sans font-medium rounded-full border border-[#333] hover:bg-white/10 transition-colors duration-300">
          Read Documentation
        </button>
      </motion.div>
    </div>
  );
}
