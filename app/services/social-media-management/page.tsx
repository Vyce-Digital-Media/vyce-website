"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Heart, Share2, MessageCircle, Eye, TrendingUp } from "lucide-react";
import * as THREE from "three";

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

// ─── 3D Element ───────────────────────────────────────────────────────────

function FloatingHeart() {
  const meshRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group ref={meshRef} scale={1.5}>
        <mesh>
          <torusGeometry args={[1, 0.4, 16, 100]} />
          <MeshDistortMaterial
            color="#ff0055"
            emissive="#4a0018"
            distort={0.5}
            speed={3}
            roughness={0.1}
            metalness={0.9}
            wireframe={true}
            transparent
            opacity={0.6}
          />
        </mesh>
      </group>
    </Float>
  );
}

// ─── Ticker Tape ──────────────────────────────────────────────────────────

function Ticker() {
  const tickerItems = (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="flex items-center gap-6 pr-6">
          VIRAL ARCHITECTURE <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          COMMUNITY GROWTH <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          ALGORITHM MASTERY <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        </span>
      ))}
    </>
  );

  return (
    <div className="relative w-full overflow-hidden bg-[#ff0055] border-y border-white/10 py-4 flex text-white shadow-[0_0_30px_rgba(255,0,85,0.3)]">
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

function ScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=5000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Initial state
      gsap.set(".phone-container", { scale: 0.8, y: 100, opacity: 0 });
      gsap.set(".card-1", { y: window.innerHeight * 0.6, scale: 0.3, opacity: 0, rotate: 5 });
      gsap.set(".card-2", { y: window.innerHeight * 0.6, scale: 0.3, opacity: 0, rotate: -5 });
      gsap.set(".card-3", { y: window.innerHeight * 0.6, scale: 0.3, opacity: 0, rotate: 5 });
      gsap.set(".bg-shift", { backgroundColor: "#09090b" });
      gsap.set(".hero-text", { opacity: 0, y: 50 });

      // Step 1: Phone container enters
      tl.to(".phone-container", { scale: 1, y: 0, opacity: 1, duration: 1, ease: "power3.out" })
        .to(".hero-text", { opacity: 1, y: 0, duration: 0.5 }, "<")
        // Card 1 enters the phone from below
        .to(".card-1", { y: 0, scale: 1, opacity: 1, rotate: 0, duration: 1.5, ease: "power2.inOut" }, "-=0.2")
        .to(".bg-shift", { backgroundColor: "#2d0014", duration: 1 }, "<")
        // Prep Card 2 to be slightly visible below
        .to(".card-2", { y: window.innerHeight * 0.35, scale: 0.4, opacity: 0.4, rotate: -10, duration: 1.5, ease: "power2.inOut" }, "<");

      // Step 2: Card 1 leaves (up), Card 2 enters (from below)
      tl.to(".card-1", { y: -window.innerHeight * 0.5, scale: 0.4, opacity: 0.2, rotate: -10, duration: 1.5, ease: "power2.inOut" })
        .to(".card-2", { y: 0, scale: 1, opacity: 1, rotate: 0, duration: 1.5, ease: "power2.inOut" }, "<")
        .to(".bg-shift", { backgroundColor: "#001f3f", duration: 1 }, "<")
        // Prep Card 3 to be slightly visible below
        .to(".card-3", { y: window.innerHeight * 0.35, scale: 0.4, opacity: 0.4, rotate: 10, duration: 1.5, ease: "power2.inOut" }, "<");

      // Step 3: Card 2 leaves (up), Card 3 enters (from below)
      tl.to(".card-2", { y: -window.innerHeight * 0.5, scale: 0.4, opacity: 0.2, rotate: 10, duration: 1.5, ease: "power2.inOut" })
        .to(".card-3", { y: 0, scale: 1, opacity: 1, rotate: 0, duration: 1.5, ease: "power2.inOut" }, "<")
        .to(".bg-shift", { backgroundColor: "#111111", duration: 1 }, "<")
        // Card 1 fades out completely
        .to(".card-1", { y: -window.innerHeight * 0.8, opacity: 0, duration: 1.5 }, "<");

      // Step 4: Zoom out everything
      tl.to(".phone-container", { scale: 0.9, duration: 1 })
        .to(".card-2", { y: -window.innerHeight * 0.8, opacity: 0, duration: 1 }, "<")
        .to(".hero-text", { opacity: 0, y: -50, duration: 0.5 }, "<");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-shift relative h-[100dvh] md:h-screen w-full overflow-hidden flex items-center justify-center transition-colors duration-500">

      <div className="hero-text absolute top-25 left-0 w-full text-center z-10 pointer-events-none">
        <p className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter">Content that <span className="text-[#ff0055] italic font-satoshi font-normal">Converts.</span></p>
      </div>

      {/* The Phone Container */}
      <div className="phone-container relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-[270px] aspect-[9/19] mx-auto z-20 mt-28 perspective-1000">
        
        {/* Placeholder inside phone behind cards */}
        <div className="absolute inset-0 bg-zinc-950 rounded-[28px] md:rounded-[36px] flex flex-col justify-center items-center shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] z-0">
          <div className="text-white/20 font-bold uppercase tracking-widest text-xs md:text-sm text-center">Awaiting<br />Content Feed</div>
        </div>

        {/* Cards - Z-Index puts them above the placeholder but below the bezel */}
        {/* Card 1 */}
        <div className="card-1 absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 z-10 p-4 md:p-6 flex flex-col justify-between rounded-[28px] md:rounded-[36px] overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 md:gap-3 mt-8 md:mt-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/10"></div>
            <div>
              <div className="h-2 md:h-3 w-16 md:w-20 bg-white/40 rounded-full mb-1"></div>
              <div className="h-1.5 md:h-2 w-10 md:w-12 bg-white/20 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl md:rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <Heart size={48} className="text-white z-20 animate-pulse drop-shadow-xl w-10 h-10 md:w-16 md:h-16" fill="white" />
            </div>
            <div className="flex gap-4 md:gap-5 px-1 md:px-2">
              <Heart className="text-white w-5 h-5 md:w-6 md:h-6" />
              <MessageCircle className="text-white w-5 h-5 md:w-6 md:h-6" />
              <Share2 className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="space-y-2 pb-2">
              <div className="h-1.5 md:h-2 w-full bg-white/20 rounded-full"></div>
              <div className="h-1.5 md:h-2 w-4/5 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-2 absolute inset-0 bg-gradient-to-tr from-cyan-900 to-blue-900 z-20 p-4 md:p-6 flex flex-col justify-between overflow-hidden rounded-[28px] md:rounded-[36px] shadow-2xl">
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&h=1200&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="flex justify-between items-start mt-8 md:mt-4 relative z-10">
            <div className="text-white font-bold text-[10px] md:text-sm tracking-wide bg-black/40 px-2 md:px-3 py-1 rounded-full backdrop-blur-md border border-white/10">Following | For You</div>
            <Eye className="text-white/80 w-4 h-4 md:w-6 md:h-6" />
          </div>
          <div className="flex flex-col items-end gap-4 md:gap-6 mb-8 md:mb-12 relative z-10">
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 shadow-lg">
                <Heart className="text-white w-4 h-4 md:w-6 md:h-6" fill="white" />
              </div>
              <span className="text-white text-[8px] md:text-[10px] font-bold tracking-wider drop-shadow-md">1.2M</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 shadow-lg">
                <MessageCircle className="text-white w-4 h-4 md:w-6 md:h-6" fill="white" />
              </div>
              <span className="text-white text-[8px] md:text-[10px] font-bold tracking-wider drop-shadow-md">45K</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 shadow-lg">
                <Share2 className="text-white w-4 h-4 md:w-6 md:h-6" />
              </div>
              <span className="text-white text-[8px] md:text-[10px] font-bold tracking-wider drop-shadow-md">89K</span>
            </div>
          </div>
          <div className="space-y-1.5 md:space-y-2 relative z-10 bg-black/40 p-3 md:p-4 rounded-xl md:rounded-2xl backdrop-blur-md border border-white/10 mb-2">
            <div className="text-white font-bold text-xs md:text-sm">@brand_culture</div>
            <div className="h-1.5 md:h-2 w-3/4 bg-white/40 rounded-full"></div>
            <div className="h-1.5 md:h-2 w-1/2 bg-white/20 rounded-full mt-1"></div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-3 absolute inset-0 bg-zinc-950 border border-zinc-800 z-30 p-4 md:p-6 flex flex-col pt-12 md:pt-16 rounded-[28px] md:rounded-[36px] overflow-hidden shadow-2xl">
          <div className="flex gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-800 shrink-0 border border-zinc-700"></div>
            <div className="space-y-2 md:space-y-3 w-full">
              <div className="flex items-center gap-2">
                <div className="h-2 md:h-3 w-16 md:w-24 bg-white/90 rounded-full"></div>
                <div className="h-2 md:h-3 w-12 md:w-16 bg-zinc-700 rounded-full"></div>
              </div>
              <div className="space-y-1.5 md:space-y-2 pt-2">
                <div className="h-1.5 md:h-2 w-full bg-zinc-700 rounded-full"></div>
                <div className="h-1.5 md:h-2 w-full bg-zinc-700 rounded-full"></div>
                <div className="h-1.5 md:h-2 w-2/3 bg-zinc-700 rounded-full"></div>
              </div>
              <div className="mt-4 aspect-video bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-black to-zinc-900"></div>
                <TrendingUp className="text-[#ff0055] relative z-10 w-8 h-8 md:w-12 md:h-12" />
                {/* Decorative Graph Line */}
                <svg className="absolute bottom-0 w-full h-1/2 opacity-30" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,100 L20,80 L40,85 L60,40 L80,45 L100,10" fill="none" stroke="#ff0055" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* The Phone Bezel (Transparent Center) */}
        <div className="absolute -inset-[6px] md:-inset-[8px] rounded-[36px] md:rounded-[44px] border-[6px] md:border-[8px] border-[#1a1a1a] pointer-events-none z-50">
          {/* Dynamic Island */}
          <div className="absolute top-[2px] md:top-[4px] left-1/2 -translate-x-1/2 w-16 md:w-24 h-4 md:h-6 bg-[#0a0a0a] rounded-full flex items-center justify-between px-1.5 md:px-2 pointer-events-auto">
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white/5 hidden md:block" />
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#111] border border-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SocialMediaManagementPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <div className="bg-background text-foreground overflow-clip">

      {/* ── 01. HERO ──────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-[100dvh] md:h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,0,85,0.15)_0%,rgba(0,0,0,1)_70%)] pointer-events-none" />

        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="relative z-10 w-full max-w-[1600px] px-6 md:px-12 lg:px-20 text-center flex flex-col items-center">
          <FadeIn>
            <span className="inline-flex items-center gap-3 rounded-full border border-[#ff0055]/20 bg-[#ff0055]/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.4em] text-[#ff0055]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff0055] animate-pulse" />
              Service // Social Media
            </span>
          </FadeIn>

          <div className="mt-6 md:mt-8 space-y-2 lg:space-y-4">
            <RevealLine>
              <h1 className="text-[clamp(3rem,8vw,9rem)] font-black uppercase tracking-tighter leading-[0.88]">
                Viral By
              </h1>
            </RevealLine>
            <RevealLine delay={0.1}>
              <h1 className="text-[clamp(3rem,8vw,9rem)] font-satoshi font-normal italic text-white/40 leading-[0.88]">
                Design.
              </h1>
            </RevealLine>
          </div>

          <FadeIn delay={0.3} className="mt-6 md:mt-8 max-w-2xl px-4">
            <p className="text-base md:text-xl text-foreground/50 font-medium leading-relaxed">
              Most brands post. Some brands go viral. Almost none build an actual audience. Guess which category you&apos;re in right now. We&apos;re here to fix that.
            </p>
          </FadeIn>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full z-20">
          <Ticker />
        </div>
      </section>

      {/* ── 02. CRAZY SCROLL SECTION ──────────────────────────────── */}
      <ScrollShowcase />

      {/* ── 03. STATS & METRICS ───────────────────────────────────── */}
      <section className="relative px-6 py-20 md:py-32 md:py-48 lg:px-20 bg-zinc-950">
        <div className="mx-auto max-w-[1600px] grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="space-y-12">
            <RevealLine>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                Metrics That <br />
                <span className="font-satoshi italic text-[#ff0055] font-normal">Break Scales.</span>
              </h2>
            </RevealLine>
            <FadeIn delay={0.2} className="max-w-md">
              <p className="text-lg text-foreground/50 font-medium leading-relaxed">
                Likes are vanity. Engagement is sanity. Revenue is the point. We engineer content that moves people down the funnel—from passive scrollers to obsessed buyers—and we make it look effortless.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-10 rounded-3xl border border-white/[0.04] bg-black aspect-square flex flex-col justify-between group hover:border-[#ff0055]/30 transition-colors duration-500"
            >
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/30">Total Reach</div>
              <div>
                <div className="text-5xl md:text-7xl font-black tracking-tighter group-hover:text-[#ff0055] transition-colors duration-500">
                  <Counter from={0} to={2.4} duration={2} suffix="B" />
                </div>
                <div className="mt-2 text-sm font-satoshi italic text-white/40">Organic Impressions</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="p-8 md:p-10 rounded-3xl border border-white/[0.04] bg-black aspect-square flex flex-col justify-between group hover:border-[#ff0055]/30 transition-colors duration-500"
            >
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/30">Engagement Rate</div>
              <div>
                <div className="text-5xl md:text-7xl font-black tracking-tighter group-hover:text-[#ff0055] transition-colors duration-500">
                  <Counter from={0} to={18} duration={2} suffix="%" />
                </div>
                <div className="mt-2 text-sm font-satoshi italic text-white/40">Industry Avg 2.1%</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="sm:col-span-2 p-8 md:p-10 rounded-3xl border border-white/[0.04] bg-black sm:aspect-[2.5/1] aspect-square flex flex-col justify-between group hover:border-[#ff0055]/30 transition-colors duration-500"
            >
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/30">Follower Growth</div>
              <div>
                <div className="text-5xl md:text-7xl font-black tracking-tighter group-hover:text-[#ff0055] transition-colors duration-500">
                  <Counter from={0} to={450} duration={2.5} prefix="+" suffix="k" />
                </div>
                <div className="mt-2 text-sm font-satoshi italic text-white/40">Across Key Channels</div>
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
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30vw] w-[30vw] rounded-full bg-[#ff0055] blur-[160px]"
        />

        <div className="relative z-10 max-w-4xl max-auto space-y-12">
          <div>
            <RevealLine>
              <h2 className="text-[clamp(2.5rem,6vw,8rem)] font-black uppercase tracking-tighter leading-[0.88]">
                Your feed is a
              </h2>
            </RevealLine>
            <RevealLine delay={0.1}>
              <h2 className="text-[clamp(2.5rem,6vw,8rem)] font-satoshi font-normal italic text-[#ff0055] leading-[0.88]">
                ghost town. Let&apos;s fix that.
              </h2>
            </RevealLine>
          </div>

          <FadeIn delay={0.3}>
            <Link href="/contact" className="group inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 md:px-10 md:py-5 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-black transition-all duration-300 hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,0,85,0.4)]">
              Initiate Strategy
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
