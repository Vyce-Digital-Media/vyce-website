"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLinesRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal animation
      gsap.from(titleLinesRef.current, {
        y: 100,
        opacity: 0,
        rotateX: -45,
        stagger: 0.1,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.5,
      });

      // Parallax effect on scroll
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 250,
        scale: 0.95,
        opacity: 0.5,
      });

      // Floating items animation
      gsap.to(".floating-item", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex h-[110vh] w-full flex-col items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/20 via-transparent to-background" />

      <div ref={containerRef} className="relative z-10 w-full max-w-[1400px] px-6 text-center">
        <div className="flex flex-col items-center">
          <h1 className="flex flex-col items-center text-5xl font-black uppercase tracking-tighter sm:text-7xl md:text-[8rem] lg:text-[10rem] xl:text-[12rem]">
            <span className="block overflow-hidden pb-2">
              <span
                ref={(el) => { titleLinesRef.current[0] = el; }}
                className="px-4 inline-block leading-[0.9]"
              >
                Defining
              </span>
            </span>
            <span className="block overflow-hidden pb-4">
              <span
                ref={(el) => { titleLinesRef.current[1] = el; }}
                className="px-4 inline-block font-playfair font-normal lowercase italic text-primary leading-[0.8]"
              >
                future
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                ref={(el) => { titleLinesRef.current[2] = el; }}
                className="px-4 inline-block leading-[0.9]"
              >
                Brands
              </span>
            </span>
          </h1>

          <p ref={(el) => { titleLinesRef.current[3] = el; }} className="mt-12 max-w-2xl text-base leading-relaxed text-foreground/40 md:text-xl lg:text-2xl">
            Atmospheric interfaces, performance-driven <br className="hidden md:block" />
            digital products, and high-end brand identities.
          </p>

          <div className="mt-16 flex flex-col items-center gap-12">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/50 hover:text-foreground"
            >
              Start a project <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-4 opacity-50">
        <div className="h-[60px] w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-foreground/40 [writing-mode:vertical-lr]">Scroll</span>
      </div>
    </section>
  );
}
