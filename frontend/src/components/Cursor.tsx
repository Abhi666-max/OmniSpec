"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const innerDotRef = useRef<HTMLDivElement>(null);
  const outerRingRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let frameId: number;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsHovered(!!isClickable);
    };

    const render = () => {
      // Direct DOM manipulation - NO CSS TRANSITIONS on transform allowed here
      if (innerDotRef.current) {
        innerDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      
      if (outerRingRef.current) {
        outerRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      frameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    
    frameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      {/* Outer Ring Tracker (No Transitions here) */}
      <div
        ref={outerRingRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ willChange: "transform" }}
      >
        {/* Visual Element (Handles hover scaling smoothly) */}
        <div 
          className={`w-8 h-8 -ml-4 -mt-4 rounded-full border transition-all duration-150 ${
            isHovered ? "scale-150 border-transparent" : "scale-100 border-white/40"
          }`}
        />
      </div>
      
      {/* Inner Dot Tracker (No Transitions here) */}
      <div
        ref={innerDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        style={{ willChange: "transform" }}
      >
        {/* Visual Element (Handles hover scaling smoothly) */}
        <div 
          className={`w-2 h-2 -ml-1 -mt-1 bg-white rounded-full transition-all duration-150 ${
            isHovered ? "scale-[4] opacity-30 mix-blend-difference" : "scale-100 opacity-100"
          }`}
        />
      </div>
    </>
  );
}
