"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl border-b border-[#0284C7]/20 shadow-[0_4px_30px_rgba(2,132,199,0.1)]" 
          : "bg-transparent border-b-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 relative z-10 group cursor-none">
          <div className="w-9 h-9 rounded-sm overflow-hidden border border-[#0284C7]/30 group-hover:border-[#0284C7] transition-all shadow-[0_0_15px_rgba(2,132,199,0.1)] group-hover:shadow-[0_0_20px_rgba(2,132,199,0.3)] bg-[#0284C7]/5">
            <Image src="/logo.jpg" alt="OmniSpec Logo" width={36} height={36} className="object-cover opacity-90 mix-blend-multiply" />
          </div>
          <span className="font-heading font-bold text-xl tracking-widest text-[#0284C7] hud-glow uppercase">[ OmniSpec ]</span>
        </Link>
        
        {/* Center Telemetry (Hidden on small screens) */}
        <div className="hidden md:flex items-center gap-6 opacity-80">
          <div className="flex flex-col items-center">
            <span className="text-[8px] uppercase tracking-widest text-[#0F172A] font-mono">Uplink</span>
            <span className="text-xs text-[#0284C7] font-bold font-heading">SECURE</span>
          </div>
          <div className="w-[1px] h-6 bg-[#0284C7]/30"></div>
          <div className="flex flex-col items-center">
            <span className="text-[8px] uppercase tracking-widest text-[#0F172A] font-mono">System</span>
            <span className="text-xs text-[#EA580C] font-bold font-heading">ONLINE</span>
          </div>
        </div>

        {/* Only Launch Engine Button */}
        <Link 
          href="/dashboard" 
          className="relative px-6 py-2.5 bg-[#0284C7]/10 text-[#0284C7] border border-[#0284C7]/30 font-heading font-bold text-sm sci-fi-box uppercase tracking-widest hover:bg-[#0284C7] hover:text-white hover:shadow-[0_0_20px_rgba(2,132,199,0.4)] transition-all duration-300 cursor-none"
        >
          [ Initialize Core ]
        </Link>
      </div>
    </motion.header>
  );
}
