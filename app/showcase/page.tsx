"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { signalProjectPageReady } from "@/components/ui/ProjectTransition";
import { div } from "framer-motion/client";

// ─── UTILITIES ─────────────────────────────────────────────────────────────

function RevealLine({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div initial={{ y: "120%", opacity: 0 }} animate={isInView ? { y: "0%", opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}>
        {children}
      </motion.div>
    </div>
  );
}

// ─── SECTIONS ──────────────────────────────────────────────────────────────

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=150%",
        }
      });

      // Initially, image wrapper sits on the right half with some padding
      gsap.set(imageWrapperRef.current, {
        clipPath: "inset(15% 5% 10% 50% round 30px)"
      });

      tl.to(textRef.current, {
        x: "-20vw",
        opacity: 0,
        ease: "power2.inOut",
        duration: 1
      }, 0)
        .to(imageWrapperRef.current, {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          ease: "power2.inOut",
          duration: 1
        }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full relative overflow-hidden flex items-center">
      {/* Absolute Image Layer */}
      <div ref={imageWrapperRef} className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2000&auto=format&fit=crop"
          alt="Hero Project"
          className="w-full h-full object-cover origin-center scale-110"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Left Text */}
      <div ref={textRef} className="w-full md:w-1/2 px-8 md:px-20 z-10 relative">
        <RevealLine>
          <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-6 block mt-8">Web Development and SEO</span>
        </RevealLine>
        <RevealLine delay={0.1}>
          <h1 className="text-[clamp(3rem,6vw,7rem)] font-black uppercase tracking-tighter leading-[0.9]">
            Nexus<br /><span className="font-satoshi italic font-normal text-white/50">Space.</span>
          </h1>
        </RevealLine>
        <RevealLine delay={0.2} className="mt-8">
          <p className="max-w-md text-foreground/60 text-lg">
            Redefining spatial architecture through immersive webGL experiences and precision-crafted interfaces.
          </p>
        </RevealLine>

        <div className="flex items-start gap-10 mt-10 border-t border-white/5 pt-10">
          <RevealLine delay={0.35} className="mr-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center p-3 border border-white/10 shadow-2xl backdrop-blur-sm">
              <img
                src="data:image/jpeg;base64,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"
                alt="SpaceX Logo"
                className="w-full h-full object-contain opacity-80"
              />
            </div>
          </RevealLine>

          <div className="grid grid-cols-2 gap-8 max-w-xs">
            <div>
              <RevealLine delay={0.4}>
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 block mb-2">Client</span>
              </RevealLine>
              <RevealLine delay={0.5}>
                <span className="text-sm uppercase font-bold tracking-widest text-white">Nexus Space Corp.</span>
              </RevealLine>
            </div>
            <div>
              <RevealLine delay={0.45}>
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 block mb-2">Industry</span>
              </RevealLine>
              <RevealLine delay={0.55}>
                <span className="text-sm uppercase font-bold tracking-widest text-white">Spatial Tech</span>
              </RevealLine>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PROJECT TABLE ─────────────────────────────────────────────────────────

const serviceColors: Record<string, string> = {
  Web: "bg-violet-500/10 border-violet-500/40 text-violet-300",
  Ads: "bg-amber-500/10 border-amber-500/40 text-amber-300",
  SEO: "bg-emerald-500/10 border-emerald-500/40 text-emerald-300",
  Branding: "bg-rose-500/10 border-rose-500/40 text-rose-300",
  Automation: "bg-sky-500/10 border-sky-500/40 text-sky-300",
};

const projectSpec = {
  client: "Nexus Space Corp.",
  industry: "Spatial Technology",
  services: ["Web", "SEO", "Branding"],
  startDate: "January 2024",
  endDate: "April 2024",
  duration: "4 Months",
  status: "Completed",
  year: "2024",
};

type RowRef = HTMLDivElement | null;

function ProjectTableSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const topLineRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<RowRef[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Heading slide up
      gsap.from(headingRef.current, {
        y: 70,
        opacity: 0,
        duration: 1.3,
        ease: "power4.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 88%" },
      });

      // Top rule draws in
      gsap.from(topLineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.6,
        ease: "expo.inOut",
        scrollTrigger: { trigger: topLineRef.current, start: "top 88%" },
      });

      // Rows stagger in
      rowsRef.current.forEach((row, i) => {
        if (!row) return;
        gsap.from(row, {
          x: -30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.07,
          scrollTrigger: { trigger: row, start: "top 92%" },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const rows = [
    {
      label: "Client",
      value: (
        <span className="text-white font-bold uppercase tracking-wider text-sm md:text-base">
          {projectSpec.client}
        </span>
      ),
    },
    {
      label: "Industry",
      value: (
        <span className="text-white/70 font-mono text-sm uppercase tracking-[0.2em]">
          {projectSpec.industry}
        </span>
      ),
    },
    {
      label: "Services Delivered",
      value: (
        <div className="flex flex-wrap gap-2">
          {projectSpec.services.map((s) => (
            <span
              key={s}
              className={`inline-flex items-center border rounded-full px-3.5 py-1 text-[10px] font-mono uppercase tracking-widest transition-all duration-300 ${serviceColors[s] ?? "bg-white/5 border-white/20 text-white/50"}`}
            >
              {s}
            </span>
          ))}
        </div>
      ),
    },
    {
      label: "Project Year",
      value: (
        <span className="text-white/70 font-mono text-sm tracking-widest">
          {projectSpec.startDate} - {projectSpec.endDate}
        </span>
      ),
    },
    {
      label: "Duration",
      value: (
        <span className="text-primary font-black uppercase tracking-widest text-sm">
          {projectSpec.duration}
        </span>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative z-30 bg-background px-8 md:px-20 py-24 overflow-hidden h-screen"
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[350px] bg-violet-600/5 rounded-full blur-[110px]" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headingRef} className="flex flex-col items-center justify-center text-center mb-14">
          <h2 className="text-[clamp(2.2rem,4.5vw,4.5rem)] font-black uppercase tracking-tighter leading-none">
            Scope &amp; <span className="font-satoshi italic font-normal text-white/25">Deliverables.</span>
          </h2>
        </div>

        {/* Top rule */}
        <div ref={topLineRef} className="w-full h-px bg-white/10 mb-0" />

        {/* Rows */}
        <div className="divide-y divide-white/[0.06]">
          {rows.map((row, i) => (
            <div
              key={row.label}
              ref={(el) => { rowsRef.current[i] = el; }}
              className="group grid grid-cols-[1fr_1.2fr] md:grid-cols-2
                 items-center gap-x-8 md:gap-x-12 py-6 px-4 -mx-4 rounded-xl cursor-default
                 transition-all duration-300 ease-out
                 hover:bg-white/[0.03] hover:px-6 hover:-mx-6"
            >
              {/* Label: Right aligned */}
              <div className="text-left">
                <span
                  className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/25
                     group-hover:text-primary/70 transition-colors duration-300"
                >
                  {row.label}
                </span>
              </div>

              {/* Value: Left aligned */}
              <div className="flex items-center justify-start gap-4">
                {/* Accent line slides in on hover from left */}
                <div
                  className="w-0 group-hover:w-6 h-px bg-primary transition-all duration-500 ease-out flex-shrink-0"
                />
                <div className="text-left">{row.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="w-full h-px bg-white/10 mt-0" />
      </div>
    </section>
  );
}

function DescriptionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const words = gsap.utils.toArray(".desc-word");
      gsap.to(words, {
        color: "#a1a1aa", // Dimmer grey (zinc-400) instead of pure white
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: true,
          pin: true,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const text = "We approached this challenge by dismantling the conventional grid. Every element was designed to float, react, and breathe, creating an organic journey rather than a rigid layout. We approached this challenge by dismantling the conventional grid. Every element was designed to float, react, and breathe, creating an organic journey rather than a rigid layout. We approached this challenge by dismantling the conventional grid. Every element was designed to float, react, and breathe, creating an organic journey rather than a rigid layout.";
  const words = text.split(" ");

  return (
    <section ref={containerRef} className="h-screen w-full flex flex-col items-center justify-center px-8 md:px-20 relative z-30 bg-background gap-10">

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[350px] bg-violet-600/5 rounded-full blur-[110px]" />

      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center mb-14">
        <h2 className="text-[clamp(2.2rem,4.5vw,4.5rem)] font-black uppercase tracking-tighter leading-none">
          Problem &amp; <span className="font-satoshi italic font-normal text-white/25">Statement.</span>
        </h2>
      </div>
      {/* Animated word reveal */}
      <div className="max-w-4/5 w-full">
        <p className="text-[clamp(1rem,2vw,2rem)] font-black uppercase text-justify tracking-tighter leading-[1.2] flex flex-wrap gap-x-[clamp(0.3rem,1vw,1rem)]">
          {words.map((word, i) => (
            <span key={i} className="desc-word text-white/10 transition-colors duration-300">
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

function FloatingGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const wrappers = gsap.utils.toArray<HTMLElement>(".float-wrapper");
      wrappers.forEach((wrapper) => {
        const speed = parseFloat(wrapper.dataset.speed || "1");
        gsap.to(wrapper, {
          y: -1000 * speed, // Move up significantly while scrolling
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[180vh] w-full overflow-hidden bg-background z-30">
      {/* Background Typography pinned to center via sticky */}
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none opacity-5 w-full">
        <h2 className="text-[20vw] font-black uppercase tracking-tighter mix-blend-overlay">Gallery</h2>
      </div>

      {/* Positioned Images - We remove `animate` and let user freely drag */}

      {/* TOP */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[240px] md:w-[300px] aspect-[4/5] float-wrapper z-20" data-speed="1.5">
        <motion.div
          drag dragConstraints={{ top: -150, bottom: 150, left: -200, right: 200 }} dragElastic={0.1}
          whileHover={{ scale: 1.02 }} whileDrag={{ scale: 1.1, rotate: -2, zIndex: 50, cursor: "grabbing" }}
          className="w-full h-full cursor-grab overflow-hidden rounded-[30px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80" alt="Top" className="w-full h-full object-cover pointer-events-none" />
        </motion.div>
      </div>

      {/* LEFT */}
      <div className="absolute top-[75%] left-[5%] md:left-[10%] w-[280px] md:w-[350px] aspect-[4/5] float-wrapper z-10" data-speed="2.2">
        <motion.div
          drag dragConstraints={{ top: -150, bottom: 150, left: -200, right: 200 }} dragElastic={0.1}
          whileHover={{ scale: 1.02 }} whileDrag={{ scale: 1.1, rotate: 3, zIndex: 50, cursor: "grabbing" }}
          className="w-full h-full cursor-grab overflow-hidden rounded-[30px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Left" className="w-full h-full object-cover pointer-events-none" />
        </motion.div>
      </div>

      {/* CENTER */}
      <div className="absolute top-[75%] left-[50%] -translate-x-1/2 w-[320px] md:w-[450px] aspect-video float-wrapper z-30" data-speed="1.2">
        <motion.div
          drag dragConstraints={{ top: -150, bottom: 150, left: -200, right: 200 }} dragElastic={0.1}
          whileHover={{ scale: 1.02 }} whileDrag={{ scale: 1.1, rotate: -1, zIndex: 50, cursor: "grabbing" }}
          className="w-full h-full cursor-grab overflow-hidden rounded-[30px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-zinc-900"
        >
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80" alt="Center" className="w-full h-full object-cover pointer-events-none opacity-90" />
        </motion.div>
      </div>

      {/* RIGHT */}
      <div className="absolute top-[70%] right-[5%] md:right-[10%] w-[250px] md:w-[320px] aspect-[3/4] float-wrapper z-20" data-speed="1.8">
        <motion.div
          drag dragConstraints={{ top: -150, bottom: 150, left: -200, right: 200 }} dragElastic={0.1}
          whileHover={{ scale: 1.02 }} whileDrag={{ scale: 1.1, rotate: 4, zIndex: 50, cursor: "grabbing" }}
          className="w-full h-full cursor-grab overflow-hidden rounded-[30px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" alt="Right" className="w-full h-full object-cover pointer-events-none" />
        </motion.div>
      </div>

      {/* BOTTOM LEFT */}
      <div className="absolute top-[100%] left-[20%] -translate-x-1/2 w-[240px] md:w-[300px] aspect-[4/5] float-wrapper z-20" data-speed="1.5">
        <motion.div
          drag dragConstraints={{ top: -150, bottom: 150, left: -200, right: 200 }} dragElastic={0.1}
          whileHover={{ scale: 1.02 }} whileDrag={{ scale: 1.1, rotate: -2, zIndex: 50, cursor: "grabbing" }}
          className="w-full h-full cursor-grab overflow-hidden rounded-[30px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80" alt="Top" className="w-full h-full object-cover pointer-events-none" />
        </motion.div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute top-[100%] right-[0%] -translate-x-1/2 w-[240px] md:w-[300px] aspect-[4/5] float-wrapper z-20" data-speed="1.5">
        <motion.div
          drag dragConstraints={{ top: -150, bottom: 150, left: -200, right: 200 }} dragElastic={0.1}
          whileHover={{ scale: 1.02 }} whileDrag={{ scale: 1.1, rotate: -2, zIndex: 50, cursor: "grabbing" }}
          className="w-full h-full cursor-grab overflow-hidden rounded-[30px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80" alt="Top" className="w-full h-full object-cover pointer-events-none" />
        </motion.div>
      </div>

      {/* BOTTOM */}
      <div className="absolute top-[90%] left-[50%] -translate-x-1/2 w-[300px] md:w-[400px] aspect-square float-wrapper z-10" data-speed="0.9">
        <motion.div
          drag dragConstraints={{ top: -150, bottom: 150, left: -200, right: 200 }} dragElastic={0.1}
          whileHover={{ scale: 1.02 }} whileDrag={{ scale: 1.1, rotate: -3, zIndex: 50, cursor: "grabbing" }}
          className="w-full h-full cursor-grab overflow-hidden rounded-[30px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <img src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80" alt="Bottom" className="w-full h-full object-cover pointer-events-none" />
        </motion.div>
      </div>

      {/* Overlay gradient to smooth edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent h-40 top-0 z-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent h-40 bottom-0 z-40 mt-auto pointer-events-none" />
    </section>
  );
}

function LightModeSection({ setGlobalTheme }: { setGlobalTheme: (theme: 'dark' | 'light') => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 60%", // when top of section hits 60% down the viewport
        onEnter: () => setGlobalTheme('light'),
        onLeaveBack: () => setGlobalTheme('dark'),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [setGlobalTheme]);

  return (
    <section ref={sectionRef} className="py-40 md:py-60 px-8 md:px-20 relative z-30 transition-colors duration-1000">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <RevealLine>
          <span className="text-current font-mono text-xs uppercase tracking-[0.3em] opacity-40 mb-8 block">The Architecture</span>
        </RevealLine>
        <RevealLine delay={0.1}>
          <h2 className="text-[clamp(3rem,6vw,6rem)] font-black uppercase tracking-tighter leading-none mb-12">
            Minimalism <br />
            <span className="font-satoshi italic font-normal opacity-50">is complex.</span>
          </h2>
        </RevealLine>
        <RevealLine delay={0.2}>
          <p className="text-xl md:text-2xl font-medium opacity-60 max-w-2xl leading-relaxed">
            Stripping away the noise requires a robust technical foundation. We utilized edge routing and native compiled animations to ensure 60fps performance across 99% of devices.
          </p>
        </RevealLine>
      </div>
    </section>
  );
}

function CenteredGrowthSection({ setGlobalTheme }: { setGlobalTheme: (theme: 'dark' | 'light') => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%", // Longer pin for content reveal
          pin: true,
          scrub: 1,
          onEnter: () => setGlobalTheme('dark'),
          onLeaveBack: () => setGlobalTheme('light'),
        }
      });

      tl.to(imageRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        ease: "none",
        duration: 1
      })
        .to(ctaContentRef.current, {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.4
        }, "-=0.3"); // Fade in during the last 30% of growth
    }, containerRef);
    return () => ctx.revert();
  }, [setGlobalTheme]);

  return (
    <section ref={containerRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden z-30">
      <div
        ref={imageRef}
        className="w-[30vw] md:w-[20vw] aspect-[4/5] rounded-[24px] overflow-hidden relative shadow-2xl"
      >
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
          alt="Center Growth"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Integrated CTA Content */}
        <div
          ref={ctaContentRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 opacity-0 translate-y-20 pointer-events-auto"
        >
          <h2 className="text-[clamp(3.5rem,10vw,12rem)] font-black uppercase tracking-tighter leading-[0.8] mb-12 relative group cursor-pointer overflow-hidden">
            <motion.div
              initial="initial"
              whileHover="hovered"
              className="relative block overflow-hidden whitespace-nowrap"
            >
              <div>
                {"Let's Talk".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    variants={{
                      initial: { y: 0 },
                      hovered: { y: "-100%" },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: i * 0.02,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
              <div className="absolute inset-0">
                {"Let's Talk".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block text-primary italic font-satoshi font-normal"
                    variants={{
                      initial: { y: "100%" },
                      hovered: { y: 0 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: i * 0.02,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </h2>

          <Link href="/contact" className="group inline-flex items-center gap-4 rounded-full bg-white px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-black transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105 active:scale-95">
            Start Project
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}




// ─── STRATEGY & APPROACH ──────────────────────────────────────────────────

const strategyPillars = [
  {
    num: "01",
    title: ["Research", "& Insights"],
    tagline: "Know before you act",
    color: "#7c3aed",
    items: [
      "Competitor landscape mapping",
      "Audience behavior & intent signals",
      "Platform-specific performance data",
      "Content gap & opportunity analysis",
    ],
  },
  {
    num: "02",
    title: ["Strategic", "Direction"],
    tagline: "Purpose behind every decision",
    color: "#f97316",
    items: [
      "Full-funnel strategy architecture",
      "Content direction & messaging pillars",
      "UX philosophy & journey mapping",
      "Brand positioning & differentiation",
    ],
  },
  {
    num: "03",
    title: ["Execution", "Plan"],
    tagline: "Precision at every sprint",
    color: "#10b981",
    items: [
      "Technology stack selection",
      "Sprint-based delivery roadmap",
      "KPI framework & measurement plan",
      "Risk mitigation & iteration loops",
    ],
  },
];

function StrategySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 70,
        opacity: 0,
        duration: 1.3,
        ease: "power4.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 90%" },
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        // Card slide-up reveal
        gsap.from(card, {
          y: 70,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: { trigger: card, start: "top 98%" },
        });
        // Accent line draws in
        const line = card.querySelector(".s-accent-line");
        if (line) {
          gsap.from(line, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.2,
            ease: "expo.out",
            delay: i * 0.12 + 0.15,
            scrollTrigger: { trigger: card, start: "top 92%" },
          });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-30 bg-background px-8 md:px-20 py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/3 w-[600px] h-[600px] bg-violet-500/[0.04] rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/[0.03] rounded-full blur-[120px]" />

      <div ref={headingRef} className="flex flex-col items-center text-center mb-20 max-w-5xl mx-auto">
        <h2 className="text-[clamp(2.2rem,4.5vw,4.5rem)] font-black uppercase tracking-tighter leading-none mb-6">
          Strategy &amp; <span className="font-satoshi italic font-normal text-white/25">Approach.</span>
        </h2>
        <p className="text-white/40 text-base md:text-lg max-w-xl leading-relaxed">
          This is where most agencies fail. We don&apos;t skip depth — every decision is traceable back to data, intent, and craft.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {strategyPillars.map((pillar, i) => (
          <div
            key={pillar.num}
            ref={(el) => { cardsRef.current[i] = el; }}
            className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 cursor-default transition-all duration-500 hover:bg-white/[0.04] overflow-hidden"
          >
            {/* Top accent line draws in on scroll */}
            <div
              className="s-accent-line absolute top-0 left-0 right-0 h-[1.5px]"
              style={{ backgroundColor: pillar.color }}
            />
            {/* Top glow */}
            <div
              className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"
              style={{ backgroundColor: pillar.color }}
            />
            {/* Bottom glow */}
            <div
              className="pointer-events-none absolute -bottom-12 -right-12 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
              style={{ backgroundColor: pillar.color }}
            />

            {/* Number + tagline */}
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-[10px] tracking-[0.35em] text-white/20">{pillar.num}</span>
              <span
                className="text-[8px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ borderColor: `${pillar.color}50`, color: pillar.color }}
              >
                {pillar.tagline}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[clamp(1.4rem,2vw,1.9rem)] font-black uppercase tracking-tight mb-6 leading-tight text-white/80 group-hover:text-white transition-colors duration-500">
              {pillar.title.map((line, idx) => <span key={idx} className="block">{line}</span>)}
            </h3>

            {/* Divider expands on hover */}
            <div
              className="w-8 h-px mb-6 transition-all duration-500 group-hover:w-16"
              style={{ backgroundColor: `${pillar.color}70` }}
            />

            {/* Items */}
            <ul className="space-y-3.5">
              {pillar.items.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 text-[13px] text-white/30 group-hover:text-white/60 transition-colors duration-300"
                  style={{ transitionDelay: `${j * 55}ms` }}
                >
                  <span
                    className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: pillar.color, opacity: 0.65 }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── EXECUTION BREAKDOWN ─────────────────────────────────────────────────────

const executionModules = [
  {
    num: "01",
    service: "Website / UI-UX",
    tag: "Design & Dev",
    color: "#7c3aed",
    items: [
      "Wireframes → Final UI delivery",
      "UX audit & improvement mapping",
      "Core Web Vitals performance pass",
      "Before → After transformation audit",
    ],
  },
  {
    num: "02",
    service: "Performance Marketing",
    tag: "Paid Acquisition",
    color: "#f97316",
    items: [
      "Full-funnel campaign architecture",
      "Ad creative direction & A/B testing",
      "Retargeting & lookalike audiences",
      "ROAS-driven budget allocation",
    ],
  },
  {
    num: "03",
    service: "Content & Social",
    tag: "Organic Growth",
    color: "#ec4899",
    items: [
      "Content pillar strategy (4 pillars)",
      "Visual direction & brand voice guide",
      "Platform-native posting cadence",
      "Engagement loop & community design",
    ],
  },
  {
    num: "04",
    service: "Automation & Tech",
    tag: "Systems & Stack",
    color: "#0ea5e9",
    items: [
      "CRM & email workflow architecture",
      "Tool stack selection & integration",
      "Lead nurturing sequence design",
      "Reporting dashboards & live alerts",
    ],
  },
];

function ExecutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 70,
        opacity: 0,
        duration: 1.3,
        ease: "power4.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 90%" },
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          x: i % 2 === 0 ? -60 : 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: Math.floor(i / 2) * 0.1,
          scrollTrigger: { trigger: card, start: "top 98%" },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-30 bg-background px-8 md:px-20 py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/[0.03] rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/[0.03] rounded-full blur-[120px]" />

      <div ref={headingRef} className="flex flex-col items-center text-center mb-20 max-w-5xl mx-auto">
        <h2 className="text-[clamp(2.2rem,4.5vw,4.5rem)] font-black uppercase tracking-tighter leading-none mb-6">
          Execution <span className="font-satoshi italic font-normal text-white/25">Breakdown.</span>
        </h2>
        <p className="text-white/40 text-base md:text-lg max-w-xl leading-relaxed">
          Modular delivery across every service layer — each engineered for traceable, measurable impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
        {executionModules.map((mod, i) => (
          <div
            key={mod.num}
            ref={(el) => { cardsRef.current[i] = el; }}
            className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 cursor-default transition-all duration-500 hover:border-white/[0.13] hover:bg-white/[0.03] overflow-hidden"
          >
            {/* Top-left glow on hover */}
            <div
              className="pointer-events-none absolute -top-16 -left-16 w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-700"
              style={{ backgroundColor: mod.color }}
            />
            {/* Bottom-right glow on hover */}
            <div
              className="pointer-events-none absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
              style={{ backgroundColor: mod.color }}
            />

            {/* Large ghost number + tag */}
            <div className="flex items-start justify-between mb-6">
              <span className="font-mono text-[52px] font-black leading-none text-white/[0.04] group-hover:text-white/[0.09] transition-colors duration-500 select-none -mt-2">
                {mod.num}
              </span>
              <span
                className="mt-2 text-[9px] font-mono uppercase tracking-[0.25em] px-3 py-1.5 rounded-full border flex-shrink-0"
                style={{ borderColor: `${mod.color}40`, color: `${mod.color}CC` }}
              >
                {mod.tag}
              </span>
            </div>

            {/* Service name */}
            <h3 className="text-[clamp(1.2rem,2vw,1.7rem)] font-black uppercase tracking-tight mb-5 text-white leading-tight">
              {mod.service}
            </h3>

            {/* Divider draws in on hover */}
            <div
              className="h-px w-full mb-6 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
              style={{ backgroundColor: `${mod.color}40` }}
            />

            {/* Items */}
            <ul className="space-y-3">
              {mod.items.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 text-[13px] text-white/30 group-hover:text-white/60 transition-colors duration-300"
                  style={{ transitionDelay: `${j * 60}ms` }}
                >
                  <span
                    className="mt-[5px] w-1 h-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: mod.color, opacity: 0.75 }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Bottom shimmer on hover */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(90deg, transparent, ${mod.color}60, transparent)` }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}


// ─── TIMELINE SECTION ────────────────────────────────────────────────────────

const timelineData = [
  {
    weeks: "Week 1–2",
    title: "Research & Planning",
    description: "Deep dive into the spatial tech landscape, audience mapping, and architecting the core user journey.",
    tags: ["Strategy", "UX Design"]
  },
  {
    weeks: "Week 3–5",
    title: "Design & Development",
    description: "Translating insights into high-fidelity components. Implementing the WebGL core and organic physics.",
    tags: ["WebGL", "Next.js", "Three.js"]
  },
  {
    weeks: "Week 6–12",
    title: "Execution & Optimization",
    description: "Scaling the platform, running performance audits, and executing the cross-channel growth campaign.",
    tags: ["Growth", "SEO", "Performance"]
  },
];

function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Growing center line
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            end: "bottom 80%",
            scrub: true,
          }
        }
      );

      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.from(item, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative z-30 bg-white px-8 md:px-20 py-32 overflow-hidden text-black">
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-black uppercase tracking-tighter leading-none mb-6">
            Project <span className="font-satoshi italic font-normal text-black/20">Timeline.</span>
          </h2>
          <p className="text-black/60 text-base md:text-lg max-w-xl leading-relaxed">
            How we moved from raw concept to a high-performance digital ecosystem in 12 weeks.
          </p>
        </div>

        {/* The Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-black/10 -translate-x-1/2 overflow-hidden origin-top" ref={lineRef}>
            <div className="absolute inset-0 bg-primary" />
          </div>

          <div className="space-y-24">
            {timelineData.map((item, i) => (
              <div
                key={i}
                ref={(el) => { itemsRef.current[i] = el; }}
                className={`relative flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Visual Connector Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-white -translate-x-1/2 z-10" />

                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-24 text-left md:text-right' : 'md:pl-24 text-left'}`}>
                  <span className="text-primary font-mono text-sm tracking-widest block mb-2">{item.weeks}</span>
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-black mb-4">
                    {item.title}
                  </h3>
                  <p className="text-black/50 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                    {item.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 mt-6 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    {item.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full border border-black/10 text-[10px] font-mono uppercase tracking-widest text-black/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── RESULTS SECTION ────────────────────────────────────────────────────────

const resultsData = [
  { label: "Revenue Growth", value: "+142%", suffix: "" },
  { label: "Return on Ad Spend", value: "8.4", suffix: "x" },
  { label: "Conversion Rate", value: "3.2", suffix: "%" },
  { label: "Lead volume", value: "+210%", suffix: "" },
];

function ResultsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      metricsRef.current.forEach((metric, i) => {
        if (!metric) return;
        const targetValue = resultsData[i].value;
        const numValue = parseFloat(targetValue.replace(/[+%,]/g, ''));
        const isPercentage = targetValue.includes('%');
        const isPlus = targetValue.includes('+');

        gsap.from(metric, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: { trigger: metric, start: "top 90%" }
        });

        const counterObj = { value: 0 };
        gsap.to(counterObj, {
          value: numValue,
          duration: 2.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: metric,
            start: "top 85%",
          },
          onUpdate: () => {
            const displayValue = counterObj.value.toLocaleString(undefined, {
              minimumFractionDigits: numValue % 1 === 0 ? 0 : 1,
              maximumFractionDigits: 1
            });
            const textEl = metric.querySelector('.metric-value');
            if (textEl) {
              textEl.textContent = `${isPlus ? '+' : ''}${displayValue}${resultsData[i].suffix}${isPercentage ? '%' : ''}`;
            }
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative z-30 bg-white px-8 md:px-20 py-32 h-screen overflow-hidden text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-black uppercase tracking-tighter leading-none mb-8">
            Measured <span className="font-satoshi italic font-normal text-black/30">Impact.</span>
          </h2>
          <div className="w-24 h-px bg-black/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {resultsData.map((item, i) => (
            <div
              key={i}
              ref={(el) => { metricsRef.current[i] = el; }}
              className="group relative flex flex-col items-center text-center p-8 bg-zinc-100 border border-black/[0.08] rounded-3xl shadow-xl shadow-black/[0.02] hover:bg-white hover:border-black/10 transition-all duration-500"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40 mb-4">
                {item.label}
              </span>
              <div className="metric-value text-[clamp(2.5rem,4vw,4.5rem)] font-black tracking-tighter leading-none mb-2">
                0
              </div>
              <div className="w-6 h-px bg-black/10 group-hover:w-12 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ─── RELATED PROJECTS SECTION ──────────────────────────────────────────────

const relatedProjects = [
  {
    title: "Zenith Space Hub",
    industry: "Spatial Architecture",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    link: "/showcase/zenith"
  },
  {
    title: "Etheris Platform",
    industry: "Metaverse Systems",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    link: "/showcase/etheris"
  }
];

function RelatedProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const img = card.querySelector(".rp-img");
        const mask = card.querySelector(".rp-mask");
        const content = card.querySelector(".rp-content");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
          }
        });

        tl.fromTo(mask,
          { clipPath: "inset(0% 100% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.0, ease: "expo.inOut" }
        )
          .fromTo(img,
            { scale: 1.4 },
            { scale: 1, duration: 1.0, ease: "expo.inOut" },
            0
          )
          .fromTo(content,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.6"
          );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-30 bg-white px-8 md:px-20 min-h-screen flex items-center overflow-hidden text-black py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl text-left">
            <h2 className="text-[clamp(2.2rem,4.5vw,5rem)] font-black uppercase tracking-tighter leading-none">
              Explore <span className="font-satoshi italic font-normal text-black/30">Related.</span>
            </h2>
          </div>
          <Link href="/portfolio" className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] pb-2 border-b border-black/10 hover:border-black transition-colors">
            View All Projects
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 md:gap-12">
          {relatedProjects.map((project, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`group relative flex flex-col bg-zinc-100 border border-black/[0.08] rounded-[40px] p-4 pb-10 shadow-2xl shadow-black/[0.03] transition-all duration-500 hover:bg-white hover:border-black/10 hover:shadow-2xl hover:shadow-black/8 ${i === 1 ? 'md:mt-12' : ''}`}
            >
              <Link href={project.link} className="block relative aspect-video overflow-hidden rounded-[30px] rp-mask cursor-pointer">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <img src={project.image} alt={project.title} className="rp-img w-full h-full object-cover" />
                </motion.div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* View button floating on hover */}
                <div className="absolute bottom-6 right-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </Link>

              <div className="rp-content mt-10 px-6 text-left">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40 mb-3 block">
                  {project.industry}
                </span>
                <h3 className="text-3xl font-black uppercase tracking-tight text-black group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-4 text-black/50 text-sm font-medium leading-relaxed max-w-sm">
                  Pushing the boundaries of digital space with precision and immersive design.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────



export default function ShowcasePage() {
  const bgRef = useRef<HTMLDivElement>(null);

  // Set the global theme for this page only, controlling the background Fixed Wrapper
  // and body text color to avoid messing with other Next.js routes.
  const setGlobalTheme = (theme: 'dark' | 'light') => {
    if (!bgRef.current) return;
    if (theme === 'light') {
      gsap.to(bgRef.current, { backgroundColor: "#ffffff", duration: 0.8, ease: "power2.inOut" });
      gsap.to(document.body, { color: "#000000", duration: 0.8, ease: "power2.inOut" });
    } else {
      gsap.to(bgRef.current, { backgroundColor: "#030303", duration: 0.8, ease: "power2.inOut" });
      gsap.to(document.body, { color: "#f4f4f5", duration: 0.8, ease: "power2.inOut" });
    }
  };

  // Reset body color on unmount just in case
  useEffect(() => {
    signalProjectPageReady();
    return () => {
      gsap.set(document.body, { color: "#f4f4f5", backgroundColor: "#030303" });
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* 
        Fixed Background Wrapper.
        Instead of animating `body.backgroundColor`, we animate this div.
        Sections with `bg-background` are opaque, and sections without 
        will reveal this changing background layer. 
      */}
      <div
        ref={bgRef}
        className="fixed inset-0 z-0 pointer-events-none transition-colors"
        style={{ backgroundColor: "#030303" }}
      />

      {/* Main Content Space - z-index higher than fixed BG */}
      <div className="relative z-10">
        <HeroSection />
        <ProjectTableSection />
        <DescriptionSection />
        <StrategySection />
        <ExecutionSection />
        <FloatingGallery />
        <LightModeSection setGlobalTheme={setGlobalTheme} />
        <TimelineSection />
        <ResultsSection />
        <RelatedProjectsSection />
        <CenteredGrowthSection setGlobalTheme={setGlobalTheme} />
      </div>
    </div>
  );
}
