"use client";
import { motion } from "framer-motion";

export default function JarvisBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-transparent flex items-center justify-center">
      {/* Hex Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 25 L60 75 L30 100 L0 75 L0 25 Z' fill='none' stroke='%230284C7' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 100px"
        }}
      />

      {/* Scanning Laser */}
      <div className="absolute w-full h-1 bg-[#0284C7] shadow-[0_0_20px_#0284C7] animate-scan-laser pointer-events-none z-0 mix-blend-multiply opacity-20" />

      {/* Massive Arc Reactor Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
        className="absolute w-[1200px] h-[1200px] rounded-full border-[1px] border-dashed border-[#0284C7]/20 opacity-30 mix-blend-multiply"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute w-[900px] h-[900px] rounded-full border-[4px] border-dotted border-[#0284C7]/10 opacity-40 mix-blend-multiply"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] rounded-full border-t-2 border-b-2 border-[#0284C7]/30 opacity-60 mix-blend-multiply"
      />

      {/* Crosshairs & Center Glow */}
      <div className="absolute w-[100%vw] h-px bg-gradient-to-r from-transparent via-[#0284C7]/20 to-transparent pointer-events-none" />
      <div className="absolute h-[100%vh] w-px bg-gradient-to-b from-transparent via-[#0284C7]/20 to-transparent pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#0284C7]/5 blur-[120px] pointer-events-none mix-blend-multiply" />
    </div>
  );
}
