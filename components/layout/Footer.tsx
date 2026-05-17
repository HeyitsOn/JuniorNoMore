"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Terminal, ArrowUp } from "lucide-react";
import { SITE_CONFIG } from "@/constants";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/6 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-gold" />
              </div>
              <span className="font-bold text-text-primary">Onika Sileku</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              DevOps enthusiast, data systems professional, and full-stack developer based in Cape Town.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-widest mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Skills", "Experience", "Projects", "Education", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-text-muted hover:text-gold text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-widest mb-4">Get In Touch</h4>
            <div className="space-y-2.5">
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-text-muted hover:text-gold text-sm transition-colors group">
                <Mail className="w-3.5 h-3.5 group-hover:text-gold" />
                {SITE_CONFIG.email}
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 text-text-muted hover:text-gold text-sm transition-colors group">
                <Phone className="w-3.5 h-3.5 group-hover:text-gold" />
                {SITE_CONFIG.phone}
              </a>
              <span className="flex items-center gap-2 text-text-muted text-sm">
                <MapPin className="w-3.5 h-3.5" />
                {SITE_CONFIG.location}
              </span>
            </div>

            <div className="flex gap-3 mt-5">
              <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass border border-white/6 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/30 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass border border-white/6 flex items-center justify-center text-text-muted hover:text-electric hover:border-electric/30 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`}
                className="w-9 h-9 rounded-lg glass border border-white/6 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/30 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Onika Sileku. Built with Next.js & Tailwind CSS.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="w-9 h-9 rounded-lg glass border border-white/6 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/30 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
