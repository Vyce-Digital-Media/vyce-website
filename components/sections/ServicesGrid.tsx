"use client";

import React from "react";
import ModernCard from "@/components/ui/ModernCard";
import { Laptop, Cpu, Layers, Palette, BarChart3, Zap } from "lucide-react";

const services = [
  {
    title: "Brand Strategy",
    description: "We define the soul of your brand, positioning it for long-term growth and market dominance through data-driven insights.",
    icon: Palette,
    color: "rgba(255, 60, 0, 0.15)",
  },
  {
    title: "Digital Design",
    description: "High-fidelity interfaces that blend aesthetics with utility. We create designs that don't just look good, but feel premium.",
    icon: Layers,
    color: "rgba(0, 200, 255, 0.15)",
  },
  {
    title: "Creative Development",
    description: "We bring designs to life with robust, performance-optimized code. Specialist in GSAP, Three.js, and React.",
    icon: Code,
    color: "rgba(180, 0, 255, 0.15)",
  },
  {
    title: "3D & Immersive",
    description: "Adding depth to the web. We build 3D environments and assets that provide a tactile, high-end feel to your project.",
    icon: Cpu,
    color: "rgba(0, 255, 150, 0.15)",
  },
  {
    title: "Growth & SEO",
    description: "Visibility is as important as design. We optimize every pixel for search engines and conversion metrics.",
    icon: BarChart3,
    color: "rgba(255, 200, 0, 0.15)",
  },
  {
    title: "Performance",
    description: "Speed is a feature. We ensure your site loads instantly and runs at a smooth 60fps on all devices.",
    icon: Zap,
    color: "rgba(255, 0, 100, 0.15)",
  },
];

import { Code } from "lucide-react";

export default function ServicesGrid() {
  return (
    <section className="bg-zinc-950/40 border-y border-white/[0.02] px-6 py-32 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-24 flex flex-col items-center text-center">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.6em] text-primary">Specializations</p>
          <h2 className="max-w-4xl text-5xl font-black uppercase tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Elevating the <span className="font-playfair font-normal lowercase italic text-foreground/70">standard</span> of digital
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ModernCard
              key={index}
              spotlightColor={service.color}
              className="h-full border-white/[0.05] p-10 md:p-12"
            >
              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              
              <h3 className="mb-4 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
                {service.title}
              </h3>
              
              <p className="text-sm leading-relaxed text-foreground/40 md:text-base">
                {service.description}
              </p>
              
              <div className="mt-auto pt-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:border-primary group-hover:text-primary group-hover:opacity-100">
                  <Zap size={16} />
                </div>
              </div>
            </ModernCard>
          ))}
        </div>
      </div>
    </section>
  );
}
