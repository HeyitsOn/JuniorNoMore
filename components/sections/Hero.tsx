"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown, Shield, Cloud, Database, Code2 } from "lucide-react";
import { AnimatedGridBackground } from "@/components/shared/AnimatedBackground";
import { TerminalComponent } from "@/components/shared/Terminal";

const AVATAR_URL = "https://raw.githubusercontent.com/HeyitsOn/JuniorNoMore/refs/heads/main/Onika%20Email.jpeg";

const roles = [
  { label: "IT Support Professional", icon: Shield, color: "text-gold" },
  { label: "Junior DevOps Engineer", icon: Cloud, color: "text-electric" },
  { label: "Data Support Specialist", icon: Database, color: "text-emerald" },
  { label: "Cloud & Infrastructure", icon: Code2, color: "text-gold" },
];

const techPills = ["Azure", "MySQL", "SQL", "VBA", "Vue.js", "DevOps", "WordPress", "IT Support"];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      <AnimatedGridBackground />

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-80px)] py-12">

          {/* Left — Text */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-widest border border-emerald/30 bg-emerald/8 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for DevOps & Cloud roles
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none">
                <span className="text-text-primary">Onika</span>
                <br />
                <span className="gold-text">Sileku</span>
              </h1>
            </motion.div>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-5 text-lg sm:text-xl text-text-secondary font-medium leading-relaxed max-w-xl"
            >
              IT Systems & DevOps professional with hands-on experience in{" "}
              <span className="text-gold font-semibold">Azure</span>,{" "}
              <span className="text-electric-light font-semibold">cloud databases</span>, and{" "}
              <span className="text-emerald font-semibold">full-stack development</span>.
              Building reliable infrastructure from Cape Town.
            </motion.p>

            {/* Role badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {roles.map(({ label, icon: Icon, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass border border-white/6 text-xs font-medium"
                >
                  <Icon className={`w-3.5 h-3.5 ${color}`} />
                  <span className="text-text-secondary">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gold text-black font-semibold text-sm hover:bg-gold-light transition-all duration-200 shadow-glow-gold hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-text-primary font-semibold text-sm hover:border-gold/30 hover:bg-gold/5 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-electric/20 text-electric-light font-semibold text-sm hover:bg-electric/8 transition-all duration-200"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Tech pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {techPills.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.07 }}
                  className="px-2.5 py-1 rounded-md text-xs font-mono text-text-muted border border-white/5 bg-white/2 hover:border-gold/20 hover:text-text-secondary transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo + Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Profile photo */}
            <div className="relative flex justify-center">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gold/10 blur-2xl scale-75" />

              {/* Decorative ring */}
              <div className="relative w-64 h-64">
                {/* Spinning dashed border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 rounded-full border border-dashed border-gold/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-6 rounded-full border border-dashed border-electric/10"
                />

                {/* Photo frame */}
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.2),0_0_80px_rgba(212,175,55,0.08)]">
                  <img
                    src={AVATAR_URL}
                    alt="Onika Sileku"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>

                {/* Floating status badge */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap glass border border-emerald/20 rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium text-emerald shadow-lg"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                  Open to opportunities
                </motion.div>

                {/* Floating tech chip — top right */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-1 -right-4 glass border border-gold/20 rounded-lg px-2.5 py-1.5 text-xs font-mono text-gold shadow-lg"
                >
                  Azure ☁
                </motion.div>

                {/* Floating tech chip — left */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/3 -left-8 glass border border-electric/20 rounded-lg px-2.5 py-1.5 text-xs font-mono text-electric-light shadow-lg"
                >
                  SQL ⚡
                </motion.div>
              </div>
            </div>

            {/* Terminal */}
            <TerminalComponent />

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "1+", label: "Years Experience" },
                { value: "5+", label: "Live Projects" },
                { value: "Azure", label: "Cloud Platform" },
              ].map(({ value, label }) => (
                <div key={label} className="glass border border-white/6 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold gold-text">{value}</div>
                  <div className="text-xs text-text-muted mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
