"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Star, Layers } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper";
import { GlowOrbs } from "@/components/shared/AnimatedBackground";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const colorConfig = {
  gold: {
    badge: "bg-gold/10 border-gold/20 text-gold",
    tag: "bg-gold/8 border-gold/15 text-gold/80",
    glow: "group-hover:shadow-[0_8px_40px_rgba(212,175,55,0.12)]",
    accent: "from-gold/20 to-transparent",
    star: "text-gold",
    border: "group-hover:border-gold/20",
  },
  blue: {
    badge: "bg-electric/10 border-electric/20 text-electric-light",
    tag: "bg-electric/8 border-electric/15 text-electric-light/80",
    glow: "group-hover:shadow-[0_8px_40px_rgba(59,130,246,0.12)]",
    accent: "from-electric/20 to-transparent",
    star: "text-electric-light",
    border: "group-hover:border-electric/20",
  },
  emerald: {
    badge: "bg-emerald/10 border-emerald/20 text-emerald",
    tag: "bg-emerald/8 border-emerald/15 text-emerald/80",
    glow: "group-hover:shadow-[0_8px_40px_rgba(16,185,129,0.12)]",
    accent: "from-emerald/20 to-transparent",
    star: "text-emerald",
    border: "group-hover:border-emerald/20",
  },
  purple: {
    badge: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    tag: "bg-purple-500/8 border-purple-500/15 text-purple-400/80",
    glow: "group-hover:shadow-[0_8px_40px_rgba(168,85,247,0.12)]",
    accent: "from-purple-500/20 to-transparent",
    star: "text-purple-400",
    border: "group-hover:border-purple-500/20",
  },
  rose: {
    badge: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    tag: "bg-rose-500/8 border-rose-500/15 text-rose-400/80",
    glow: "group-hover:shadow-[0_8px_40px_rgba(244,63,94,0.12)]",
    accent: "from-rose-500/20 to-transparent",
    star: "text-rose-400",
    border: "group-hover:border-rose-500/20",
  },
};

const filters = ["All", "Full Stack", "Data & Analytics", "Cloud & DevOps", "Automation", "IT Operations"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper id="projects" withGrid className="bg-surface/20">
      <GlowOrbs variant="gold" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          badge="Portfolio"
          title="Featured"
          titleAccent="Projects"
          subtitle="A selection of real-world projects demonstrating cloud operations, data engineering, full-stack development, and IT systems expertise."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileTap={{ scale: 0.96 }}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-medium border transition-all duration-200",
                activeFilter === filter
                  ? "bg-gold/10 border-gold/30 text-gold"
                  : "border-white/6 text-text-muted hover:text-text-secondary hover:border-white/12"
              )}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => {
              const colors = colorConfig[project.color];
              const isExpanded = expandedId === project.id;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  layout
                  className={cn(
                    "group glass border border-white/6 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer",
                    colors.glow, colors.border,
                    project.featured && "ring-1 ring-white/4"
                  )}
                  onClick={() => setExpandedId(isExpanded ? null : project.id)}
                >
                  {/* Image placeholder with gradient */}
                  <div className={cn(
                    "relative h-36 bg-gradient-to-br overflow-hidden",
                    `bg-gradient-to-br ${colors.accent} to-surface-2/80`
                  )}>
                    <div className="absolute inset-0 grid-pattern opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Layers className="w-12 h-12 text-white/10" />
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className={cn("flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium border", colors.badge)}>
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-0.5 rounded-md text-xs border border-white/10 bg-black/40 text-text-muted font-mono">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-text-primary text-base mb-1">{project.title}</h3>
                    <p className="text-text-muted text-xs mb-3 font-medium">{project.subtitle}</p>
                    <p className="text-text-secondary text-xs leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-text-secondary text-xs leading-relaxed mb-4 border-t border-white/5 pt-4">
                            {project.longDescription}
                          </p>
                          {project.metrics && (
                            <ul className="space-y-1.5 mb-4">
                              {project.metrics.map((m) => (
                                <li key={m} className="flex items-center gap-2 text-xs text-emerald">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald shrink-0" />
                                  {m}
                                </li>
                              ))}
                            </ul>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className={cn("px-2 py-0.5 rounded-md text-xs border font-mono", colors.tag)}>
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-xs border border-white/6 text-text-muted font-mono">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/4 border border-white/6 text-xs text-text-secondary hover:text-text-primary hover:border-white/12 transition-all"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Demo
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/4 border border-white/6 text-xs text-text-secondary hover:text-text-primary hover:border-white/12 transition-all"
                          >
                            <Github className="w-3 h-3" />
                            Code
                          </a>
                        )}
                      </div>
                      <button className={cn("flex items-center gap-1 text-xs font-medium transition-colors", isExpanded ? "text-gold" : "text-text-muted hover:text-gold")}>
                        {isExpanded ? "Less" : "More"}
                        <ArrowRight className={cn("w-3 h-3 transition-transform", isExpanded && "rotate-90")} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
