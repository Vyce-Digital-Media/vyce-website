"use client";

import React, { useRef } from 'react';
import { useScroll as useFramerScroll, useSpring, useTransform, motion, MotionValue } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import { Activity, Infinity as InfinityIcon, ArrowUp, Folder, Image as ImageIcon } from 'lucide-react';
import * as THREE from 'three';

const scrollMap = (scroll: number, start: number, end: number, outStart: number, outEnd: number) => {
  if (scroll <= start) return outStart;
  if (scroll >= end) return outEnd;
  return outStart + (outEnd - outStart) * ((scroll - start) / (end - start));
};

function GlassCard({ children, opacity }: { children: React.ReactNode, opacity: MotionValue<number> }) {
  return (
    <motion.div style={{
      opacity,
      padding: 16, borderRadius: 16,
      background: "rgba(255,255,255,0.45)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.6)",
      boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
      display: "flex", alignItems: "center", justifyContent: "center",
      animation: "floatAnim 4s ease-in-out infinite"
    }}>
      {children}
    </motion.div>
  );
}

function GlassInput({ text, opacity }: { text: string, opacity: MotionValue<number> }) {
  return (
    <motion.div style={{
      opacity,
      width: 220, borderRadius: 999, display: "flex", alignItems: "center", padding: 6,
      background: "rgba(255,255,255,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.7)",
      boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
      animation: "floatAnim 5s ease-in-out infinite alternate"
    }}>
      <span style={{ flex: 1, paddingLeft: 12, fontSize: 10, fontWeight: 500, color: "rgba(0,0,0,0.6)" }}>{text}</span>
      <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#111", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <ArrowUp size={12} color="#fff" strokeWidth={3} />
      </div>
    </motion.div>
  );
}

function GlassImage({ src, opacity, width, height, delay }: { src: string, opacity: MotionValue<number>, width: number, height: number, delay: string }) {
  return (
    <motion.div style={{
      opacity,
      width, height, borderRadius: 12, overflow: 'hidden', border: '2px solid #fff',
      boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
      animation: `floatAnim 4s ease-in-out infinite ${delay}`
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="floating card" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </motion.div>
  );
}

function MazeScene({ scrollYProgress }: { scrollYProgress: any }) {
  const currentOffset = useRef({ x: 0, y: 0 });

  const t1 = useRef<any>(null);
  const t2 = useRef<any>(null);
  const t3 = useRef<any>(null);
  const t4 = useRef<any>(null);

  const op1 = useTransform(scrollYProgress, [0, 0.10, 0.20, 1], [1, 1, 0, 0]);
  const op2 = useTransform(scrollYProgress, [0, 0.10, 0.20, 0.40, 0.50, 1], [0, 0, 1, 1, 0, 0]);
  const op3 = useTransform(scrollYProgress, [0, 0.40, 0.50, 0.60, 0.70, 1], [0, 0, 1, 1, 0, 0]);
  const op4 = useTransform(scrollYProgress, [0, 0.60, 0.70, 1], [0, 0, 1, 1]);

  useFrame(({ camera, pointer }) => {
    const s = scrollYProgress.get();

    // Calculate X position
    let x = 0;
    x += scrollMap(s, 0.2, 0.45, 0, 15); // Corridor 2: Move along +X
    x += scrollMap(s, 0.7, 1.0, 0, 15);  // Corridor 4: Move along +X

    // Calculate Z position
    let z = 5; // Start closer so the first text is fully visible
    z += scrollMap(s, 0.0, 0.15, 0, -13); // Corridor 1: Move along -Z (ends at -8)
    z += scrollMap(s, 0.5, 0.65, 0, -17); // Corridor 3: Move along -Z

    // Calculate Y rotation
    let rotY = 0;
    rotY += scrollMap(s, 0.15, 0.2, 0, -Math.PI / 2); // Turn Right
    rotY += scrollMap(s, 0.45, 0.5, 0, Math.PI / 2);  // Turn Left
    rotY += scrollMap(s, 0.65, 0.7, 0, -Math.PI / 2); // Turn Right

    // Mouse Parallax Offset (Opposite direction means camera moves WITH mouse)
    const targetOffsetX = pointer.x * 1.5;
    const targetOffsetY = pointer.y * 1.5;

    // Smooth lerp for parallax
    currentOffset.current.x = THREE.MathUtils.lerp(currentOffset.current.x, targetOffsetX, 0.05);
    currentOffset.current.y = THREE.MathUtils.lerp(currentOffset.current.y, targetOffsetY, 0.05);

    // Apply parallax based on the camera's current rotation so it always moves side-to-side relative to its view
    // A simplified approach is just adding to X and Y directly, but since we turn 90 degrees,
    // if camera is facing -Z (rotY=0), mouse X moves X.
    // If camera is facing +X (rotY=-PI/2), mouse X should move Z.
    // To handle this perfectly, we can translate the camera locally after setting its absolute position.

    camera.position.set(x, 0, z);
    camera.rotation.set(0, rotY, 0);

    // Apply local offset for mouse
    camera.translateX(currentOffset.current.x);
    camera.translateY(currentOffset.current.y);

    // Fade texts out when we turn away from them to prevent bleeding
    if (t1.current) t1.current.fillOpacity = op1.get();
    if (t2.current) t2.current.fillOpacity = op2.get();
    if (t3.current) t3.current.fillOpacity = op3.get();
    if (t4.current) t4.current.fillOpacity = op4.get();
  });

  const fontUrl = "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hjp-Ek-_EeA.woff";

  return (
    <>
      <ambientLight intensity={1} />
      {/* Fog hides distant text, making it look like a true maze and removing visual clutter */}
      <fog attach="fog" args={["#ffffff", 10, 25]} />

      {/* ================= CORRIDOR 1 ================= */}
      <Text ref={t1} position={[0, 0, -10]} rotation={[0, 0, 0]} fontSize={4.5} color="#000" font={fontUrl} letterSpacing={-0.05} lineHeight={0.9} anchorX="center" anchorY="middle" textAlign="center">
        Hey ya what{"\n"}was going on?
      </Text>
      <Html position={[-12, 5.5, -10]} transform center zIndexRange={[100, 0]}>
        <GlassCard opacity={op1}><InfinityIcon size={24} color="#111" /></GlassCard>
      </Html>
      <Html position={[12, -5.5, -10]} transform center zIndexRange={[100, 0]}>
        <GlassInput text="Create a digital ad campaign" opacity={op1} />
      </Html>

      {/* ================= CORRIDOR 2 (Looking Right) ================= */}
      <Text ref={t2} position={[17, 0, -8]} rotation={[0, -Math.PI / 2, 0]} fontSize={4.5} color="#000" font={fontUrl} letterSpacing={-0.05} lineHeight={0.9} anchorX="center" anchorY="middle" textAlign="center">
        You want to see{"\n"}our portfolio?
      </Text>
      <Html position={[17, 5.5, -18]} rotation={[0, -Math.PI / 2, 0]} transform center zIndexRange={[100, 0]}>
        <GlassCard opacity={op2}><Activity size={24} color="#111" /></GlassCard>
      </Html>
      <Html position={[17, -5.5, 2]} rotation={[0, -Math.PI / 2, 0]} transform center zIndexRange={[100, 0]}>
        <GlassImage src="/portfolio/bb-smm/1.webp" opacity={op2} width={120} height={150} delay="1s" />
      </Html>

      {/* ================= CORRIDOR 3 (Looking Forward again) ================= */}
      <Text ref={t3} position={[15, 0, -27]} rotation={[0, 0, 0]} fontSize={4.5} color="#000" font={fontUrl} letterSpacing={-0.05} lineHeight={0.9} anchorX="center" anchorY="middle" textAlign="center">
        Haha you are{"\n"}on the way.
      </Text>
      <Html position={[5, 5.5, -27]} transform center zIndexRange={[100, 0]}>
        <GlassImage src="/portfolio/pesto-smm/1.webp" opacity={op3} width={120} height={160} delay="0.5s" />
      </Html>
      <Html position={[25, -5.5, -27]} transform center zIndexRange={[100, 0]}>
        <GlassCard opacity={op3}><Folder size={24} color="#111" /></GlassCard>
      </Html>

      {/* ================= CORRIDOR 4 (Looking Right) ================= */}
      <Text ref={t4} position={[32, 0, -25]} rotation={[0, -Math.PI / 2, 0]} fontSize={4.5} color="#000" font={fontUrl} letterSpacing={-0.05} lineHeight={0.9} anchorX="center" anchorY="middle" textAlign="center">
        Welcome to VYCE{"\n"}portfolio.
      </Text>
      <Html position={[32, -5.5, -36]} rotation={[0, -Math.PI / 2, 0]} transform center zIndexRange={[100, 0]}>
        <GlassCard opacity={op4}><ImageIcon size={24} color="#111" /></GlassCard>
      </Html>
      <Html position={[32, 5.5, -14]} rotation={[0, -Math.PI / 2, 0]} transform center zIndexRange={[100, 0]}>
        <GlassImage src="/portfolio/bb-smm/2.webp" opacity={op4} width={140} height={180} delay="1.5s" />
      </Html>
    </>
  );
}

export default function PortfolioHero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRevealRef = useRef<HTMLDivElement>(null);

  // Track scroll over the height of this 500vh container
  const { scrollYProgress } = useFramerScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply a spring to make the scroll movement buttery smooth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Interactive dots spotlight
  React.useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (dotRevealRef.current) {
        // Because the container is sticky/h-screen, e.clientX and e.clientY map perfectly to the screen
        dotRevealRef.current.style.setProperty("--mx", `${e.clientX}px`);
        dotRevealRef.current.style.setProperty("--my", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: "500vh" }} className="relative bg-white w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0 bg-white">

        {/* Dot grid — base faint layer */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 0,
        }} />

        {/* Dot grid — bright revealed layer (cursor spotlight mask) */}
        <div
          ref={dotRevealRef}
          aria-hidden
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.55) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none", zIndex: 0,
            WebkitMaskImage: "radial-gradient(circle 280px at var(--mx, 50%) var(--my, 50%), black 0%, transparent 100%)",
            maskImage: "radial-gradient(circle 280px at var(--mx, 50%) var(--my, 50%), black 0%, transparent 100%)",
          } as React.CSSProperties}
        />

        <Canvas camera={{ position: [0, 0, 0], fov: 75 }} gl={{ antialias: true, alpha: true }} style={{ position: 'relative', zIndex: 1 }}>
          <MazeScene scrollYProgress={smoothProgress} />
        </Canvas>
      </div>

      <style>{`
        @keyframes floatAnim {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
}
