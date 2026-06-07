"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  MessageSquare,
  Layers,
  RefreshCw,
  BookOpen,
  Target,
} from "lucide-react";

const strengths = [
  {
    icon: Layers,
    title: "Multidisciplinary by Design",
    desc: "I bridge the gap between technical execution and creative strategy. Whether you need a developer who understands branding or a designer who can write code — I operate comfortably across both.",
  },
  {
    icon: Zap,
    title: "AI-Augmented Productivity",
    desc: "I use AI tools as a professional multiplier, not a shortcut. This means faster delivery, smarter iteration, and output quality that would otherwise require a larger team.",
  },
  {
    icon: RefreshCw,
    title: "Adaptable and Fast-Moving",
    desc: "I learn new tools and frameworks quickly. The tech landscape moves fast — and so do I. If there's a better way to solve a problem, I'll find it.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    desc: "I over-communicate in the right direction — clear updates, honest timelines, and no ambiguity. Working with me means knowing exactly where things stand.",
  },
  {
    icon: BookOpen,
    title: "Genuinely Curious",
    desc: "I read, build, and learn outside of work hours because I enjoy it. This intellectual curiosity leads to better decisions, more creative solutions, and questions worth asking.",
  },
  {
    icon: Target,
    title: "Business-Aware Thinking",
    desc: "I understand that software exists to solve business problems. I think about users, ROI, and outcomes — not just technical elegance for its own sake.",
  },
];

const testimonialQuote = {
  quote:
    "Vinayaka has an unusual combination of skills — she understands the technical side deeply, but she also gets the business context. That's rare at her level. The app she built for us just worked, and the adoption was faster than we expected.",
  author: "Operations Manager",
  org: "National Fertilizer Limited (Internship)",
};

export function WhyMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-me" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="tag inline-flex mb-4">Why Work With Me</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            The things that{" "}
            <span className="gradient-text">set me apart.</span>
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Skills get you to the table. These qualities keep you there — and keep clients coming back.
          </p>
        </motion.div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {strengths.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-5 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] glow-card transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366f1]/12 to-[#8b5cf6]/12 border border-[#6366f1]/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon size={20} className="text-[var(--accent)]" />
              </div>
              <h3 className="font-bold mb-2">{title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto p-8 rounded-2xl border border-[var(--card-border)] bg-gradient-to-br from-[var(--card)] to-[var(--surface)] text-center"
        >
          <div className="text-4xl text-[var(--accent)] font-serif mb-4">&ldquo;</div>
          <p className="text-base md:text-lg leading-relaxed text-[var(--foreground)] mb-6">
            {testimonialQuote.quote}
          </p>
          <footer>
            <p className="font-semibold text-sm">{testimonialQuote.author}</p>
            <p className="text-xs text-[var(--muted)]">{testimonialQuote.org}</p>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
