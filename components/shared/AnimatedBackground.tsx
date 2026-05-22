"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

// ─── Tuning ────────────────────────────────────────────────────────────────
const GRID_SIZE      = 48;   // px between grid lines
const LERP           = 0.08; // mouse smoothing (higher = snappier)
const PARTICLE_COUNT = 55;
const RIPPLE_DURATION = 1400; // ms a ripple lives

// ─── Types ─────────────────────────────────────────────────────────────────
interface Particle {
  x: number; y: number;
  size: number; speed: number;
  opacity: number; opacityDelta: number;
  color: string;
}

interface Ripple {
  x: number; y: number;
  startTime: number;
}

function spawnParticle(w: number, h: number): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    size: Math.random() * 1.8 + 0.3,
    speed: Math.random() * 0.45 + 0.12,
    opacity: Math.random() * 0.5 + 0.1,
    opacityDelta: (Math.random() - 0.5) * 0.007,
    color: Math.random() > 0.45 ? "#d4af37" : "#3b82f6",
  };
}

// ─── Component ─────────────────────────────────────────────────────────────
export function AnimatedGridBackground() {
  const gridCanvasRef    = useRef<HTMLCanvasElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef          = useRef<HTMLDivElement>(null);
  const gridLayerRef     = useRef<HTMLDivElement>(null);

  const mouse   = useRef({ x: -9999, y: -9999, tx: -9999, ty: -9999 });
  const ripples = useRef<Ripple[]>([]);

  // ── Interactive grid canvas ─────────────────────────────────────────
  useEffect(() => {
    const canvas = gridCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const drawGrid = (now: number) => {
      const w  = canvas.width;
      const h  = canvas.height;
      const mx = mouse.current.x;
      const my = mouse.current.y;

      ctx.clearRect(0, 0, w, h);

      // ── Base grid lines ────────────────────────────────────────────
      const cols = Math.ceil(w / GRID_SIZE) + 1;
      const rows = Math.ceil(h / GRID_SIZE) + 1;

      for (let c = 0; c < cols; c++) {
        const x = c * GRID_SIZE;
        // Distance from this column to cursor x
        const dx   = Math.abs(x - mx);
        const prox = Math.max(0, 1 - dx / 260);
        const alpha = 0.06 + prox * 0.35;

        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
        ctx.lineWidth   = 0.5 + prox * 1.2;
        ctx.stroke();
      }

      for (let r = 0; r < rows; r++) {
        const y = r * GRID_SIZE;
        const dy   = Math.abs(y - my);
        const prox = Math.max(0, 1 - dy / 260);
        const alpha = 0.06 + prox * 0.35;

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
        ctx.lineWidth   = 0.5 + prox * 1.2;
        ctx.stroke();
      }

      // ── Glowing intersections near cursor ─────────────────────────
      const GLOW_RADIUS = 200; // px — intersections inside this glow

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const ix = c * GRID_SIZE;
          const iy = r * GRID_SIZE;
          const d  = Math.hypot(ix - mx, iy - my);

          if (d < GLOW_RADIUS) {
            const t     = 1 - d / GLOW_RADIUS;   // 0..1 (1 = cursor)
            const glow  = ctx.createRadialGradient(ix, iy, 0, ix, iy, 6 + t * 14);
            const isGold = (c + r) % 3 === 0;

            if (isGold) {
              glow.addColorStop(0, `rgba(212,175,55,${0.9 * t})`);
              glow.addColorStop(1, "rgba(212,175,55,0)");
            } else {
              glow.addColorStop(0, `rgba(59,130,246,${0.9 * t})`);
              glow.addColorStop(1, "rgba(59,130,246,0)");
            }

            ctx.beginPath();
            ctx.arc(ix, iy, 6 + t * 14, 0, Math.PI * 2);
            ctx.fillStyle = glow;
            ctx.fill();
          }
        }
      }

      // ── Click ripples ──────────────────────────────────────────────
      ripples.current = ripples.current.filter((rp) => now - rp.startTime < RIPPLE_DURATION);

      for (const rp of ripples.current) {
        const age      = now - rp.startTime;
        const progress = age / RIPPLE_DURATION;          // 0 → 1
        const maxR     = Math.min(canvas.width, canvas.height) * 0.55;

        // Three expanding rings with phase offset
        for (let ring = 0; ring < 3; ring++) {
          const phase   = progress - ring * 0.12;
          if (phase <= 0) continue;
          const alpha   = Math.max(0, (1 - phase) * (1 - ring * 0.28));
          const radius  = phase * maxR;
          const isGold  = ring === 1;

          ctx.beginPath();
          ctx.arc(rp.x, rp.y, radius, 0, Math.PI * 2);
          ctx.strokeStyle = isGold
            ? `rgba(212,175,55,${alpha * 0.8})`
            : `rgba(59,130,246,${alpha * 0.9})`;
          ctx.lineWidth = 1.5 - ring * 0.4;
          ctx.shadowColor  = isGold ? "#d4af37" : "#3b82f6";
          ctx.shadowBlur   = 8;
          ctx.stroke();
          ctx.shadowBlur   = 0;
        }
      }

      raf = requestAnimationFrame(drawGrid);
    };

    raf = requestAnimationFrame(drawGrid);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ── Floating particle canvas ────────────────────────────────────────
  const initParticles = useCallback((w: number, h: number) => {
    return Array.from({ length: PARTICLE_COUNT }, () => spawnParticle(w, h));
  }, []);

  useEffect(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let raf = 0;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      particles     = initParticles(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.y -= p.speed;
        p.opacity += p.opacityDelta;
        if (p.opacity > 0.65 || p.opacity < 0.05) p.opacityDelta *= -1;
        if (p.y < -6) { p.y = canvas.height + 6; p.x = Math.random() * canvas.width; }

        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        grd.addColorStop(0, p.color + "cc");
        grd.addColorStop(1, p.color + "00");

        ctx.save();
        ctx.globalAlpha = p.opacity * 0.6;
        ctx.filter      = `blur(${p.size * 0.8}px)`;
        ctx.fillStyle   = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.filter      = "none";
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle   = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [initParticles]);

  // ── Mouse tracking + perspective tilt + glow ───────────────────────
  useEffect(() => {
    const glow     = glowRef.current;
    const gridLayer = gridLayerRef.current;
    if (!glow || !gridLayer) return;

    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouse.current.tx = e.clientX;
      mouse.current.ty = e.clientY;
    };

    // Click spawns a ripple
    const onClick = (e: MouseEvent) => {
      ripples.current.push({ x: e.clientX, y: e.clientY, startTime: performance.now() });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("click", onClick);

    const tick = () => {
      const m  = mouse.current;
      const w  = window.innerWidth;
      const h  = window.innerHeight;

      m.x += (m.tx - m.x) * LERP;
      m.y += (m.ty - m.y) * LERP;

      // Normalised -1 … +1
      const nx = (m.x / w) * 2 - 1;
      const ny = (m.y / h) * 2 - 1;

      // Perspective tilt — more dramatic so it feels playable
      gridLayer.style.transform =
        `perspective(700px) ` +
        `rotateX(${ny * -7}deg) ` +
        `rotateY(${nx * 7}deg) ` +
        `translateX(${nx * -18}px) ` +
        `translateY(${ny * -18}px) ` +
        `scale(1.1)`;

      // Cursor glow
      glow.style.left    = `${m.x}px`;
      glow.style.top     = `${m.y}px`;
      glow.style.opacity = m.tx === -9999 ? "0" : "1";

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">

      {/* Depth orbs */}
      <div className="orb w-[700px] h-[700px] -top-48 left-1/2 -translate-x-1/2 bg-electric/8 blur-[120px]" />
      <div className="orb w-[400px] h-[400px] top-1/3 -right-28 bg-gold/6 blur-[90px]" />
      <div className="orb w-[350px] h-[350px] bottom-1/4 -left-16 bg-electric/6 blur-[90px]" />

      {/* Perspective wrapper — tilts with mouse */}
      <div
        ref={gridLayerRef}
        className="absolute inset-[-10%] will-change-transform"
        style={{ transformOrigin: "center center", transition: "transform 0.05s linear" }}
      >
        {/* Interactive grid drawn on canvas */}
        <canvas
          ref={gridCanvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ width: "100vw", height: "100vh" }}
        />
      </div>

      {/* Floating particles — outside tilt layer so they stay upright */}
      <canvas
        ref={particleCanvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Cursor radial glow */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(212,175,55,0.13) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)",
          filter: "blur(4px)",
          opacity: 0,
        }}
      />

      {/* Cyberpunk scan lines */}
      <motion.div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          height: 2,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0) 10%, rgba(59,130,246,0.6) 40%, rgba(212,175,55,0.7) 50%, rgba(59,130,246,0.6) 60%, rgba(59,130,246,0) 90%, transparent 100%)",
          boxShadow: "0 0 14px rgba(59,130,246,0.5), 0 0 40px rgba(59,130,246,0.15)",
        }}
        animate={{ y: ["-4px", "100vh"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatDelay: 1.8 }}
      />
      <motion.div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3) 50%, transparent)",
          filter: "blur(1px)",
        }}
        animate={{ y: ["-4px", "100vh"] }}
        transition={{ duration: 11, repeat: Infinity, ease: "linear", repeatDelay: 3, delay: 4 }}
      />

      {/* Noise overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" aria-hidden>
        <filter id="hero-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise)" />
      </svg>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Edge vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, rgba(6,8,16,0.75) 100%)" }}
      />
    </div>
  );
}

// ─── GlowOrbs ──────────────────────────────────────────────────────────────
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