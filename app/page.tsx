"use client";

import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";

import ServicesGrid from "@/components/sections/ServicesGrid";
import ExploreCollection from "@/components/sections/ImageScroller3D";
import ScrollingText from "@/components/sections/ScrollingText";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef } from "react";

function RevealLine({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div initial={{ y: "100%", opacity: 0 }} animate={isInView ? { y: "0%", opacity: 1 } : {}}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay }}>{children}</motion.div>
    </div>
  );
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <ServicesGrid />

      {/* New 3D ImageScroller Portfolio Experience */}
      <ExploreCollection />

      <ScrollingText />

      <Process />

      {/* Manifesto Section (Refactored) */}
      <section className="relative px-6 py-40 md:px-12 lg:px-16 bg-zinc-950/20 overflow-hidden" id="about">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-24 items-start">
            {/* Split Typographic Column */}
            <div className="space-y-12">


              <div className="space-y-2">
                <RevealLine>
                  <h2 className="text-6xl font-black uppercase tracking-tighter sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85]">
                    Results
                  </h2>
                </RevealLine>
                <RevealLine delay={0.1}>
                  <h2 className="text-6xl font-black uppercase tracking-tighter sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85]">
                    <span className="font-satoshi font-normal italic text-primary/80 lowercase">Not</span>
                  </h2>
                </RevealLine>
                <RevealLine delay={0.2}>
                  <h2 className="text-6xl font-black uppercase tracking-tighter sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85]">
                    Excuses
                  </h2>
                </RevealLine>
              </div>

              <FadeIn delay={0.3}>
                <p className="max-w-2xl text-xl md:text-2xl text-foreground/50 font-medium leading-relaxed">
                  The internet is already full of brands that look okay and do nothing. We refuse to add to the pile.
                </p>
              </FadeIn>

              <FadeIn delay={0.4} className="pt-8">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-foreground transition-all hover:text-primary"
                >
                  <span className="relative">
                    Our Story
                    <span className="absolute -bottom-2 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                  <span className="h-8 w-8 rounded-full border border-border flex items-center justify-center transition-all group-hover:border-primary group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </FadeIn>
            </div>

            {/* Split Pillars Grid */}
            <div className="grid gap-16 pt-12 md:pt-48">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 group"
              >
                <div className="flex items-center gap-6">
                  <div className="text-2xl font-satoshi font-normal italic text-primary/40 transition-colors group-hover:text-primary">01</div>
                  <h3 className="text-xl font-bold uppercase tracking-[0.3em]">We measure everything</h3>
                </div>
                <p className="text-foreground/45 leading-relaxed font-medium tracking-wide border-l border-border/40 pl-8 transition-colors group-hover:border-primary/40">
                  Gut feelings are great. Data-backed gut feelings are better. Every decision we make is grounded in numbers, not vibes — because your budget deserves better than someone's hunch.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6 group"
              >
                <div className="flex items-center gap-6">
                  <div className="text-2xl font-satoshi font-normal italic text-primary/40 transition-colors group-hover:text-primary">02</div>
                  <h3 className="text-xl font-bold uppercase tracking-[0.3em]">We don&apos;t do pretty for the sake of pretty</h3>
                </div>
                <p className="text-foreground/45 leading-relaxed font-medium tracking-wide border-l border-border/40 pl-8 transition-colors group-hover:border-primary/40">
                  Beautiful work that doesn't convert is decoration. We lean into restraint and strategy so your brand earns attention — and then keeps it.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Subtle Background Glyph */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-[0.02] -z-10 pointer-events-none">
          <span className="text-[40rem] font-black leading-none">VYCE</span>
        </div>
      </section>

      {/* Ready when you are Section */}
      <section className="flex flex-col items-center gap-14 px-6 py-40 text-center md:px-12 lg:px-16 overflow-hidden">
        <div className="mx-auto max-w-5xl space-y-12 flex flex-col items-center">

          <div className="space-y-2 flex flex-col justify-center text-center">
            <RevealLine>
              <h2 className="text-5xl font-black tracking-tighter sm:text-7xl md:text-8xl lg:text-[8rem] leading-[0.9]">
                Your brand is losing
              </h2>
            </RevealLine>
            <RevealLine delay={0.1}>
              <h2 className="text-5xl font-black tracking-tighter sm:text-7xl md:text-8xl lg:text-[8rem] leading-[0.9]">
                <span className="font-satoshi font-normal italic text-primary">to worse brands with better marketing.</span>
              </h2>
            </RevealLine>
          </div>

          <FadeIn delay={0.2}>
            <p className="mx-auto max-w-2xl text-lg text-foreground/60 md:text-xl leading-relaxed font-medium">
              Annoying, isn't it? Let's do something about it. No pitch deck. No pressure. Just a call where we figure out exactly what's holding you back — and whether we're the ones to fix it.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 w-full">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-primary px-12 py-6 text-[11px] font-black uppercase tracking-[0.3em] text-white transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
            >
              Start the Conversation →
            </Link>
            <Link
              href="/services"
              className="inline-flex rounded-full border border-foreground/20 bg-transparent px-12 py-6 text-[11px] font-black uppercase tracking-[0.3em] text-foreground transition-all hover:border-foreground hover:bg-foreground/5 hover:scale-105 active:scale-95"
            >
              View Our Services →
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
