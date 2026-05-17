"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper";
import { GlowOrbs } from "@/components/shared/AnimatedBackground";
import { SITE_CONFIG } from "@/constants";

type FormState = "idle" | "sending" | "success" | "error";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    color: "gold",
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
    color: "blue",
  },
  {
    icon: MapPin,
    label: "Location",
    value: SITE_CONFIG.location,
    href: "#",
    color: "emerald",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/onikasileku",
    href: SITE_CONFIG.github,
    color: "purple",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/onika-sileku",
    href: SITE_CONFIG.linkedin,
    color: "blue",
  },
];

const colorConfig = {
  gold: { icon: "text-gold bg-gold/8 border-gold/15", hover: "hover:border-gold/30" },
  blue: { icon: "text-electric-light bg-electric/8 border-electric/15", hover: "hover:border-electric/30" },
  emerald: { icon: "text-emerald bg-emerald/8 border-emerald/15", hover: "hover:border-emerald/30" },
  purple: { icon: "text-purple-400 bg-purple-500/8 border-purple-500/15", hover: "hover:border-purple-500/30" },
};

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    await new Promise((r) => setTimeout(r, 1800));
    setFormState("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setFormState("idle"), 4000);
  };

  return (
    <SectionWrapper id="contact" className="bg-surface/20">
      <GlowOrbs variant="gold" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          badge="Contact"
          title="Let's Work"
          titleAccent="Together"
          subtitle="Open to DevOps roles, cloud engineering internships, IT support positions, and freelance projects. Let's connect."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass border border-white/6 rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-text-primary mb-2">Available for opportunities</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Based in Cape Town and open to remote or in-person DevOps, Cloud, IT Support, and Data Engineering roles across South Africa and globally.
              </p>
              <div className="mt-4 flex items-center gap-2 text-emerald text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                Currently available
              </div>
            </div>

            {contactLinks.map((link) => {
              const Icon = link.icon;
              const colors = colorConfig[link.color as keyof typeof colorConfig];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 glass border border-white/6 rounded-xl p-4 transition-all duration-200 card-hover group ${colors.hover}`}
                >
                  <div className={`p-2 rounded-lg border shrink-0 ${colors.icon}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted mb-0.5">{link.label}</div>
                    <div className="text-sm text-text-primary font-medium group-hover:text-gold transition-colors">
                      {link.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass border border-white/6 rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-text-primary mb-6 text-lg">Send a Message</h3>

              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald/10 border border-emerald/20 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-1">Message Sent!</h4>
                    <p className="text-text-muted text-sm">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-text-muted mb-2">Full Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-surface-2/60 border border-white/8 text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-gold/40 focus:bg-surface-2 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-text-muted mb-2">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface-2/60 border border-white/8 text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-gold/40 focus:bg-surface-2 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-muted mb-2">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Job opportunity / Project enquiry / Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-surface-2/60 border border-white/8 text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-gold/40 focus:bg-surface-2 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-muted mb-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about the opportunity or project..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-2/60 border border-white/8 text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-gold/40 focus:bg-surface-2 transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <p className="text-text-muted text-xs">
                      I typically respond within 24 hours.
                    </p>
                    <motion.button
                      type="submit"
                      disabled={formState === "sending"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gold text-black font-semibold text-sm hover:bg-gold-light transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-glow-gold"
                    >
                      {formState === "sending" ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>

                  {formState === "error" && (
                    <div className="flex items-center gap-2 text-rose-400 text-xs">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Something went wrong. Please try again.
                    </div>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
