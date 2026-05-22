"use client";

import { motion } from "framer-motion";
import { Zap, Target, TrendingUp, Globe, Code2, Database } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper";
import { GlowOrbs } from "@/components/shared/AnimatedBackground";

const traits = [
  {
    icon: Zap,
    title: "Operations-Focused",
    description: "Disciplined approach to system uptime, incident resolution, and infrastructure reliability across cloud and on-premises environments.",
    color: "gold",
  },
  {
    icon: Database,
    title: "Database Expertise",
    description: "Proven hands-on skills in Azure, MySQL, and Access databases; from query optimisation to VBA automation and performance tuning.",
    color: "blue",
  },
  {
    icon: Code2,
    title: "Full-Stack Capable",
    description: "Comfortable from SQL to Vue.js — bridging backend data layers with responsive, accessible front-end interfaces.",
    color: "emerald",
  },
  {
    icon: Target,
    title: "Troubleshooting Mindset",
    description: "Systematic root-cause analysis and a drive to resolve complex technical issues efficiently, minimising business impact.",
    color: "gold",
  },
  {
    icon: TrendingUp,
    title: "Cloud & DevOps Journey",
    description: "Actively expanding in Azure administration, CI/CD pipelines, and DevOps practices — building toward cloud engineering roles.",
    color: "blue",
  },
  {
    icon: Globe,
    title: "Versatile Communicator",
    description: "Bilingual (English & Afrikaans), with strong written communication from content editing and technical documentation experience.",
    color: "emerald",
  },
];

const colorMap = {
  gold: {
    bg: "bg-gold/8",
    border: "border-gold/15",
    icon: "text-gold",
    dot: "bg-gold",
  },
  blue: {
    bg: "bg-electric/8",
    border: "border-electric/15",
    icon: "text-electric-light",
    dot: "bg-electric",
  },
  emerald: {
    bg: "bg-emerald/8",
    border: "border-emerald/15",
    icon: "text-emerald",
    dot: "bg-emerald",
  },
};

export function About() {
  return (
    <SectionWrapper id="about">
      <GlowOrbs variant="gold" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          badge="About Me"
          title="Self-Driven. Technically"
          titleAccent="Versatile."
          subtitle="IT Support specialist and Junior DevOps Engineer with real-world cloud database experience, a passion for infrastructure, and the drive to solve hard problems."
        />

        {/* Main content */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center mb-16">
          {/* Text block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-text-secondary text-base leading-relaxed">
              I&apos;m <span className="text-text-primary font-semibold">Onika Sileku</span> — a Cape Town-based IT Support and Full-Stack Development professional with direct experience managing cloud databases, debugging production systems, and building responsive web applications.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              At <span className="text-gold font-medium">SA Bullion</span>, I managed Azure-hosted databases, resolved critical MySQL issues, and built SQL and VBA automation that eliminated hours of manual reporting — real DevOps exposure in a live financial services environment.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              I bring a unique combination of <span className="text-electric-light font-medium">systems-level thinking</span> and <span className="text-gold font-medium">developer sensibility</span> — I can troubleshoot infrastructure and also build the front end. I&apos;m currently expanding into <span className="text-emerald font-medium">Azure cloud engineering</span>, DevOps automation, and data science.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              Beyond code, I&apos;m a writer and poet — which sharpens my approach to documentation, communication, and crafting user-facing content that actually makes sense.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-5 py-2.5 rounded-xl bg-gold text-black font-semibold text-sm hover:bg-gold-light transition-colors"
              >
                Let&apos;s Connect
              </a>
              <a
                href="#experience"
                onClick={(e) => { e.preventDefault(); document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-5 py-2.5 rounded-xl glass border border-white/10 text-text-secondary font-semibold text-sm hover:text-text-primary hover:border-white/20 transition-all"
              >
                View Experience
              </a>
            </div>
          </motion.div>

          {/* Stats / highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { label: "Location", value: "Cape Town, South Africa" },
              { label: "Status", value: "Open to DevOps & Cloud roles", highlight: true },
              { label: "Languages", value: "English, Afrikaans" },
              { label: "Focus Areas", value: "Azure · DevOps · Data Science · Cloud" },
              { label: "Experience", value: "2+ years enterprise environment" },
            ].map(({ label, value, highlight }) => (
              <div key={label} className="glass border border-white/6 rounded-xl p-4">
                <div className="text-xs font-mono text-text-muted uppercase tracking-widest mb-1">{label}</div>
                <div className={`text-sm font-medium ${highlight ? "text-emerald" : "text-text-primary"}`}>{value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Trait cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {traits.map((trait, i) => {
            const colors = colorMap[trait.color as keyof typeof colorMap];
            const Icon = trait.icon;
            return (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass border border-white/6 rounded-xl p-5 card-hover group"
              >
                <div className={`inline-flex p-2.5 rounded-lg ${colors.bg} border ${colors.border} mb-4`}>
                  <Icon className={`w-5 h-5 ${colors.icon}`} />
                </div>
                <h3 className="font-semibold text-text-primary mb-2 text-sm">{trait.title}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{trait.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
