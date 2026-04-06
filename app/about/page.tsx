"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
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
  { name: "Manav", role: "Founder / Creative Director", emoji: "🎨" },
  { name: "Ria", role: "Strategy & Growth Lead", emoji: "📈" },
  { name: "Dev", role: "Motion Designer", emoji: "🎬" },
  { name: "Aryan", role: "Full-Stack Developer", emoji: "💻" },
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.12,
      }}
      style={{ perspective: 800, transformStyle: "preserve-3d" }}
      className="group relative cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60 p-8 transition-all duration-500 group-hover:border-primary/30 group-hover:bg-zinc-900/80 group-hover:shadow-[0_0_40px_rgba(0,68,255,0.08)]">
        <div className="mb-6 text-4xl">{member.emoji}</div>
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60">
          {member.role}
        </p>
        <h3 className="mt-2 text-2xl font-black uppercase tracking-tighter">
          {member.name}
        </h3>
        <div className="mt-6 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
      </div>
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
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
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
            {/* 3D tilting story block */}
            <motion.div
              style={{ rotateY: storyRotate }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 p-12 md:p-16"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30 mb-8">
                Story Body
              </p>
              <p className="text-xl md:text-2xl text-foreground/70 font-medium leading-relaxed">
                We saw more small and medium businesses struggle to get noticed —
                not because they weren't good at what they did, but because their
                branding didn't reflect it. So we built Vyce: a creative agency
                that combines strategy, design, video, and tech into one
                seamless experience.
              </p>
            </motion.div>

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
            <FadeIn delay={0.2} className="space-y-8">
              <div className="space-y-3 border-l-2 border-primary/30 pl-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Mission</p>
                <p className="text-lg text-foreground/60 font-medium leading-relaxed">
                  To make powerful branding accessible to every visionary business —
                  not just the big ones.
                </p>
              </div>
              <div className="space-y-3 border-l-2 border-foreground/10 pl-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30">Vision</p>
                <p className="text-lg text-foreground/60 font-medium leading-relaxed">
                  A world where every brand looks as good as the product behind it.
                </p>
              </div>
            </FadeIn>
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
            <FadeIn delay={0.2}>
              <p className="max-w-xs text-sm text-foreground/40 font-medium leading-relaxed">
                The principles we work by — non-negotiable, always.
              </p>
            </FadeIn>
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
                <h2 className="text-5xl md:text-7xl font-playfair font-normal italic text-primary leading-[0.9]">
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
                <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-foreground/30">
                  Why Us
                </span>
                <span className="text-[8rem] font-black tracking-tighter leading-none text-white/10">
                  VYCE
                </span>
                <span className="text-center text-sm text-foreground/30 font-medium leading-relaxed max-w-[240px]">
                  Boutique studio. Relentlessly creative.
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
