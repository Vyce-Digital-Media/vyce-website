"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  useMotionValue,
} from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

// ─── Data ──────────────────────────────────────────────────────────────────

const coreValues = [
  {
    num: "01",
    title: "Growth Over Everything",
    body: "We measure success by your growth, not just by how good the work looks.",
  },
  {
    num: "02",
    title: "Client First. Always.",
    body: "You're not a ticket number. We communicate, we listen, we deliver.",
  },
  {
    num: "03",
    title: "Creativity Loves Strategy",
    body: "Beautiful work that doesn't convert is just decoration. We do both.",
  },
  {
    num: "04",
    title: "No Blending. Ever.",
    body: "We stand up for the right ideas — because safe is the riskiest move.",
  },
];

const teamMembers = [
  {
    name: "Manav",
    role: "Founder / Creative Director",
    image: "/images/team/manav.png",
    bio: "Visionary leader pushing the boundaries of digital narrative and brand strategy."
  },
  {
    name: "Ria",
    role: "Strategy & Growth Lead",
    image: "/images/team/ria.png",
    bio: "Analytic powerhouse focused on scaling brands through data-driven storytelling."
  },
  {
    name: "Dev",
    role: "Motion Designer",
    image: "/images/team/dev.png",
    bio: "Master of movement, bringing static brands to life through cinematic motion design."
  },
  {
    name: "Aryan",
    role: "Full-Stack Developer",
    image: "/images/team/aryan.png",
    bio: "Architect of seamless digital experiences, bridging the gap between design and tech."
  },
];

const whyVyce = [
  "Always invested in your success — not a one-time interaction",
  "Full-stack creativity: strategy, design, and motion under one roof",
  "We move at your pace, always",
  "You're with us from day one — transparent throughout",
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function RevealLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : {}}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TeamCard({
  member,
  index,
}: {
  member: (typeof teamMembers)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // Mouse tracking for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.15,
      }}
      className="group relative h-[600px] w-full cursor-pointer perspective-[1200px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full overflow-hidden rounded-[32px] border border-white/5 bg-zinc-950 transition-all duration-700 group-hover:border-primary/20 group-hover:shadow-[0_40px_80px_-20px_rgba(0,10,30,0.8)]"
      >
        {/* Large Portrait Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Multi-layered Gradients for Editorial Reveal */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background opacity-90" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12">
          <div className="space-y-4">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[9px] font-bold uppercase tracking-[0.5em] text-primary"
              >
                {member.role}
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.h3
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white"
              >
                {member.name}
              </motion.h3>
            </div>

            <div className="mt-6 opacity-0 translate-y-4 transition-all duration-700 group-hover:opacity-60 group-hover:translate-y-0">
              <p className="max-w-[280px] text-xs font-medium leading-relaxed tracking-tight text-white/80 italic font-playfair">
                "{member.bio}"
              </p>
            </div>


          </div>
        </div>

        {/* Floating Aura on Hover */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
      </motion.div>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 0.92]);

  const storyRef = useRef(null);
  const { scrollYProgress: storyScroll } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });
  const storyRotate = useTransform(storyScroll, [0, 1], [4, -4]);

  return (
    <div className="bg-background text-foreground overflow-hidden">

      {/* ── 00. HERO ──────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex h-[90vh] min-h-[640px] flex-col items-center justify-center overflow-hidden"
      >
        {/* Decorative grid lines */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 h-full w-px bg-white"
              style={{ left: `${(i + 1) * (100 / 7)}%` }}
            />
          ))}
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 flex flex-col items-center gap-10 px-6 text-center"
        >
          <FadeIn>
            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/40">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              About VYCE
            </span>
          </FadeIn>

          <div className="space-y-2">
            <RevealLine>
              <h1 className="text-[clamp(2.8rem,8vw,9rem)] font-black uppercase tracking-tighter leading-[0.9]">
                The Story
              </h1>
            </RevealLine>
            <RevealLine delay={0.1}>
              <h1 className="text-[clamp(2.8rem,8vw,9rem)] font-playfair font-normal italic text-primary leading-[0.9]">
                Behind the Brand.
              </h1>
            </RevealLine>
          </div>

          <FadeIn delay={0.3} className="max-w-xl">
            <p className="text-base md:text-lg text-foreground/40 font-medium leading-relaxed">
              This page is all about personality, purpose, and brand — we want a
              reason to trust you before they've seen your portfolio.
            </p>
          </FadeIn>
        </motion.div>
      </section>

      {/* ── 01. NOT AN AGENCY ────────────────────────────────────── */}
      <section className="relative px-6 py-32 md:px-12 lg:px-20 md:py-44">
        <div className="mx-auto max-w-[1600px] grid gap-20 lg:grid-cols-[1fr_1.2fr] items-start">
          <div className="lg:sticky lg:top-40 space-y-6">

            <RevealLine>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mt-22">
                Not an Agency.
              </h2>
            </RevealLine>
            <RevealLine delay={0.08}>
              <h2 className="text-5xl md:text-7xl font-playfair font-normal italic text-primary leading-[0.9]">
                We're Your Brand's Best Decision.
              </h2>
            </RevealLine>
          </div>

          <div className="space-y-12 pt-4 lg:pt-24">
            <FadeIn>
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30">Our Standing</p>
                <p className="text-2xl font-medium text-foreground/60 tracking-wide">
                  Big ideas and bigger results.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30">Description</p>
                <p className="text-xl md:text-2xl text-foreground/70 font-medium leading-relaxed">
                  VYCE was built because we got tired of seeing great businesses
                  with no idea to branding. We set out to fix that — one brand,
                  one website at a time.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-foreground/50 hover:text-primary transition-colors"
              >
                See How We Work
                <span className="h-8 w-8 rounded-full border border-border flex items-center justify-center transition-all group-hover:border-primary group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>

        {/* Pulled from the right: massive faded number */}
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 -translate-x-[-8%] opacity-[0.025] select-none">
          <span className="text-[20rem] font-black leading-none">01</span>
        </div>
      </section>

      {/* ── 02. OUR STORY ───────────────────────────────────────── */}
      <section ref={storyRef} className="relative px-6 py-32 md:px-12 lg:px-20 bg-zinc-950/30 overflow-hidden">
        <div className="mx-auto max-w-[1600px] space-y-20">
          <div>
            <RevealLine className="mt-4">
              <h2 className="text-5xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.9]">
                How it Started
              </h2>
            </RevealLine>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* 3D Midnight Perspective Card */}
            <div className="relative group perspective-[2000px]">
              <motion.div
                style={{
                  rotateY: storyRotate,
                  transformStyle: "preserve-3d",
                }}
                className="relative overflow-hidden rounded-[48px] border border-white/[0.08] bg-gradient-to-br from-[#050a15] to-[#010204] p-12 md:p-20 shadow-[0_50px_100px_-30px_rgba(0,10,30,0.9)] transition-all duration-700"
              >
                {/* 1. Magnetic Reactive Glow (Mouse Tracking Simulation via Gradient) */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--primary-blue)_0%,transparent_50%)] opacity-20 blur-[120px] mix-blend-screen" />
                </div>

                {/* 2. Abstract Geometric Background "Mesh" */}
                <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,transparent_24.5%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_26%,transparent_27%,transparent_74.5%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_76%,transparent_77%),linear-gradient(0deg,transparent_24.5%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_26%,transparent_27%,transparent_74.5%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_76%,transparent_77%)] bg-[size:60px_60px]" />
                </div>

                {/* 3. Main Narrative Content */}
                <motion.div style={{ translateZ: 80 }} className="relative z-10 w-full space-y-12">


                  <div className="space-y-12">
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[1.0] text-white">
                      From <span className="text-primary glow-text transition-all duration-700 group-hover:brightness-125">Static Noise</span> <br />
                      To <span className="font-playfair font-normal italic text-primary/70">Thoughtful Simplicity.</span>
                    </h3>

                    <div className="max-w-xl">
                      <FadeIn delay={0.2}>
                        <p className="text-lg md:text-2xl text-foreground/50 font-medium leading-[1.6] tracking-tight">
                          We saw more brands struggle to get noticed —
                          not because they weren't good, but because their
                          <span className="text-white"> digital presence lacked a core truth.</span>
                        </p>
                      </FadeIn>
                      <FadeIn delay={0.4}>
                        <p className="mt-8 text-lg md:text-2xl text-foreground/50 font-medium leading-[1.6] tracking-tight">
                          So we built Vyce: a studio that combines
                          <span className="text-[#4D96FF] font-bold"> strategic logic </span>
                          with
                          <span className="font-playfair italic text-white/90"> editorial restraint </span>
                          into one cohesive story.
                        </p>
                      </FadeIn>
                    </div>
                  </div>


                </motion.div>

                {/* 4. Active Corner Light Sweep */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-1/2 -left-1/2 w-full h-[200%] bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-[-35deg]"
                />
              </motion.div>

              {/* Unique Outer "Aura" Glow */}
              <div className="absolute -inset-1 rounded-[48px] bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-50 blur-xl transition-all duration-1000 -z-10" />
            </div>

            {/* Scrolling milestones */}
            <div className="space-y-10">
              {[
                { year: "Then", text: "Born from frustration with generic agencies." },
                { year: "Early Days", text: "First clients — brands no one knew about, brands everyone now loves." },
                { year: "Growth", text: "Expanded to video, strategy, and full digital ecosystems." },
                { year: "Now", text: "A boutique powerhouse with global ambitions." },
              ].map((m, i) => (
                <FadeIn key={m.year} delay={i * 0.1}>
                  <div className="group flex items-start gap-8 border-b border-white/5 pb-10 last:border-0 last:pb-0">
                    <span className="font-playfair text-5xl italic text-primary/20 transition-colors group-hover:text-primary/60 leading-none mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-2">{m.year}</p>
                      <p className="text-foreground/50 font-medium leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.025] select-none">
          <span className="text-[20rem] font-black leading-none">02</span>
        </div>
      </section>

      {/* ── 03. MISSION & VISION ─────────────────────────────────── */}
      <section className="relative px-6 py-32 md:px-12 lg:px-20 overflow-hidden">
        <div className="mx-auto max-w-[1600px]">

          <div className="mt-8 grid gap-16 lg:grid-cols-2 items-end">
            <div>
              <RevealLine>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                  Why We Exist
                </h2>
              </RevealLine>
            </div>

          </div>

          {/* Two-card layout */}
          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {[
              { label: "Mission", headline: "Empower every brand to compete at the highest level." },
              { label: "Vision", headline: "A world where ambition and aesthetic always align." },
            ].map((card, i) => (
              <FadeIn key={card.label} delay={i * 0.15}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 to-zinc-900 p-12 transition-all duration-500 hover:border-primary/30">
                  <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-primary/50">{card.label}</p>
                  <p className="mt-6 text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight text-foreground/80">
                    {card.headline}
                  </p>
                  <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/15" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.025] select-none">
          <span className="text-[20rem] font-black leading-none">03</span>
        </div>
      </section>

      {/* ── 04. CORE VALUES ──────────────────────────────────────── */}
      <section className="relative px-6 py-32 md:px-12 lg:px-20 bg-zinc-950/30 overflow-hidden">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24">
            <div>
              <RevealLine className="mt-4">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                  What We Stand For
                </h2>
              </RevealLine>
            </div>

          </div>

          <div className="grid gap-0 divide-y divide-white/5">
            {coreValues.map((v, i) => (
              <FadeIn key={v.num} delay={i * 0.1}>
                <div className="group flex items-start gap-8 py-10 transition-all duration-300 hover:px-4">
                  <span className="font-playfair text-5xl italic text-primary/20 transition-colors duration-500 group-hover:text-primary/80 leading-none mt-1 flex-shrink-0">
                    {v.num}
                  </span>
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 flex-1">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight flex-shrink-0 md:w-64">
                      {v.title}
                    </h3>
                    <p className="text-foreground/40 font-medium leading-relaxed group-hover:text-foreground/70 transition-colors duration-500">
                      {v.body}
                    </p>
                  </div>
                  <div className="hidden md:block h-px flex-shrink-0 w-8 bg-foreground/10 mt-4 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.025] select-none">
          <span className="text-[20rem] font-black leading-none">04</span>
        </div>
      </section>

      {/* ── 05. MEET THE TEAM ────────────────────────────────────── */}
      <section className="relative px-6 py-32 md:px-12 lg:px-20 overflow-hidden">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-20">

            <RevealLine className="mt-4">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                The Humans Behind the Work
              </h2>
            </RevealLine>
            <FadeIn delay={0.2} className="mt-8">
              <p className="max-w-xl text-lg text-foreground/40 font-medium leading-relaxed">
                We're a tight-knit crew of designers, strategists, videographers,
                and developers who genuinely love what we do. Every project gets
                our full attention — no token visitors.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((m, i) => (
              <TeamCard key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.025] select-none">
          <span className="text-[20rem] font-black leading-none">05</span>
        </div>
      </section>

      {/* ── 06. WHY CHOOSE VYCE ──────────────────────────────────── */}
      <section className="relative px-6 py-32 md:px-12 lg:px-20 bg-zinc-950/30 overflow-hidden">
        <div className="mx-auto max-w-[1600px] grid gap-20 lg:grid-cols-2 items-center">
          <div className="space-y-10">
            <div>

              <RevealLine className="mt-4">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                  A Lot of Agencies.
                </h2>
              </RevealLine>
              <RevealLine delay={0.1}>
                <h2 className="text-5xl md:text-7xl pb-2 font-playfair font-normal italic text-primary leading-[0.9]">
                  Only One is You.
                </h2>
              </RevealLine>
            </div>

            <FadeIn delay={0.2} className="space-y-5">
              {whyVyce.map((item, i) => (
                <div key={i} className="group flex items-start gap-5">
                  <span className="mt-1 h-4 w-4 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 transition-colors group-hover:border-primary group-hover:bg-primary/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/60 group-hover:bg-primary" />
                  </span>
                  <p className="text-foreground/50 font-medium leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </FadeIn>

            <FadeIn delay={0.35}>
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 rounded-full bg-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-background transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95"
                >
                  Let's Talk →
                </Link>
              </MagneticButton>
            </FadeIn>
          </div>

          {/* Right: Big typographic number */}
          <FadeIn delay={0.1} className="hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[480px] flex flex-col items-center justify-center">
              <div className="rounded-full border border-white/5 bg-zinc-900/50 w-full h-full flex flex-col items-center justify-center gap-6 p-16">

                <span className="text-[8rem] font-black tracking-tighter leading-none text-white/10">
                  VYCE
                </span>

              </div>
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-[80px] -z-10" />
            </div>
          </FadeIn>
        </div>

        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.025] select-none">
          <span className="text-[20rem] font-black leading-none">06</span>
        </div>
      </section>

    </div>
  );
}
