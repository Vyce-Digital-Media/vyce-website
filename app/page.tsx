"use client";

import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import StatsBox from "@/components/sections/StatsBox";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Immersive3DSection from "@/components/sections/Immersive3DSection";
import FanPortfolio from "@/components/sections/FanPortfolio";
import ScrollingText from "@/components/sections/ScrollingText";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      <ServicesGrid />

      <StatsBox />

      {/* New 3D Fan Portfolio Experience */}
      <FanPortfolio />

      <ScrollingText />

      <Immersive3DSection />

      <Process />
      
      {/* Manifesto Section */}
      <section className="px-6 py-32 md:px-12 lg:px-16 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-[1600px] flex-col items-start gap-12 text-left lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-4xl space-y-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Manifesto</p>
            <h2 className="text-5xl font-black uppercase tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              Precision <br />
              <span className="font-playfair font-normal lowercase italic text-primary leading-tight">without</span> noise
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-foreground/45 md:text-xl font-medium tracking-wide">
              We borrow the editorial calm of boutique studios and the technical ambition of product-led teams — 
              long scroll when it earns attention, sharp systems when you need to ship. Every engagement includes a 
              clear roadmap and a single source of truth.
            </p>
          </div>
          <Link
            href="/about"
            className="group flex flex-col gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/40 hover:text-foreground pb-2"
          >
            <span>Read our story</span>
            <div className="h-px w-8 bg-primary transition-all duration-500 group-hover:w-full" />
          </Link>
        </motion.div>
      </section>

      {/* Ready when you are Section */}
      <section className="flex flex-col items-center gap-14 px-6 py-40 text-center md:px-12 lg:px-16 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-5xl space-y-12"
        >
          <h2 className="text-5xl font-black uppercase tracking-tighter sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] leading-[0.85]">
            Ready when <br />
            <span className="font-playfair font-normal lowercase italic text-primary">you</span> are
          </h2>
          <p className="mx-auto max-w-xl text-lg text-foreground/45 md:text-2xl leading-relaxed font-medium">
            Tell us about the launch, the rebrand, or the world you want users to feel.
          </p>
          
          <div className="flex flex-col items-center pt-8">
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-foreground px-16 py-8 text-[11px] font-black uppercase tracking-[0.4em] text-background transition-all hover:bg-primary hover:scale-105 active:scale-95"
              >
                Start a project
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
