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

      ringX += (mouseX - ringX) * 0.9;
      ringY += (mouseY - ringY) * 0.9;

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
          className={`w-10 h-10 -ml-5 -mt-5 rounded-full border border-dashed transition-all duration-300 ${isHovered ? "scale-[1.2] border-[#00D2FF]/80 rotate-45" : "scale-100 border-[#00D2FF]/40 rotate-0"
            }`}
        />
        {/* Reticle Ticks */}
        <div className={`absolute top-1/2 left-0 w-full h-[1px] bg-[#00D2FF]/30 -translate-y-1/2 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute left-1/2 top-0 w-[1px] h-full bg-[#00D2FF]/30 -translate-x-1/2 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Inner Dot Tracker (No Transitions here) */}
      <div
        ref={innerDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        style={{ willChange: "transform" }}
      >
        {/* Visual Element (Handles hover scaling smoothly) */}
        <div
          className={`w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-[#00D2FF] rounded-sm transition-all duration-150 ${isHovered ? "scale-[2] shadow-[0_0_10px_#00D2FF]" : "scale-100 shadow-[0_0_5px_#00D2FF]"
            }`}
        />
      </div>
    </>
  );
}
