"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#222] bg-[#000]/50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-lg font-sans font-medium tracking-tight text-white flex items-center gap-3">
            <div className="w-7 h-7 relative rounded-full overflow-hidden border border-[#333]">
              <Image src="/logo.jpg" alt="OmniSpec Logo" fill className="object-cover" />
            </div>
            OmniSpec
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-sans text-[#888]">
            <Link href="#" className="hover:text-white transition-colors">Product</Link>
            <Link href="#" className="hover:text-white transition-colors">Solutions</Link>
            <Link href="#" className="hover:text-white transition-colors">API</Link>
            <Link href="#" className="hover:text-white transition-colors">Enterprise</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-xs uppercase tracking-widest font-sans text-[#888] hover:text-white transition-colors hidden md:block">
            Sign In
          </Link>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2 bg-white text-black text-xs uppercase tracking-widest font-sans font-semibold rounded-full hover:bg-neutral-200 transition-colors"
          >
            Book Demo
          </motion.button>
        </div>
      </div>
    </header>
  );
}
