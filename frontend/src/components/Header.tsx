"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
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
          ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
          : "bg-transparent border-b-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 relative z-10 group cursor-none">
          <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <Image src="/logo.jpg" alt="OmniSpec Logo" width={36} height={36} className="object-cover" />
          </div>
          <span className="font-sans font-medium text-xl tracking-tight text-white/90 group-hover:text-white transition-colors">OmniSpec</span>
        </Link>
        
        {/* Only Launch Engine Button */}
        <Link 
          href="/dashboard" 
          className="relative px-6 py-2.5 bg-white text-black font-sans font-medium text-sm rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-none"
        >
          Launch Engine
        </Link>
      </div>
    </motion.header>
  );
}
