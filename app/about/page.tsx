"use client";

import Image from "next/image";
import Link from "next/link";
import SectionCard from "@/components/ui/SectionCard";
import MagneticButton from "@/components/ui/MagneticButton";

const principles = [
  {
    title: "Clarity first",
    body: "We translate fuzzy goals into measurable outcomes: conversion, comprehension, or craft benchmarks you can defend internally.",
  },
  {
    title: "Systems, not one-offs",
    body: "Components, tokens, and documentation ship with the visuals so your team can evolve the brand without re-opening Figma for every tweak.",
  },
  {
    title: "Performance is polish",
    body: "Luxury is smooth scrolling on real hardware, fonts that do not flash, and interactions that stay above 60fps where it matters.",
  },
];

const milestones = [
  { year: "2018", text: "VYCE opens as a two-person motion and web practice." },
  { year: "2020", text: "First WebGL retainers — editorial sites with real-time product storytelling." },
  { year: "2022", text: "Expanded strategy + product design pod for Series B partners." },
  { year: "2025", text: "Remote-first studio across SF, NYC, and Lisbon with shared design ops." },
];

export default function AboutPage() {
  return (
    <div className="px-6 pb-28 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <SectionCard className="mt-4 flex flex-col gap-14 md:flex-row md:items-center md:gap-20">
          <div className="flex w-full flex-col gap-8 md:w-1/2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">About us</p>
            <h1 className="text-4xl font-bold uppercase tracking-tighter text-foreground md:text-6xl lg:text-7xl">
              We are <span className="font-playfair lowercase text-primary">VYCE</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-foreground/60 md:text-lg">
              A creative agency for teams who want their digital presence to feel as considered as their physical one. We
              blend brand, interface, and motion — then ship with the engineering discipline of a product org.
            </p>
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-foreground px-10 py-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-background transition-colors hover:bg-primary"
              >
                Work with us
              </Link>
            </MagneticButton>
          </div>

          <div className="relative h-[420px] w-full overflow-hidden rounded-2xl md:h-[560px] md:w-1/2">
            <Image
              src="/luxury_agency_about_1775293620761.png"
              alt="VYCE studio atmosphere"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </SectionCard>

        <section className="mt-24 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tighter md:text-4xl">How we think</h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/55 md:text-lg">
              Borrowing from studios like AKQA and Ueno, we run short discovery sprints, align on success metrics, and
              prototype in the medium we are shipping — usually Next.js, Figma, and a living component library. No
              mystery phases, no surprise invoices.
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground/55 md:text-lg">
              Accessibility and internationalization are planned on day one, not patched at launch. We document motion,
              focus order, and content models alongside visual specs.
            </p>
          </div>
          <div className="space-y-8 rounded-3xl border border-border bg-muted/20 p-8 md:p-10">
            {principles.map((p) => (
              <div key={p.title} className="border-b border-border/70 pb-8 last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/50 md:text-base">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-28">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">Timeline</p>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-tighter md:text-4xl">Studio milestones</h2>
          <div className="mt-12 space-y-10 border-l border-border pl-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <span className="absolute -left-[33px] top-1.5 h-2 w-2 rounded-full bg-primary" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">{m.year}</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/55 md:text-base">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-28 rounded-3xl border border-border bg-muted/15 px-8 py-14 md:px-14 md:py-20">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-2xl font-bold uppercase tracking-tighter md:text-3xl">Culture & craft</h2>
              <p className="text-sm leading-relaxed text-foreground/55 md:text-base">
                We are a small senior team — no bait-and-switch decks. Designers code prototypes; engineers join critique;
                producers keep timelines humane. If you want a partner who will challenge briefs kindly and ship with
                receipts, we should talk.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex w-fit text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground underline-offset-8 hover:text-primary hover:underline"
            >
              Explore services →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
