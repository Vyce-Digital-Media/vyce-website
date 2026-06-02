"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUp, Infinity as InfinityIcon, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ─── Types ────────────────────────────────────────────────────────────────────
type CardType = "image" | "chart" | "folder" | "input" | "icon" | "text";

type CardDef = {
  id: string;
  wave: 0 | 1 | 2;
  fx: number;
  fy: number;
  rotate: number;
  type: CardType;
  depth?: number;

  src?: string;
  width?: number;
  height?: number;
  label?: string;
  title?: string;
  content?: string;
  avatars?: string[];
  Icon?: React.ComponentType<any>;
};

// ─── Card Definitions (Rich UI Elements) ──────────────────────────────────────
const CARDS: CardDef[] = [
  // ════════ WAVE 0 (Always visible on load) ════════
  {
    id: "w0-img-tl", wave: 0, type: "image",
    src: "/hero1.webp",
    // hero1: portrait ~1:1.25 (fashion bag)
    fx: -0.36, fy: -0.28, width: 220, height: 275, rotate: -4, depth: 1,
  },
  {
    id: "w0-img-bl", wave: 0, type: "image",
    src: "/hero2.webp",
    // hero2: portrait ~4:5 (real estate teaser)
    fx: -0.32, fy: 0.24, width: 210, height: 263, rotate: 4, depth: 1,
  },
  {
    id: "w0-chart-bl", wave: 0, type: "chart",
    fx: -0.39, fy: 0.35, width: 170, height: 110, rotate: -2, depth: 5,
  },
  {
    id: "w0-icon-l", wave: 0, type: "icon", Icon: InfinityIcon,
    fx: -0.45, fy: 0.12, width: 50, height: 50, rotate: -6, depth: 2,
  },
  {
    id: "w0-img-tr", wave: 0, type: "image",
    src: "/hero3.webp",
    // hero3: portrait ~4:5 (leather goods)
    fx: 0.38, fy: -0.29, width: 210, height: 263, rotate: 5, depth: 1,
  },
  {
    id: "w0-img-br", wave: 0, type: "image",
    src: "/hero4.webp",
    // hero4: portrait ~4:5 (perfume dark)
    fx: 0.35, fy: 0.22, width: 200, height: 250, rotate: -3, depth: 1,
  },
  {
    id: "w0-text-r", wave: 0, type: "text",
    title: "Audience",
    content: "Primary audience: people who own four pairs of sunglasses and can never find any of them. High purchase intent, low drawer organization.",
    fx: 0.41, fy: 0.05, width: 190, rotate: -2, depth: 5,
  },
  {
    id: "w0-folder-bc", wave: 0, type: "folder", title: "References",
    avatars: [
      "/hero1.webp",
      "/hero2.webp",
      "/hero3.webp",
    ],
    fx: 0.03, fy: 0.38, width: 130, height: 90, rotate: 3, depth: 3,
  },
  {
    id: "w0-input-br", wave: 0, type: "input", title: "Create a digital ad campaign",
    fx: 0.32, fy: 0.42, width: 260, rotate: -1, depth: 2,
  },

  // ════════ WAVE 1 (Emerges on scroll) ════════
  {
    id: "w1-img-tl", wave: 1, type: "image",
    src: "/hero5.webp",
    // hero5: portrait ~4:5 (perfume hands)
    fx: -0.28, fy: -0.24, width: 200, height: 250, rotate: -2, depth: 1,
  },
  {
    id: "w1-folder-l", wave: 1, type: "folder", title: "Product",
    avatars: [
      "/hero1.webp",
      "/hero2.webp",
    ],
    fx: -0.36, fy: 0.15, width: 120, height: 80, rotate: -4, depth: 3,
  },
  {
    id: "w1-img-bl", wave: 1, type: "image",
    src: "/hero6.webp",
    // hero6: portrait ~4:5 (RC car racing)
    fx: -0.26, fy: 0.22, width: 205, height: 256, rotate: 5, depth: 1,
  },
  {
    id: "w1-img-tr", wave: 1, type: "image",
    src: "/hero7.webp",
    // hero7: portrait ~4:5 (RC car teaser)
    fx: 0.28, fy: -0.25, width: 205, height: 256, rotate: 6, depth: 1,
  },
  {
    id: "w1-text-tr", wave: 1, type: "text",
    title: "Q2 Campaign",
    content: "The campaign will target adults aged 25 to 54 who drink coffee and have strong opinions about typefaces. Mostly confirmed.",
    fx: 0.22, fy: -0.10, width: 170, rotate: -3, depth: 4,
  },
  {
    id: "w1-img-br", wave: 1, type: "image",
    src: "/hero8.webp",
    // hero1 repeated for wave 1 right-bottom slot
    fx: 0.30, fy: 0.24, width: 190, height: 238, rotate: -4, depth: 1,
  },

  // ════════ WAVE 2 (Emerges on further scroll) ════════
  {
    id: "w2-img-tl", wave: 2, type: "image",
    src: "/hero9.webp",
    // hero2: portrait ~4:5 (real estate teaser)
    fx: -0.32, fy: -0.26, width: 210, height: 263, rotate: 3, depth: 1,
  },
  {
    id: "w2-chart-bl", wave: 2, type: "chart",
    fx: -0.35, fy: 0.20, width: 150, height: 100, rotate: -5, depth: 3,
  },
  {
    id: "w2-img-tr", wave: 2, type: "image",
    src: "/hero7.webp",
    // hero3: portrait ~4:5 (leather goods)
    fx: 0.35, fy: -0.28, width: 200, height: 250, rotate: -6, depth: 1,
  },
  {
    id: "w2-icon-tr", wave: 2, type: "icon", Icon: Activity,
    fx: 0.25, fy: -0.15, width: 50, height: 50, rotate: 8, depth: 4,
  },
  {
    id: "w2-folder-bc", wave: 2, type: "folder", title: "Fonts",
    avatars: [
      "/hero8.webp",
    ],
    fx: -0.05, fy: 0.35, width: 100, height: 80, rotate: -3, depth: 2,
  },
  {
    id: "w2-img-br", wave: 2, type: "image",
    src: "/hero10.webp",
    // hero4: portrait ~4:5 (perfume dark)
    fx: 0.28, fy: 0.28, width: 200, height: 250, rotate: 4, depth: 1,
  },
];

// ─── Renderers for different card types ───────────────────────────────────────
function CardRenderer({ card }: { card: CardDef }) {
  switch (card.type) {
    case "image":
      return (
        <div style={{
          width: card.width, height: card.height,
          borderRadius: 16, overflow: "hidden",
          boxShadow: "0 12px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
          border: "2px solid rgba(255,255,255,1)",
          background: "#fff", position: "relative"
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={card.src} alt={card.label || "Card"} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
          {card.label && (
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 12px 10px", background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}>
              <span style={{ fontSize: 10, fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "0.16em" }}>{card.label}</span>
            </div>
          )}
        </div>
      );

    case "chart":
      return (
        <div style={{
          width: card.width, height: card.height,
          borderRadius: 16, overflow: "hidden", position: "relative",
          boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
          border: "1px solid rgba(255,255,255,0.6)",
          background: "rgba(255,255,255,0.45)",
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)"
        }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }} />
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M -5,80 C 15,80 25,50 45,60 C 65,70 80,30 105,20" fill="none" stroke="#FF4400" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "folder":
      return (
        <div style={{ position: "relative", paddingTop: 16 }}>
          {card.avatars && (
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", display: "flex", zIndex: 2 }}>
              {card.avatars.map((src, i) => (
                <img key={i} src={src} alt="Avatar" style={{
                  width: 32, height: 32, borderRadius: 4, objectFit: "cover",
                  border: "2px solid #fff",
                  marginLeft: i > 0 ? -12 : 0,
                  transform: `rotate(${i % 2 === 0 ? -4 : 4}deg)`
                }} />
              ))}
            </div>
          )}
          <div style={{
            width: card.width, height: card.height,
            borderTopLeftRadius: 0, borderTopRightRadius: 16, borderBottomLeftRadius: 16, borderBottomRightRadius: 16,
            boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
            border: "1px solid rgba(255,255,255,0.6)",
            background: "rgba(255,255,255,0.45)",
            backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
            display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 12
          }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(0,0,0,0.7)" }}>{card.title}</span>
          </div>
        </div>
      );

    case "input":
      return (
        <div style={{
          width: card.width,
          borderRadius: 999, display: "flex", alignItems: "center", padding: 6,
          boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
          border: "1px solid rgba(255,255,255,0.7)",
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)"
        }}>
          <span style={{ flex: 1, paddingLeft: 16, fontSize: 12, fontWeight: 500, color: "rgba(0,0,0,0.6)" }}>{card.title}</span>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#111", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ArrowUp size={14} color="#fff" strokeWidth={3} />
          </div>
        </div>
      );

    case "icon":
      const Icon = card.Icon!;
      return (
        <div style={{
          width: card.width, height: card.height,
          borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
          border: "1px solid rgba(255,255,255,0.6)",
          background: "rgba(255,255,255,0.45)",
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)"
        }}>
          <Icon size={22} color="#111" />
        </div>
      );

    case "text":
      return (
        <div style={{
          width: card.width, padding: 20,
          borderRadius: 16,
          boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
          border: "1px solid rgba(255,255,255,0.6)",
          background: "rgba(255,255,255,0.45)",
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)"
        }}>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: "#111", marginBottom: 8 }}>{card.title}</h4>
          <p style={{ fontSize: 11, color: "rgba(0,0,0,0.65)", lineHeight: 1.6 }}>{card.content}</p>
        </div>
      );
  }
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const sectionRef = useRef<HTMLElement>(null);
  const dotRevealRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const W = window.innerWidth;
    const H = window.innerHeight;

    // ── Master timeline ───────────────────────────────────────────────────────
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "+=400%", // Restrict the scroll animation distance to 400vh
        scrub: 2.5, // Increased scrub for much smoother catch-up effect
      },
    });

    // ── Initial setup & Animation ─────────────────────────────────────────────
    CARDS.forEach((card, index) => {
      const el = cardRefs.current.get(card.id);
      if (!el) return;

      const finalX = card.fx * W;
      const finalY = card.fy * H;
      // We drift them far outwards so they physically leave the screen
      const driftX = finalX * 2.8;
      const driftY = finalY * 2.8;

      const spinDirection = card.fx > 0 ? 15 : -15;

      // Small organic stagger so they don't move as perfectly flat planes
      const stagger = (index % 5) * 0.015;

      if (card.wave === 0) {
        // Wave 0 (Foreground)
        gsap.set(el, {
          x: finalX, y: finalY,
          xPercent: -50, yPercent: -50,
          scale: 1, opacity: 1,
          rotate: card.rotate,
          zIndex: 50 + (card.depth || 0),
          force3D: true,
        });

        // Phase 1: Foreground to Off-screen
        tl.to(el, {
          scale: 1.5,
          x: driftX, y: driftY,
          rotate: card.rotate + spinDirection,
          duration: 0.33,
          ease: "none",
        }, 0 + stagger);
        tl.to(el, {
          opacity: 0,
          duration: 0.1,
          ease: "none",
        }, 0.23 + stagger);
      }
      else if (card.wave === 1) {
        // Wave 1 (Midground)
        gsap.set(el, {
          x: finalX * 0.2, y: finalY * 0.2,
          xPercent: -50, yPercent: -50,
          scale: 0.2, opacity: 0,
          rotate: card.rotate - 10,
          zIndex: 40 + (card.depth || 0),
          force3D: true,
        });

        // Phase 1: Midground to Foreground (Reaches original size exactly halfway)
        tl.to(el, {
          scale: 1,
          x: finalX, y: finalY,
          rotate: card.rotate,
          duration: 0.33,
          ease: "none",
        }, 0 + stagger);
        tl.to(el, {
          opacity: 1,
          duration: 0.1,
          ease: "none",
        }, 0 + stagger);

        // Phase 2: Foreground to Off-screen
        tl.to(el, {
          scale: 1.5,
          x: driftX, y: driftY,
          rotate: card.rotate + spinDirection,
          duration: 0.33,
          ease: "none",
        }, 0.33 + stagger);
        tl.to(el, {
          opacity: 0,
          duration: 0.1,
          ease: "none",
        }, 0.56 + stagger);
      }
      else if (card.wave === 2) {
        // Wave 2 (Background)
        gsap.set(el, {
          x: 0, y: 0,
          xPercent: -50, yPercent: -50,
          scale: 0.0, opacity: 0,
          rotate: card.rotate - 20,
          zIndex: 30 + (card.depth || 0),
          force3D: true,
        });

        // Phase 1: Background to Midground
        tl.to(el, {
          scale: 0.2,
          x: finalX * 0.2, y: finalY * 0.2,
          rotate: card.rotate - 10,
          opacity: 0,
          duration: 0.33,
          ease: "none",
        }, 0 + stagger);

        // Phase 2: Midground to Foreground (Reaches original size exactly halfway)
        tl.to(el, {
          scale: 1,
          x: finalX, y: finalY,
          rotate: card.rotate,
          duration: 0.33,
          ease: "none",
        }, 0.33 + stagger);
        tl.to(el, {
          opacity: 1,
          duration: 0.1,
          ease: "none",
        }, 0.33 + stagger);

        // Phase 3: Foreground to Off-screen
        tl.to(el, {
          scale: 1.5,
          x: driftX, y: driftY,
          rotate: card.rotate + spinDirection,
          duration: 0.33,
          ease: "none",
        }, 0.66 + stagger);
        tl.to(el, {
          opacity: 0,
          duration: 0.1,
          ease: "none",
        }, 0.89 + stagger);
      }
    });

    tl.to({}, { duration: 0.01 }, 1.0);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  // ── Mouse-tracking: dot spotlight mask + card parallax ──────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let rafId: number;
    let lerpX = 0;
    let lerpY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      // Position relative to section for dot mask
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      if (dotRevealRef.current) {
        dotRevealRef.current.style.setProperty("--mx", `${relX}px`);
        dotRevealRef.current.style.setProperty("--my", `${relY}px`);
      }
      // Normalized offset from center (-0.5 to 0.5) for parallax
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      };
    };

    const tick = () => {
      // Lerp toward target — easing factor 0.06 gives silky smoothness
      lerpX += (mouseRef.current.x - lerpX) * 0.06;
      lerpY += (mouseRef.current.y - lerpY) * 0.06;

      if (parallaxRef.current) {
        // Move opposite to cursor, max ±20px
        parallaxRef.current.style.transform =
          `translate(${-lerpX * 40}px, ${-lerpY * 40}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    section.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    // 600vh height + margin-bottom -100vh = 500vh effective height.
    // The first 400vh plays the animation (end: +=400%), the last 100vh is for the next section to slide over it!
    <div ref={wrapperRef} style={{ height: "600vh", position: "relative", marginBottom: "-100vh", zIndex: 0 }}>
      <section
        id="hero"
        ref={sectionRef}
        aria-label="Hero"
        style={{
          position: "sticky", top: 0, height: "100dvh", width: "100%", overflow: "hidden",
          background: "linear-gradient(160deg, #f5f5f3 0%, #ededeb 50%, #f0f0ee 100%)",
        }}
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
            // CSS custom properties default to centre; updated on mousemove
            WebkitMaskImage: "radial-gradient(circle 280px at var(--mx, 50%) var(--my, 50%), black 0%, transparent 100%)",
            maskImage: "radial-gradient(circle 280px at var(--mx, 50%) var(--my, 50%), black 0%, transparent 100%)",
          } as React.CSSProperties}
        />

        {/* Edge vignette — very subtle feather only at corners */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 50%, rgba(240,240,238,0.25) 100%)",
          pointerEvents: "none", zIndex: 1,
        }} />


        {/* ── Card layer (wrapped for mouse parallax) ──────────────────────────── */}
        <div
          ref={parallaxRef}
          style={{
            position: "absolute", inset: 0,
            willChange: "transform",
            // transition adds gentle lag on mouse leave
            transition: "transform 0.1s linear",
          }}
        >
          {CARDS.map((card) => (
            <div
              key={card.id}
              ref={(el) => { if (el) cardRefs.current.set(card.id, el); }}
              style={{
                position: "absolute", top: "50%", left: "50%",
                willChange: "transform, opacity",
              }}
            >
              <CardRenderer card={card} />
            </div>
          ))}
        </div>

        {/* ── Static Center Content (Always on top) ────────────────────────────── */}
        <div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 100, pointerEvents: "none",
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
              maxWidth: 680, padding: "56px 48px", pointerEvents: "auto",
            }}
          >
            {/* Badge pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 16px", borderRadius: 999, border: "1px solid rgba(0,0,0,0.1)",
                background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", marginBottom: 28,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#0044ff", animation: "pulse 2s infinite", display: "block", flexShrink: 0 }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "#444", letterSpacing: "0.02em" }}>Surat&apos;s most referred digital agency</span>
              <Link href="/about" style={{ fontSize: 12, fontWeight: 700, color: "#0044ff", textDecoration: "none" }}>Learn more</Link>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.2rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#111", margin: "0 0 18px 0" }}
            >
              Build your<br /><span style={{ color: "#111" }}>brand system</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#666", lineHeight: 1.65, marginBottom: 32, maxWidth: 440 }}
            >
              Premium web experiences, brand identities, and growth strategies orchestrated for brands that demand excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}
            >
              <Link
                href="/contact"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", borderRadius: 10, border: "1.5px solid rgba(0,0,0,0.18)", background: "transparent", color: "#111", fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "all 0.2s ease", letterSpacing: "0.01em" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.18)"; }}
              >
                Talk to VYCE experts
              </Link>
              <Link
                href="/portfolio"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", borderRadius: 10, background: "#111", color: "#fff", fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "all 0.2s ease", letterSpacing: "0.01em" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#222"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#111"; }}
              >
                View our work<ArrowRight size={15} />
              </Link>
            </motion.div>


          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
      `}</style>
    </div>
  );
}
