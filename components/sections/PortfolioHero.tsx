"use client";

import { useScroll, useTransform, motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["500", "600"] });

export default function PortfolioHero() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const prefersReduced = useReducedMotion();
  
  // Scale from 1 → 40 as user scrolls through the section
  const scale = prefersReduced 
    ? useTransform(scrollYProgress, [0, 1], [1, 1]) 
    : useTransform(scrollYProgress, [0, 1], [1, 40]);
  
  // Slight fade out near the very end
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  // Inner text that appears inside the gap as you pass through
  const innerOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const innerScale = useTransform(scrollYProgress, [0.4, 1], [0.8, 1]);

  return (
    // Outer container: tall for scroll distance, sticky viewport
    <div ref={containerRef} style={{ height: "500vh" }} className={`relative ${inter.className}`}>
      
      {/* Sticky viewport — stays fixed while user scrolls through 500vh */}
      <div className="sticky top-0 h-screen w-screen overflow-hidden bg-white flex flex-col z-0">
        
        {/* Scaling text block */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            style={{ scale, opacity }}
            className="text-center origin-center select-none flex flex-col items-center justify-center relative z-10"
          >
            <p className="text-[15vw] md:text-[12vw] font-medium leading-none tracking-tighter text-black">
              12, 13, 14 of
            </p>
            <p className="text-[18vw] md:text-[14vw] font-medium leading-none tracking-tighter text-black mt-[-2vw]">
              September 2025
            </p>
          </motion.div>

          {/* Text that appears as you pass through the wall */}
          <motion.div 
            style={{ opacity: innerOpacity, scale: innerScale }}
            className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
          >
            <p className="text-sm md:text-xl font-medium tracking-tight text-black max-w-md text-center">
              Celebrating Spatial Sound<br />as a contemporary art form
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
