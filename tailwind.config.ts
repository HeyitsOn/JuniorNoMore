import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#060810",
        surface: "#0d1117",
        "surface-2": "#111827",
        "surface-3": "#1a2235",
        border: "rgba(255,255,255,0.06)",
        "border-strong": "rgba(255,255,255,0.12)",
        gold: "#d4af37",
        "gold-light": "#f0c842",
        "gold-dim": "rgba(212,175,55,0.15)",
        electric: "#3b82f6",
        "electric-light": "#60a5fa",
        "electric-dim": "rgba(59,130,246,0.12)",
        emerald: "#10b981",
        "text-primary": "#f0f4ff",
        "text-secondary": "#8b9cb3",
        "text-muted": "#4b5563",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "gold-gradient": "linear-gradient(135deg, #d4af37, #f0c842)",
        "electric-gradient": "linear-gradient(135deg, #3b82f6, #60a5fa)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.15), transparent)",
        "card-gradient":
          "linear-gradient(135deg, rgba(17,24,39,0.9), rgba(13,17,23,0.95))",
        "glow-gold":
          "radial-gradient(ellipse at center, rgba(212,175,55,0.2) 0%, transparent 70%)",
        "glow-blue":
          "radial-gradient(ellipse at center, rgba(59,130,246,0.2) 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        "glass-gold": "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,175,55,0.2)",
        "glass-blue": "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(59,130,246,0.2)",
        "glow-gold": "0 0 30px rgba(212,175,55,0.3), 0 0 60px rgba(212,175,55,0.1)",
        "glow-blue": "0 0 30px rgba(59,130,246,0.3), 0 0 60px rgba(59,130,246,0.1)",
        card: "0 4px 24px rgba(0,0,0,0.3)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.5)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        float: "float 6s ease-in-out infinite",
        "border-glow": "borderGlow 2s ease-in-out infinite",
        typing: "typing 3.5s steps(40,end)",
        blink: "blink 1s step-end infinite",
        "scan-line": "scanLine 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        borderGlow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(212,175,55,0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(212,175,55,0.6)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
