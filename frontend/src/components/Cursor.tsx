"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isClient, setIsClient] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Hyper-fast spring configuration (almost native speed)
  const springConfig = { damping: 40, stiffness: 1000, mass: 0.1 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Slower spring for the outer trailing ring
  const outerSpringConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const outerSmoothX = useSpring(cursorX, outerSpringConfig);
  const outerSmoothY = useSpring(cursorY, outerSpringConfig);

  useEffect(() => {
    setIsClient(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".group")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isClient) return null;

  return (
    <>
      {/* Outer Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[99]"
        style={{ 
          x: outerSmoothX, 
          y: outerSmoothY, 
          translateX: "-50%", 
          translateY: "-50%" 
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Inner Fast Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100]"
        style={{ 
          x: smoothX, 
          y: smoothY,
          translateX: "-50%", 
          translateY: "-50%" 
        }}
        animate={{
          scale: isHovered ? 4 : 1,
          opacity: isHovered ? 0.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
      />
    </>
  );
}
