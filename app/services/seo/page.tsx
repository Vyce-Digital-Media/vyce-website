"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Search, TrendingUp, Globe, Target, BarChart2 } from "lucide-react";

// ─── Animation Primitives ─────────────────────────────────────────────────

function RevealLine({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className={`overflow-hidden flex flex-wrap ${className}`}>
      <motion.div initial={{ y: "100%" }} animate={isInView ? { y: "0%" } : {}}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay }}>
        {children}
      </motion.div>
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

function Counter({ from, to, duration, prefix = "", suffix = "" }: { from: number, to: number, duration: number, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
        }
      });
    }
  }, [isInView, from, to, duration, prefix, suffix]);

  return <span ref={ref}>{prefix}{from}{suffix}</span>;
}

// ─── Ticker Tape ──────────────────────────────────────────────────────────

function Ticker() {
  const tickerItems = (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="flex items-center gap-6 pr-6">
          TECHNICAL ARCHITECTURE <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          CONTENT DOMINANCE <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          AUTHORITY BUILDING <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        </span>
      ))}
    </>
  );

  return (
    <div className="relative w-full overflow-hidden bg-[#0044ff] border-y border-white/10 py-4 flex text-white shadow-[0_0_30px_rgba(0,68,255,0.3)]">
      <motion.div
        animate={{ x: [0, "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap text-xs font-black uppercase tracking-[0.3em] w-max"
      >
        <div className="flex items-center">{tickerItems}</div>
        <div className="flex items-center">{tickerItems}</div>
      </motion.div>
    </div>
  );
}

// ─── Scroll Driven Showcase ───────────────────────────────────────────────

function SEOScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=4000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Initial state
      gsap.set(".search-container", { scale: 0.8, y: 100, opacity: 0 });
      gsap.set(".competitor-1", { y: 0, opacity: 1 });
      gsap.set(".competitor-2", { y: 0, opacity: 1 });
      gsap.set(".competitor-3", { y: 0, opacity: 1 });
      gsap.set(".our-brand", { y: 0, opacity: 1, height: 82, maxWidth: 600 });
      gsap.set("#clip-rect", { attr: { width: 0 } });
      gsap.set(".chart-container", { opacity: 0, scale: 0.9, y: 50, pointerEvents: "none" });

      // Step 1: Search Container Enters
      tl.to(".search-container", { scale: 1, y: 0, opacity: 1, duration: 1, ease: "power3.out" })
        
        // Step 2: The Climb (Our Brand moves up 3 positions: 3 * (82 + 16 gap) = ~294px)
        .to(".competitor-1", { y: 98, scale: 0.95, opacity: 0.2, duration: 1.5, ease: "power2.inOut" }, "+=0.5")
        .to(".our-brand", { y: -294, scale: 1.05, boxShadow: "0 0 40px rgba(0, 150, 255, 0.4)", duration: 1.5, ease: "power2.inOut" }, "<")
        .to(".competitor-2", { y: 98, scale: 0.95, opacity: 0.2, duration: 1.5, ease: "power2.inOut" }, "<")
        .to(".competitor-3", { y: 98, scale: 0.95, opacity: 0.2, duration: 1.5, ease: "power2.inOut" }, "<")

        // Step 3: Expand Our Brand into a Dashboard
        .to(".competitor-1, .competitor-2, .competitor-3, .search-header", { opacity: 0, y: "+=50", duration: 1, ease: "power2.inOut" })
        .to(".our-brand", { 
           maxWidth: "900px", 
           height: "420px", 
           y: -260, 
           borderRadius: "32px",
           duration: 1.5, 
           ease: "power3.inOut" 
        }, "<")
        .to(".our-brand-content", { opacity: 0, duration: 0.5 }, "-=1.5")
        
        // Step 4: Show Chart inside Our Brand
        .to(".chart-container", { opacity: 1, scale: 1, y: 0, pointerEvents: "auto", duration: 1, ease: "power2.out" })
        .to("#clip-rect", { attr: { width: 100 }, duration: 2.5, ease: "none" });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] md:h-screen w-full overflow-hidden bg-zinc-950 flex items-center justify-center transition-colors duration-500">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,68,255,0.08)_0%,rgba(0,0,0,1)_70%)] pointer-events-none" />

      {/* Hero Text behind animation */}
      <div className="absolute top-[15%] left-0 w-full text-center z-0 pointer-events-none opacity-50">
        <p className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter">Own The <span className="text-[#00aaff] italic font-satoshi font-normal">Search.</span></p>
      </div>

      <div className="search-container relative z-20 w-full max-w-[900px] mx-auto mt-16 flex flex-col items-center px-6 md:px-0">
        
        <div className="w-full max-w-[600px] search-header flex items-center gap-4 bg-zinc-900 border border-white/10 rounded-full px-6 py-4 mb-8 shadow-2xl">
          <Search className="text-foreground/50 w-6 h-6" />
          <div className="flex-1 font-mono text-sm md:text-base text-foreground/80 tracking-tight flex items-center">
            best creative agency in the world
            <span className="w-2 h-5 bg-[#00aaff] ml-1 animate-pulse" />
          </div>
        </div>

        <div className="relative w-full max-w-[600px] flex flex-col gap-4">
          
          <div className="competitor-1 w-full h-[82px] bg-zinc-900/50 border border-white/5 rounded-2xl p-5 flex items-center justify-between backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="text-foreground/30 font-black text-xl w-6 text-right">1</div>
              <div className="w-10 h-10 rounded-full bg-zinc-800" />
              <div className="space-y-2">
                <div className="h-3 w-32 bg-white/20 rounded-full" />
                <div className="h-2 w-24 bg-white/10 rounded-full" />
              </div>
            </div>
            <Globe className="text-foreground/20 w-5 h-5" />
          </div>

          <div className="competitor-2 w-full h-[82px] bg-zinc-900/50 border border-white/5 rounded-2xl p-5 flex items-center justify-between backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="text-foreground/30 font-black text-xl w-6 text-right">2</div>
              <div className="w-10 h-10 rounded-full bg-zinc-800" />
              <div className="space-y-2">
                <div className="h-3 w-40 bg-white/20 rounded-full" />
                <div className="h-2 w-20 bg-white/10 rounded-full" />
              </div>
            </div>
            <Globe className="text-foreground/20 w-5 h-5" />
          </div>

          <div className="competitor-3 w-full h-[82px] bg-zinc-900/50 border border-white/5 rounded-2xl p-5 flex items-center justify-between backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="text-foreground/30 font-black text-xl w-6 text-right">3</div>
              <div className="w-10 h-10 rounded-full bg-zinc-800" />
              <div className="space-y-2">
                <div className="h-3 w-28 bg-white/20 rounded-full" />
                <div className="h-2 w-16 bg-white/10 rounded-full" />
              </div>
            </div>
            <Globe className="text-foreground/20 w-5 h-5" />
          </div>

          <div className="our-brand absolute top-[294px] left-1/2 -translate-x-1/2 w-full max-w-[600px] bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-[#00aaff]/40 p-5 flex items-center justify-between backdrop-blur-md shadow-[0_0_20px_rgba(0,170,255,0.15)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00aaff]/10 to-transparent pointer-events-none" />
            
            <div className="our-brand-content flex items-center gap-4 relative z-10 w-full justify-between">
              <div className="flex items-center gap-4">
                <div className="text-[#00aaff] font-black text-xl w-6 text-right">4</div>
                <div className="w-10 h-10 rounded-full bg-[#00aaff]/20 flex items-center justify-center border border-[#00aaff]/30">
                  <Target className="text-[#00aaff] w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <div className="text-white font-bold text-sm tracking-wide">Your Brand</div>
                  <div className="text-[#00aaff]/60 text-xs font-mono">Organic Traffic: Growing</div>
                </div>
              </div>
              <TrendingUp className="text-[#00aaff] w-5 h-5" />
            </div>

            {/* Dashboard / Chart elements that appear later */}
            <div className="chart-container absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
               <div className="flex justify-between items-start w-full relative z-20">
                 <div className="space-y-2">
                   <div className="text-white/50 text-xs md:text-sm font-bold uppercase tracking-widest">Monthly Organic Traffic</div>
                   <div className="text-4xl md:text-7xl font-black text-white">124,500<span className="text-[#00aaff]">.</span></div>
                 </div>
                 <div className="flex items-center gap-2 bg-[#00aaff]/10 border border-[#00aaff]/20 px-4 py-2 rounded-full">
                   <TrendingUp className="text-[#00aaff] w-4 h-4" />
                   <span className="text-[#00aaff] font-bold text-xs md:text-sm">+340% YoY</span>
                 </div>
               </div>
            </div>

            {/* SVG Chart placed absolutely at the bottom to span full width of the card */}
            <div className="chart-container absolute left-0 right-0 bottom-0 h-44 overflow-hidden rounded-b-[32px] pointer-events-none z-0">
               <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                 <defs>
                   <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="rgba(0,170,255,0.3)" />
                     <stop offset="100%" stopColor="#00aaff" />
                   </linearGradient>
                   <linearGradient id="blue-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" stopColor="rgba(0,170,255,0.4)" />
                     <stop offset="100%" stopColor="transparent" />
                   </linearGradient>
                   <clipPath id="chart-clip">
                     <rect id="clip-rect" x="0" y="0" width="0" height="100" />
                   </clipPath>
                 </defs>

                 {/* Grid lines */}
                 <g opacity="0.3">
                   <path d="M0,25 L100,25 M0,50 L100,50 M0,75 L100,75" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" fill="none" />
                 </g>
                 
                 <g clipPath="url(#chart-clip)">
                   {/* Gradient under the line */}
                   <path d="M0,100 C20,90 30,80 40,85 C50,90 60,40 70,30 C80,20 90,15 100,0 L100,100 L0,100 Z" 
                         fill="url(#blue-fill)" stroke="none" />
                         
                   {/* Animated Line */}
                   <path d="M0,100 C20,90 30,80 40,85 C50,90 60,40 70,30 C80,20 90,15 100,0" 
                         stroke="url(#blue-grad)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                 </g>
               </svg>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default function SEOPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <div className="bg-background text-foreground overflow-clip">

      {/* ── 01. HERO ──────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-[100dvh] md:h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,68,255,0.15)_0%,rgba(0,0,0,1)_70%)] pointer-events-none" />

        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="relative z-10 w-full max-w-[1600px] px-6 md:px-12 lg:px-20 text-center flex flex-col items-center">
          <FadeIn>
            <span className="inline-flex items-center gap-3 rounded-full border border-[#00aaff]/20 bg-[#00aaff]/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.4em] text-[#00aaff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
              Service // SEO
            </span>
          </FadeIn>

          <div className="mt-6 md:mt-8 space-y-2 lg:space-y-4">
            <RevealLine>
              <h1 className="text-[clamp(3rem,8vw,9rem)] font-black uppercase tracking-tighter leading-[0.88]">
                Compound
              </h1>
            </RevealLine>
            <RevealLine delay={0.1}>
              <h1 className="text-[clamp(3rem,8vw,9rem)] font-satoshi font-normal italic text-white/40 leading-[0.88]">
                Growth.
              </h1>
            </RevealLine>
          </div>

          <FadeIn delay={0.3} className="mt-6 md:mt-8 max-w-2xl px-4">
            <p className="text-base md:text-xl text-foreground/50 font-medium leading-relaxed">
              Page 1 isn&apos;t a lottery. It&apos;s the result of someone doing the technical groundwork, writing content that actually answers questions, and building authority that Google can&apos;t ignore. We do all three. And we track every position gained.
            </p>
          </FadeIn>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full z-20">
          <Ticker />
        </div>
      </section>

      {/* ── 02. CRAZY SCROLL SECTION ──────────────────────────────── */}
      <SEOScrollShowcase />

      {/* ── 03. STATS & METRICS ───────────────────────────────────── */}
      <section className="relative px-6 py-20 md:py-32 md:py-48 lg:px-20 bg-zinc-950">
        <div className="mx-auto max-w-[1600px] grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="space-y-12">
            <RevealLine>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                Metrics That <br />
                <span className="font-satoshi italic text-[#00aaff] font-normal">Drive Revenue.</span>
              </h2>
            </RevealLine>
            <FadeIn delay={0.2} className="max-w-md">
              <p className="text-lg text-foreground/50 font-medium leading-relaxed">
                A ranking that doesn&apos;t convert is just a vanity metric with a better address. We map keywords to actual buyer intent, fix the technical rot your current agency ignored, and build the kind of authority that compounds for years.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-10 rounded-3xl border border-white/[0.04] bg-black aspect-square flex flex-col justify-between group hover:border-[#00aaff]/30 transition-colors duration-500"
            >
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/30">Traffic Growth</div>
              <div>
                <div className="text-5xl md:text-7xl font-black tracking-tighter group-hover:text-[#00aaff] transition-colors duration-500">
                  <Counter from={0} to={340} duration={2} suffix="%" />
                </div>
                <div className="mt-2 text-sm font-satoshi italic text-white/40">Average YoY Increase</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="p-8 md:p-10 rounded-3xl border border-white/[0.04] bg-black aspect-square flex flex-col justify-between group hover:border-[#00aaff]/30 transition-colors duration-500"
            >
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/30">Page 1 Ranks</div>
              <div>
                <div className="text-5xl md:text-7xl font-black tracking-tighter group-hover:text-[#00aaff] transition-colors duration-500">
                  <Counter from={0} to={1200} duration={2} prefix="+" />
                </div>
                <div className="mt-2 text-sm font-satoshi italic text-white/40">High-Intent Keywords</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="sm:col-span-2 p-8 md:p-10 rounded-3xl border border-white/[0.04] bg-black sm:aspect-[2.5/1] aspect-square flex flex-col justify-between group hover:border-[#00aaff]/30 transition-colors duration-500"
            >
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/30">Domain Authority</div>
              <div>
                <div className="text-5xl md:text-7xl font-black tracking-tighter group-hover:text-[#00aaff] transition-colors duration-500">
                  <Counter from={0} to={85} duration={2.5} prefix="Top " suffix="%" />
                </div>
                <div className="mt-2 text-sm font-satoshi italic text-white/40">Industry Benchmarking</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 04. CTA FINALE ────────────────────────────────────────── */}
      <section className="relative px-6 py-32 md:py-48 md:px-12 lg:px-20 overflow-hidden flex items-center justify-center text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30vw] w-[30vw] rounded-full bg-[#00aaff] blur-[160px]"
        />

        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <div>
            <RevealLine>
              <h2 className="text-[clamp(2.5rem,6vw,8rem)] font-black uppercase tracking-tighter leading-[0.88]">
                While you&apos;re reading this,
              </h2>
            </RevealLine>
            <RevealLine delay={0.1}>
              <h2 className="text-[clamp(2.5rem,6vw,8rem)] font-satoshi font-normal italic text-[#00aaff] leading-[0.88]">
                your competitor just ranked above you.
              </h2>
            </RevealLine>
          </div>

          <FadeIn delay={0.3}>
            <Link href="/contact" className="group inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 md:px-10 md:py-5 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-black transition-all duration-300 hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(0,170,255,0.4)]">
              Audit My Site
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
