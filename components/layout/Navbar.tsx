"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Plus } from "lucide-react";
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
      {/* Standard Header (Hides on Scroll) */}
      <header
        className={cn(
          "fixed left-0 top-0 z-[190] w-full transition-all duration-500",
          scrolled ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100 bg-transparent py-3 md:py-4"
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
            onClick={() => setIsOpen(true)}
            className="absolute right-6 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center text-foreground md:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.25} />
          </button>
        </nav>
      </header>

      {/* Floating Action Button (Shows on Scroll) */}
      <AnimatePresence>
        {scrolled && !isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed top-6 right-6 md:top-8 md:right-12 z-[205] flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform cursor-pointer"
            aria-label="Open fullscreen menu"
          >
            <Plus size={32} strokeWidth={1.5} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Close Button inside Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0, rotate: -90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 90 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 20 }}
            onClick={() => setIsOpen(false)}
            className="fixed top-6 right-6 md:top-8 md:right-12 z-[210] flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-2xl hover:scale-110 transition-transform cursor-pointer"
            aria-label="Close fullscreen menu"
          >
            <X size={28} strokeWidth={1.5} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Epic Fullscreen Circular Reveal Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Black Reveal Layer */}
            <motion.div
              initial={{ clipPath: "circle(0px at calc(100% - 50px) 50px)" }}
              animate={{ clipPath: "circle(150% at calc(100% - 50px) 50px)" }}
              exit={{ clipPath: "circle(0px at calc(100% - 50px) 50px)", transition: { delay: 0.2, duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 z-[200] bg-black pointer-events-none"
            />

            {/* White Reveal Layer (with menu content) */}
            <motion.div
              initial={{ clipPath: "circle(0px at calc(100% - 50px) 50px)" }}
              animate={{ clipPath: "circle(150% at calc(100% - 50px) 50px)" }}
              exit={{ clipPath: "circle(0px at calc(100% - 50px) 50px)", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              className="fixed inset-0 z-[201] bg-white text-black overflow-hidden h-[100dvh]"
            >
              <div className="h-full w-full flex flex-col px-6 md:px-16 lg:px-24 py-16 md:py-8 justify-center">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-[1600px] w-full mx-auto gap-8 md:gap-16 flex-1">
                {/* Huge Vertically Centered Logo on Left */}
                <div className="flex w-full md:w-1/2 justify-center items-center">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <motion.img 
                      src="/assets/nav-logo.png" 
                      alt="Logo" 
                      className="h-16 sm:h-24 md:h-32 lg:h-48 w-auto brightness-0"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                      transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </Link>
                </div>

                {/* Main Links & Services Subpages */}
                <div className="flex flex-col w-full md:w-1/2 items-start justify-center gap-1 sm:gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
                      transition={{ delay: 0.5 + (index * 0.08), duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group relative inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-black transition-colors hover:text-black/60"
                      >
                        {link.name}
                        {isActive(link.href) && (
                          <span className="absolute -right-6 md:-right-8 top-0 text-[16px] md:text-[20px] uppercase tracking-widest text-primary font-bold">
                            *
                          </span>
                        )}
                      </Link>

                      {/* Render Service Subpages nicely nested if this is the Services link */}
                      {link.name === "Services" && (
                        <div className="flex flex-col gap-1 sm:gap-2 mt-1 sm:mt-2 ml-4 md:ml-8 border-l-[2px] border-black/10 pl-4 md:pl-6">
                          {[
                            { name: "Web Experiences", href: "/services/web-experiences" },
                            { name: "Digital Growth", href: "/services/digital-growth" },
                            { name: "Branding", href: "/services/branding" },
                            { name: "Product Design", href: "/services/product-design" },
                            { name: "SEO", href: "/services/seo" },
                            { name: "Social Media", href: "/services/social-media-management" }
                          ].map((subLink, subIndex) => (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              onClick={() => setIsOpen(false)}
                              className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight font-medium text-black/50 hover:text-black transition-colors"
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Secondary/Social Links aligned below */}
                  <div className="flex flex-row flex-wrap items-center gap-4 md:gap-8 mt-4 sm:mt-6 md:mt-10 w-full">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={social.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                        transition={{ delay: 1.0 + (index * 0.08), duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm sm:text-base md:text-lg font-semibold tracking-wider text-black/70 hover:text-black transition-colors"
                        >
                          {social.name}
                        </a>
                      </motion.div>
                    ))}
                  </div>

                </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
