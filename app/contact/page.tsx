"use client";

import React from "react";
import SectionCard from "@/components/ui/SectionCard";
import MagneticButton from "@/components/ui/MagneticButton";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  { icon: <Mail size={22} strokeWidth={1.25} />, title: "Email", value: "hello@vyce.studio", href: "mailto:hello@vyce.studio" },
  { icon: <Phone size={22} strokeWidth={1.25} />, title: "Phone", value: "+1 (555) 000-VYCE", href: "tel:+15550000000" },
  { icon: <MapPin size={22} strokeWidth={1.25} />, title: "Studios", value: "San Francisco · New York · Lisbon", href: "#" },
];

const faq = [
  {
    q: "What does an engagement usually look like?",
    a: "Most projects begin with a 2-week discovery and creative direction sprint, followed by parallel design and build tracks. You will see working UI weekly, not static PDFs.",
  },
  {
    q: "Do you work with in-house teams?",
    a: "Yes — we often embed with product and brand teams, contribute to your design system, and document handoff so internal engineers stay unblocked.",
  },
  {
    q: "How fast do you respond?",
    a: "We reply to new business inquiries within two business days. If you are mid-launch, note it in the subject line and we will prioritize.",
  },
];

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Demo only — wire your API here.)");
  };

  return (
    <div className="px-6 pb-28 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="max-w-3xl pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">Contact us</p>
          <h1 className="mt-5 text-4xl font-bold uppercase tracking-tighter text-foreground md:text-6xl lg:text-7xl">
            Let&apos;s <span className="font-playfair lowercase text-primary">talk</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/55 md:text-lg">
            Share the problem space, timeline, and what success looks like for your stakeholders. We will follow up with
            a concise plan — recommended team shape, milestones, and a transparent estimate range.
          </p>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-12 lg:col-span-5">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-muted/30 text-foreground/80">
                  {info.icon}
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground/40">{info.title}</p>
                  <a href={info.href} className="mt-1 block text-lg font-semibold text-foreground hover:text-primary">
                    {info.value}
                  </a>
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-border bg-muted/20 p-8">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-primary" strokeWidth={1.25} />
                <div>
                  <p className="text-sm font-semibold text-foreground">Office hours</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/50">
                    Monday–Friday, 9am–6pm PT / ET. Lisbon pod covers EU-friendly windows for standups.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-3 border-t border-border pt-6">
                <MessageCircle className="mt-0.5 h-5 w-5 text-primary" strokeWidth={1.25} />
                <div>
                  <p className="text-sm font-semibold text-foreground">Need a faster thread?</p>
                  <p className="mt-2 text-sm text-foreground/50">
                    Mention your launch date in the message — we route urgent requests to producers the same day.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-foreground/40">FAQ</p>
              <div className="mt-6 space-y-8">
                {faq.map((item) => (
                  <div key={item.q}>
                    <p className="text-sm font-semibold text-foreground">{item.q}</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/50">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/portfolio"
              className="text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground/45 hover:text-primary"
            >
              View selected work →
            </Link>
          </div>

          <SectionCard className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground/40">Name</label>
                  <input
                    type="text"
                    placeholder="Alex Rivera"
                    className="border-b border-border bg-transparent pb-3 text-base font-medium outline-none transition-colors focus:border-primary"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground/40">Company</label>
                  <input
                    type="text"
                    placeholder="Studio / brand"
                    className="border-b border-border bg-transparent pb-3 text-base font-medium outline-none transition-colors focus:border-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground/40">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="border-b border-border bg-transparent pb-3 text-base font-medium outline-none transition-colors focus:border-primary"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground/40">
                  Project details
                </label>
                <textarea
                  placeholder="Goals, timeline, links, budget band if known..."
                  rows={5}
                  className="resize-none border-b border-border bg-transparent pb-3 text-base font-medium outline-none transition-colors focus:border-primary"
                  required
                />
              </div>

              <MagneticButton>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full bg-foreground px-12 py-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-background transition-colors hover:bg-primary"
                >
                  Send message
                  <Send size={18} strokeWidth={1.25} />
                </button>
              </MagneticButton>
            </form>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
