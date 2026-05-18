"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
] as const;

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", iconClass: "fa-brands fa-instagram" },
  { name: "LinkedIn", href: "https://linkedin.com", iconClass: "fa-brands fa-linkedin" },
  { name: "WhatsApp", href: "https://wa.me/yournumber", iconClass: "fa-brands fa-whatsapp" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (linkHref: string) => {
    if (linkHref === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(linkHref);
  };

  const activeLink = navLinks.find((link) => isActive(link.href))?.href || null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 top-0 z-[200] w-full transition-[background-color,padding] duration-300",
          scrolled ? "bg-transparent py-2" : "bg-transparent py-3 md:py-4"
        )}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12 lg:px-16">
          <Link href="/" className="flex items-center gap-4 group">
            <img src="/assets/nav-logo.png" alt="Logo" className="h-12 w-auto text-foreground sm:h-16 md:h-20 ml-4 md:ml-8" />
          </Link>

          <div 
            onMouseLeave={() => setHoveredLink(null)}
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-zinc-950/80 p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.6)] backdrop-blur-md md:flex relative"
          >
            {navLinks.map((link) => {
              const isSelected = hoveredLink ? hoveredLink === link.href : activeLink === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  className={cn(
                    "relative px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.25em] transition-colors duration-200 z-10",
                    isSelected ? "text-black" : "text-white/60 hover:text-white"
                  )}
                >
                  <span className="relative z-20">{link.name}</span>
                  
                  {isSelected && (
                    <motion.div
                      layoutId="navHoverPill"
                      className="absolute inset-0 rounded-full bg-white z-10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {socialLinks.map((social) => {
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:text-primary hover:shadow-[0_0_20px_rgba(0,68,255,0.3)]"
                >
                  <i className={cn(social.iconClass, "text-[20px] transition-transform duration-300 group-hover:scale-120")} />
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="absolute right-6 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center text-foreground md:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[190] flex flex-col bg-background px-8 pt-24 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * index, duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block border-b border-border/60 py-5 text-3xl font-medium tracking-tight transition-colors duration-200",
                      isActive(link.href) ? "text-primary border-primary/20" : "text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 border-t border-border/60 pt-8">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex rounded-full border border-foreground/20 bg-foreground/5 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground transition-colors hover:border-foreground hover:bg-foreground/10"
              >
                Start a project
              </Link>
            </div>

            <p className="mt-auto pb-10 text-[10px] uppercase tracking-[0.35em] text-foreground/35">
              Premium digital experiences built with clarity and craft.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
