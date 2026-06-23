"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  Send,
  CodeXml,
} from "lucide-react";
import { cn } from "@/lib/utils";
import MagneticButton from "@/components/ui/MagneticButton";

// ─── Data ──────────────────────────────────────────────────────────────────

const services = [
  {
    num: "01",
    title: "Social Media Management",
    icon: Send,
    iconColor: "rgba(255, 60, 0, 0.15)",
    themeColor: "#ff5000",
    bgTo: "#ffd6c2",
    summary:
      "Posting without a strategy is just noise. We make yours impossible to scroll past.",
    description:
      "We run social media like a precision operation — engineered content, zero cringe, and a distribution engine that makes the algorithm work for you. Strategy, creation, and community management. You focus on the business. We handle the audience.",
    deliverables: [
      "Monthly content strategy & calendar",
      "Reel & short-form video production",
      "Carousel & static creative design",
      "Caption & copy writing",
      "Community management & engagement",
    ],
    href: "/services/social-media-management",
  },
  {
    num: "02",
    title: "Website Design & Development",
    icon: CodeXml,
    iconColor: "rgba(0, 200, 255, 0.15)",
    themeColor: "#00aaff",
    bgTo: "#c2edff",
    summary:
      "A beautiful website that doesn't convert is just expensive decoration. We fix that.",
    description:
      "We build WebGL-powered, fast, and meticulously crafted websites that turn visitors into customers. Not a template. Not a theme. A high-performance digital product engineered to make every second a visitor spends on it count.",
    deliverables: [
      "UX strategy & sitemap",
      "UI design (desktop + mobile)",
      "Frontend & backend development",
      "On-page SEO foundations",
      "Speed & performance optimization",
    ],
    href: "/services/web-experiences",
  },
  {
    num: "03",
    title: "Performance Marketing",
    icon: BarChart,
    iconColor: "rgba(255, 200, 0, 0.15)",
    themeColor: "#cc9900",
    bgTo: "#fff0ad",
    summary:
      "Ad spend without tracking is just a donation. We make every rupee accountable.",
    description:
      "We run ROI-obsessed, data-driven campaigns — testing every creative, cutting what underperforms, and scaling what wins. No vanity metrics. No inflated reports. Just measurable revenue growth and a strategy that compounds over time.",
    deliverables: [
      "Campaign strategy & audience mapping",
      "Ad copy & creative production (static + video)",
      "Campaign setup, targeting & launch",
      "A/B testing & ongoing optimization",
      "Weekly performance reporting",
    ],
    href: "/services/digital-growth",
  },
  {
    num: "04",
    title: "Branding & Identity",
    icon: Palette,
    iconColor: "rgba(255, 60, 0, 0.15)",
    themeColor: "#ff3300",
    bgTo: "#ffcfc2",
    summary:
      "Your brand is what people say about you when you're not in the room. Make it count.",
    description:
      "We build identities that command attention from the first impression. Typography, colour systems, tone of voice — every detail engineered to position you exactly where you deserve to be, and make sure your audience never forgets you.",
    deliverables: [
      "Brand strategy & positioning",
      "Logo & visual identity system",
      "Color palette, typography & design tokens",
      "Brand voice & messaging guide",
      "Brand guidelines document",
    ],
    href: "/services/branding",
  },
  {
    num: "05",
    title: "UI/UX & PRODUCT DESIGN",
    icon: Smartphone,
    iconColor: "rgba(180, 0, 255, 0.15)",
    themeColor: "#aa00ff",
    bgTo: "#ecc2ff",
    summary:
      "Great design is invisible. Your users should just feel it working.",
    description:
      "We design interfaces, app flows, and dashboards that are intuitive enough to disappear — so your users stay focused on the outcome, not the interface. From wireframe to high-fidelity, we solve the hard design problems so you don't have to.",
    deliverables: [
      "User research & persona mapping",
      "UX flows & wireframes",
      "High-fidelity UI design",
      "Interactive prototyping",
      "Usability testing & iteration",
    ],
    href: "/services/product-design",
  },


  {
    num: "06",
    title: "SEO",
    icon: Globe,
    iconColor: "rgba(0, 200, 255, 0.15)",
    themeColor: "#0088ff",
    bgTo: "#c2e0ff",
    summary:
      "Page 1 doesn't happen by accident. It takes strategy, authority, and relentless execution.",
    description:
      "We do technical, content-led, authority-building SEO that compounds over time. Fixing what's broken under the hood, creating content that ranks for the right keywords, and building the kind of domain authority that keeps you at the top — long after the campaign ends.",
    deliverables: [
      "Full SEO audit & strategy",
      "Technical SEO fixes",
      "On-page optimization",
      "Keyword research & content strategy",
      "Link building & authority building",
    ],
    href: "/services/seo",
  },
];

const phases = [
  {
    step: "01",
    title: "Project-Based",
    detail:
      "We take a single, clear objective and engineer a high-impact solution. No hand-holding, no pointless meetings—just an outcome your industry will be forced to notice. Clean, contained, and executed flawlessly.",
  },
  {
    step: "02",
    title: "Retainer",
    detail:
      "We become your dedicated growth engine. Monthly strategy grounded in numbers, not vibes, combined with relentless execution. We build the kind of compounding momentum that turns brands into market leaders.",
  },
  {
    step: "03",
    title: "Consultation",
    detail:
      "Get our unfiltered perspective on why your current strategy is failing. We diagnose the wreckage and hand you a ruthless roadmap to fix it. No upselling. No fluff. Just data-backed clarity.",
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

// ─── Horizontal Service Gallery ─────────────────────────────────────────────────

function ServiceGalleryCard({ service, index }: { service: typeof services[0], index: number }) {
  return (
    <Link
      href={service.href}
      className="horizontal-card relative block cursor-pointer w-[85vw] md:w-[70vw] lg:w-[60vw] h-full flex-shrink-0 rounded-[40px] overflow-hidden border border-white/10 group shadow-2xl"
    >
      {/* Background Parallax Image */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="parallax-bg absolute inset-0 w-[130%] -left-[15%] h-full bg-cover bg-center" style={{ backgroundImage: `url(/hero${(index % 9) + 1}.webp)` }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full pointer-events-none">
        {/* Top: Title */}
        <div className="w-full p-8 md:p-14">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white md:text-6xl lg:text-7xl leading-[0.95] max-w-3xl drop-shadow-2xl">
            {service.title}
          </h2>
        </div>

        {/* Bottom: Description (Full width, fades in/out based on center position) */}
        <div className="service-text w-full mt-auto opacity-0 translate-y-[40px] bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent pt-24 pb-8 px-8 md:pt-40 md:pb-14 md:px-14">
          <p className="text-sm md:text-lg lg:text-xl leading-relaxed text-white/95 font-medium tracking-tight drop-shadow-md w-full">
            {service.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

function HorizontalServiceGallery({ servicesList, titleNode }: { servicesList: typeof services; titleNode: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".horizontal-card");

      const getScrollAmount = () => {
        let scrollWidth = scrollWrapperRef.current?.scrollWidth || 0;
        return scrollWidth - window.innerWidth;
      };

      const tween = gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: scrollSectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${getScrollAmount()}`,
        }
      });

      // Parallax effect and text animations inside the cards
      cards.forEach((card, i) => {
        const img = card.querySelector('.parallax-bg');
        if (img) {
          gsap.fromTo(img,
            { xPercent: -15 },
            {
              xPercent: 15,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: tween,
                start: "left right",
                end: "right left",
                scrub: true,
              }
            }
          );
        }

        const textBlock = card.querySelector('.service-text');
        if (textBlock) {
          gsap.to(textBlock, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: "center 75%", // Triggers when the card center hits 75% of viewport width
              end: "center 25%",   // Triggers leave when card center passes 25% of viewport width
              toggleActions: "play reverse play reverse", // Fades out before the next card comes in
            }
          });
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, [servicesList]);

  return (
    <div ref={containerRef} className="relative w-full bg-zinc-950 overflow-hidden pb-32">
      {/* Title */}
      <div className="pt-20 md:pt-24 pb-8 md:pb-12 w-full flex justify-center text-center">
        {titleNode}
      </div>

      <div ref={scrollSectionRef} className="h-[100dvh] md:h-screen flex items-center overflow-hidden bg-zinc-950">
        <div ref={scrollWrapperRef} className="flex h-[70vh] md:h-[75vh] px-[5vw] gap-6 md:gap-12 w-[fit-content] items-center">
          {servicesList.map((service, index) => (
            <ServiceGalleryCard key={service.num} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
const portfolioImages = [
  '/portfolio/bb-smm/1.webp',
  '/portfolio/pesto-smm/1.webp',
  '/portfolio/bb-smm/2.webp',
  '/portfolio/pesto-smm/2.webp',
  '/portfolio/bb-smm/3.webp',
  '/portfolio/pesto-smm/3.webp',
  '/portfolio/bb-smm/4.webp',
  '/portfolio/pesto-smm/4.webp',
  '/portfolio/bb-smm/5.webp',
  '/portfolio/pesto-smm/5.webp',
  '/portfolio/bb-smm/6.webp',
  '/portfolio/pesto-smm/6.webp',
];

function FloatingCard({ conf, i, springX, springY, scrollYProgress }: { conf: any, i: number, springX: any, springY: any, scrollYProgress: any }) {
  // Scroll Explosion mappings:
  // 0 -> 0.25: Cards explode outwards from the exact center (0vw, 0vh) to their scatter positions
  const moveX = useTransform(scrollYProgress, [0, 0.25], ["0vw", conf.x]);
  const moveY = useTransform(scrollYProgress, [0, 0.25], ["0vh", conf.y]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.25], [0, conf.rotate]);

  // Scale mapping: start tiny/invisible, grow to normal scale, and stay there!
  const zoomScale = useTransform(scrollYProgress, [0, 0.25], [0.2, conf.scale]);
  // Fade in at start and stay there
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Mouse Parallax based on depth
  const parallaxX = useTransform(springX, [-1, 1], [-conf.depth, conf.depth]);
  const parallaxY = useTransform(springY, [-1, 1], [-conf.depth, conf.depth]);

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform-style-3d z-0"
      style={{
        x: moveX,
        y: moveY,
        rotateZ: rotateZ,
        scale: zoomScale,
        opacity: opacity,
        translateZ: conf.depth * 2,
      }}
    >
      <motion.div
        className="rounded-[16px] shadow-[0_30px_60px_rgba(0,0,0,0.3)] bg-white p-2 md:p-3 transform-style-3d origin-center"
        style={{
          width: "clamp(160px, 16vw, 280px)",
          aspectRatio: "3/4",
          x: parallaxX,
          y: parallaxY,
        }}
      >
        {/* Continuous subtle zero-gravity floating */}
        <motion.div
          className="w-full h-full origin-center"
          animate={{
            y: [0, -15, 0],
            rotateZ: [0, 3, 0]
          }}
          transition={{
            duration: 5 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={conf.src} alt="" className="w-full h-full object-cover rounded-[10px] md:rounded-[12px]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function CrazyFloatingHero({ scrollYProgress }: { scrollYProgress: any }) {
  const [mounted, setMounted] = React.useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  React.useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Scatter positions distributed across the entire screen, including the center
  const scatterConfig = [
    { src: portfolioImages[0], x: "-30vw", y: "-30vh", rotate: -15, scale: 1.1, depth: 80 },  // Top Left
    { src: portfolioImages[1], x: "0vw", y: "-35vh", rotate: 10, scale: 0.9, depth: 40 },  // Top Center
    { src: portfolioImages[2], x: "35vw", y: "-25vh", rotate: -12, scale: 1.1, depth: 100 }, // Top Right
    { src: portfolioImages[3], x: "-40vw", y: "5vh", rotate: -22, scale: 0.85, depth: 60 }, // Far Left Mid
    { src: portfolioImages[4], x: "-10vw", y: "5vh", rotate: 15, scale: 1.0, depth: 50 },  // Center Left
    { src: portfolioImages[5], x: "10vw", y: "-5vh", rotate: -8, scale: 1.05, depth: 90 }, // Center Right
    { src: portfolioImages[6], x: "-35vw", y: "35vh", rotate: 20, scale: 0.95, depth: 110 },// Bottom Left
    { src: portfolioImages[7], x: "-5vw", y: "35vh", rotate: -18, scale: 1.1, depth: 30 },  // Bottom Center
    { src: portfolioImages[8], x: "25vw", y: "25vh", rotate: 12, scale: 0.9, depth: 120 }, // Mid Bottom Right
    { src: portfolioImages[9], x: "40vw", y: "15vh", rotate: -25, scale: 0.8, depth: 40 },  // Far Right Mid
  ];

  // Map mouse movement to a dramatic 3D scene tilt
  const sceneRotateX = useTransform(springY, [-1, 1], [15, -15]);
  const sceneRotateY = useTransform(springX, [-1, 1], [-15, 15]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 perspective-[1000px]">
      <motion.div
        className="relative w-full h-full transform-style-3d"
        style={{ rotateX: sceneRotateX, rotateY: sceneRotateY }}
      >
        {scatterConfig.map((conf, i) => (
          <FloatingCard key={i} conf={conf} i={i} springX={springX} springY={springY} scrollYProgress={scrollYProgress} />
        ))}
      </motion.div>
    </div>
  );
}

export default function ServicesPage() {
  const [hoveredStep, setHoveredStep] = React.useState<string | null>(null);
  // Hero parallax
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const smoothHeroScroll = useSpring(heroScroll, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });
  // Text moves up slightly and fades out instantly as cards begin to explode (0 to 0.05)
  const heroY = useTransform(smoothHeroScroll, [0, 0.25], [0, -40]);
  const heroOpacity = useTransform(smoothHeroScroll, [0, 0.05], [1, 0]);

  // Interactive dots for hero
  const dotRevealRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const section = heroRef.current;
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

  // Process section scroll-driven line fill
  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: processScroll } = useScroll({
    target: processRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineScaleY = useTransform(processScroll, [0, 1], [0, 1]);

  return (
    <div className="bg-background text-foreground">

      {/* ── 00. HERO ──────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-[200vh] bg-[#f5f5f0]"
      >
        <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden">
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

          <CrazyFloatingHero scrollYProgress={smoothHeroScroll} />

          {/* TOP: Centered Text Content */}
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 w-full h-full pointer-events-none"
          >

            {/* Headline */}
            <div className="space-y-1 max-w-4xl mx-auto">
              <RevealLine>
                <motion.h1
                  style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#111", margin: "0 0 18px 0" }}
                >
                  <span>Built for brands that</span><br />
                  <span style={{ color: "#111" }}>refuse to be ignored.</span>
                </motion.h1>
              </RevealLine>
            </div>

            {/* Subtext */}
            <FadeIn delay={0.3}>
              <motion.p
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)", color: "#666", lineHeight: 1.65, marginBottom: 36, maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}
              >
                We don't sell packages. We sell outcomes. From strategy and branding to high-performance code and campaigns — executed without hand-holding or pointless meetings. You bring the ambition. We bring the execution.
              </motion.p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.45}>
              <motion.div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", pointerEvents: "auto" }}>
                <Link
                  href="/contact"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 12, background: "#111", color: "#fff", fontSize: 15, fontWeight: 700, textDecoration: "none", transition: "all 0.2s ease", letterSpacing: "0.01em" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#222"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#111"; }}
                >
                  Work With Us
                </Link>
                <Link
                  href="/portfolio"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 12, border: "1.5px solid rgba(0,0,0,0.18)", background: "transparent", color: "#111", fontSize: 15, fontWeight: 700, textDecoration: "none", transition: "all 0.2s ease", letterSpacing: "0.01em" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.18)"; }}
                >
                  View Work <ArrowRight size={16} />
                </Link>
              </motion.div>
            </FadeIn>
          </motion.div>
        </div>
      </section>

      {/* ── 01. SERVICE CARDS ─────────────────────────────────────── */}
      <section className="relative bg-zinc-950 overflow-hidden">
        <HorizontalServiceGallery
          servicesList={services}
          titleNode={
            <div className="mb-8 flex justify-center w-full text-center">
              <RevealLine>
                <h2 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] md:text-7xl flex flex-wrap items-center justify-center gap-4">
                  What We Do <span className="font-satoshi font-normal italic text-primary mb-2 md:mb-0">Best.</span>
                </h2>
              </RevealLine>
            </div>
          }
        />
      </section>

      {/* ── 02. PROCESS ───────────────────────────────────────────── */}
      <section
        ref={processRef}
        className="relative px-6 py-20 md:py-32 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-[1600px] grid gap-16 md:gap-24 lg:grid-cols-[1fr_1.2fr] items-start">
          {/* Sticky left */}
          <div className="lg:sticky lg:top-48 lg:h-fit space-y-12">
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Engagements</p>
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] md:text-7xl">
                How <br />
                <span className="font-satoshi font-normal italic text-primary/80">We Work</span> <br />
                (Without Excuses).
              </h2>
            </div>
            <FadeIn delay={0.2}>
              <p className="max-w-md text-lg text-foreground/40 font-medium leading-relaxed">
                The internet is full of brands that look okay and do nothing. We refuse to add to the pile. We diagnose what's broken and execute until the results speak for themselves. Three engagement models. All lethal.
              </p>
            </FadeIn>

            {/* Mini step map */}
            <div className="hidden lg:flex flex-col gap-5">
              {phases.map((p) => {
                const isHovered = hoveredStep === p.step;
                return (
                  <div
                    key={p.step}
                    className={cn(
                      "flex items-center gap-5 transition-all duration-500",
                      isHovered ? "opacity-100 translate-x-4" : "opacity-30"
                    )}
                  >
                    <span className={cn(
                      "font-mono text-xs font-bold transition-colors duration-500",
                      isHovered ? "text-primary" : "text-foreground"
                    )}>
                      {p.step}
                    </span>
                    <div className={cn(
                      "h-px transition-all duration-500 origin-left",
                      isHovered ? "bg-primary w-20 scale-x-110" : "bg-foreground w-16"
                    )} />
                    <span className={cn(
                      "text-xs uppercase tracking-widest transition-colors duration-500",
                      isHovered ? "text-primary" : "text-foreground"
                    )}>
                      {p.title}
                    </span>
                  </div>
                );
              })}
            </div>
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

            <div className="space-y-20 md:space-y-48 lg:pl-16">
              {phases.map((phase, i) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => setHoveredStep(phase.step)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="group relative flex flex-col gap-10"
                >
                  {/* Dot on the line */}
                  <div className="absolute -left-[68px] top-4 hidden h-3 w-3 rounded-full border-2 border-primary/30 bg-background transition-all duration-500 group-hover:border-primary group-hover:bg-primary/20 lg:block" />

                  <div className="flex items-baseline gap-6">
                    <span className="font-satoshi text-6xl text-primary/20 md:text-8xl transition-colors duration-500 group-hover:text-primary">
                      {phase.step}
                    </span>
                    <div className="h-px flex-1 bg-white/10 transition-colors group-hover:bg-primary/40" />
                  </div>

                  <div className="space-y-8">
                    <h3 className="text-3xl font-black uppercase tracking-tighter md:text-5xl lg:text-6xl">
                      {phase.title}
                    </h3>
                    <p className="max-w-xl text-lg md:text-xl text-foreground/50 leading-relaxed font-medium">
                      {phase.detail}
                    </p>
                    <div className="h-px w-0 bg-primary/30 transition-all duration-700 group-hover:w-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


      </section>

      {/* ── 03. ENGINEERING CALLOUT ───────────────────────────────── */}
      <section className="relative px-6 py-16 md:py-24 md:px-12 lg:px-20 bg-zinc-950/30 overflow-hidden">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/[0.07] bg-gradient-to-br from-[#050a15] to-[#01020a] p-8 md:p-12 lg:p-20">
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
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                      Not sure where to start?
                      <br className="md:hidden" />
                      <span className="font-satoshi font-normal italic text-primary">
                        That&apos;s exactly why we exist.
                      </span>
                    </h2>
                  </RevealLine>

                  <FadeIn delay={0.2}>
                    <p className="text-lg leading-relaxed text-foreground/45 md:text-xl">
                      Dump your mess on us. We'll sort through the wreckage, figure out exactly what's holding you back, and build a high-performance experience your competitors will spend months trying to reverse-engineer. We build things that actually do something.
                    </p>
                  </FadeIn>

                </div>

                <FadeIn delay={0.4} className="flex-shrink-0">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-4 rounded-full bg-primary px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(0,68,255,0.3)]"
                  >
                    Talk to us (we're nice)
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
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


      </section>

    </div>
  );
}
