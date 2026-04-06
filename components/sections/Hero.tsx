"use client";

import React, { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

function ParticleSwarm({ count = 5000 }) {
  const points = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      temp.set([x, y, z], i * 3);
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.x = state.clock.elapsedTime * 0.05;
    points.current.rotation.y = state.clock.elapsedTime * 0.03;

    const positions = points.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const x = positions[i * 3];
      const z = positions[i * 3 + 2];
      positions[i * 3 + 1] = Math.sin(state.clock.elapsedTime + x + z) * 0.2;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={points} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#0044ff" size={0.025} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
    </Points>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLinesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // Staggered title reveal
      tl.from(titleLinesRef.current, {
        y: 120,
        opacity: 0,
        rotateX: -40,
        stagger: 0.12,
        duration: 1.6,
        delay: 0.4,
      })
        .from(subtitleRef.current, {
          y: 30,
          opacity: 0,
          duration: 1.2,
        }, "-=0.8")
        .from(ctaRef.current, {
          y: 20,
          opacity: 0,
          duration: 1,
        }, "-=0.6")
        .from(scrollRef.current, {
          opacity: 0,
          duration: 1.5,
        }, "-=0.4");

      // Parallax on scroll
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 200,
        scale: 0.96,
        opacity: 0,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex h-dvh min-h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-[1] opacity-50">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <ParticleSwarm />
        </Canvas>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-background/80 via-transparent to-background" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_80%)]" />

      {/* Main Content */}
      <div ref={containerRef} className="relative z-10 flex w-full max-w-[1400px] flex-col items-center px-6 md:px-12">


        {/* Title Block — Tight, Intentional Spacing */}
        <h1 className="flex flex-col items-center text-center mb-34">
          <span className="block overflow-hidden">
            <span
              ref={(el) => { titleLinesRef.current[0] = el; }}
              className="inline-block font-playfair font-normal italic text-[clamp(3.5rem,12vw,14rem)] font-black uppercase tracking-[-0.04em] leading-[0.95]"
            >
              We Make
            </span>
          </span>
          <span className="block overflow-hidden -mt-1 md:-mt-1">
            <span
              ref={(el) => { titleLinesRef.current[1] = el; }}
              className="inline-block font-playfair font-normal italic text-primary text-[clamp(3.5rem,12vw,14rem)] tracking-[-0.03em] leading-[0.85]"
            >
              Brands
            </span>
          </span>
          <span className="block overflow-hidden mt-1 md:mt-6">
            <span
              ref={(el) => { titleLinesRef.current[2] = el; }}
              className="inline-block text-[clamp(3.2rem,5.5vw,5.5rem)] font-bold uppercase tracking-[0.02em] leading-[1] text-foreground/80"
            >
              Impossible to Ignore
            </span>
          </span>
        </h1>
      </div>

    </section>
  );
}
