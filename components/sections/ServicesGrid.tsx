"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// ─── Service Data ────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    index: "01",
    title: "Brand Identity & Package Design",
    tag: "Research & Strategy",
    desc: "Your logo looks like you paid $5 on Fiverr. We build brand identities that walk into the room and immediately disrespect everyone else's.",
    accent: "#0044FF",
    bg: "#EEF0FF",
    href: "/services/branding",
    image: "/hero1.webp",
  },
  {
    index: "02",
    title: "Social Media Management",
    tag: "Content & Growth",
    desc: "Platform-aware, audience-first content that earns real attention — not just a calendar someone fills.",
    accent: "#FF3C78",
    bg: "#FFF0F5",
    href: "/services/social-media-management",
    image: "/hero2.webp",
  },
  {
    index: "03",
    title: "Website Design & Development",
    tag: "Web & Dev",
    desc: "Fast, mobile-first, SEO-ready websites that look premium AND convert.",
    accent: "#7C3AED",
    bg: "#F0EDFF",
    href: "/services/web-experiences",
    image: "/hero3.webp",
  },
  {
    index: "04",
    title: "Performance Marketing",
    tag: "Paid Media",
    desc: "₹2L into ₹20L for one client. Every rupee tracked. Every ad tested.",
    accent: "#059669",
    bg: "#EDFFF7",
    href: "/services/digital-growth",
    image: "/hero4.webp",
  },
  {
    index: "05",
    title: "UI/UX Design",
    tag: "Product Design",
    desc: "Research-backed, friction-free interfaces built for humans — not robots.",
    accent: "#D97706",
    bg: "#FFFBF0",
    href: "/services/product-design",
    image: "/hero5.webp",
  },
  {
    index: "06",
    title: "SEO",
    tag: "Organic Growth",
    desc: "Page 2 of Google is a cemetery. Long-term growth that compounds while you sleep. Let's get you to Page 1.",
    accent: "#EC4899",
    bg: "#FFF0F8",
    href: "/services/seo",
    image: "/hero6.webp",
  },
] as const;

// ─── Large Card UI (pure markup, no animation — GSAP handles it) ─────────────────
function LargeCardUI({ service }: { service: (typeof SERVICES)[0] }) {
  return (
    <div
      className="group"
      style={{
        background: "#111111",
        borderRadius: 22,
        padding: "clamp(22px, 2.8vw, 36px)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        height: "100%",
      }}
    >
      {/* Top row: number + arrow */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-end", marginBottom: 18, position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: "1rem", fontWeight: 900, color: "rgba(255,255,255,0.3)", letterSpacing: "-0.04em" }}>
            {service.index}
          </span>
          <Link
            href={service.href}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              border: "1.5px solid rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 15,
              color: "#fff",
              textDecoration: "none",
              transition: "all 0.25s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = service.accent;
              el.style.borderColor = service.accent;
              el.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.borderColor = "rgba(255,255,255,0.25)";
              el.style.color = "#fff";
            }}
          >
            ↗
          </Link>
        </div>
      </div>

      {/* Title */}
      <h2
        style={{
          fontSize: "clamp(1.5rem, 2.2vw, 2.8rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          color: "#ffffff",
          lineHeight: 1.1,
          marginBottom: 12,
          position: "relative",
          zIndex: 1,
        }}
      >
        {service.title}
      </h2>

      {/* Desc */}
      <p
        className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[200px] group-hover:opacity-100 group-hover:mb-6"
        style={{
          fontSize: "clamp(0.76rem, 0.95vw, 0.92rem)",
          color: "rgba(255,255,255,0.9)",
          lineHeight: 1.7,
          fontWeight: 500,
          position: "relative",
          zIndex: 2,
          maxWidth: 300,
        }}
      >
        {service.desc}
      </p>

      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.image}
          alt={service.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* Subtle dark gradient overlay to ensure white text is readable while keeping image vibrant */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 100%)" }} />
      </div>

      {/* CTA */}
      <div style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.15)", position: "relative", zIndex: 2 }}>
        <Link
          href={service.href} 
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: service.accent,
            textDecoration: "none",
            transition: "gap 0.25s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = "14px"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = "8px"; }}
        >
          Explore Service →
        </Link>
      </div>
    </div>
  );
}

// ─── Image Card UI (pure markup) ─────────────────────────────────────────────────
function ImageCardUI({ service, wide = false }: { service: (typeof SERVICES)[number]; wide?: boolean }) {
  return (
    <div
      className="group"
      style={{
        background: "#111111",
        borderRadius: 22,
        padding: wide ? "clamp(16px, 2.5vh, 28px)" : "clamp(14px, 2vh, 24px)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        height: "100%",
      }}
    >
      {/* Index number */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: wide ? 12 : 8, position: "relative", zIndex: 2 }}>
        <span style={{ fontSize: wide ? "1.2rem" : "1rem", fontWeight: 900, color: "rgba(255,255,255,0.3)", letterSpacing: "-0.04em" }}>
          {service.index}
        </span>
      </div>

      {/* Text block */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", zIndex: 2, position: "relative", maxWidth: wide ? "70%" : "85%" }}>
        <h3
          style={{
            fontSize: wide ? "clamp(1.1rem, 1.8vw, 1.6rem)" : "clamp(0.95rem, 1.4vw, 1.15rem)",
            fontWeight: 900,
            letterSpacing: "-0.025em",
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: wide ? 8 : 6,
          }}
        >
          {service.title}
        </h3>

        <p className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[200px] group-hover:opacity-100 group-hover:mb-3" style={{ fontSize: "clamp(0.76rem, 0.9vw, 0.88rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.65, fontWeight: 500 }}>
          {service.desc}
        </p>

        <div style={{ marginTop: "auto", paddingTop: 8 }}>
          <Link
            href={service.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 9,
              fontWeight: 800,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: service.accent,
              textDecoration: "none",
              transition: "gap 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = "12px"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = "6px"; }}
          >
            Explore →
          </Link>
        </div>
      </div>

      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.image}
          alt={service.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)" }} />
      </div>
    </div>
  );
}

// ─── ServicesGrid — GSAP Scroll-Pinned Sequential Reveal ────────────────────────
export default function ServicesGrid() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const card01Ref = useRef<HTMLDivElement>(null);
  const card02Ref = useRef<HTMLDivElement>(null);
  const card03Ref = useRef<HTMLDivElement>(null);
  const card04Ref = useRef<HTMLDivElement>(null);
  const card05Ref = useRef<HTMLDivElement>(null);
  const card06Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const section = sectionRef.current;
    if (!wrapper || !section) return;

    // ── Set all animated elements invisible before GSAP takes over ──────────────
    const animatables = [
      headerRef.current,
      card01Ref.current,
      card02Ref.current,
      card03Ref.current,
      card04Ref.current,
      card05Ref.current,
      card06Ref.current,
    ].filter(Boolean);

    gsap.set(animatables, { opacity: 0, y: 60, scale: 0.97 });

    // ── Fade out hero center text as this section enters ─────────────────────────
    const heroCenterContent = document.querySelector("#hero > div[style*='z-index: 100']") ||
      document.querySelector("#hero .hero-center") ||
      document.querySelector("#hero > div:last-child");
    if (heroCenterContent) {
      gsap.to(heroCenterContent, {
        opacity: 0,
        y: -40,
        ease: "power2.in",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        },
      });
    }

    // ── Master timeline driven by scroll ─────────────────────────────────────────
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.4,
      },
    });

    const ease = "power2.out";

    tl
      // 1. Header / title
      .to(headerRef.current, { opacity: 1, y: 0, scale: 1, duration: 1, ease }, 0)

      // 2. Card 01 — Brand Identity (large left)
      .to(card01Ref.current, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease }, 1)

      // 3. Cards 02 + 03 — top right row (staggered slightly)
      .to(card02Ref.current, { opacity: 1, y: 0, scale: 1, duration: 1, ease }, 2.2)
      .to(card03Ref.current, { opacity: 1, y: 0, scale: 1, duration: 1, ease }, 2.5)

      // 4. Cards 04 + 05 — middle right row
      .to(card04Ref.current, { opacity: 1, y: 0, scale: 1, duration: 1, ease }, 3.5)
      .to(card05Ref.current, { opacity: 1, y: 0, scale: 1, duration: 1, ease }, 3.8)

      // 5. Card 06 — SEO full width
      .to(card06Ref.current, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease }, 4.8)



      // 7. Hold at end so user can read everything
      .to({}, { duration: 1.5 });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  return (
    // Tall wrapper — gives scroll room for sequential reveals
    // zIndex: 1 places it above the hero wrapper (which is zIndex: 0)
    <div
      ref={wrapperRef}
      style={{ height: "900vh", position: "relative", zIndex: 1 }}
    >
      {/* Sticky container — always fills the viewport */}
      <section
        ref={sectionRef}
        id="what-we-do"
        aria-label="What We Do"
        style={{
          position: "sticky",
          top: 0,
          height: "100dvh",
          overflow: "hidden",
          background: "transparent",
          display: "flex",
          flexDirection: "column",
          padding: "clamp(16px, 2vw, 22px)",
          boxSizing: "border-box",
          gap: 0,
        }}
      >

        {/* ── Section Header ── */}
        <div
          ref={headerRef}
          style={{
            flexShrink: 0,
            marginBottom: "clamp(10px, 1.4vw, 18px)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.5em", textTransform: "uppercase", color: "#0044FF" }}>
              What We Do
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.2vw, 3.6rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#0a0a0a",
              lineHeight: 1,
              display: "flex",
              alignItems: "baseline",
              flexWrap: "wrap",
              gap: "0.22em",
            }}
          >
            Six ways we make
            <em style={{ fontStyle: "italic", color: "#0044FF", fontWeight: 900 }}>your brand</em>
            undeniable.
          </h2>
        </div>

        {/* ── Bento Grid ──
            Col 1 (rows 1-2): 01 Brand Identity
            Col 2, Row 1:     02 Social Media
            Col 3, Row 1:     03 Website Design
            Col 2, Row 2:     04 Performance Marketing
            Col 3, Row 2:     05 UI/UX Design
            Cols 1-3, Row 3:  06 SEO (wide)
        */}
        <div
          className="sg-grid"
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr 1fr",
            gridTemplateRows: "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 0.9fr)",
            gap: "clamp(8px, 1vw, 14px)",
            minHeight: 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* 01 — Brand Identity */}
          <div
            ref={card01Ref}
            style={{ gridColumn: "1", gridRow: "1 / span 2" }}
          >
            <LargeCardUI service={SERVICES[0]} />
          </div>

          {/* 02 — Social Media */}
          <div
            ref={card02Ref}
            style={{ gridColumn: "2", gridRow: "1" }}
          >
            <ImageCardUI service={SERVICES[1]} />
          </div>

          {/* 03 — Website Design */}
          <div
            ref={card03Ref}
            style={{ gridColumn: "3", gridRow: "1" }}
          >
            <ImageCardUI service={SERVICES[2]} />
          </div>

          {/* 04 — Performance Marketing */}
          <div
            ref={card04Ref}
            style={{ gridColumn: "2", gridRow: "2" }}
          >
            <ImageCardUI service={SERVICES[3]} />
          </div>

          {/* 05 — UI/UX Design */}
          <div
            ref={card05Ref}
            style={{ gridColumn: "3", gridRow: "2" }}
          >
            <ImageCardUI service={SERVICES[4]} />
          </div>

          {/* 06 — SEO: full width */}
          <div
            ref={card06Ref}
            style={{ gridColumn: "1 / span 3", gridRow: "3" }}
          >
            <ImageCardUI service={SERVICES[5]} wide />
          </div>
        </div>

        {/* ── Responsive overrides ── */}
        <style>{`
          @media (max-width: 1023px) {
            .sg-grid {
              grid-template-columns: 1fr 1fr !important;
              grid-template-rows: auto !important;
            }
            .sg-grid > div:nth-child(1) { grid-column: 1 / span 2 !important; grid-row: 1 !important; min-height: 260px; }
            .sg-grid > div:nth-child(2) { grid-column: 1 !important; grid-row: 2 !important; min-height: 190px; }
            .sg-grid > div:nth-child(3) { grid-column: 2 !important; grid-row: 2 !important; min-height: 190px; }
            .sg-grid > div:nth-child(4) { grid-column: 1 !important; grid-row: 3 !important; min-height: 190px; }
            .sg-grid > div:nth-child(5) { grid-column: 2 !important; grid-row: 3 !important; min-height: 190px; }
            .sg-grid > div:nth-child(6) { grid-column: 1 / span 2 !important; grid-row: 4 !important; min-height: 140px; }
          }
          @media (max-width: 767px) {
            .sg-grid {
              grid-template-rows: 1.2fr 1fr 1fr 0.8fr !important;
            }
            .sg-grid > div {
              min-height: 0 !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
