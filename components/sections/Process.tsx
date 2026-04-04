"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  { step: "01", title: "Discovery", description: "Deep diving into your brand's essence and target audience to define a clear strategic direction." },
  { step: "02", title: "Strategy", description: "Mapping out the digital blueprint, from user experience paths to core technological foundations." },
  { step: "03", title: "Design", description: "Crafting visual identities and interactive prototypes that marry aesthetic luxury with peak functionality." },
  { step: "04", title: "Development", description: "Coding high-performance, smooth, and scalable digital ecosystems with meticulous attention to detail." },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepsRef.current.forEach((step, index) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 60,
          duration: 1.2,
          ease: "power3.out",
          delay: index * 0.1,
        });
      });

      // Animate Section Header
      gsap.from(".process-header", {
        scrollTrigger: {
          trigger: ".process-header",
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        rotateX: -20,
        duration: 1.5,
        ease: "expo.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-8 md:px-16 bg-background relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col gap-6 max-w-2xl process-header">
          <h4 className="text-sm font-bold uppercase tracking-[0.5em] text-primary">How we work</h4>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-foreground uppercase">
            The Digital <br />
            <span className="italic font-playfair font-normal lowercase">Mastery</span> Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              ref={(el) => { if (el) stepsRef.current[index] = el; }}
              className="flex flex-col gap-10 group"
            >
              <div className="text-4xl font-bold text-foreground/10 group-hover:text-primary transition-all duration-500 font-playfair">
                {step.step}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold uppercase tracking-widest text-foreground group-hover:translate-x-2 transition-transform duration-500">
                  {step.title}
                </h3>
                <p className="text-foreground/50 text-sm leading-relaxed tracking-wide font-medium">
                  {step.description}
                </p>
              </div>
              <div className="w-full h-[1px] bg-border group-hover:bg-primary transition-all duration-700 mt-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
