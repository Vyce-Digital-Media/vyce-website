import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const social = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Behance", href: "https://behance.net" },
  { name: "Dribbble", href: "https://dribbble.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div className="space-y-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-primary">VYCE Studio</p>
            <div className="space-y-5">
              <h2 className="max-w-xl text-md font-medium leading-relaxed tracking-tight text-muted-foreground sm:text-base md:text-lg">
                Built to launch category-leading brands and premium digital products.
              </h2>
              <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                We pair strategic direction with craft-driven execution — from identity systems and immersive websites to WebGL motion, brand systems, and digital product experiences.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="mailto:hello@vyce.studio"
                className="inline-flex items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-foreground transition hover:border-primary hover:bg-primary/15 hover:text-primary"
              >
                hello@vyce.studio
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-background transition hover:bg-primary/90"
              >
                Start a project
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-1 justify-end">
            <div className="space-y-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-foreground/40">Explore</p>
              <ul className="space-y-3 text-sm text-foreground/70">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 transition-all duration-300 hover:text-primary hover:translate-x-1"
                    >
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-8 text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground/35 md:flex-row md:items-center md:justify-evenly md:px-12 lg:px-16">
          <p>© {year} VYCE Studio. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/contact" className="transition hover:text-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="transition hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
