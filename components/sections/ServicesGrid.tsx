"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import StatsBox from "@/components/sections/StatsBox";

gsap.registerPlugin(ScrollTrigger);

// ─── Service Data ──────────────────────────────────────────────────────────────
const SERVICES = [
  {
    index: "01",
    title: "Branding & Identity",
    tag: "Brand Strategy",
    line: "Your brand is the first impression, the last memory, and everything in between. We build brand identities that are strategic before they're aesthetic. Logo, color system, typography, brand voice — crafted to show up consistently and confidently across every touchpoint.",
    detail: "Logo · Color System · Typography · Brand Voice · Guidelines",
    accent: "#FF3C00",
    href: "/services/branding",
  },
  {
    index: "02",
    title: "Social Media",
    tag: "Content & Growth",
    line: "Posting for the sake of posting is a waste of everyone's time. We don't do that. Platform-aware, audience-first content strategy — not just a calendar filler. Reels, carousels, captions, community management — handled with an actual plan behind every post.",
    detail: "Reels · Carousels · Captions · Community · Strategy",
    accent: "#00C8FF",
    href: "/services/social-media-management",
  },
  {
    index: "03",
    title: "Website Design",
    tag: "Web & Dev",
    line: "Your website is either your best salesperson or your biggest liability. Choose. We design and build websites that look premium and convert visitors into leads. Fast, mobile-first, SEO-ready, and built to actually do something for your business.",
    detail: "UX Design · Next.js Dev · SEO · Speed · Conversions",
    accent: "#B400FF",
    href: "/services/web-experiences",
  },
  {
    index: "04",
    title: "Performance Marketing",
    tag: "Paid Media",
    line: "We turned ₹2 lakhs into ₹20 lakhs for one client. Your turn. Meta and Google campaigns built around real outcomes — sales, leads, bookings. Every rupee tracked. Every campaign optimised. No vanity metrics, no vague brand awareness.",
    detail: "Meta Ads · Google Ads · ROAS Optimisation · Retargeting",
    accent: "#00FF96",
    href: "/services/digital-growth",
  },
  {
    index: "05",
    title: "UI/UX Design",
    tag: "Product Design",
    line: "If users have to figure out your app, you've already lost them. Interfaces that feel intuitive — for apps, dashboards, products, and packaging. Research-backed, user-tested, friction-free.",
    detail: "Wireframes · Prototypes · Design Systems · User Testing",
    accent: "#FFC800",
    href: "/services/product-design",
  },
  {
    index: "06",
    title: "SEO",
    tag: "Organic Growth",
    line: "Page 2 of Google is basically not existing. Let's fix that. Technical SEO, on-page optimisation, content strategy, and link building — so you rank for searches that actually matter to your business. Long-term, sustainable visibility.",
    detail: "Technical SEO · Content · Link Building · Rankings",
    accent: "#FF0064",
    href: "/services/seo",
  },
] as const;

// ─── ServicesGrid ──────────────────────────────────────────────────────────────
export default function ServicesGrid() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  // Per-service element refs
  const indexRefs = useRef<HTMLDivElement[]>([]);
  const titleRefs = useRef<HTMLDivElement[]>([]);
  const lineRefs = useRef<HTMLDivElement[]>([]);
  const tagRefs = useRef<HTMLDivElement[]>([]);
  const detailRefs = useRef<HTMLDivElement[]>([]);
  // Wrapper for each right-side service card — used to toggle pointer-events
  const stackItemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const section = sectionRef.current;
    if (!wrapper || !section) return;

    const N = SERVICES.length;

    // ── Set initial states BEFORE building timeline ────────────────────────────
    SERVICES.forEach((_, i) => {
      const first = i === 0;

      // Left number: slides vertically
      gsap.set(indexRefs.current[i], {
        yPercent: first ? 0 : 120,
        opacity: first ? 1 : 0,
        force3D: true,
      });

      // Right stack items: slide horizontally
      gsap.set(titleRefs.current[i], { xPercent: first ? 0 : 80, opacity: first ? 1 : 0, force3D: true });
      gsap.set(lineRefs.current[i], { xPercent: first ? 0 : 60, opacity: first ? 1 : 0, force3D: true });
      gsap.set(tagRefs.current[i], { xPercent: first ? 0 : 40, opacity: first ? 1 : 0, force3D: true });
      gsap.set(detailRefs.current[i], { xPercent: first ? 0 : 30, opacity: first ? 1 : 0, force3D: true });

      // Pointer events: only the active (first) card should receive events
      if (stackItemRefs.current[i]) {
        stackItemRefs.current[i].style.pointerEvents = first ? "auto" : "none";
      }
    });

    // ── Master timeline ────────────────────────────────────────────────────────
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "bottom bottom", // strictly maps to wrapper height
        scrub: 1.4,
        onUpdate: (self) => {
          // 6.66 represents the total timeline duration in segments (5.16 + 1.5)
          const activeIdx = Math.min(Math.floor(self.progress * 6.66), N - 1);
          dotRefs.current.forEach((dot, i) => {
            if (!dot) return;
            dot.style.background = i === activeIdx ? SERVICES[i].accent : "rgba(255,255,255,0.2)";
            dot.style.transform = i === activeIdx ? "scale(1.6)" : "scale(1)";
          });
          // Only the visible service card should receive pointer events
          stackItemRefs.current.forEach((el, i) => {
            if (!el) return;
            el.style.pointerEvents = i === activeIdx ? "auto" : "none";
          });
        },
      },
    });

    // ── Per-service keyframes ──────────────────────────────────────────────────
    const seg = 1 / N; // each service owns 1/6 of the [0..1] timeline scale

    for (let i = 0; i < N - 1; i++) {
      const outAt = seg * (i + 0.62);
      const inAt = seg * (i + 0.76);
      const next = SERVICES[i + 1];

      // EXIT current service
      tl.to(indexRefs.current[i], { yPercent: -120, opacity: 0, duration: seg * 0.35, ease: "power2.in" }, outAt)
        .to(titleRefs.current[i], { xPercent: -80, opacity: 0, duration: seg * 0.30, ease: "power2.in" }, outAt)
        .to(lineRefs.current[i], { xPercent: -60, opacity: 0, duration: seg * 0.28, ease: "power2.in" }, outAt + seg * 0.03)
        .to(tagRefs.current[i], { xPercent: -40, opacity: 0, duration: seg * 0.24, ease: "power2.in" }, outAt + seg * 0.05)
        .to(detailRefs.current[i], { xPercent: -30, opacity: 0, duration: seg * 0.22, ease: "power2.in" }, outAt + seg * 0.06);

      // ENTER next service
      tl.fromTo(indexRefs.current[i + 1],
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: seg * 0.4, ease: "power3.out" }, inAt)
        .fromTo(titleRefs.current[i + 1],
          { xPercent: 80, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: seg * 0.38, ease: "power3.out" }, inAt + seg * 0.04)
        .fromTo(lineRefs.current[i + 1],
          { xPercent: 60, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: seg * 0.36, ease: "power3.out" }, inAt + seg * 0.07)
        .fromTo(tagRefs.current[i + 1],
          { xPercent: 40, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: seg * 0.32, ease: "power3.out" }, inAt + seg * 0.10)
        .fromTo(detailRefs.current[i + 1],
          { xPercent: 30, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: seg * 0.30, ease: "power3.out" }, inAt + seg * 0.13);

      // Color morphs
      tl.to(blobRef.current, { backgroundColor: next.accent, duration: seg * 0.5, ease: "none" }, outAt)
        .to(accentLineRef.current, { borderColor: next.accent, duration: seg * 0.4, ease: "none" }, outAt);
    }

    // Hold last frame — adding 1.5 segments total.
    // Give SEO 0.5 segments of pure read time, then slide the StatsBox up for 1.0 segment.
    tl.to({}, { duration: seg * 0.5 })
      .fromTo(statsRef.current,
        { yPercent: 100 },
        { yPercent: 0, duration: seg * 1.0, ease: "power3.out" }
      );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${(SERVICES.length + 1.5) * 100}vh`, position: "relative", zIndex: 10 }}
    >
      <section
        ref={sectionRef}
        id="services-showcase"
        aria-label="Our Services"
        style={{
          position: "sticky", top: 0,
          height: "100dvh", width: "100%",
          overflow: "hidden",
          background: "#080808",
          display: "flex",
          flexDirection: "column",
        }}
      >

        {/* Ambient colour blob */}
        <div
          ref={blobRef}
          aria-hidden
          style={{
            position: "absolute",
            width: "70vw", height: "70vw",
            borderRadius: "50%",
            filter: "blur(180px)",
            opacity: 0.12,
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none", zIndex: 0,
            backgroundColor: SERVICES[0].accent,
          }}
        />

        {/* Dot grid */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px", pointerEvents: "none", zIndex: 1,
        }} />

        {/* Eyebrow label */}
        <div style={{ position: "absolute", top: 32, left: 48, display: "flex", alignItems: "center", gap: 12, zIndex: 20 }}>
          <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>What We Do</span>
        </div>

        {/* Full screen accent border */}
        <div
          ref={accentLineRef}
          aria-hidden
          style={{
            position: "absolute", inset: 16,
            border: `2px solid ${SERVICES[0].accent}`, borderRadius: 16, zIndex: 20, pointerEvents: "none"
          }}
        />

        {/* ── Main two-column layout ── */}
        <div style={{
          position: "relative", zIndex: 10,
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          alignItems: "stretch",
          paddingLeft: "clamp(48px, 6vw, 96px)",
          paddingRight: "clamp(48px, 6vw, 96px)",
          gap: "clamp(24px, 4vw, 64px)",
          paddingTop: 60,
          paddingBottom: 60,
        }}>

          {/* ── LEFT: giant number ── */}
          {/*
            Key fix: the container uses flexbox centering (no transform on children).
            GSAP controls yPercent only — no conflicting inline transform.
            overflow:hidden clips numbers that are animating in/out.
          */}
          <div style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",    // clips numbers entering/exiting via yPercent
          }}>
            {SERVICES.map((s, i) => (
              <div
                key={s.index}
                ref={(el) => { if (el) indexRefs.current[i] = el; }}
                style={{
                  // No inline transform — GSAP owns transforms completely
                  position: "absolute",
                  left: 0, right: 0,
                  textAlign: "left",
                  fontSize: "clamp(7rem, 20vw, 20rem)",
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: "-0.06em",
                  userSelect: "none",
                  willChange: "transform, opacity",
                  whiteSpace: "nowrap",
                }}
              >
                {/* Foreground colored number */}
                <div style={{ color: s.accent, position: "relative", zIndex: 1 }}>
                  {s.index}
                </div>
              </div>
            ))}
          </div>

          {/* ── RIGHT: service detail stack ── */}
          {/*
            Same principle: no inline transform on stack items.
            GSAP owns xPercent + opacity. Container is overflow:hidden.
          */}
          <div style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",    // clips content entering/exiting via xPercent
          }}>
            {SERVICES.map((s, i) => (
              <div
                key={s.index}
                ref={(el) => { if (el) stackItemRefs.current[i] = el; }}
                style={{
                  // No inline transform — GSAP owns transforms completely
                  position: "absolute",
                  left: 0, right: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  willChange: "transform, opacity",
                  // pointerEvents managed dynamically in onUpdate
                  pointerEvents: i === 0 ? "auto" : "none",
                }}
              >
                {/* Tag chip */}
                <div
                  ref={(el) => { if (el) tagRefs.current[i] = el; }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "5px 14px", borderRadius: 999,
                    border: `1px solid ${s.accent}40`,
                    background: `${s.accent}12`,
                    marginBottom: 18,
                    width: "fit-content",
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: s.accent, display: "block", flexShrink: 0 }} />
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: s.accent }}>
                    {s.tag}
                  </span>
                </div>

                {/* Service title */}
                <div
                  ref={(el) => { if (el) titleRefs.current[i] = el; }}
                  style={{
                    fontSize: "clamp(1.8rem, 4vw, 4rem)",
                    fontWeight: 900,
                    lineHeight: 1.05,
                    letterSpacing: "-0.03em",
                    color: "#fff",
                    marginBottom: 20,
                  }}
                >
                  {s.title}
                </div>

                {/* Description */}
                <div
                  ref={(el) => { if (el) lineRefs.current[i] = el; }}
                  style={{
                    fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
                    lineHeight: 1.75,
                    color: "rgba(255,255,255,0.45)",
                    maxWidth: 540,
                    marginBottom: 28,
                  }}
                >
                  {s.line}
                </div>

                {/* Detail pills + CTA */}
                <div ref={(el) => { if (el) detailRefs.current[i] = el; }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                    {s.detail.split(" · ").map((item) => (
                      <span
                        key={item}
                        style={{
                          fontSize: 11, fontWeight: 600,
                          padding: "5px 14px", borderRadius: 6,
                          border: "1px solid rgba(255,255,255,0.08)",
                          background: "rgba(255,255,255,0.04)",
                          color: "rgba(255,255,255,0.4)",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={s.href}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      fontSize: 12, fontWeight: 700, letterSpacing: "0.2em",
                      textTransform: "uppercase", color: s.accent,
                      textDecoration: "none", paddingBottom: 3,
                      borderBottom: `1px solid ${s.accent}50`,
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = s.accent; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${s.accent}50`; }}
                  >
                    Explore service →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom nav dots */}
        <div style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          display: "flex", gap: 10, zIndex: 20, alignItems: "center",
        }}>
          {SERVICES.map((s, i) => (
            <div
              key={s.index}
              ref={(el) => { if (el) dotRefs.current[i] = el; }}
              style={{
                width: 6, height: 6, borderRadius: "50%",
                background: i === 0 ? s.accent : "rgba(255,255,255,0.2)",
                transform: i === 0 ? "scale(1.6)" : "scale(1)",
                transition: "background 0.4s, transform 0.4s",
              }}
            />
          ))}
        </div>

        {/* Stats Grid Overlay */}
        <div
          ref={statsRef}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 40,
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%", height: "100%", pointerEvents: "auto" }}>
            <StatsBox />
          </div>
        </div>
      </section>
    </div>
  );
}
