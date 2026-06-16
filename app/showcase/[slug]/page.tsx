"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { createContext, useContext, use } from "react";
import { projectsData, ProjectShowcase } from "@/constants/showcase";

const ProjectContext = createContext<ProjectShowcase | null>(null);
export const useProject = () => {
  const ctx = useContext(ProjectContext);
  if (!ctx) throw new Error("Missing ProjectContext");
  return ctx;
};

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
  const project = useProject();
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
          src={project.hero.bgImage}
          alt="Hero Project"
          className="w-full h-full object-cover origin-center scale-110"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Left Text */}
      <div ref={textRef} className="w-full md:w-1/2 px-8 md:px-20 z-10 relative">
        <RevealLine>
          <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-6 block mt-8">{project.hero.tagLine}</span>
        </RevealLine>
        <RevealLine delay={0.1}>
          <h1 className="text-[clamp(3rem,6vw,7rem)] font-black uppercase tracking-tighter leading-[0.9]">
            {project.hero.titleFirstPart}<br /><span className="font-satoshi italic font-normal text-white/50">{project.hero.titleSecondPart}</span>
          </h1>
        </RevealLine>
        <RevealLine delay={0.2} className="mt-8">
          <p className="max-w-md text-foreground/60 text-lg">
            {project.hero.summary}
          </p>
        </RevealLine>

        <div className="flex items-start gap-10 mt-10 border-t border-white/20 pt-10">
          <RevealLine delay={0.35} className="mr-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center p-3 border border-white/10 shadow-2xl backdrop-blur-sm">
              <img
                src={project.hero.clientLogoBase64}
                alt="SpaceX Logo"
                className="w-full h-full object-contain opacity-80"
              />
            </div>
          </RevealLine>

          <div className="grid grid-cols-2 gap-8 max-w-xs">
            <div>
              <RevealLine delay={0.4}>
                <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/60 block mb-2">Client</span>
              </RevealLine>
              <RevealLine delay={0.5}>
                <span className="text-sm uppercase font-bold tracking-widest text-white">{project.details.client}</span>
              </RevealLine>
            </div>
            <div>
              <RevealLine delay={0.45}>
                <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/60 block mb-2">Industry</span>
              </RevealLine>
              <RevealLine delay={0.55}>
                <span className="text-sm uppercase font-bold tracking-widest text-white">{project.details.industry}</span>
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



type RowRef = HTMLDivElement | null;

function ProjectTableSection() {
  const project = useProject();
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
          {project.details.client}
        </span>
      ),
    },
    {
      label: "Industry",
      value: (
        <span className="text-white/70 font-mono text-sm uppercase tracking-[0.2em]">
          {project.details.industry}
        </span>
      ),
    },
    {
      label: "Services Delivered",
      value: (
        <div className="flex flex-wrap gap-2">
          {project.details.services.map((s) => (
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
          {project.details.startDate} - {project.details.endDate}
        </span>
      ),
    },
    {
      label: "Duration",
      value: (
        <span className="text-primary font-black uppercase tracking-widest text-sm">
          {project.details.duration}
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
            Scope &amp; <span className="font-satoshi italic font-normal text-white/25">Deliverables</span>
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
                  className="text-[12px] font-mono uppercase tracking-[0.3em] text-white/60
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
  const project = useProject();
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

  const text = project.problemStatement;
  const words = text.split(" ");

  return (
    <section ref={containerRef} className="h-screen w-full flex flex-col items-center justify-center px-8 md:px-20 relative z-30 bg-background gap-10">

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[350px] bg-violet-600/5 rounded-full blur-[110px]" />

      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center mb-14">
        <h2 className="text-[clamp(2.2rem,4.5vw,4.5rem)] font-black uppercase tracking-tighter leading-none">
          Problem <span className="font-satoshi italic font-normal text-white/25">Statement</span>
        </h2>
      </div>
      {/* Animated word reveal */}
      <div className="max-w-4/5 w-full">
        <p className="text-[clamp(1rem,2vw,1.8rem)] font-black uppercase text-justify tracking-tighter leading-[1.1] w-full">
          {words.map((word, i) => (
            <React.Fragment key={i}>
              <span className="desc-word text-white/10 transition-colors duration-300 inline-block">
                {word}
              </span>
              {" "}
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}

// ─── DYNAMIC-ASPECT GALLERY IMAGE ────────────────────────────────────────────

function useImageOrientation(src: string): "landscape" | "portrait" | "square" | null {
  const [orientation, setOrientation] = React.useState<"landscape" | "portrait" | "square" | null>(null);
  useEffect(() => {
    if (!src) return;
    const img = new window.Image();
    img.onload = () => {
      const { naturalWidth: w, naturalHeight: h } = img;
      if (w > h * 1.1) setOrientation("landscape");
      else if (h > w * 1.1) setOrientation("portrait");
      else setOrientation("square");
    };
    img.src = src;
  }, [src]);
  return orientation;
}

function GalleryCard({
  src,
  alt,
  wrapperClass,
  speed,
  rotate = 0,
  zIndex = "z-20",
  landscapeOffset,
}: {
  src: string;
  alt: string;
  wrapperClass: string;
  speed: string;
  rotate?: number;
  zIndex?: string;
  landscapeOffset?: { left?: string; right?: string };
}) {
  const orientation = useImageOrientation(src);

  // Aspect ratios: landscape → 16/9 (slightly bigger), portrait → 4/5, square → 1/1
  const aspectStyle: React.CSSProperties =
    orientation === "landscape"
      ? { aspectRatio: "16/9", width: "clamp(300px, 32vw, 450px)" }
      : orientation === "square"
      ? { aspectRatio: "1/1" }
      : { aspectRatio: "4/5" }; // portrait or loading

  if (orientation === "landscape" && landscapeOffset) {
    if (landscapeOffset.left) aspectStyle.marginLeft = landscapeOffset.left;
    if (landscapeOffset.right) aspectStyle.marginRight = landscapeOffset.right;
  }

  return (
    <div className={`absolute float-wrapper ${zIndex} ${wrapperClass}`} data-speed={speed} style={aspectStyle}>
      <motion.div
        drag
        dragConstraints={{ top: -150, bottom: 150, left: -200, right: 200 }}
        dragElastic={0.1}
        whileHover={{ scale: 1.02 }}
        whileDrag={{ scale: 1.1, rotate, zIndex: 50, cursor: "grabbing" }}
        className="w-full h-full cursor-grab overflow-hidden rounded-[30px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        <img src={src} alt={alt} className="w-full h-full object-cover pointer-events-none" />
      </motion.div>
    </div>
  );
}

function FloatingGallery() {
  const project = useProject();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const wrappers = gsap.utils.toArray<HTMLElement>(".float-wrapper");
      wrappers.forEach((wrapper) => {
        const speed = parseFloat(wrapper.dataset.speed || "1");
        gsap.to(wrapper, {
          y: -1000 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[180vh] w-full overflow-hidden bg-background z-30">
      {/* Background watermark */}
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none opacity-5 w-full">
        <h2 className="text-[20vw] font-black uppercase tracking-tighter mix-blend-overlay">Gallery</h2>
      </div>

      {/* TOP — centered */}
      <GalleryCard
        src={project.gallery.top}
        alt="Top"
        wrapperClass="top-[40%] left-[50%] -translate-x-1/2 w-[240px] md:w-[300px]"
        speed="1.5"
        rotate={-2}
        zIndex="z-20"
      />

      {/* LEFT */}
      <GalleryCard
        src={project.gallery.left}
        alt="Left"
        wrapperClass="top-[75%] left-[5%] md:left-[10%] w-[280px] md:w-[350px]"
        landscapeOffset={{ left: "-8vw" }}
        speed="2.2"
        rotate={3}
        zIndex="z-10"
      />

      {/* CENTER */}
      <GalleryCard
        src={project.gallery.center}
        alt="Center"
        wrapperClass="top-[65%] left-[50%] -translate-x-1/2 w-[260px] md:w-[320px]"
        speed="1.2"
        rotate={-1}
        zIndex="z-30"
      />

      {/* RIGHT */}
      <GalleryCard
        src={project.gallery.right}
        alt="Right"
        wrapperClass="top-[70%] right-[5%] md:right-[10%] w-[250px] md:w-[320px]"
        landscapeOffset={{ right: "-8vw" }}
        speed="1.8"
        rotate={4}
        zIndex="z-20"
      />

      {/* BOTTOM LEFT */}
      <GalleryCard
        src={project.gallery.bottomLeft}
        alt="Bottom Left"
        wrapperClass="top-[100%] left-[20%] -translate-x-1/2 w-[240px] md:w-[300px]"
        landscapeOffset={{ left: "-4vw" }}
        speed="1.5"
        rotate={-2}
        zIndex="z-20"
      />

      {/* BOTTOM RIGHT */}
      <GalleryCard
        src={project.gallery.bottomRight}
        alt="Bottom Right"
        wrapperClass="top-[100%] right-[0%] -translate-x-1/2 w-[240px] md:w-[300px]"
        landscapeOffset={{ right: "-14vw" }}
        speed="1.5"
        rotate={2}
        zIndex="z-20"
      />

      {/* BOTTOM — centered */}
      <GalleryCard
        src={project.gallery.bottom}
        alt="Bottom"
        wrapperClass="top-[90%] left-[50%] -translate-x-1/2 w-[300px] md:w-[400px]"
        speed="0.9"
        rotate={-3}
        zIndex="z-10"
      />

      {/* Edge fade-outs */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent h-40 top-0 z-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent h-40 bottom-0 z-40 mt-auto pointer-events-none" />
    </section>
  );
}

// ─── TIMELINE SECTION ────────────────────────────────────────────────────────




function LightModeSection({ setGlobalTheme }: { setGlobalTheme: (theme: 'dark' | 'light') => void }) {
  const project = useProject();
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    <section ref={sectionRef} className="pt-30 px-8 md:px-20 relative z-30 transition-colors duration-1000">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <RevealLine>
          <span className="text-current font-mono text-xs uppercase tracking-[0.3em] opacity-40 mb-8 block">The Autopsy</span>
        </RevealLine>
        <RevealLine delay={0.1}>
          <h2 className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-black uppercase tracking-tighter leading-none mb-6">
            How We <span className="font-satoshi italic font-normal text-black/20 px-4">Pulled It Off</span>
          </h2>
        </RevealLine>
        <RevealLine delay={0.2}>
          <p className="text-black/60 text-base md:text-lg max-w-xl leading-relaxed">
            No excuses. No 'the dog ate my code'. Just military-grade execution shipped on time. Deal with it.
          </p>
        </RevealLine>
      </div>
      <div ref={containerRef} className="max-w-6xl mx-auto relative pt-30">
        {/* The Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-black/10 -translate-x-1/2 overflow-hidden origin-top" ref={lineRef}>
            <div className="absolute inset-0 bg-primary" />
          </div>

          <div className="space-y-24">
            {project.execution.map((item, i) => (
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

function CenteredGrowthSection({ setGlobalTheme }: { setGlobalTheme: (theme: 'dark' | 'light') => void }) {
  const project = useProject();
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
          src={project.hero.bgImage}
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
            Click here before your competitor does.
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}




// ─── STRATEGY & APPROACH ──────────────────────────────────────────────────



function StrategySection() {
  const project = useProject();
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
          Strategy &amp; <span className="font-satoshi italic font-normal text-white/25">Approach</span>
        </h2>
        <p className="text-white/40 text-base md:text-lg max-w-xl leading-relaxed">
          This is where most agencies fail. We don&apos;t skip depth — every decision is traceable back to data, intent, and craft.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {project.strategy.map((pillar, i) => (
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



// ─── RESULTS SECTION ────────────────────────────────────────────────────────



function ResultsSection() {
  const project = useProject();
  const containerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      metricsRef.current.forEach((metric, i) => {
        if (!metric) return;
        const targetValue = project.impact[i].value;
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
              textEl.textContent = `${isPlus ? '+' : ''}${displayValue}${project.impact[i].suffix}${isPercentage ? '%' : ''}`;
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
            Measured <span className="font-satoshi italic font-normal text-black/30">Impact</span>
          </h2>
          <div className="w-24 h-px bg-black/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {project.impact.map((item, i) => (
            <div
              key={i}
              ref={(el) => { metricsRef.current[i] = el; }}
              className="group relative flex flex-col items-center text-center p-8 bg-zinc-100 border border-black/[0.08] rounded-3xl shadow-xl shadow-black/[0.02] hover:bg-white hover:border-black/10 transition-all duration-500"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40 mb-4">
                {item.label}
              </span>
              <div className="metric-value text-[clamp(2.5rem,4vw,4.5rem)] group-hover:text-primary transition-colors duration-300 font-black tracking-tighter leading-none mb-2">
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



function RelatedProjectsSection() {
  const project = useProject();
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
              Explore <span className="font-satoshi italic font-normal text-black/30">Related</span>
            </h2>
          </div>
          <Link href="/portfolio" className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] pb-2 border-b border-black/10 hover:border-black transition-colors">
            View All Projects
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 md:gap-12">
          {project.relatedProjects.map((project, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`group relative flex flex-col bg-zinc-100 border border-black/[0.08] rounded-[40px] p-4 pb-10 shadow-2xl shadow-black/[0.03] transition-all duration-500 hover:bg-white hover:border-black/10 hover:shadow-2xl hover:shadow-black/8`}
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
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 block mb-2">
                    {project.category}
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



export default function ShowcasePage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = params instanceof Promise ? use(params) : params;
  const project = projectsData[resolvedParams.slug];

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

  if (!project) return <div className="h-screen w-full flex items-center justify-center bg-black text-white">Project Not Found</div>;

  return (
    <ProjectContext.Provider value={project}>
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
          <FloatingGallery />
          <LightModeSection setGlobalTheme={setGlobalTheme} />
          <ResultsSection />
          <RelatedProjectsSection />
          <CenteredGrowthSection setGlobalTheme={setGlobalTheme} />
        </div>
      </div>
    </ProjectContext.Provider>
  );
}
