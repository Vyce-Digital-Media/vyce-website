"use client";

import React, { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

// ─── Shared mouse state (NDC: -1 to 1 on each axis) ────────────────────────
const mouseNDC = { x: -999, y: -999 };

// ─── Particle Swarm with Mouse Repulsion ─────────────────────────────────────
function ParticleSwarm({ count = 9000 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  // origins: where each particle lives at rest
  const { positions, origins, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const origins = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 14;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 4;
      positions[i * 3] = origins[i * 3] = x;
      positions[i * 3 + 1] = origins[i * 3 + 1] = y;
      positions[i * 3 + 2] = origins[i * 3 + 2] = z;
    }
    return { positions, origins, velocities };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    // Convert NDC mouse → world space at z = 0 plane
    const camera = state.camera as THREE.PerspectiveCamera;
    const fovRad = (camera.fov * Math.PI) / 180;
    const camDist = Math.abs(camera.position.z);
    const halfH = camDist * Math.tan(fovRad / 2);
    const halfW = halfH * camera.aspect;

    const mx = mouseNDC.x * halfW;
    const my = mouseNDC.y * halfH;

    const REPULSION_R = 2.0;   // world-unit radius
    const REPULSION_F = 0.12;  // max force per frame
    const SPRING = 0.045; // restoring spring strength
    const DAMPING = 0.82;  // velocity damping

    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;

      // Spring back toward origin
      const sx = (origins[ix] - pos[ix]) * SPRING;
      const sy = (origins[ix + 1] - pos[ix + 1]) * SPRING;
      const sz = (origins[ix + 2] - pos[ix + 2]) * SPRING * 0.3;

      // Repulsion from cursor (2D, ignore z)
      const dx = pos[ix] - mx;
      const dy = pos[ix + 1] - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let rx = 0, ry = 0;

      if (dist < REPULSION_R && dist > 0.001) {
        const t = 1 - dist / REPULSION_R;
        const force = t * t * REPULSION_F;   // quadratic — sharp close, smooth far
        rx = (dx / dist) * force;
        ry = (dy / dist) * force;
      }

      velocities[ix] = (velocities[ix] + sx + rx) * DAMPING;
      velocities[ix + 1] = (velocities[ix + 1] + sy + ry) * DAMPING;
      velocities[ix + 2] = (velocities[ix + 2] + sz) * DAMPING;

      pos[ix] += velocities[ix];
      pos[ix + 1] += velocities[ix + 1];
      pos[ix + 2] += velocities[ix + 2];
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#0044ff"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLinesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track mouse NDC on the section
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  };
  const handleMouseLeave = () => {
    mouseNDC.x = -999;
    mouseNDC.y = -999;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(titleLinesRef.current, {
        y: 120,
        opacity: 0,
        rotateX: -40,
        stagger: 0.12,
        duration: 1.6,
        delay: 0.4,
      })
        .from(subtitleRef.current, { y: 30, opacity: 0, duration: 1.2 }, "-=0.8")
        .from(ctaRef.current, { y: 20, opacity: 0, duration: 1 }, "-=0.6")
        .from(scrollRef.current, { opacity: 0, duration: 1.5 }, "-=0.4");

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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-dvh min-h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-[1] opacity-55">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ParticleSwarm />
        </Canvas>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-background/80 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_80%)] pointer-events-none" />

      {/* Content */}
      <div ref={containerRef} className="relative z-10 flex w-full max-w-[1400px] flex-col items-center px-6 md:px-12">



        {/* Title Block */}
        <h1 className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="block overflow-hidden">
            <span
              ref={(el) => { titleLinesRef.current[0] = el; }}
              className="inline-block font-playfair font-normal italic text-[clamp(3.5rem,12vw,14rem)] uppercase tracking-[-0.04em] leading-[0.95]"
            >
              We Make
            </span>
          </span>
          <span className="block overflow-hidden -mt-1">
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
