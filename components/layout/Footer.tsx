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
    <footer className="border-t border-border/10 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-24 md:px-12 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase relative group">
              VYCE <span className="font-playfair italic font-normal text-primary">Studio</span>
            </h2>
            <div className="space-y-6">
              <h3 className="max-w-xl text-xl md:text-2xl font-medium leading-relaxed tracking-tight text-foreground">
                Engineered for visionaries. <br /> Designed for impact.
              </h3>
              <p className="max-w-md text-sm md:text-base leading-relaxed text-foreground/50">
                We bridge the gap between premium aesthetics and high-performance engineering to deliver impossible-to-ignore digital experiences.
              </p>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 justify-end">
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40">Navigation</p>
              <ul className="space-y-4 text-sm font-medium text-foreground/80 cursor-pointer">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 transition-all duration-300 hover:text-primary hover:translate-x-2"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40">Socials</p>
              <ul className="space-y-4 text-sm font-medium text-foreground/80">
                {social.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 transition-all duration-300 hover:text-primary hover:translate-x-2"
                    >
                      {link.name} <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-32 flex flex-col gap-8 border-t border-border/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
            © {year} VYCE Studio. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
            <Link href="/privacy" className="transition hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
