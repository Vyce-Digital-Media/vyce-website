"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────

const processSteps = [
  {
    step: "01",
    title: "UNDERSTAND",
    tagline: "Know before you build.",
    duration: "Week 1–2",
    description:
      "We start by listening - genuinely listening. To your business, your goals, your audience, your competition, what's worked, and what hasn't. We don't come in with a template. We come in with questions. And we don't move until we have real answers. Most problems in digital marketing are solved here - in the understanding phase. Executing on the wrong insight is how budgets disappear.",
    details: ["Founder & stakeholder discovery call", "Business, brand & digital audit", "Competitor landscape mapping", "Target audience & persona definition"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&h=600&fit=crop&q=80",
    color: "rgba(0,68,255,0.12)",
  },
  {
    step: "02",
    title: "PLAN",
    tagline: "Direction before action.",
    duration: "Week 2–4",
    description:
      "No pixel moves, no rupee gets spent, and no content gets created before we have a clear map. We define the strategy, the structure, the platforms, the content pillars, the campaign approach, and the success metrics - all locked before execution begins.This is how we avoid the painful mid-project pivot. And how we avoid even more painful 'we need to redo everything' conversations.",
    details: ["Strategic roadmap & plan of action", "Platform, channel & format selection", "Content pillars & campaign framework", "Detailed project scope & timeline"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=600&fit=crop&q=80",
    color: "rgba(255,140,0,0.12)",
  },
  {
    step: "03",
    title: "CREATE",
    tagline: "Craft with intention.",
    duration: "Parallel track",
    description:
      "This is where strategy becomes real. Design, copy, content, code - everything built with the plan front of mind, not as an afterthought. You'll see real work in regular cycles. Structured feedback. Clear revisions. No waiting three weeks for a first draft.",
    details: ["Visual identity & UI design", "Content production (reels, carousels, copy)", "Website design & development", "Ad creative & campaign build"],
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=900&h=600&fit=crop&q=80",
    color: "rgba(200,50,255,0.12)",
  },
  {
    step: "04",
    title: "LAUNCH",
    tagline: "Go live properly.",
    duration: "Ongoing sprint",
    description:
      "Going live isn't the finish line - it's the starting gun. We make sure everything is tested, tracked, and working before anything goes public. QA, analytics, tracking, final review. 'No we'll fix it after launch.' We fix it before.",
    details: ["Pre-launch quality assurance", "Analytics & conversion tracking setup", "Campaign activation & monitoring", "Final client review & sign-off"],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&h=600&fit=crop&q=80",
    color: "rgba(0,200,100,0.12)",
  },
  {
    step: "05",
    title: "GROW",
    tagline: "The part most agencies skip. We don't.",
    duration: "Final sprint",
    description:
      "This is the phase that separates agencies from partners. Once we launch, we don't file the project and move on. We track performance. We flag what's working and what isn't. We optimize. We bring the next opportunity before you even know to ask about it. This is why most of our client relationships are measured in years, not projects. And why most of our new clients come from someone we already work with.",
    details: ["Performance monitoring & reporting", "Ongoing optimization & iteration", "Monthly strategy reviews", "Expansion scope identification"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=600&fit=crop&q=80",
    color: "rgba(255,60,80,0.12)",
  },
];

// ─── Primitives ────────────────────────────────────────────────────────────

function RevealLine({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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
        <span className="font-satoshi text-6xl text-primary/20 md:text-8xl transition-all duration-700 group-hover:text-primary/40 group-hover:scale-105 leading-none">
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

          <p className="max-w-xl text-md md:text-lg text-foreground/50 leading-relaxed font-medium transition-colors duration-500 group-hover:text-foreground/75">
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

// ─── Main Component ────────────────────────────────────────────────────────

export default function Process() {
  const processRef = useRef<HTMLDivElement>(null);
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  return (
    <section ref={processRef} className="relative px-6 py-32 md:px-12 lg:px-20 overflow-clip bg-background" id="process">
      <div className="mx-auto max-w-[1600px] grid gap-24 lg:grid-cols-[1fr_1.2fr] items-start">

        {/* Left Side: Sticky Title & Info */}
        <div className="lg:sticky lg:top-48 lg:h-fit space-y-12">
          <div className="space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">How we work</p>
            <RevealLine>
              <h2 className="text-5xl font-black uppercase tracking-tighter md:text-6xl lg:text-7xl leading-none">
                The Digital <br />
                <span className="font-satoshi font-normal italic text-primary">Mastery</span> <br />
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
  );
}
