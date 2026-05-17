"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper";
import { GlowOrbs } from "@/components/shared/AnimatedBackground";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";

const colorConfig = {
  gold: {
    dot: "bg-gold border-gold/40 shadow-glow-gold",
    line: "from-gold/40 to-transparent",
    badge: "bg-gold/10 border-gold/20 text-gold",
    tag: "bg-gold/8 border-gold/15 text-gold/80",
    accent: "border-l-gold/30",
  },
  blue: {
    dot: "bg-electric border-electric/40 shadow-glow-blue",
    line: "from-electric/40 to-transparent",
    badge: "bg-electric/10 border-electric/20 text-electric-light",
    tag: "bg-electric/8 border-electric/15 text-electric-light/80",
    accent: "border-l-electric/30",
  },
  emerald: {
    dot: "bg-emerald border-emerald/40",
    line: "from-emerald/40 to-transparent",
    badge: "bg-emerald/10 border-emerald/20 text-emerald",
    tag: "bg-emerald/8 border-emerald/15 text-emerald/80",
    accent: "border-l-emerald/30",
  },
  purple: {
    dot: "bg-purple-500 border-purple-500/40",
    line: "from-purple-500/40 to-transparent",
    badge: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    tag: "bg-purple-500/8 border-purple-500/15 text-purple-400/80",
    accent: "border-l-purple-500/30",
  },
};

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <GlowOrbs variant="default" />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeader
          badge="Work Experience"
          title="Professional"
          titleAccent="Timeline"
          subtitle="Enterprise-grade exposure across cloud operations, web development, data systems, and community engagement."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-white/5 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const colors = colorConfig[exp.color];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={cn(
                    "relative flex gap-8",
                    "md:grid md:grid-cols-2 md:gap-10",
                    "pl-12 md:pl-0"
                  )}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 md:-translate-x-1/2 z-10">
                    <div className={cn("w-8 h-8 rounded-full border-2 flex items-center justify-center", colors.dot)}>
                      <Briefcase className="w-3.5 h-3.5 text-black" />
                    </div>
                  </div>

                  {/* Left col (even) or empty (odd) */}
                  <div className={cn("hidden md:flex", isLeft ? "justify-end" : "")}>
                    {isLeft && (
                      <div className="text-right max-w-xs">
                        <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium mb-3", colors.badge)}>
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </div>
                        <div className="text-xs text-text-muted flex items-center justify-end gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={cn(!isLeft && "md:col-start-2")}>
                    <div className={cn(
                      "glass border border-white/6 rounded-xl p-5 md:p-6 card-hover",
                      "border-l-2", colors.accent
                    )}>
                      {/* Mobile period */}
                      <div className={cn("flex items-center gap-1.5 mb-3 md:hidden")}>
                        <span className={cn("inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-xs font-medium", colors.badge)}>
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>

                      <div className="mb-4">
                        <h3 className="font-bold text-text-primary text-base leading-tight">{exp.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm font-medium text-text-secondary">{exp.company}</span>
                          <span className="text-text-muted text-xs">·</span>
                          <span className="text-xs text-text-muted">{exp.type}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-5">
                        {exp.bullets.map((bullet, bi) => (
                          <li key={bi} className="flex items-start gap-2 text-xs text-text-secondary leading-relaxed">
                            <ChevronRight className="w-3 h-3 mt-0.5 shrink-0 text-text-muted" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span key={tag} className={cn("px-2 py-0.5 rounded-md text-xs border font-mono", colors.tag)}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right col period (odd) */}
                    {!isLeft && (
                      <div className="hidden md:block mt-3">
                        <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium", colors.badge)}>
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </div>
                        <div className="text-xs text-text-muted flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
