"use client";
import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      {/* 
        PERFORMANCE FIX: 
        Removed heavy CSS blur-[100px] and instead using a soft radial gradient directly. 
        This is natively hardware accelerated and will not lag the browser. 
      */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-[-50%] opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(136,136,136,0.1) 0%, transparent 50%)",
          backgroundSize: "150% 150%",
        }}
      />
      
      {/* Pure Technical Grid */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />
      
      {/* Heavy vignette effect for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-90 pointer-events-none" />
    </div>
  );
}
