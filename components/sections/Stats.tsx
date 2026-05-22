"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Database, Code2, Clock, Award } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

const stats = [
  {
    icon: Clock,
    value: 2,
    suffix: "+",
    label: "Years Enterprise Experience",
    sub: "SA Bullion — Azure & DevOps",
    color: "gold",
  },
  {
    icon: Database,
    value: 5,
    suffix: "+",
    label: "Live Projects Delivered",
    sub: "Full stack to cloud operations",
    color: "blue",
  },
  {
    icon: Code2,
    value: 40,
    suffix: "%",
    label: "Workflow Time Saved",
    sub: "SQL & VBA automation at SA Bullion",
    color: "emerald",
  },
  {
    icon: Award,
    value: 4,
    suffix: "",
    label: "Credentials & Programmes",
    sub: "Full Stack, Data Science, Digital Marketing",
    color: "purple",
  },
];

const colorConfig = {
  gold: {
    icon: "text-gold bg-gold/8 border-gold/15",
    value: "gold-text",
    glow: "hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]",
    border: "hover:border-gold/20",
  },
  blue: {
    icon: "text-electric-light bg-electric/8 border-electric/15",
    value: "blue-text",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
    border: "hover:border-electric/20",
  },
  emerald: {
    icon: "text-emerald bg-emerald/8 border-emerald/15",
    value: "text-emerald",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]",
    border: "hover:border-emerald/20",
  },
  purple: {
    icon: "text-purple-400 bg-purple-500/8 border-purple-500/15",
    value: "text-purple-400",
    glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]",
    border: "hover:border-purple-500/20",
  },
};

export function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <SectionWrapper className="py-12 md:py-16 bg-surface/40 border-y border-white/4">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const colors = colorConfig[stat.color as keyof typeof colorConfig];
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass border border-white/6 rounded-2xl p-5 md:p-6 text-center card-hover transition-all duration-300 ${colors.glow} ${colors.border}`}
              >
                <div className={`inline-flex p-2.5 rounded-xl border mb-4 ${colors.icon}`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className={`text-3xl md:text-4xl font-black mb-1 ${colors.value}`}>
                  {inView ? (
                    <CountUp end={stat.value} duration={2} delay={i * 0.1} />
                  ) : (
                    "0"
                  )}
                  {stat.suffix}
                </div>

                <div className="text-text-primary font-semibold text-xs md:text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-text-muted text-xs">{stat.sub}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
