"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Projects. All Delivered."
  },
  {
    value: 5,
    prefix: "",
    suffix: "Cr+",
    label: "Revenue Generated for Clients"
  },
  {
    value: 15,
    suffix: "+",
    label: "Industries. Still Counting."
  },
  {
    value: 15,
    suffix: "+",
    label: "Team Members Who Actually Care"
  },
];

function Counter({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 40,
    damping: 15,
  });

  const displayValue = useTransform(spring, (current) =>
    `${prefix}${Math.round(current).toString()}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.span
      ref={ref}
      className="text-5xl font-black tracking-tighter text-white transition-all duration-500 group-hover:text-primary md:text-7xl lg:text-8xl group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,68,255,0.5)]"
    >
      {displayValue}
    </motion.span>
  );
}

export default function StatsBox() {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 md:px-12 lg:px-16">
      {/* Decorative brand mesh grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-full w-px bg-white"
            style={{ left: `${(i + 1) * (100 / 7)}%` }}
          />
        ))}
      </div>

      <div className="mx-auto w-full relative z-10">
        <div 
          className="relative overflow-hidden rounded-[32px] border border-white/10 p-10 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
          style={{
            backgroundColor: "rgba(10, 10, 10, 0.75)",
            backdropFilter: "blur(120px)",
            WebkitBackdropFilter: "blur(120px)"
          }}
        >

          <div className="relative grid grid-cols-2 gap-10 md:gap-16 w-full mx-auto">
            {/* Perfect continuous "+" divider in the center */}
            <div className="absolute left-1/2 top-4 bottom-4 w-px bg-white/10 -translate-x-1/2 pointer-events-none" />
            <div className="absolute top-1/2 left-4 right-4 h-px bg-white/10 -translate-y-1/2 pointer-events-none" />

            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center text-center p-4 md:p-8 group cursor-pointer"
              >
                <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                <p className="mt-6 max-w-[160px] text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30 group-hover:text-foreground/80 transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Background subtle glow */}
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
