"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Cloud, GitBranch, Shield, Brain, Server } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper";
import { GlowOrbs } from "@/components/shared/AnimatedBackground";
import { educationItems, currentLearning } from "@/data/education";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cloud, GitBranch, Shield, Brain, Server,
};

const colorConfig = {
  gold: {
    card: "border-gold/15 hover:border-gold/30",
    icon: "bg-gold/8 border-gold/15 text-gold",
    badge: "bg-gold/10 border-gold/20 text-gold",
    bar: "bg-gradient-to-r from-gold to-gold-light",
    glow: "hover:shadow-[0_8px_40px_rgba(212,175,55,0.08)]",
  },
  blue: {
    card: "border-electric/15 hover:border-electric/30",
    icon: "bg-electric/8 border-electric/15 text-electric-light",
    badge: "bg-electric/10 border-electric/20 text-electric-light",
    bar: "bg-gradient-to-r from-electric to-electric-light",
    glow: "hover:shadow-[0_8px_40px_rgba(59,130,246,0.08)]",
  },
  emerald: {
    card: "border-emerald/15 hover:border-emerald/30",
    icon: "bg-emerald/8 border-emerald/15 text-emerald",
    badge: "bg-emerald/10 border-emerald/20 text-emerald",
    bar: "bg-gradient-to-r from-emerald to-emerald/70",
    glow: "hover:shadow-[0_8px_40px_rgba(16,185,129,0.08)]",
  },
  purple: {
    card: "border-purple-500/15 hover:border-purple-500/30",
    icon: "bg-purple-500/8 border-purple-500/15 text-purple-400",
    badge: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    bar: "bg-gradient-to-r from-purple-500 to-purple-400",
    glow: "hover:shadow-[0_8px_40px_rgba(168,85,247,0.08)]",
  },
};

const learningColorMap: Record<string, string> = {
  blue: "bg-gradient-to-r from-electric to-electric-light",
  emerald: "bg-gradient-to-r from-emerald to-emerald/70",
  gold: "bg-gradient-to-r from-gold to-gold-light",
  purple: "bg-gradient-to-r from-purple-500 to-purple-400",
  rose: "bg-gradient-to-r from-rose-500 to-rose-400",
};

export function Education() {
  return (
    <SectionWrapper id="education" withGrid className="bg-surface/30">
      <GlowOrbs variant="blue" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          badge="Education"
          title="Learning &"
          titleAccent="Credentials"
          subtitle="A foundation built across full-stack development, data science, digital marketing, and continuous hands-on learning."
        />

        {/* Education cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {educationItems.map((edu, i) => {
            const colors = colorConfig[edu.color];
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "glass border rounded-2xl p-6 card-hover transition-all duration-300",
                  colors.card, colors.glow
                )}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={cn("p-2.5 rounded-xl border", colors.icon)}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className={cn("flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium", colors.badge)}>
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="font-bold text-text-primary text-base mb-0.5">{edu.institution}</h3>
                <p className="text-text-secondary text-sm font-medium mb-3">{edu.credential}</p>
                <p className="text-text-muted text-xs leading-relaxed mb-4">{edu.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {edu.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-xs border border-white/8 bg-white/3 text-text-muted font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass border border-white/6 rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-gold/8 border border-gold/15">
              <Brain className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="font-bold text-text-primary">Currently Learning</h3>
              <p className="text-text-muted text-xs">Actively expanding into cloud, DevOps, and AI</p>
            </div>
            <div className="ml-auto">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border border-emerald/20 bg-emerald/8 text-emerald">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                In Progress
              </span>
            </div>
          </div>

          <div className="space-y-5">
            {currentLearning.map((item, i) => {
              const Icon = iconMap[item.icon] || Cloud;
              return (
                <motion.div
                  key={item.topic}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-text-muted" />
                      <span className="text-sm font-medium text-text-primary">{item.topic}</span>
                    </div>
                    <span className="text-xs font-mono text-text-muted">{item.progress}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className={cn("skill-bar-fill", learningColorMap[item.color] || learningColorMap.blue)}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 p-4 rounded-xl border border-gold/10 bg-gold/4">
            <p className="text-text-secondary text-xs leading-relaxed">
              <span className="text-gold font-semibold">Goal:</span> Achieve Azure Administrator (AZ-104) certification and transition into a Cloud/DevOps Engineering role within 12 months.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
