"use client";

import Link from "next/link";
import { Code, Palette, Smartphone, Globe, BarChart, Layers } from "lucide-react";

const services = [
  {
    title: "Branding & identity",
    icon: <Palette className="h-9 w-9 text-primary" strokeWidth={1.15} />,
    description:
      "Positioning, verbal identity, and visual systems that feel confident on billboards and in Figma. We deliver logo suites, color logic, typography stacks, and usage rules your team can enforce.",
    deliverables: ["Brand strategy workshop", "Logo & monogram systems", "Typography & color tokens", "Brand guidelines site or PDF"],
  },
  {
    title: "Web experiences",
    icon: <Globe className="h-9 w-9 text-primary" strokeWidth={1.15} />,
    description:
      "Marketing sites and immersive launches built with Next.js, WebGL, and motion that respects performance budgets. We prototype in-code early so stakeholders react to real physics, not Keynote approximations.",
    deliverables: ["Information architecture", "UI design & component library", "Next.js implementation", "Analytics & SEO foundations"],
  },
  {
    title: "Product design",
    icon: <Smartphone className="h-9 w-9 text-primary" strokeWidth={1.15} />,
    description:
      "Interfaces for complex workflows — dashboards, onboarding, and mobile companion apps. We align UX research, UI craft, and engineering constraints in the same backlog.",
    deliverables: ["UX flows & wireframes", "High-fidelity UI", "Prototypes & usability tests", "Design QA with engineering"],
  },
  {
    title: "Digital growth",
    icon: <BarChart className="h-9 w-9 text-primary" strokeWidth={1.15} />,
    description:
      "Launch narratives, landing systems, and measurement plans. We connect creative to pipeline: UTMs, events, and dashboards your growth team can trust.",
    deliverables: ["Launch messaging", "Landing page systems", "Experimentation backlog", "Reporting templates"],
  },
];

const phases = [
  { step: "01", title: "Immersion", detail: "Stakeholder interviews, analytics review, and competitive landscape." },
  { step: "02", title: "Direction", detail: "Creative territories, moodfilm-style motion tests, and technical proof-of-concepts." },
  { step: "03", title: "Production", detail: "Weekly slices of shippable UI with written rationale and accessibility notes." },
  { step: "04", title: "Launch", detail: "Hardening, documentation, and training so your team owns the roadmap." },
];

export default function ServicesPage() {
  return (
    <div className="px-6 pb-28 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <header className="max-w-3xl pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">Services</p>
          <h1 className="mt-5 text-4xl font-bold uppercase tracking-tighter text-foreground md:text-6xl lg:text-7xl">
            Capabilities <span className="font-playfair lowercase text-primary">end-to-end</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/55 md:text-lg">
            One partner for narrative, interface, motion, and implementation. Engagements are scoped as retainers or
            phased SOWs — always with a visible critical path and shared FigJam / Notion hub.
          </p>
        </header>

        <section className="mt-20 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex flex-col justify-between gap-10 rounded-3xl border border-border bg-muted/15 p-8 transition-colors hover:border-primary/35 md:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="rounded-2xl border border-border bg-background/40 p-3">{service.icon}</div>
                <span className="font-playfair text-3xl text-foreground/15">0{index + 1}</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground">{service.title}</h2>
                <p className="text-sm leading-relaxed text-foreground/55 md:text-base">{service.description}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-foreground/35">Typical deliverables</p>
                <ul className="mt-3 space-y-2 text-sm text-foreground/55">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="text-primary">/</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-28 rounded-3xl border border-border bg-muted/10 px-8 py-14 md:px-14 md:py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">Process</p>
              <h2 className="mt-3 text-3xl font-bold uppercase tracking-tighter md:text-4xl">How engagements run</h2>
            </div>
            <div className="flex items-center gap-2 text-foreground/45">
              <Layers className="h-4 w-4 text-primary" strokeWidth={1.25} />
              <span className="text-xs uppercase tracking-[0.25em]">Inspired by leading product studios</span>
            </div>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {phases.map((p) => (
              <div key={p.step} className="border-t border-border pt-6">
                <p className="font-playfair text-2xl text-primary">{p.step}</p>
                <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/50">{p.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 flex flex-col items-start justify-between gap-8 rounded-3xl border border-dashed border-border/80 bg-background/40 px-8 py-12 md:flex-row md:items-center md:px-12">
          <div className="max-w-xl space-y-3">
            <div className="flex items-center gap-2 text-foreground/50">
              <Code className="h-4 w-4 text-primary" strokeWidth={1.25} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Engineering-friendly</span>
            </div>
            <p className="text-sm leading-relaxed text-foreground/55 md:text-base">
              We speak TypeScript, Storybook, and CI. Design tokens export to code, and we pair with your engineers on
              edge cases — responsive behavior, reduced motion, and localization.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-foreground/30 px-10 py-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Request a scope
          </Link>
        </section>
      </div>
    </div>
  );
}
