"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud, Database, Settings, Code2, BarChart3, Palette, Users,
} from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper";
import { GlowOrbs } from "@/components/shared/AnimatedBackground";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cloud, Database, Settings, Code2, BarChart3, Palette, Users,
};

const colorConfig = {
  gold: {
    badge: "bg-gold/10 border-gold/20 text-gold",
    bar: "bg-gradient-to-r from-gold to-gold-light",
    tab: "border-gold/40 text-gold bg-gold/8",
    icon: "text-gold bg-gold/8 border-gold/15",
    glow: "hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]",
  },
  blue: {
    badge: "bg-electric/10 border-electric/20 text-electric-light",
    bar: "bg-gradient-to-r from-electric to-electric-light",
    tab: "border-electric/40 text-electric-light bg-electric/8",
    icon: "text-electric-light bg-electric/8 border-electric/15",
    glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
  },
  emerald: {
    badge: "bg-emerald/10 border-emerald/20 text-emerald",
    bar: "bg-gradient-to-r from-emerald to-emerald/70",
    tab: "border-emerald/40 text-emerald bg-emerald/8",
    icon: "text-emerald bg-emerald/8 border-emerald/15",
    glow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
  },
  purple: {
    badge: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    bar: "bg-gradient-to-r from-purple-500 to-purple-400",
    tab: "border-purple-500/40 text-purple-400 bg-purple-500/8",
    icon: "text-purple-400 bg-purple-500/8 border-purple-500/15",
    glow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]",
  },
  cyan: {
    badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    bar: "bg-gradient-to-r from-cyan-500 to-cyan-400",
    tab: "border-cyan-500/40 text-cyan-400 bg-cyan-500/8",
    icon: "text-cyan-400 bg-cyan-500/8 border-cyan-500/15",
    glow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]",
  },
  rose: {
    badge: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    bar: "bg-gradient-to-r from-rose-500 to-rose-400",
    tab: "border-rose-500/40 text-rose-400 bg-rose-500/8",
    icon: "text-rose-400 bg-rose-500/8 border-rose-500/15",
    glow: "hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]",
  },
  orange: {
    badge: "bg-orange-500/10 border-orange-500/20 text-orange-400",
    bar: "bg-gradient-to-r from-orange-500 to-orange-400",
    tab: "border-orange-500/40 text-orange-400 bg-orange-500/8",
    icon: "text-orange-400 bg-orange-500/8 border-orange-500/15",
    glow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]",
  },
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const activeData = skillCategories.find((c) => c.id === activeCategory)!;
  const colors = colorConfig[activeData.color];

  return (
    <SectionWrapper id="skills" withGrid className="bg-surface/30">
      <GlowOrbs variant="blue" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          badge="Technical Skills"
          title="Skills &"
          titleAccent="Expertise"
          subtitle="A categorised view of my technical capabilities, built from real-world project and enterprise environment experience."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon];
            const c = colorConfig[cat.color];
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200",
                  isActive
                    ? `${c.tab} shadow-md`
                    : "border-white/6 text-text-muted hover:text-text-secondary hover:border-white/12 bg-transparent"
                )}
              >
                <Icon className="w-4 h-4" />
                {cat.title}
              </motion.button>
            );
          })}
        </div>

        {/* Active category content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="glass border border-white/6 rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              {(() => {
                const Icon = iconMap[activeData.icon];
                return (
                  <div className={cn("p-2.5 rounded-xl border", colors.icon)}>
                    <Icon className="w-5 h-5" />
                  </div>
                );
              })()}
              <div>
                <h3 className="font-semibold text-text-primary">{activeData.title}</h3>
                <p className="text-text-muted text-xs">{activeData.skills.length} skills</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {activeData.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                    <span className="text-xs font-mono text-text-muted">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className={cn("skill-bar-fill", colors.bar)}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: i * 0.06, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All tech badges overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-5">All Technologies</p>
          <div className="flex flex-wrap justify-center gap-2">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill) => {
                const c = colorConfig[cat.color];
                return (
                  <span
                    key={`${cat.id}-${skill.name}`}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 cursor-default",
                      c.badge,
                      c.glow
                    )}
                  >
                    {skill.name}
                  </span>
                );
              })
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
