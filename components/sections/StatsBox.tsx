"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const stats = [
  { 
    value: 500, 
    suffix: "+", 
    label: "Projects delivered across brand, motion, and experience" 
  },
  { 
    value: 96, 
    suffix: "%", 
    label: "Long-term client satisfaction" 
  },
  { 
    value: 15, 
    suffix: "+", 
    label: "Years operating across creative and growth disciplines" 
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 40,
    damping: 15,
  });

  const displayValue = useTransform(spring, (current) => 
    `${Math.round(current).toString()}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.span 
      ref={ref} 
      className="text-5xl font-black tracking-tighter text-white md:text-7xl lg:text-8xl"
    >
      {displayValue}
    </motion.span>
  );
}

export default function StatsBox() {
  return (
    <section className="bg-background px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950/50 p-12 md:p-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="relative flex flex-col items-center justify-center text-center md:px-10"
              >
                {/* Vertical Divider */}
                {index !== 0 && (
                  <div className="absolute left-0 top-1/2 h-20 w-px -translate-y-1/2 bg-white/10 hidden md:block" />
                )}
                
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="mt-6 max-w-[200px] text-[11px] font-medium leading-relaxed tracking-wide text-foreground/45 group-hover:text-foreground/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Background subtle glow */}
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
        </div>
      </div>
    </section>
  );
}
