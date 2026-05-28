"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Syncs every Lenis scroll tick → GSAP ScrollTrigger update
// This is the canonical Lenis + GSAP integration for smooth scrub
function LenisGSAPSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });
  return null;
}

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.4,
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 2,
        infinite: false,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      <LenisGSAPSync />
      {children}
    </ReactLenis>
  );
}
