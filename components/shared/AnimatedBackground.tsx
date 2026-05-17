"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Pre-computed stable particle data — no Math.random() at render time
const PARTICLES = [
  { left: 12.4, top: 8.3, duration: 4.2, delay: 0.5 },
  { left: 87.6, top: 23.1, duration: 5.8, delay: 1.2 },
  { left: 34.2, top: 67.4, duration: 3.9, delay: 0.8 },
  { left: 56.8, top: 45.2, duration: 6.1, delay: 2.3 },
  { left: 78.3, top: 12.7, duration: 4.7, delay: 1.8 },
  { left: 23.5, top: 89.6, duration: 5.2, delay: 0.3 },
  { left: 91.2, top: 56.8, duration: 3.6, delay: 3.1 },
  { left: 45.7, top: 34.5, duration: 6.4, delay: 1.5 },
  { left: 67.9, top: 78.3, duration: 4.9, delay: 0.9 },
  { left: 8.4, top: 52.1, duration: 5.5, delay: 2.7 },
  { left: 52.3, top: 91.4, duration: 3.8, delay: 1.1 },
  { left: 38.6, top: 28.7, duration: 6.7, delay: 0.4 },
  { left: 74.1, top: 63.9, duration: 4.3, delay: 2.0 },
  { left: 19.8, top: 41.2, duration: 5.1, delay: 3.5 },
  { left: 83.5, top: 17.6, duration: 6.2, delay: 1.3 },
  { left: 29.4, top: 74.8, duration: 4.6, delay: 0.7 },
  { left: 61.7, top: 5.3, duration: 5.9, delay: 2.9 },
  { left: 46.2, top: 82.5, duration: 3.7, delay: 1.6 },
  { left: 93.8, top: 37.4, duration: 6.5, delay: 0.2 },
  { left: 5.1, top: 61.9, duration: 4.8, delay: 2.4 },
];

export function AnimatedGridBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      {/* Hero gradient orb - blue */}
      <div className="orb w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2 bg-electric/10" />

      {/* Orb right */}
      <div className="orb w-[400px] h-[400px] top-1/3 -right-32 bg-gold/8" />

      {/* Orb left */}
      <div className="orb w-[300px] h-[300px] bottom-1/4 -left-20 bg-electric/8" />

      {/* Particles — client-only to avoid hydration mismatch */}
      {mounted && PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-px rounded-full bg-gold/60"
          style={{ left: `${p.left}%`, top: `${p.top}%` }}
          animate={{ y: [0, -30, 0], opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}

      {/* Horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent"
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function GlowOrbs({ variant = "default" }: { variant?: "default" | "gold" | "blue" }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {variant === "gold" && (
        <>
          <div className="orb w-[500px] h-[500px] top-0 right-0 bg-gold/6" />
          <div className="orb w-[300px] h-[300px] bottom-0 left-0 bg-gold/4" />
        </>
      )}
      {variant === "blue" && (
        <>
          <div className="orb w-[500px] h-[500px] top-0 left-0 bg-electric/8" />
          <div className="orb w-[300px] h-[300px] bottom-0 right-0 bg-electric/5" />
        </>
      )}
      {variant === "default" && (
        <>
          <div className="orb w-[400px] h-[400px] top-1/4 -right-20 bg-electric/6" />
          <div className="orb w-[300px] h-[300px] bottom-1/4 -left-10 bg-gold/5" />
        </>
      )}
    </div>
  );
}
