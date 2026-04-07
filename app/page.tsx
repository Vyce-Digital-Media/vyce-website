"use client";

import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import StatsBox from "@/components/sections/StatsBox";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ExploreCollection from "@/components/sections/ImageScroller3D";
import ScrollingText from "@/components/sections/ScrollingText";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <ServicesGrid />

      <StatsBox />

      {/* New 3D ImageScroller Portfolio Experience */}
      <ExploreCollection />

      <ScrollingText />

      <Process />

      {/* Manifesto Section (Refactored) */}
      <section className="relative px-6 py-40 md:px-12 lg:px-16 bg-zinc-950/20 overflow-hidden" id="about">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-24 items-start">
            {/* Split Typographic Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >


              <h2 className="text-6xl font-black uppercase tracking-tighter sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85]">
                Precision <br />
                <span className="font-playfair font-normal italic text-primary/80 lowercase">Without</span> <br />
                Noise
              </h2>

              <p className="max-w-2xl text-xl md:text-2xl text-foreground/50 font-medium leading-relaxed">
                We believe that the most impactful brands are built at the intersection of technical excellence and aesthetic restraint.
              </p>

              <div className="pt-8">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-foreground transition-all hover:text-primary"
                >
                  <span className="relative">
                    Our Story
                    <span className="absolute -bottom-2 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                  <span className="h-8 w-8 rounded-full border border-border flex items-center justify-center transition-all group-hover:border-primary group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Split Pillars Grid */}
            <div className="grid gap-16 pt-12 md:pt-48">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 group"
              >
                <div className="flex items-center gap-6">
                  <div className="text-2xl font-playfair font-normal italic text-primary/40 transition-colors group-hover:text-primary">01</div>
                  <h3 className="text-xl font-bold uppercase tracking-[0.3em]">Analytical Precision</h3>
                </div>
                <p className="text-foreground/45 leading-relaxed font-medium tracking-wide border-l border-border/40 pl-8 transition-colors group-hover:border-primary/40">
                  Every interaction is engineered for performance. We remove traditional overhead to deliver websites that function as high-performance products.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6 group"
              >
                <div className="flex items-center gap-6">
                  <div className="text-2xl font-playfair font-normal italic text-primary/40 transition-colors group-hover:text-primary">02</div>
                  <h3 className="text-xl font-bold uppercase tracking-[0.3em]">Thoughtful Simplicity</h3>
                </div>
                <p className="text-foreground/45 leading-relaxed font-medium tracking-wide border-l border-border/40 pl-8 transition-colors group-hover:border-primary/40">
                  Aesthetic luxury isn't about more; it's about less. We lean into negative space and rhythmic typography to let your brand's truth speak.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Subtle Background Glyph */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-[0.02] -z-10 pointer-events-none">
          <span className="text-[40rem] font-black leading-none">VYCE</span>
        </div>
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
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Ready?</p>
          <h2 className="text-5xl font-black tracking-tighter sm:text-7xl md:text-8xl lg:text-[8rem] leading-[0.9]">
            Let's Build Something <br />
            <span className="font-playfair font-normal italic text-primary">the World Will Notice.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/60 md:text-xl leading-relaxed font-medium">
            Whether you're starting from scratch or levelling up an existing brand — we're the team that makes it happen. No fluff, no delays, just results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-primary px-12 py-6 text-[11px] font-black uppercase tracking-[0.3em] text-white transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
              >
                Book a Free Call →
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/services"
                className="inline-flex rounded-full border border-foreground/20 bg-transparent px-12 py-6 text-[11px] font-black uppercase tracking-[0.3em] text-foreground transition-all hover:border-foreground hover:bg-foreground/5 hover:scale-105 active:scale-95"
              >
                View Our Services →
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
