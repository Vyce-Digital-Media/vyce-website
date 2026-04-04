"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface RollingTextProps {
  text: string;
  direction?: "left" | "right";
  baseVelocity?: number;
}

function RollingText({ text, direction = "left", baseVelocity = 5 }: RollingTextProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll sync
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map vertical scroll progress to horizontal translation
  // If moving left: 0 -> -500, if moving right: -500 -> 0
  const xTranslate = useTransform(
    smoothProgress,
    [0, 1],
    direction === "left" ? [0, -600] : [-600, 0]
  );

  return (
    <div ref={containerRef} className="flex whitespace-nowrap overflow-hidden py-4 md:py-8 lg:py-12">
      <motion.div
        style={{ x: xTranslate }}
        className="flex gap-12 md:gap-24 lg:gap-32 px-12 md:px-24"
      >
        <span className="text-[12rem] font-black uppercase tracking-tighter text-foreground sm:text-[18rem] md:text-[22rem] lg:text-[28rem] leading-[0.8]">
          {text}
        </span>
        <span className="text-[12rem] font-black uppercase tracking-tighter text-foreground/10 sm:text-[18rem] md:text-[22rem] lg:text-[28rem] leading-[0.8]">
          {text}
        </span>
        <span className="text-[12rem] font-black uppercase tracking-tighter text-foreground/5 sm:text-[18rem] md:text-[22rem] lg:text-[28rem] leading-[0.8]">
          {text}
        </span>
      </motion.div>
    </div>
  );
}

export default function ScrollingText() {
  return (
    <section className="relative z-10 overflow-hidden bg-background py-20 md:py-32 lg:py-48">
      <div className="flex flex-col gap-0 md:gap-4 lg:gap-8">
        <RollingText text="Curious" direction="left" />
        <RollingText text="Creative" direction="right" />
      </div>

      {/* Background radial gradient to add depth */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-primary/[0.03] to-transparent blur-3xl" />
    </section>
  );
}
