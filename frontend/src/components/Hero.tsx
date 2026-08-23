"use client";
import { motion } from "framer-motion";
import { ArrowRight, DatabaseZap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] text-center px-4 max-w-[1200px] mx-auto">
      
      {/* Premium glowing orb behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#0284C7]/[0.1] blur-[150px] rounded-full pointer-events-none z-[-1] mix-blend-multiply" />

      {/* Side HUD Panels */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 h-[60vh] w-12 hidden xl:flex flex-col justify-between items-center opacity-70">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-[#0284C7] to-transparent"></div>
        <div className="text-[8px] text-[#0284C7] font-mono rotate-[-90deg] tracking-[0.3em] whitespace-nowrap font-bold">SYS_STATUS // OPTIMAL</div>
        <div className="flex flex-col gap-2 mt-4">
          {["opacity-40", "opacity-70", "opacity-30", "opacity-90", "opacity-50"].map((op, i) => <div key={i} className={`w-2 bg-[#0284C7] ${op} h-1`}></div>)}
        </div>
        <div className="w-[1px] h-32 bg-gradient-to-t from-transparent via-[#0284C7] to-transparent"></div>
      </div>
      
      <div className="absolute right-4 top-1/2 -translate-y-1/2 h-[60vh] w-12 hidden xl:flex flex-col justify-between items-center opacity-70">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-[#EA580C] to-transparent"></div>
        <div className="text-[8px] text-[#EA580C] font-mono rotate-90 tracking-[0.3em] whitespace-nowrap font-bold">CORE_TEMP // NOMINAL</div>
        <div className="flex flex-col gap-2 mt-4">
          {["opacity-50", "opacity-30", "opacity-80", "opacity-40", "opacity-60"].map((op, i) => <div key={i} className={`w-2 bg-[#EA580C] ${op} h-1`}></div>)}
        </div>
        <div className="w-[1px] h-32 bg-gradient-to-t from-transparent via-[#EA580C] to-transparent"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 px-4 py-1.5 sci-fi-box bg-white/80 border border-[#0284C7]/30 text-xs uppercase tracking-[0.2em] text-[#0284C7] mb-12 font-heading shadow-[0_0_20px_rgba(2,132,199,0.1)] hud-glow typewriter-text font-bold"
      >
        <DatabaseZap className="w-3.5 h-3.5 text-[#0284C7]" />
        [ Scalable Catalog Engine for Industrial Commerce ]
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-6xl font-heading tracking-widest text-[#0F172A] mb-8 leading-[1.1] uppercase"
      >
        <span className="font-light opacity-90">Turn Dark Data Into</span> <br className="hidden md:block" />
        <span className="text-[#EA580C] hud-gold-glow font-bold text-5xl md:text-7xl mt-2 block">
          Golden Records.
        </span>
      </motion.h1>

        <div className="sci-fi-box bg-white/90 backdrop-blur-md border border-[#0284C7]/20 p-8 max-w-4xl relative group hover:border-[#0284C7]/50 transition-all duration-500 mb-12 shadow-[0_0_30px_rgba(2,132,199,0.05)]">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#0284C7]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#0284C7]"></div>
          <p className="text-sm md:text-lg text-[#0F172A]/80 font-heading tracking-[0.15em] leading-relaxed uppercase font-semibold">
            OmniSpec is the definitive intelligence pipeline that bulk processes thousands of unstructured supplier datasheets and URLs into perfectly validated, commerce-ready catalogs.
          </p>
        </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-center gap-6"
      >
        <Link 
          href="/dashboard" 
          className="group relative flex items-center justify-center gap-2 px-10 py-4 bg-white/90 border border-[#0284C7]/50 text-[#0284C7] font-heading font-bold text-lg sci-fi-box uppercase tracking-widest hover:bg-[#0284C7] hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(2,132,199,0.1)] hover:shadow-[0_0_30px_rgba(2,132,199,0.4)] cursor-none"
        >
          [ Enter the Dashboard ]
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
}
