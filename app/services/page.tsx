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
import {
  Palette,
  Globe,
  Smartphone,
  BarChart,
  Layers,
  Code,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

// ─── Data ──────────────────────────────────────────────────────────────────

const services = [
  {
    num: "01",
    title: "Branding & Identity",
    icon: Palette,
    iconColor: "rgba(255, 60, 0, 0.15)",
    summary:
      "Positioning, verbal identity, and visual systems that feel confident on billboards and in Figma.",
    description:
      "We deliver logo suites, color logic, typography stacks, and usage rules your team can enforce. Every touchpoint, intentional. Every choice, strategic.",
    deliverables: [
      "Brand strategy workshop",
      "Logo & monogram systems",
      "Typography & color tokens",
      "Brand guidelines site or PDF",
    ],
  },
  {
    num: "02",
    title: "Web Experiences",
    icon: Globe,
    iconColor: "rgba(0, 200, 255, 0.15)",
    summary:
      "Marketing sites and immersive launches built with Next.js, WebGL, and motion.",
    description:
      "We prototype in-code early so stakeholders react to real physics, not Keynote approximations. Performance budgets are non-negotiable — so is delight.",
    deliverables: [
      "Information architecture",
      "UI design & component library",
      "Next.js implementation",
      "Analytics & SEO foundations",
    ],
  },
  {
    num: "03",
    title: "Product Design",
    icon: Smartphone,
    iconColor: "rgba(180, 0, 255, 0.15)",
    summary:
      "Interfaces for complex workflows — dashboards, onboarding, and companion apps.",
    description:
      "We align UX research, UI craft, and engineering constraints in the same backlog. Beautiful screens that handle real-world edge cases with grace.",
    deliverables: [
      "UX flows & wireframes",
      "High-fidelity UI",
      "Prototypes & usability tests",
      "Design QA with engineering",
    ],
  },
  {
    num: "04",
    title: "Digital Growth",
    icon: BarChart,
    iconColor: "rgba(255, 200, 0, 0.15)",
    summary:
      "Launch narratives, landing systems, and measurement plans that connect creative to pipeline.",
    description:
      "UTMs, events, and dashboards your growth team can trust. We connect creative output to revenue — and show the receipts.",
    deliverables: [
      "Launch messaging",
      "Landing page systems",
      "Experimentation backlog",
      "Reporting templates",
    ],
  },
];

const phases = [
  {
    step: "01",
    title: "Immersion",
    detail:
      "Stakeholder interviews, analytics review, and competitive landscape mapping.",
    tag: "Week 1–2",
  },
  {
    step: "02",
    title: "Direction",
    detail:
      "Creative territories, moodfilm-style motion tests, and technical proof-of-concepts.",
    tag: "Week 2–4",
  },
  {
    step: "03",
    title: "Production",
    detail:
      "Weekly slices of shippable UI with written rationale and accessibility notes.",
    tag: "Ongoing",
  },
  {
    step: "04",
    title: "Launch",
    detail:
      "Hardening, documentation, and training so your team owns the roadmap.",
    tag: "Final Sprint",
  },
];

// ─── Animation Primitives ─────────────────────────────────────────────────

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

// ─── Service Card (horizontal full-bleed rows with stagger) ──────────────

function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // 3D tilt on hover
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX / rect.width - rect.left / rect.width - 0.5);
    y.set(e.clientY / rect.height - rect.top / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
      className="group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-[32px] border border-white/[0.06] bg-gradient-to-br from-zinc-950 to-zinc-900/80 p-10 md:p-14 transition-all duration-700 hover:border-primary/25 hover:shadow-[0_40px_80px_-20px_rgba(0,10,30,0.8)]"
      >
        {/* Animated glow */}
        <div
          className="absolute inset-0 z-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${isEven ? "20% 50%" : "80% 50%"}, ${service.iconColor.replace("0.15", "0.08")} 0%, transparent 60%)`,
          }}
        />

        {/* Sweeping light */}
        <motion.div
          animate={{ x: ["-120%", "220%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
          className="pointer-events-none absolute -top-1/2 left-0 h-[200%] w-1/3 bg-gradient-to-r from-transparent via-white/[0.025] to-transparent skew-x-[-25deg] z-0"
        />

        <div className={`relative z-10 flex flex-col gap-10 lg:flex-row lg:items-start ${isEven ? "" : "lg:flex-row-reverse"}`}>
          {/* Left column */}
          <div className="flex flex-col gap-6 lg:w-[42%]">
            <div className="flex items-end justify-between lg:flex-col lg:items-start lg:gap-8">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:border-primary/30"
                style={{ background: service.iconColor }}
              >
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <span className="font-playfair text-[5rem] leading-none text-foreground/[0.07] transition-colors duration-500 group-hover:text-foreground/[0.12] md:text-[7rem]">
                {service.num}
              </span>
            </div>

            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white md:text-4xl lg:text-5xl">
                {service.title}
              </h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-foreground/40 md:text-lg">
                {service.summary}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block lg:w-px lg:self-stretch bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          {/* Right column */}
          <div className="flex flex-col gap-8 lg:flex-1">
            <p className="text-lg leading-relaxed text-foreground/55 md:text-xl">
              {service.description}
            </p>

            <div>
              <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.5em] text-foreground/30">
                Typical Deliverables
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3">
                    <CheckCircle2
                      size={14}
                      className="flex-shrink-0 text-primary/60"
                      strokeWidth={2}
                    />
                    <span className="text-sm font-medium text-foreground/50 transition-colors duration-300 group-hover:text-foreground/70">
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  // Hero parallax
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], [0, 180]);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 0.93]);

  // Process section scroll-driven line fill
  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: processScroll } = useScroll({
    target: processRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineScaleY = useTransform(processScroll, [0, 1], [0, 1]);

  return (
    <div className="bg-background text-foreground overflow-hidden">

      {/* ── 00. HERO ──────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 py-32"
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

        {/* Blue radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,68,255,0.07)_0%,transparent_65%)]" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 flex flex-col items-center gap-8 text-center"
        >
          <FadeIn>
            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/40">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Services
            </span>
          </FadeIn>

          <div className="space-y-2">
            <RevealLine>
              <h1 className="text-[clamp(3rem,9vw,10rem)] font-black uppercase tracking-tighter leading-[0.88]">
                Capabilities
              </h1>
            </RevealLine>
            <RevealLine delay={0.1}>
              <h1 className="text-[clamp(3rem,9vw,10rem)] font-playfair font-normal italic text-primary leading-[0.88]">
                End-to-end.
              </h1>
            </RevealLine>
          </div>

          <FadeIn delay={0.3} className="max-w-2xl">
            <p className="text-base md:text-xl text-foreground/40 font-medium leading-relaxed">
              One partner for narrative, interface, motion, and implementation.
              Engagements are scoped as retainers or phased SOWs — always with a
              visible critical path.
            </p>
          </FadeIn>


        </motion.div>

        {/* Massive faded sector label */}
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.025] select-none">
          <span className="text-[20rem] font-black leading-none">00</span>
        </div>
      </section>

      {/* ── 01. SERVICE CARDS ─────────────────────────────────────── */}
      <section className="relative px-6 py-24 md:px-12 lg:px-20 bg-zinc-950/30">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <RevealLine>
                <h2 className="text-5xl font-black pr-2 uppercase tracking-tighter leading-[0.9] md:text-7xl">
                  What We Do
                </h2>
              </RevealLine>
              <RevealLine delay={0.08}>
                <h2 className="text-5xl font-playfair font-normal italic text-primary leading-[0.9] md:text-7xl">
                  Best.
                </h2>
              </RevealLine>
            </div>

          </div>

          <div className="flex flex-col gap-6">
            {services.map((service, index) => (
              <ServiceRow key={service.num} service={service} index={index} />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.025] select-none">
          <span className="text-[20rem] font-black leading-none">01</span>
        </div>
      </section>

      {/* ── 02. PROCESS ───────────────────────────────────────────── */}
      <section
        ref={processRef}
        className="relative px-6 py-32 md:px-12 lg:px-20 overflow-hidden"
      >
        <div className="mx-auto max-w-[1600px] grid gap-20 lg:grid-cols-[1fr_1.3fr] items-start">
          {/* Sticky left */}
          <div className="lg:sticky lg:top-40 space-y-10">
            <div>
              <RevealLine>
                <h2 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] md:text-7xl">
                  How
                </h2>
              </RevealLine>
              <RevealLine delay={0.08}>
                <h2 className="text-5xl font-playfair font-normal italic text-primary leading-[0.9] md:text-7xl">
                  Engagements Run.
                </h2>
              </RevealLine>
            </div>
            <FadeIn delay={0.2}>
              <p className="max-w-md text-lg text-foreground/40 font-medium leading-relaxed">
                Every project follows the same four-act structure — calibrated
                for the specific scope, never cookie-cutter.
              </p>
            </FadeIn>

            {/* Mini step map */}
            <FadeIn delay={0.3} className="hidden lg:flex flex-col gap-5 opacity-30 hover:opacity-80 transition-opacity duration-500">
              {phases.map((p) => (
                <div key={p.step} className="flex items-center gap-5">
                  <span className="font-mono text-xs font-bold">{p.step}</span>
                  <div className="h-px w-16 bg-foreground" />
                  <span className="text-xs uppercase tracking-widest">{p.title}</span>
                </div>
              ))}
            </FadeIn>
          </div>

          {/* Right: Steps with scroll-driven vertical line */}
          <div className="relative">
            {/* Animated vertical line */}
            <div className="absolute left-0 top-0 bottom-0 hidden w-px bg-white/5 lg:block">
              <motion.div
                style={{ scaleY: lineScaleY, transformOrigin: "top" }}
                className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent"
              />
            </div>

            <div className="space-y-24 lg:space-y-32 lg:pl-16">
              {phases.map((phase, i) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 1.0,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.05,
                  }}
                  className="group relative"
                >
                  {/* Dot on the line */}
                  <div className="absolute -left-[68px] top-2 hidden h-3 w-3 rounded-full border-2 border-primary/30 bg-background transition-all duration-500 group-hover:border-primary group-hover:bg-primary/20 lg:block" />

                  <div className="flex items-start gap-6">
                    <span className="font-playfair text-[4rem] leading-none text-primary/15 transition-colors duration-500 group-hover:text-primary/50 md:text-[5.5rem]">
                      {phase.step}
                    </span>
                    <div className="flex-1 pt-4 space-y-4">
                      <div className="flex items-center gap-4">
                        <h3 className="text-2xl font-black uppercase tracking-tighter md:text-4xl">
                          {phase.title}
                        </h3>
                        <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/30">
                          {phase.tag}
                        </span>
                      </div>
                      <p className="max-w-md text-base leading-relaxed text-foreground/45 md:text-lg">
                        {phase.detail}
                      </p>
                      <div className="h-px w-0 bg-primary/30 transition-all duration-700 group-hover:w-full" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.025] select-none">
          <span className="text-[20rem] font-black leading-none">02</span>
        </div>
      </section>

      {/* ── 03. ENGINEERING CALLOUT ───────────────────────────────── */}
      <section className="relative px-6 py-24 md:px-12 lg:px-20 bg-zinc-950/30 overflow-hidden">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[40px] border border-white/[0.07] bg-gradient-to-br from-[#050a15] to-[#01020a] p-12 md:p-20">
              {/* Glow orb */}
              <div className="pointer-events-none absolute -top-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

              <div className="relative z-10 flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl space-y-6">
                  <FadeIn>
                    <div className="flex items-center gap-3">
                      <Code size={16} className="text-primary" strokeWidth={1.5} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/40">
                        Engineering-Friendly
                      </span>
                    </div>
                  </FadeIn>

                  <RevealLine>
                    <h2 className="text-4xl font-black uppercase tracking-tighter leading-[0.9] md:text-6xl">
                      Design that{" "}
                      <span className="font-playfair font-normal italic text-primary">
                        Ships.
                      </span>
                    </h2>
                  </RevealLine>

                  <FadeIn delay={0.2}>
                    <p className="text-lg leading-relaxed text-foreground/45 md:text-xl">
                      We speak TypeScript, Storybook, and CI. Design tokens
                      export to code, and we pair with your engineers on edge
                      cases — responsive behavior, reduced motion, and
                      localization.
                    </p>
                  </FadeIn>

                  <FadeIn delay={0.3}>
                    <div className="flex flex-wrap gap-3">
                      {["TypeScript", "Next.js", "GSAP", "Three.js", "Storybook", "Figma"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/50 transition-colors hover:border-primary/30 hover:text-primary"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </FadeIn>
                </div>

                <FadeIn delay={0.4} className="flex-shrink-0">
                  <MagneticButton>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-4 rounded-full bg-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-background transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95"
                    >
                      Request a Scope
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </MagneticButton>
                </FadeIn>
              </div>

              {/* Subtle sweep */}
              <motion.div
                animate={{ x: ["-120%", "220%"] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
                className="pointer-events-none absolute -top-1/2 left-0 h-[200%] w-1/3 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent skew-x-[-25deg]"
              />
            </div>
          </FadeIn>
        </div>

        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.025] select-none">
          <span className="text-[20rem] font-black leading-none">03</span>
        </div>
      </section>

    </div>
  );
}
