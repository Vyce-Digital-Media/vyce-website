"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight } from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────

const coreValues = [
  {
    num: "01",
    title: "We're invested. Not just hired.",
    body: "A project isn't a transaction. We treat your business like we have actual skin in the game — because our reputation depends directly on your results. When you win, we both win. When you don't, we lose sleep about it.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=720&h=900&fit=crop&q=80",
  },
  {
    num: "02",
    title: "Long relationships. Not quick invoices.",
    body: "Our best clients have been with us for years. Not because of lock-in contracts, but because we kept showing up, kept delivering, and kept giving a damn. That's the goal every single time.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=720&h=900&fit=crop&q=80",
  },
  {
    num: "03",
    title: "Strategy first. Pretty second. Always.",
    body: "Pretty content that doesn't convert is expensive decoration. Beautiful websites that don't rank are digital brochures. Everything we build is working toward a real business outcome — not just looking good on a portfolio.",
    image:
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=720&h=900&fit=crop&q=80",
  },
  {
    num: "04",
    title: "Honest. Even when it hurts a little.",
    body: "If something won't work, we'll say it before you spend the money finding out the hard way. We're not here to just agree with everything you say. We're here to give you the right answer — which is occasionally inconvenient.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=720&h=900&fit=crop&q=80",
  },
];

const milestones = [
  {
    year: "Day One",
    text: "Two founders. One strong opinion that most agencies were doing it wrong. Zero clients. A laptop and a lot of energy.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=720&h=900&fit=crop&q=80",
  },
  {
    year: "Early Days",
    text: "First clients — local businesses that needed someone who actually cared about their growth, not just their deliverables. They stuck around.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=720&h=900&fit=crop&q=80",
  },
  {
    year: "The Expansion",
    text: "Services grew. Team grew. Results got loud. Referrals started arriving before we even asked for them. That's when we knew we were onto something.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=720&h=900&fit=crop&q=80",
  },
  {
    year: "Now",
    text: "15+ team members. 100+ projects. Clients across India and internationally. And a referral rate that makes our sales team irrelevant.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=720&h=900&fit=crop&q=80",
  },
];

const teamMembers = [
  {
    name: "Alok Gupta",
    role: "Co-Founder | Social Media & Creative Head",
    image: "/images/team/manav.png",
    bio: "The creative half. Alok leads everything that touches content, storytelling, and social strategy. He believes every brand has a truth worth telling - and that most brands just haven't found the right way to tell it yet. If your content isn't working, Alok's the one who'll figure out exactly why, and rebuild it until it does.",
  },
  {
    name: "Niraj Lalani",
    role: "Co-Founder | Web Experiences & Technical Head",
    image: "/images/team/manav.png",
    bio: "The technical half. Niraj leads web design, development, and UI/UX - building digital experiences that don't just look good but actually work. He's the reason client websites rank, load fast, and convert. If your website is leaking leads, Niraj's the one who'll find the holes and close them.",
  },
];

const whyVyce = [
  "You talk to the founders, not a third-party account manager",
  "Strategy, design, content, web, ads — all connected, all under one roof",
  "We say no when no is the right answer",
  "Our clients stay because we keep delivering, not because contracts say so",
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

/** Animated image panel — a clip-path wipe from bottom entering, wipe to top exiting */
function HoverImagePanel({
  activeIndex,
  images,
  label,
}: {
  activeIndex: number | null;
  images: string[];
  label?: string;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl bg-zinc-900/40">
      {/* Default idle state */}
      <AnimatePresence>
        {activeIndex === null && (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 border border-white/[0.06] rounded-3xl"
          >
            <div className="w-12 h-px bg-white/10" />
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/15">
              {label ?? "Hover to preview"}
            </p>
            <div className="w-12 h-px bg-white/10" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active image */}
      <AnimatePresence mode="wait">
        {activeIndex !== null && (
          <motion.div
            key={activeIndex}
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 rounded-3xl overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[activeIndex]}
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background opacity-90" />
        </div>

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
              <p className="max-w-md text-sm font-medium leading-relaxed tracking-tight text-white/80 italic font-satoshi">
                &ldquo;{member.bio}&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
      </motion.div>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);

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

  // Cursor-following image for "What We Stand For"
  const cursorX = useMotionValue(-400);
  const cursorY = useMotionValue(-400);
  const floatX = useSpring(cursorX, { stiffness: 180, damping: 22 });
  const floatY = useSpring(cursorY, { stiffness: 180, damping: 22 });

  // Interactive dots for hero
  const dotRevealRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const section = heroRef.current as HTMLElement | null;
    if (!section) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      if (dotRevealRef.current) {
        dotRevealRef.current.style.setProperty("--mx", `${relX}px`);
        dotRevealRef.current.style.setProperty("--my", `${relY}px`);
      }
    };

    section.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      section.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="bg-background text-foreground overflow-hidden">

      {/* ── 00. HERO ──────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex h-screen min-h-[640px] overflow-hidden"
        style={{ background: "#f5f5f0" }}
      >
        {/* Dot grid — base faint layer (always visible) */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0,
        }} />

        {/* Dot grid — bright revealed layer (cursor spotlight mask) */}
        <div
          ref={dotRevealRef}
          aria-hidden
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.55) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none", zIndex: 0,
            WebkitMaskImage: "radial-gradient(circle 280px at var(--mx, 50%) var(--my, 50%), black 0%, transparent 100%)",
            maskImage: "radial-gradient(circle 280px at var(--mx, 50%) var(--my, 50%), black 0%, transparent 100%)",
          } as React.CSSProperties}
        />

        {/* Edge vignette */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 50%, rgba(245,245,240,0.4) 100%)",
          pointerEvents: "none", zIndex: 1,
        }} />

        {/* LEFT: Text Content */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-20 w-full lg:w-[55%] shrink-0"
        >

          {/* Headline */}
          <div className="space-y-1">
            <RevealLine>
              <motion.h1
                style={{ fontSize: "clamp(2rem, 3.8vw, 4.2rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#111", margin: "0 0 18px 0" }}
              >
                <span>We got tired of watching</span><br />
                <span style={{ color: "#111" }}>good businesses get</span><br />
                <span style={{ color: "#111" }}>digitally ghosted.</span>
              </motion.h1>
            </RevealLine>
          </div>

          {/* Subtext */}
          <FadeIn delay={0.3}>
            <motion.p
              style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", color: "#666", lineHeight: 1.65, marginBottom: 32, maxWidth: 480 }}
            >
              Great product. Terrible online presence. Losing to competitors with mediocre products and better marketing. We've seen it a thousand times. We built Vyce to fix it.
            </motion.p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.45}>
            <motion.div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", borderRadius: 10, background: "#111", color: "#fff", fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "all 0.2s ease", letterSpacing: "0.01em" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#222"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#111"; }}
              >
                Work With Us
              </Link>
              <Link
                href="/portfolio"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", borderRadius: 10, border: "1.5px solid rgba(0,0,0,0.18)", background: "transparent", color: "#111", fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "all 0.2s ease", letterSpacing: "0.01em" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.18)"; }}
              >
                View Work <ArrowRight size={15} />
              </Link>
            </motion.div>
          </FadeIn>
        </motion.div>

        {/* RIGHT: Two infinite-scroll image columns */}
        <div className="hidden lg:flex gap-4 w-[45%] shrink-0 absolute right-0 top-[-20vh] bottom-[-20vh] pointer-events-none overflow-hidden pr-8">
          {/* Fade edges */}
          <div className="absolute inset-x-0 top-0 h-[25vh] z-10 pointer-events-none" style={{ background: "linear-gradient(to bottom, #f5f5f0, transparent)" }} />
          <div className="absolute inset-x-0 bottom-0 h-[25vh] z-10 pointer-events-none" style={{ background: "linear-gradient(to top, #f5f5f0, transparent)" }} />

          {/* Column 1 — scrolls UP */}
          <div className="flex-1 overflow-hidden mt-[10vh]">
            <motion.div
              animate={{ y: ["0%", "-50%"] }}
              transition={{ duration: 18, ease: "linear", repeat: Infinity }}
              className="flex flex-col gap-4"
            >
              {["/hero1.webp", "/hero2.webp", "/hero3.webp", "/hero4.webp", "/hero5.webp",
                "/hero1.webp", "/hero2.webp", "/hero3.webp", "/hero4.webp", "/hero5.webp"].map((src, i) => (
                  <div key={i} className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
            </motion.div>
          </div>

          {/* Column 2 — scrolls DOWN */}
          <div className="flex-1 overflow-hidden">
            <motion.div
              animate={{ y: ["-50%", "0%"] }}
              transition={{ duration: 22, ease: "linear", repeat: Infinity }}
              className="flex flex-col gap-4"
            >
              {["/hero6.webp", "/hero7.webp", "/hero8.webp", "/hero9.webp", "/hero10.webp",
                "/hero6.webp", "/hero7.webp", "/hero8.webp", "/hero9.webp", "/hero10.webp"].map((src, i) => (
                  <div key={i} className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
            </motion.div>
          </div>
        </div>
      </section>


      {/* ── 02. OUR STORY ───────────────────────────────────────── */}
      <section ref={storyRef} className="relative px-6 py-32 md:px-12 lg:px-20 bg-zinc-950/30 overflow-hidden">
        <div className="mx-auto max-w-[1500px] space-y-20">
          <div>
            <RevealLine className="mt-4">
              <h2 className="text-5xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.9]">
                How it Started
              </h2>
            </RevealLine>
          </div>

          {/* ── grid: card | milestones ── */}
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-start">

            {/* Left: 3D card that also shows hovered milestone image */}
            <div className="lg:sticky lg:top-32 relative group perspective-[2000px]">
              <motion.div
                style={{
                  rotateY: storyRotate,
                  transformStyle: "preserve-3d",
                }}
                className="relative overflow-hidden rounded-[48px] border border-white/[0.08] bg-gradient-to-br from-[#050a15] to-[#010204] shadow-[0_50px_100px_-30px_rgba(0,10,30,0.9)] transition-all duration-700"
              >
                {/* Glow overlay */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--primary-blue)_0%,transparent_50%)] opacity-20 blur-[120px] mix-blend-screen" />
                </div>

                {/* Geometric mesh background */}
                <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,transparent_24.5%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_26%,transparent_27%,transparent_74.5%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_76%,transparent_77%),linear-gradient(0deg,transparent_24.5%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_26%,transparent_27%,transparent_74.5%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_76%,transparent_77%)] bg-[size:60px_60px]" />
                </div>

                {/* Narrative Content - Always present but fades out when image is shown */}
                <div
                  className={`relative z-10 p-12 md:p-16 space-y-12 transition-opacity duration-500 ${hoveredMilestone !== null ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                >
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.0] text-white">
                    The honest <span className="text-primary glow-text transition-all duration-700 group-hover:brightness-125">origin story.</span> <br />
                  </h3>
                  <div className="max-w-2xl">
                    <p className="text-lg md:text-xl text-foreground/50 font-medium leading-[1.6] tracking-tight">
                      Alok and Niraj started Vyce Digital Media out of Surat because they kept seeing the same thing — businesses with genuinely better products losing to competitors who just marketed better. <span className="text-white">Not a better product. Better marketing.</span>
                    </p>
                    <p className="mt-8 text-lg md:text-xl text-foreground/50 font-medium leading-[1.6] tracking-tight">
                      That felt deeply unfair. So they decided to do something about it.
                    </p>
                    <p className="mt-8 text-lg md:text-xl text-foreground/50 font-medium leading-[1.6] tracking-tight">
                      Vyce was built to level that playing field. To make sure the quality of your business actually matches — and then exceeds — how it shows up online. <span className="text-white">One brand at a time. Done properly.</span>
                    </p>
                    <p className="mt-8 text-lg md:text-xl text-foreground/50 font-medium leading-[1.6] tracking-tight">
                      100+ clients and several years later, the frustration became a methodology. <span className="text-primary font-bold">And the methodology became results you can actually measure.</span>
                    </p>
                  </div>
                </div>

                {/* Hover image (milestone) */}
                <AnimatePresence custom={hoveredMilestone}>
                  {milestones.map((m, i) => {
                    if (hoveredMilestone !== i) return null;

                    return (
                      <motion.div
                        key={`ms-img-${i}`}
                        custom={hoveredMilestone}
                        variants={{
                          initial: () => {
                            let clip = "";
                            if (i === 0) clip = "inset(0% 0% 100% 0%)";
                            else if (i === 1) clip = "inset(0% 0% 0% 100%)";
                            else if (i === 2) clip = "inset(100% 0% 0% 0%)";
                            else if (i === 3) clip = "inset(0% 100% 0% 0%)";
                            return { clipPath: clip, zIndex: 30, opacity: 1 };
                          },
                          animate: {
                            clipPath: "inset(0% 0% 0% 0%)",
                            zIndex: 30,
                            opacity: 1,
                            transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] }
                          },
                          exit: (customHovered) => {
                            let clip = "";
                            if (i === 0) clip = "inset(0% 0% 100% 0%)";
                            else if (i === 1) clip = "inset(0% 0% 0% 100%)";
                            else if (i === 2) clip = "inset(100% 0% 0% 0%)";
                            else if (i === 3) clip = "inset(0% 100% 0% 0%)";

                            return {
                              clipPath: customHovered === null ? clip : "inset(0% 0% 0% 0%)",
                              zIndex: 20,
                              opacity: customHovered === null ? 0 : 0.99,
                              transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] }
                            };
                          }
                        }}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute inset-0 rounded-[48px] overflow-hidden"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={m.image}
                          alt={m.year}
                          className="w-full h-full object-cover scale-105"
                        />
                        {/* Overlay with milestone label */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-10 z-30">
                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.25, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-2"
                          >
                            {m.year}
                          </motion.p>
                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.32, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-white font-black text-2xl md:text-3xl uppercase tracking-tighter leading-tight"
                          >
                            {m.text}
                          </motion.p>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {/* Light sweep */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-1/2 -left-1/2 w-full h-[200%] bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-[-35deg] z-10 pointer-events-none"
                />
              </motion.div>

              {/* Outer aura glow */}
              <div className="absolute -inset-1 rounded-[48px] bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-50 blur-xl transition-all duration-1000 -z-10" />
            </div>

            {/* Right: Milestone items */}
            <div
              className="space-y-0 divide-y divide-white/5"
              onMouseLeave={() => setHoveredMilestone(null)}
            >
              {milestones.map((m, i) => (
                <FadeIn key={m.year} delay={i * 0.1}>
                  <div
                    className={`group flex items-start gap-8 cursor-default transition-all duration-300 hover:px-3 ${i === 0 ? "pt-12 md:pt-16 pb-10" : "py-10"
                      }`}
                    onMouseEnter={() => setHoveredMilestone(i)}
                  >
                    <span className="font-satoshi text-5xl italic text-primary/20 transition-colors duration-500 group-hover:text-primary/70 leading-none mt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-2 transition-opacity duration-300">
                        {m.year}
                      </p>
                      <p className="text-foreground/50 font-medium leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
                        {m.text}
                      </p>
                    </div>
                    {/* Arrow indicator */}
                    <div className="hidden md:flex items-center self-center">
                      <motion.div
                        animate={hoveredMilestone === i ? { x: 0, opacity: 1 } : { x: -8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-primary text-sm font-bold"
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>


      </section>

      {/* ── 03. MISSION & VISION ─────────────────────────────────── */}
      <section className="relative px-6 py-32 md:px-12 lg:px-20 overflow-hidden">
        <div className="mx-auto max-w-[1500px]">
          <div className="mt-8 grid gap-16 lg:grid-cols-2 items-end">
            <div>
              <RevealLine>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                  Why We Exist
                </h2>
              </RevealLine>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {[
              { label: "Mission", headline: "Make sure every brand we work with competes at the level it deserves — not the level its current marketing allows." },
              { label: "Vision", headline: "A world where the best businesses actually win. Not just the ones with the biggest ad budgets. (We're working on it.)" },
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


      </section>

      {/* ── 04. CORE VALUES ──────────────────────────────────────── */}
      <section
        className="relative px-6 py-32 md:px-12 lg:px-20 bg-zinc-950/30 overflow-hidden"
        onMouseLeave={() => setHoveredValue(null)}
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24">
            <div>
              <RevealLine className="mt-4">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                  What We Stand For
                </h2>
              </RevealLine>
            </div>
          </div>

          {/* 2-col: value rows | right image panel */}
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] items-center">

            {/* Left: value rows */}
            <div className="divide-y divide-white/5">
              {coreValues.map((v, i) => (
                <FadeIn key={v.num} delay={i * 0.1}>
                  <div
                    className="group flex items-center gap-8 py-12 transition-all duration-300 hover:pl-4 cursor-default"
                    onMouseEnter={() => setHoveredValue(i)}
                    onMouseLeave={() => setHoveredValue(null)}
                  >
                    <span className="font-satoshi text-6xl italic text-primary/20 transition-colors duration-500 group-hover:text-primary/80 leading-none flex-shrink-0 w-20">
                      {v.num}
                    </span>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 flex-1">
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight flex-shrink-0 md:w-72 group-hover:text-white transition-colors duration-300">
                        {v.title}
                      </h3>
                      <p className="text-foreground/40 text-lg font-medium leading-relaxed group-hover:text-foreground/70 transition-colors duration-500">
                        {v.body}
                      </p>
                    </div>
                    <div className="hidden md:block h-px w-0 group-hover:w-10 bg-primary self-center transition-all duration-500 flex-shrink-0" />
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Right: fixed image panel with earthycrafts-style animate */}
            <div className="hidden lg:block relative h-[480px]">
              <AnimatePresence mode="wait">
                {hoveredValue !== null ? (
                  <motion.div
                    key={`img-${hoveredValue}`}
                    initial={{ opacity: 0, scale: 0.82, y: 24, rotate: hoveredValue % 2 === 0 ? -6 : 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: hoveredValue % 2 === 0 ? 2 : -2 }}
                    exit={{ opacity: 0, scale: 0.88, y: -16 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_32px_80px_-16px_rgba(0,0,0,0.8)] border border-white/10"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={coreValues[hoveredValue].image}
                      alt={coreValues[hoveredValue].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-primary mb-1">
                        {coreValues[hoveredValue].num}
                      </p>
                      <p className="text-white text-sm font-black uppercase tracking-tight">
                        {coreValues[hoveredValue].title}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 rounded-2xl border border-white/[0.06] flex items-center justify-center"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/15">
                      Hover to reveal
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>


      </section>

      {/* ── 05. MEET THE TEAM ────────────────────────────────────── */}
      <section className="relative px-6 py-32 md:px-12 lg:px-20 overflow-hidden">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-20">
            <RevealLine className="mt-4">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                The Founders
              </h2>
            </RevealLine>
            <FadeIn delay={0.2} className="mt-8">
              <p className="max-w-xl text-lg text-foreground/40 font-medium leading-relaxed">
                The two people who will actually know your brand. Not account managers. Not interns. The actual founders who built the strategy and care whether it works.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {teamMembers.map((m, i) => (
              <TeamCard key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>


      </section>

      {/* ── 06. WHY CHOOSE VYCE ──────────────────────────────────── */}
      <section className="relative px-6 py-32 md:px-12 lg:px-20 bg-zinc-950/30 overflow-hidden">
        <div className="mx-auto max-w-[1500px] w-full grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-center">
          <div className="space-y-12">
            <div>
              <RevealLine>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                  Most agencies talk.
                </h2>
              </RevealLine>
              <RevealLine delay={0.1}>
                <h2 className="text-5xl md:text-7xl pb-2 font-satoshi font-normal italic text-primary leading-[0.9]">
                  Here&apos;s what we actually do differently.
                </h2>
              </RevealLine>
            </div>

            <div className="w-full border-t border-white/10 mt-10">
              {/* Header row */}
              <div className="grid grid-cols-2 py-6 border-b border-white/10 bg-white/[0.01]">
                <div className="text-[11px] font-bold uppercase tracking-[0.5em] text-primary/60 text-center">What most agencies do</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.5em] text-primary text-center">What we do</div>
              </div>

              {/* Table content data rows with animations */}
              <div className="relative">
                {[
                  {
                    agency: "Deliver the project, send the invoice, vanish",
                    vyce: "Stay in the loop. Flag opportunities. Keep showing up."
                  },
                  {
                    agency: "Assign you an account manager who barely knows your brand",
                    vyce: "Direct access to the founders who built your strategy"
                  },
                  {
                    agency: "One service, multiple scattered vendors",
                    vyce: "Branding, social, web, ads, SEO — all in one place, all actually connected"
                  },
                  {
                    agency: "\"We'll do whatever you ask for\"",
                    vyce: "\"Here's what you actually need, and here's why\""
                  },
                  {
                    agency: "Quarterly check-in calls you have to chase",
                    vyce: "Real conversations. Proactive updates. No chasing."
                  }
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="grid grid-cols-2 py-8 border-b border-white/5 group hover:bg-white/[0.03] transition-all duration-500 px-4 rounded-xl relative overflow-hidden"
                  >
                    <div className="text-sm md:text-base text-foreground/30 font-medium px-6 leading-relaxed text-center group-hover:text-foreground/50 transition-colors duration-500">
                      {row.agency}
                    </div>
                    <div className="text-sm md:text-base text-foreground/70 font-bold leading-relaxed px-6 text-center group-hover:text-white transition-all duration-500 group-hover:scale-[1.02]">
                      {row.vyce}
                    </div>

                    {/* Subtle hover accent */}
                    <div className="absolute left-0 top-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                ))}
              </div>
            </div>

            <FadeIn delay={0.4}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 rounded-full bg-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(0,68,255,0.3)]"
              >
                Let&apos;s Talk →
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="hidden lg:flex items-center justify-center lg:translate-x-16">
            <div className="relative w-full aspect-square max-w-[520px] flex flex-col items-center justify-center">
              <div className="rounded-full border border-white/5 bg-zinc-900/50 w-full h-full flex flex-col items-center justify-center gap-6 p-16">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/nav-logo.png"
                  alt="Vyce Logo"
                  className="h-auto opacity-100"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-[100px] -z-10" />
            </div>
          </FadeIn>
        </div>



      </section>

    </div>
  );
}
