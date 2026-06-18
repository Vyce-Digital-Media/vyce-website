"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

// ─── Data ─────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@vycedigitalmedia.com",
    href: "mailto:hello@vycedigitalmedia.com",
    accent: "rgba(0,68,255,0.15)",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91 XXXXX XXXXX",
    accent: "rgba(0,200,100,0.15)",
  },
  {
    icon: MapPin,
    title: "Studios",
    value: "903 Luxuria Business Hub, Surat, Gujarat, India",
    href: "#",
    accent: "rgba(255,100,80,0.15)",
  },
];

const faqItems = [
  {
    q: "What actually happens on the first call?",
    a: "Thirty minutes. No pitch. No 12-slide deck. We ask about your business, your goals, what's been tried, what bombed. You ask whatever you want. Then we both decide honestly if it makes sense to work together.",
  },
  {
    q: "Do you work with brands outside India?",
    a: "Yes, actively. We've worked with international brands and have communication and delivery structured to work across time zones. Distance hasn't been a problem.",
  },
  {
    q: "Do you lock clients into long-term contracts?",
    a: "Retainer services work best over 3–6 months because that's where compounding results kick in. Project work is scoped to a defined timeline. We'll recommend what makes sense and explain exactly why — you decide.",
  },
  {
    q: "We got burned by an agency before. Why should we trust you?",
    a: "Honestly? Don't take our word for it. Every agency says they're different. The most honest proof we can give you is our referral rate — most of our new clients come from existing ones. Talk to us first. Judge after.",
  },
];

const projectTypes = [
  "Branding & Identity",
  "Social Media Management",
  "Website Design & Development",
  "Performance Marketing",
  "UI/UX & Product Design",
  "SEO",
  "Not sure yet - need guidance",
  "Multiple services",
];

const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 – ₹2,00,000",
  "₹2,00,000 – ₹5,00,000",
  "₹5,00,000+",
  "Let's discuss on the call",
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

function FAQItem({ item, isOpen, onToggle }: { item: typeof faqItems[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <FadeIn delay={0}>
      <div className={`border-t border-black/[0.08] transition-colors duration-300 ${isOpen ? "border-primary/30" : ""}`}>
        <button onClick={onToggle} className="flex w-full items-start justify-between gap-6 py-6 text-left cursor-pointer">
          <span className={`text-sm font-semibold leading-snug transition-colors duration-300 md:text-base ${isOpen ? "text-[#111]" : "text-black/60"}`}>{item.q}</span>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-0.5 flex-shrink-0 transition-colors duration-300 ${isOpen ? "text-primary" : "text-black/30"}`}>
            <ChevronDown size={16} strokeWidth={1.5} />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div key="ans" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
              <p className="pb-7 text-sm leading-relaxed text-black/60 font-medium">{item.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

// ─── Contact Info Card ─────────────────────────────────────────────────────

function InfoCard({ info, index }: { info: typeof contactInfo[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = info.icon;
  return (
    <FadeIn delay={index * 0.1}>
      <a
        href={info.href}
        className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-6 transition-all duration-500 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Icon */}
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-black/[0.08] transition-all duration-500 group-hover:border-primary/40"
          style={{ background: hovered ? info.accent : "rgba(0,0,0,0.02)" }}>
          <Icon size={20} strokeWidth={1.25} className="text-black/60 group-hover:text-primary transition-colors duration-300" />
        </div>
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-black/40">{info.title}</p>
          <p className="mt-1.5 text-base font-semibold text-[#111] transition-colors duration-300">{info.value}</p>
        </div>
        {/* Arrow */}
        <ArrowUpRight size={14} className="absolute right-5 top-5 text-black/20 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        {/* Glow */}
        <motion.div className="absolute inset-0 rounded-2xl pointer-events-none" animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.4 }}
          style={{ background: `radial-gradient(ellipse at 0% 50%, ${info.accent}, transparent 70%)` }} />
      </a>
    </FadeIn>
  );
}

// ─── Form ──────────────────────────────────────────────────────────────────

const inputClass = "w-full rounded-xl border border-black/[0.08] bg-black/[0.02] px-5 py-4 text-sm font-medium text-[#111] outline-none transition-all duration-300 focus:border-primary/50 focus:bg-white placeholder:text-black/40 hover:border-black/[0.15]";
const labelClass = "block text-[10px] font-bold uppercase tracking-[0.2em] text-black/60 mb-2.5 ml-2";

function ContactForm() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-black/[0.08] bg-white p-8 md:p-12 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-1/4 -right-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="relative z-10 flex flex-col items-center gap-6 py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <Send size={24} className="text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-[#111]">Message Sent!</h3>
              <p className="mt-3 text-sm text-black/60 font-medium leading-relaxed max-w-sm">
                We&apos;ll be in touch within two business days. Check your inbox.
              </p>
            </div>
            <button onClick={() => setSubmitted(false)}
              className="text-[9px] font-bold uppercase tracking-[0.4em] text-black/40 hover:text-primary transition-colors duration-300 cursor-pointer">
              Send another →
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-9">
            {/* Name + Company */}
            <div className="grid gap-6 md:grid-cols-2">
              <FadeIn delay={0.05}>
                <label className={labelClass}>Your Name</label>
                <input type="text" placeholder="Alex Rivera" className={inputClass} required />
              </FadeIn>
              <FadeIn delay={0.1}>
                <label className={labelClass}>Brand / Company Name</label>
                <input type="text" placeholder="Studio / brand" className={inputClass} />
              </FadeIn>
            </div>

            {/* Email + WhatsApp */}
            <div className="grid gap-6 md:grid-cols-2">
              <FadeIn delay={0.15}>
                <label className={labelClass}>Email Address</label>
                <input type="email" placeholder="you@company.com" className={inputClass} required />
              </FadeIn>
              <FadeIn delay={0.18}>
                <label className={labelClass}>WhatsApp Number</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" className={inputClass} required />
              </FadeIn>
            </div>

            {/* Project type */}
            <FadeIn delay={0.2}>
              <label className={labelClass}>What are you looking for?</label>
              <div className="flex flex-wrap gap-2 pt-1">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(selectedType === type ? null : type)}
                    className={`rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer ${selectedType === type
                      ? "bg-primary text-white border-primary shadow-md"
                      : "border border-black/10 bg-black/[0.02] text-black/60 hover:border-black/[0.2] hover:text-[#111] hover:bg-black/[0.04]"
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </FadeIn>

            {/* Budget Range */}
            <FadeIn delay={0.22}>
              <label className={labelClass}>Rough budget range (helps us scope properly)</label>
              <div className="flex flex-wrap gap-2 pt-1">
                {budgetRanges.map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setSelectedBudget(selectedBudget === range ? null : range)}
                    className={`rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer ${selectedBudget === range
                      ? "bg-primary text-white border-primary shadow-md"
                      : "border border-black/10 bg-black/[0.02] text-black/60 hover:border-black/[0.2] hover:text-[#111] hover:bg-black/[0.04]"
                      }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </FadeIn>

            {/* Message */}
            <FadeIn delay={0.25}>
              <label className={labelClass}>Tell us about your project or goal</label>
              <textarea
                placeholder="Goals, timeline, links, budget band if known..."
                rows={5}
                className={`${inputClass} resize-none`}
                required
              />
            </FadeIn>

            {/* Submit */}
            <FadeIn delay={0.3} className="pt-2">
              <button type="submit"
                className="group inline-flex w-full md:w-auto items-center justify-center gap-5 rounded-xl bg-[#111] px-14 py-5 text-[12px] font-black uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-primary hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg">
                Send message
                <Send size={18} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
            </FadeIn>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Sweeping light */}
      <motion.div animate={{ x: ["-120%", "220%"] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatDelay: 4 }}
        className="pointer-events-none absolute -top-1/2 left-0 h-[200%] w-1/3 bg-gradient-to-r from-transparent via-black/[0.03] to-transparent skew-x-[-25deg]" />
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const dotRevealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current as HTMLElement | null;
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
    <div ref={sectionRef} className="relative bg-[#f5f5f0] text-[#111] overflow-hidden">
      {/* Dot grid — base faint layer */}
      <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1.5px, transparent 1.5px)", backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0 }} />
      {/* Dot grid — bright revealed layer */}
      <div ref={dotRevealRef} aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.55) 1.5px, transparent 1.5px)", backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0, WebkitMaskImage: "radial-gradient(circle 280px at var(--mx, 50%) var(--my, 50%), black 0%, transparent 100%)", maskImage: "radial-gradient(circle 280px at var(--mx, 50%) var(--my, 50%), black 0%, transparent 100%)" } as React.CSSProperties} />
      {/* Edge vignette */}
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 50%, rgba(245,245,240,0.4) 100%)", pointerEvents: "none", zIndex: 1 }} />

      {/* ── MAIN CONTENT ──────────────────────────────────────────── */}
      <section className="relative z-10 px-6 pt-32 pb-20 md:px-12 md:pt-40 lg:px-20">
        <div className="mx-auto max-w-[1500px] flex flex-col gap-20 lg:gap-32">

          {/* Top: form */}
          <div className="w-full">
            <FadeIn delay={0.1} className="mb-12 flex flex-col items-center text-center">
              <div>
                <RevealLine><h2 className="text-4xl font-black uppercase tracking-tighter leading-[0.9] md:text-6xl lg:text-7xl text-[#111]">Tell us what you&apos;re</h2></RevealLine>
                <RevealLine delay={0.07}><h2 className="text-4xl font-satoshi pb-2 font-normal italic text-primary leading-[0.9] md:text-6xl lg:text-7xl">actually trying to fix.</h2></RevealLine>
                <FadeIn delay={0.2} className="mt-6 flex justify-center">
                  <p className="text-sm md:text-base text-black/60 font-medium leading-relaxed max-w-lg text-center">
                    No 47-field forms. Just the basics — so we can show up to the first call actually knowing something about you.
                  </p>
                </FadeIn>
              </div>
            </FadeIn>
            <div className="mx-auto w-full">
              <ContactForm /> 
            </div>
          </div>

          <div className="w-full h-px bg-black/[0.08]" />

          {/* Bottom: details */}
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 mx-auto w-full">
            {/* Column A: Contact & Office Hours */}
            <div className="flex flex-col gap-12">
              <div className="space-y-4">
                <FadeIn><p className="text-[9px] font-bold uppercase tracking-[0.4em] text-black/40 mb-6">Reach us directly</p></FadeIn>
                {contactInfo.map((info, i) => <InfoCard key={i} info={info} index={i} />)}
              </div>

              <FadeIn delay={0.2}>
                <div className="rounded-2xl border border-black/[0.08] bg-white p-7 space-y-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-black/[0.08] bg-black/[0.02]">
                      <Clock size={16} strokeWidth={1.25} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#111]">Office hours</p>
                      <p className="mt-2 text-sm leading-relaxed text-black/60 font-medium">
                        Monday–Saturday, 10am–7pm IST (We usually respond faster than that.)
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-black/[0.06] pt-6 flex items-start gap-4">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-black/[0.08] bg-black/[0.02]">
                      <MessageCircle size={16} strokeWidth={1.25} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#111]">Urgent launch?</p>
                      <p className="mt-2 text-sm text-black/60 font-medium">Mention your launch date in the message — we route urgent requests to producers the same day.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Column B: Map & FAQ */}
            <div className="flex flex-col gap-12">
              <FadeIn delay={0.25}>
                <div className="relative overflow-hidden rounded-2xl border border-black/[0.08] h-64 w-full bg-black/[0.03] mt-2 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.135854977098!2d72.7596652!3d21.1469911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d80f5d96493%3A0x5f79790a213bd724!2sLuxuria%20Business%20Hub!5e0!3m2!1sen!2sin!4v1776070850466!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f5f5f0] to-transparent pointer-events-none z-10" />
                  <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#f5f5f0] to-transparent pointer-events-none z-10 opacity-30" />
                </div>
              </FadeIn>

              <div>
                <FadeIn><p className="text-[9px] font-bold uppercase tracking-[0.4em] text-black/40 mb-2">FAQ</p></FadeIn>
                {faqItems.map((item, i) => (
                  <FAQItem
                    key={item.q}
                    item={item}
                    isOpen={openFaqIndex === i}
                    onToggle={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  />
                ))}
                <div className="border-t border-black/[0.08]" />
              </div>

              <FadeIn delay={0.1}>
                <Link href="/portfolio" className="group inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-black/50 hover:text-primary transition-colors duration-300">
                  View selected work
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.15] transition-all duration-300 group-hover:border-primary group-hover:translate-x-1 group-hover:bg-primary/10">
                    <ArrowUpRight size={13} />
                  </span>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
