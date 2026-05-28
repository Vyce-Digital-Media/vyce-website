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
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=82&auto=format",
    fx: -0.36, fy: -0.28, width: 220, height: 280, rotate: -4, depth: 1,
  },
  {
    id: "w0-img-bl", wave: 0, type: "image",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=82&auto=format",
    fx: -0.32, fy: 0.24, width: 200, height: 260, rotate: 4, depth: 1,
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
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=82&auto=format",
    fx: 0.38, fy: -0.29, width: 200, height: 260, rotate: 5, depth: 1,
  },
  {
    id: "w0-img-br", wave: 0, type: "image",
    src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=82&auto=format",
    fx: 0.35, fy: 0.22, width: 210, height: 240, rotate: -3, depth: 1,
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
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
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
    src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=82&auto=format",
    fx: -0.28, fy: -0.24, width: 180, height: 180, rotate: -2, depth: 1,
  },
  {
    id: "w1-folder-l", wave: 1, type: "folder", title: "Product",
    avatars: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80",
    ],
    fx: -0.36, fy: 0.15, width: 120, height: 80, rotate: -4, depth: 3,
  },
  {
    id: "w1-img-bl", wave: 1, type: "image",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=82&auto=format",
    fx: -0.26, fy: 0.22, width: 200, height: 160, rotate: 5, depth: 1,
  },
  {
    id: "w1-img-tr", wave: 1, type: "image",
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=82&auto=format",
    fx: 0.28, fy: -0.25, width: 180, height: 180, rotate: 6, depth: 1,
  },
  {
    id: "w1-text-tr", wave: 1, type: "text",
    title: "Q2 Campaign",
    content: "The campaign will target adults aged 25 to 54 who drink coffee and have strong opinions about typefaces. Mostly confirmed.",
    fx: 0.22, fy: -0.10, width: 170, rotate: -3, depth: 4,
  },
  {
    id: "w1-img-br", wave: 1, type: "image",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=82&auto=format",
    fx: 0.30, fy: 0.24, width: 190, height: 260, rotate: -4, depth: 1,
  },

  // ════════ WAVE 2 (Emerges on further scroll) ════════
  {
    id: "w2-img-tl", wave: 2, type: "image",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=82&auto=format",
    fx: -0.32, fy: -0.26, width: 220, height: 160, rotate: 3, depth: 1,
  },
  {
    id: "w2-chart-bl", wave: 2, type: "chart",
    fx: -0.35, fy: 0.20, width: 150, height: 100, rotate: -5, depth: 3,
  },
  {
    id: "w2-img-tr", wave: 2, type: "image",
    src: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=400&q=82&auto=format",
    fx: 0.35, fy: -0.28, width: 200, height: 150, rotate: -6, depth: 1,
  },
  {
    id: "w2-icon-tr", wave: 2, type: "icon", Icon: Activity,
    fx: 0.25, fy: -0.15, width: 50, height: 50, rotate: 8, depth: 4,
  },
  {
    id: "w2-folder-bc", wave: 2, type: "folder", title: "Fonts",
    avatars: [
      "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=100&q=80",
    ],
    fx: -0.05, fy: 0.35, width: 100, height: 80, rotate: -3, depth: 2,
  },
  {
    id: "w2-img-br", wave: 2, type: "image",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=82&auto=format",
    fx: 0.28, fy: 0.28, width: 190, height: 190, rotate: 4, depth: 1,
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
    CARDS.forEach((card) => {
      const el = cardRefs.current.get(card.id);
      if (!el) return;

      const finalX = card.fx * W;
      const finalY = card.fy * H;
      // High drift multiplier to send them completely off-screen
      const driftX = finalX * 2.8;
      const driftY = finalY * 2.8;

      const zIndex = (card.wave * -10) + 50 + (card.depth || 0);
      const spinDirection = card.fx > 0 ? 15 : -15; // Natural outward spin

      if (card.wave === 0) {
        // Wave 0 starts fully visible at its spread position
        gsap.set(el, {
          x: finalX, y: finalY,
          xPercent: -50, yPercent: -50,
          scale: 1, opacity: 1,
          rotate: card.rotate,
          zIndex: zIndex,
          force3D: true, // Hardware acceleration for smoother pixels
        });

        // Drift outward off-screen and fade out to avoid clutter
        tl.to(el, {
          x: driftX, y: driftY,
          opacity: 0,
          rotate: card.rotate + spinDirection,
          duration: 0.3,
          ease: "power2.inOut",
        }, 0);
      }
      else if (card.wave === 1) {
        // Wave 1 starts hidden in the center
        gsap.set(el, {
          x: 0, y: 0,
          xPercent: -50, yPercent: -50,
          scale: 0.2, opacity: 0,
          rotate: card.rotate - 10,
          zIndex: zIndex,
          force3D: true,
        });

        // 1. Emerge very slowly
        tl.to(el, {
          x: finalX, y: finalY,
          scale: 1, opacity: 1,
          rotate: card.rotate,
          duration: 0.3,
          ease: "power3.out", // Extra smooth pop-out
        }, 0.1); // Peaks around 0.4

        // 2. Drift completely off-screen
        tl.to(el, {
          x: driftX, y: driftY,
          opacity: 0,
          rotate: card.rotate + spinDirection,
          duration: 0.3,
          ease: "power2.inOut",
        }, 0.55); // Starts leaving at 0.55 (stays on screen from 0.4 to 0.55)
      }
      else if (card.wave === 2) {
        // Wave 2 starts hidden in the center
        gsap.set(el, {
          x: 0, y: 0,
          xPercent: -50, yPercent: -50,
          scale: 0.2, opacity: 0,
          rotate: card.rotate + 10,
          zIndex: zIndex,
          force3D: true,
        });

        // 1. Emerge very slowly
        tl.to(el, {
          x: finalX, y: finalY,
          scale: 1, opacity: 1,
          rotate: card.rotate,
          duration: 0.3,
          ease: "power3.out",
        }, 0.65); // Enter only after Wave 1 has started leaving to prevent overlap

        // 2. Drift just slightly outward at the very end to stay visible
        tl.to(el, {
          x: finalX * 1.3, y: finalY * 1.3,
          rotate: card.rotate + (spinDirection * 0.4),
          duration: 0.05,
          ease: "sine.inOut",
        }, 0.95);
      }
    });

    tl.to({}, { duration: 0.01 }, 1.0);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  return (
    // 600vh height + margin-bottom -100vh = 500vh effective height.
    // The first 400vh plays the animation (end: +=400%), the last 100vh is for the next section to slide over it!
    <div ref={wrapperRef} style={{ height: "600vh", position: "relative", marginBottom: "-100vh", zIndex: 0 }}>
      <section
        id="hero"
        aria-label="Hero"
        style={{
          position: "sticky", top: 0, height: "100dvh", width: "100%", overflow: "hidden",
          background: "linear-gradient(160deg, #f5f5f3 0%, #ededeb 50%, #f0f0ee 100%)",
        }}
      >
        {/* Dot grid */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0,
        }} />

        {/* Top + bottom vignette */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(240,240,238,0.6) 100%)",
          pointerEvents: "none", zIndex: 1,
        }} />

        {/* Centre spotlight */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 45% 45% at 50% 50%, rgba(245,245,243,0.95) 25%, transparent 100%)",
          pointerEvents: "none", zIndex: 11,
        }} />

        {/* ── Card layer ────────────────────────────────────────────────────────── */}
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
              // Glassmorphism box to keep text highly legible as cards slide behind
              background: "rgba(255, 255, 255, 0.45)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderRadius: "40px",
              border: "1px solid rgba(255, 255, 255, 0.7)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
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
