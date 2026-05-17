"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  withGrid?: boolean;
}

export function SectionWrapper({ id, children, className, withGrid }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden",
        withGrid && "grid-pattern",
        className
      )}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ badge, title, titleAccent, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-14", centered && "text-center")}
    >
      {badge && (
        <div className={cn("mb-4", centered && "flex justify-center")}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-widest uppercase border border-gold/20 bg-gold-dim text-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            {badge}
          </span>
        </div>
      )}
      <h2 className="section-heading text-text-primary">
        {title}{" "}
        {titleAccent && <span className="gold-text">{titleAccent}</span>}
      </h2>
      {subtitle && (
        <p className={cn("section-subheading mt-4 max-w-2xl", centered && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
