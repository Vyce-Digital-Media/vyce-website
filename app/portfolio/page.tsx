"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Aura Luxury Watches",
    category: "Web design · WebGL commerce",
    year: "2025",
    image: "/luxury_watch_website_1775293680328.png",
    summary:
      "A cinematic product world built around tactile materials and real-time lighting. We designed modular storytelling blocks so the marketing team can launch capsules without engineering support.",
    scope: ["Creative direction", "3D art direction", "Next.js front-end", "Performance budget & QA"],
  },
  {
    id: 2,
    title: "Elysian Interiors",
    category: "Brand system · Spatial design",
    year: "2024",
    image: "/interior_design_portfolio_1775293701831.png",
    summary:
      "Editorial typography, restrained motion, and a flexible grid for case studies. The identity scales from signage to digital — one voice, many surfaces.",
    scope: ["Identity refresh", "Design system", "Site architecture", "Content design"],
  },
  {
    id: 3,
    title: "Venture Mobile Suite",
    category: "Product design · Design ops",
    year: "2024",
    image: "/premium_app_portfolio_1775293723766.png",
    summary:
      "End-to-end UI for a fintech workflow: dense data, calm hierarchy, and motion that clarifies state changes instead of decorating them.",
    scope: ["UX audit", "UI kit", "Prototyping", "Engineering handoff"],
  },
  {
    id: 4,
    title: "Project Zero",
    category: "Launch campaign · Motion",
    year: "2023",
    image: "/luxury_agency_about_1775293620761.png",
    summary:
      "A compressed six-week launch: teaser site, announcement visuals, and a reusable motion library for paid and organic channels.",
    scope: ["Campaign site", "Motion toolkit", "Social cut-downs", "Analytics instrumentation"],
  },
];

export default function PortfolioPage() {
  return (
    <div className="px-6 pb-28 pt-4 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <header className="max-w-4xl pb-16 pt-4 md:pb-24">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">Portfolio</p>
          <h1 className="mt-5 text-4xl font-bold uppercase tracking-tighter text-foreground md:text-6xl lg:text-7xl">
            Selected <span className="font-playfair lowercase text-primary">work</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/55 md:text-lg">
            Case studies across luxury, product, and launch moments. Each project pairs a clear narrative with technical
            rigor — fast loads, accessible defaults, and motion that respects reduced-motion preferences.
          </p>
        </header>

        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project) => (
            <article
              key={project.id}
              className="grid gap-10 border-t border-border pt-16 md:grid-cols-12 md:gap-12 md:pt-20"
            >
              <div className="md:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border bg-muted/30">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority={project.id === 1}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6 md:col-span-5">
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground/40">
                  <span>{project.category}</span>
                  <span className="text-border">/</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-tighter md:text-4xl">{project.title}</h2>
                <p className="text-sm leading-relaxed text-foreground/55 md:text-base">{project.summary}</p>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-foreground/35">Scope</p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/60">
                    {project.scope.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-primary">/</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="mt-2 inline-flex w-fit text-[10px] font-semibold uppercase tracking-[0.3em] text-primary underline-offset-8 hover:underline"
                >
                  Discuss a similar build →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
