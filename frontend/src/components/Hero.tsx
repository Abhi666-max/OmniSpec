"use client";
import { motion } from "framer-motion";
import { ArrowRight, DatabaseZap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] text-center px-4 max-w-[1200px] mx-auto">
      
      {/* Premium glowing orb behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none z-[-1]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#AAA] mb-12 font-sans shadow-[0_0_20px_rgba(255,255,255,0.05)]"
      >
        <DatabaseZap className="w-3.5 h-3.5 text-white" />
        Scalable Catalog Engine for Industrial Commerce
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-6xl md:text-[7rem] font-sans font-semibold tracking-tighter text-white mb-8 leading-[1.05]"
      >
        Turn Dark Data Into <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#888] to-[#444]">
          Golden Records.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-lg md:text-xl text-[#888] max-w-3xl font-sans mb-12 tracking-tight leading-relaxed"
      >
        OmniSpec is the definitive intelligence pipeline that bulk processes thousands of unstructured supplier datasheets and URLs into perfectly validated, commerce-ready catalogs.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-center gap-6"
      >
        <Link 
          href="/dashboard" 
          className="group relative flex items-center justify-center gap-2 px-10 py-4 bg-white text-black font-sans font-medium text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-none"
        >
          Enter the Dashboard
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
}
