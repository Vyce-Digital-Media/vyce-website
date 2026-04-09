"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight, CheckCircle2, ChevronDown } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    tagline: "Know before you build.",
    duration: "Week 1–2",
    description:
      "We start by listening — really listening. Stakeholder interviews, brand audits, competitive landscape mapping, and analytics review to surface what's actually happening versus what you assume.",
    details: ["Stakeholder interviews", "Brand & UX audit", "Competitor mapping", "Persona definition"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&h=600&fit=crop&q=80",
    color: "rgba(0,68,255,0.12)",
  },
  {
    step: "02",
    title: "Strategy",
    tagline: "Direction before decoration.",
    duration: "Week 2–4",
    description:
      "We map the entire digital blueprint — user experience flows, information architecture, content hierarchy, and the technical foundation. No guess work. No pivots mid-build.",
    details: ["Information architecture", "UX flow mapping", "Tech stack selection", "Project scoping & SOW"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=600&fit=crop&q=80",
    color: "rgba(255,140,0,0.12)",
  },
  {
    step: "03",
    title: "Design",
    tagline: "Craft meets intention.",
    duration: "Parallel track",
    description:
      "Visual identities, interactive prototypes, motion systems — we craft every pixel with purpose. Working UI weekly, not static PDFs. Stakeholders react to real things.",
    details: ["Visual identity & UI", "Interactive prototypes", "Motion direction", "Design system tokens"],
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=900&h=600&fit=crop&q=80",
    color: "rgba(200,50,255,0.12)",
  },
  {
    step: "04",
    title: "Development",
    tagline: "Code that performs.",
    duration: "Ongoing sprint",
    description:
      "High-performance, accessible, and scalable digital ecosystems built with meticulous attention to detail. Design tokens export to code, and we pair with your engineers on every edge case.",
    details: ["Next.js & TypeScript", "Performance budgets", "Accessibility (WCAG)", "QA & cross-browser"],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&h=600&fit=crop&q=80",
    color: "rgba(0,200,100,0.12)",
  },
  {
    step: "05",
    title: "Launch",
    tagline: "Ship, then sustain.",
    duration: "Final sprint",
    description:
      "Hardening, documentation, and training so your team owns the roadmap. Analytics instrumentation, SEO baselines, and a handoff so clean your engineers will thank us.",
    details: ["Launch QA & hardening", "Analytics setup", "Team training & docs", "Post-launch monitoring"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=600&fit=crop&q=80",
    color: "rgba(255,60,80,0.12)",
  },
];

const faqItems = [
  {
    q: "How long does a typical project take?",
    a: "Most full-brand and web projects run 8–16 weeks. We're direct about timelines in the first conversation — if a 6-week miracle is possible, we'll say so.",
  },
  {
    q: "Do you take on smaller projects?",
    a: "Yes. We offer focused sprints for identity, landing pages, and motion work that don't need the full five-act structure.",
  },
  {
    q: "Can we embed with your existing team?",
    a: "Absolutely — we often embed with product or brand teams, contribute to existing design systems, and document handoffs so internal engineers stay unblocked.",
  },
  {
    q: "What does the weekly cadence look like?",
    a: "Working sessions, async Loom updates, and a shared Figma + Notion workspace. You'll never be waiting on us.",
  },
];

// ─── Primitives ────────────────────────────────────────────────────────────

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

// ─── FAQ Accordion ─────────────────────────────────────────────────────────

function FAQItem({ item, index }: { item: typeof faqItems[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={index * 0.08}>
      <div className={`border-t border-white/[0.07] transition-colors duration-300 ${open ? "border-primary/20" : ""}`}>
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-start justify-between gap-6 py-7 text-left cursor-pointer"
        >
          <span className={`text-base font-semibold leading-snug transition-colors duration-300 md:text-lg ${open ? "text-white" : "text-foreground/60"}`}>
            {item.q}
          </span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-1 flex-shrink-0 transition-colors duration-300 ${open ? "text-primary" : "text-foreground/30"}`}
          >
            <ChevronDown size={18} strokeWidth={1.5} />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-8 text-base leading-relaxed text-foreground/50 font-medium">{item.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

// ─── Step Card ─────────────────────────────────────────────────────────────

function StepCard({ step, index, onHover }: { step: typeof processSteps[0]; index: number; onHover: (id: string | null) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => onHover(step.step)}
      onMouseLeave={() => onHover(null)}
      className="group relative flex flex-col gap-10"
    >
      <div className="flex items-baseline gap-6 leading-none">
        <span className="font-playfair text-6xl text-primary/20 md:text-8xl transition-all duration-700 group-hover:text-primary/40 group-hover:scale-105 leading-none">
          {step.step}
        </span>
        <div className="h-px flex-1 bg-white/[0.06] transition-all duration-700 group-hover:bg-primary/40 group-hover:scale-x-105 origin-left" />
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="space-y-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-3 block">{step.tagline}</span>
            <h3 className="text-3xl font-black uppercase tracking-tighter md:text-5xl lg:text-6xl transition-colors duration-500 group-hover:text-white">
              {step.title}
            </h3>
          </div>

          <p className="max-w-xl text-lg md:text-xl text-foreground/50 leading-relaxed font-medium transition-colors duration-500 group-hover:text-foreground/75">
            {step.description}
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-6">
            {step.details.map((detail) => (
              <div key={detail} className="flex items-center gap-3">
                <CheckCircle2 size={14} className="text-primary/40 transition-colors duration-500 group-hover:text-primary" strokeWidth={2} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30 group-hover:text-foreground/60 transition-colors duration-500">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step Image */}
        <div className="hidden lg:block relative aspect-square overflow-hidden rounded-2xl border border-white/[0.07]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={step.image}
            alt={step.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
            style={{ background: `radial-gradient(circle at center, ${step.color} 0%, transparent 70%)` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function ProcessPage() {
  const heroRef = useRef(null);
  const processRef = useRef<HTMLDivElement>(null);
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 0.92]);

  const { scrollYProgress: lineScroll } = useScroll({ target: processRef, offset: ["start 80%", "end 20%"] });
  const lineScaleY = useTransform(lineScroll, [0, 1], [0, 1]);

  return (
    <div className="bg-background text-foreground overflow-clip">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative flex min-h-[82vh] flex-col items-center justify-center overflow-hidden px-6 py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="absolute top-0 h-full w-px bg-white" style={{ left: `${(i + 1) * (100 / 7)}%` }} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,68,255,0.07)_0%,transparent_65%)]" />

        <motion.div style={{ y: heroY, opacity: heroOpacity, scale: heroScale }} className="relative z-10 flex flex-col items-center gap-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/40">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              How We Work
            </span>
          </FadeIn>
          <div className="space-y-2">
            <RevealLine><h1 className="text-[clamp(3rem,9vw,10rem)] font-black uppercase tracking-tighter leading-[0.88]">The Digital</h1></RevealLine>
            <RevealLine delay={0.1}><h1 className="text-[clamp(3rem,9vw,10rem)] font-playfair font-normal italic text-primary leading-[0.88]">Mastery Process.</h1></RevealLine>
          </div>
          <FadeIn delay={0.3} className="max-w-2xl">
            <p className="text-base md:text-xl text-foreground/40 font-medium leading-relaxed">
              Five deliberate phases — from deep discovery to a clean launch. Refined over a decade so every project ships with clinical precision and creative flair.
            </p>
          </FadeIn>
        </motion.div>

      </section>

      {/* ── INTRO STRIP ───────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn className="border-y border-white/[0.06] py-10">
            <div className="grid grid-cols-3 gap-6 md:grid-cols-5">
              {processSteps.map((s) => (
                <div key={s.step} className="group flex items-center gap-3">
                  <span className="font-mono text-[10px] font-bold text-primary/40 group-hover:text-primary transition-colors duration-300">{s.step}</span>
                  <div className="h-px flex-1 bg-white/[0.06] group-hover:bg-primary/30 transition-colors duration-500" />
                  <span className="hidden md:block text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/25 group-hover:text-foreground/60 transition-colors duration-300">{s.title}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PROCESS STEPS ─────────────────────────────────────────── */}
      <section ref={processRef} className="relative px-6 pt-24 pb-32 md:px-12 lg:px-20 overflow-clip">
        <div className="mx-auto max-w-[1600px] grid gap-24 lg:grid-cols-[1fr_1.2fr] items-start">

          {/* Left Side: Sticky Title & Info */}
          <div className="lg:sticky lg:top-48 lg:h-fit space-y-12">
            <div className="space-y-6">
              <RevealLine>
                <h2 className="text-5xl font-black uppercase tracking-tighter md:text-6xl lg:text-7xl leading-none">
                  The Digital <br />
                  <span className="font-playfair font-normal italic text-primary">Mastery</span> <br />
                  Process
                </h2>
              </RevealLine>
            </div>

            <FadeIn delay={0.2}>
              <p className="max-w-md text-lg leading-relaxed text-foreground/40 font-medium">
                We&apos;ve refined our methodology over a decade to ensure every project is launched with clinical precision and creative flair.
              </p>
            </FadeIn>

            <div className="hidden lg:flex flex-col gap-8">
              {processSteps.map((s) => {
                const isHovered = hoveredStep === s.step;
                return (
                  <div 
                    key={s.step} 
                    className={cn(
                      "flex items-center gap-6 transition-all duration-500",
                      isHovered ? "opacity-100 translate-x-4" : "opacity-20 translate-x-0"
                    )}
                    onMouseEnter={() => setHoveredStep(s.step)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <span className={cn(
                      "text-xs font-bold font-mono transition-colors duration-500",
                      isHovered ? "text-primary scale-110" : "text-foreground"
                    )}>
                      {s.step}
                    </span>
                    <div className={cn(
                      "h-px transition-all duration-500 origin-left",
                      isHovered ? "bg-primary w-24 scale-x-125" : "bg-foreground w-12 opacity-30"
                    )} />
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500",
                      isHovered ? "text-primary translate-x-2 opacity-100" : "text-foreground opacity-0"
                    )}>
                      {s.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Step Progression */}
          <div className="space-y-32 md:space-y-48">
            {processSteps.map((step, index) => (
              <StepCard 
                key={step.step} 
                step={step} 
                index={index} 
                onHover={setHoveredStep} 
              />
            ))}
          </div>
        </div>

        {/* Decorative vertical line */}
        <div className="absolute left-[calc(100%/2.2)] top-0 -z-10 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
      </section>

      {/* ── WHY IT WORKS ──────────────────────────────────────────── */}
      <section className="relative px-6 py-32 md:px-12 lg:px-20 bg-zinc-950/30 overflow-hidden">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-20">
            <RevealLine><h2 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] md:text-7xl">Why It Works</h2></RevealLine>
            <RevealLine delay={0.08}><h2 className="text-5xl font-playfair font-normal italic text-primary leading-[0.9] md:text-7xl">Every Time.</h2></RevealLine>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { num: "01", title: "No Surprises", body: "Weekly working sessions and shared documentation mean you always know where the project stands." },
              { num: "02", title: "Parallel Tracks", body: "Design and development run in parallel from week two — cutting delivery time without cutting corners." },
              { num: "03", title: "Clean Handoffs", body: "Every deliverable is documented, versioned, and handed off with training so your team is never left stranded." },
            ].map((card, i) => (
              <FadeIn key={card.num} delay={i * 0.1} className="h-full">
                <div className="group relative h-full flex flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-zinc-950 to-zinc-900 p-10 transition-all duration-500 hover:border-primary/25">
                  <span className="font-playfair text-6xl italic text-primary/10 group-hover:text-primary/25 transition-colors duration-700 leading-none">{card.num}</span>
                  <h3 className="mt-4 text-xl font-black uppercase tracking-tighter">{card.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/45 font-medium">{card.body}</p>
                  <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/15" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>


      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="relative px-6 py-32 md:px-12 lg:px-20 overflow-hidden">
        <div className="mx-auto max-w-[1600px] grid gap-20 lg:grid-cols-[1fr_1.2fr] items-start">
          <div className="lg:sticky lg:top-40 space-y-6">
            <RevealLine><h2 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] md:text-6xl">Common<br />Questions</h2></RevealLine>
            <FadeIn delay={0.2}><p className="text-lg text-foreground/40 font-medium leading-relaxed">Everything you need before the first conversation.</p></FadeIn>
            <FadeIn delay={0.3}>
              <Link href="/contact" className="group inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-foreground/40 hover:text-primary transition-colors duration-300">
                Ask something else
                <span className="h-8 w-8 rounded-full border border-border flex items-center justify-center transition-all group-hover:border-primary group-hover:translate-x-2"><ArrowUpRight size={14} /></span>
              </Link>
            </FadeIn>
          </div>

          <div>
            {faqItems.map((item, i) => <FAQItem key={item.q} item={item} index={i} />)}
            <div className="border-t border-white/[0.07]" />
          </div>
        </div>


      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="relative px-6 py-24 md:px-12 lg:px-20 bg-zinc-950/30 overflow-hidden">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[40px] border border-white/[0.07] bg-gradient-to-br from-[#050a15] to-[#01020a] p-12 md:p-20">
              <div className="pointer-events-none absolute -top-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
              <div className="relative z-10 flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl space-y-5">
                  <RevealLine>
                    <h2 className="text-4xl font-black uppercase tracking-tighter leading-[0.9] md:text-6xl">
                      Ready to{" "}<span className="font-playfair font-normal italic text-primary">start?</span>
                    </h2>
                  </RevealLine>
                  <FadeIn delay={0.2}><p className="text-lg text-foreground/40 leading-relaxed font-medium">Share your brief and we&apos;ll come back with a clear proposed path — team shape, milestones, and an honest estimate.</p></FadeIn>
                </div>
                <FadeIn delay={0.35} className="flex-shrink-0">
                  <Link href="/contact" className="group inline-flex items-center gap-4 rounded-full bg-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(0,68,255,0.3)]">
                    Start the Brief
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </FadeIn>
              </div>
              <motion.div animate={{ x: ["-120%", "220%"] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
                className="pointer-events-none absolute -top-1/2 left-0 h-[200%] w-1/3 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent skew-x-[-25deg]" />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
