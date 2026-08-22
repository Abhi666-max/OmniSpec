"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#222] bg-[#000]/50 backdrop-blur-xl"
    >
      <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 relative z-10 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#333] group-hover:border-white/50 transition-colors">
            <Image src="/logo.jpg" alt="OmniSpec Logo" width={32} height={32} className="object-cover" />
          </div>
          <span className="font-sans font-medium text-lg tracking-tight text-white">OmniSpec</span>
        </Link>
        
        {/* Only Launch Engine Button */}
        <Link href="/dashboard" className="px-5 py-2 bg-white text-black font-sans font-medium text-sm rounded-full hover:scale-105 transition-transform duration-300">
          Launch Engine
        </Link>
      </div>
    </motion.header>
  );
}
