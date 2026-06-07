"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Smartphone,
  Wand2,
  BarChart3,
  Palette,
  FileText,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    price: "Starting at $800 CAD",
    desc: "Custom-built websites and web applications using modern frameworks. Fast, SEO-optimized, mobile-first, and built to convert.",
    features: [
      "React / Next.js architecture",
      "Mobile-responsive design",
      "Performance optimization",
      "CMS integration",
    ],
    highlight: false,
  },
  {
    icon: Smartphone,
    title: "Landing Page Design",
    price: "Starting at $400 CAD",
    desc: "High-converting landing pages for products, services, and campaigns. Designed with attention, trust, and action in mind.",
    features: [
      "Conversion-focused layout",
      "A/B testing ready",
      "Analytics integration",
      "Fast delivery (5–7 days)",
    ],
    highlight: true,
  },
  {
    icon: Wand2,
    title: "AI Workflow Integration",
    price: "Starting at $600 CAD",
    desc: "I help businesses and teams integrate AI tools into their existing workflows to automate repetitive tasks and unlock new productivity.",
    features: [
      "Process audit & mapping",
      "Tool selection & setup",
      "Custom prompt engineering",
      "Team training & handoff",
    ],
    highlight: false,
  },
  {
    icon: Palette,
    title: "UI/UX & Brand Design",
    price: "Starting at $500 CAD",
    desc: "Visual design for digital products — from component libraries and design systems to brand identity and marketing assets.",
    features: [
      "Figma design files",
      "Design system creation",
      "Brand identity kit",
      "Dev-ready handoff",
    ],
    highlight: false,
  },
  {
    icon: FileText,
    title: "Content Strategy & Creation",
    price: "Starting at $300 CAD",
    desc: "Content that builds authority and drives organic growth — from technical blog posts to social media and SEO-driven copy.",
    features: [
      "SEO keyword research",
      "Long-form articles",
      "Social media content",
      "AI-assisted production",
    ],
    highlight: false,
  },
  {
    icon: BarChart3,
    title: "Digital Marketing Setup",
    price: "Starting at $350 CAD",
    desc: "Get your online presence working for you. I help set up and optimize your analytics, ads baseline, and organic discovery foundation.",
    features: [
      "Google Analytics 4 setup",
      "SEO audit & fixes",
      "Ad copy & structure",
      "Monthly reporting template",
    ],
    highlight: false,
  },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="section-padding bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="tag inline-flex mb-4">Services</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How I can help{" "}
            <span className="gradient-text">your business grow.</span>
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Available for freelance projects, part-time engagements, and consulting work. Let&apos;s build something useful together.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, price, desc, features, highlight }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 glow-card ${
                highlight
                  ? "border-[var(--accent)] bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-secondary)]/5"
                  : "border-[var(--card-border)] bg-[var(--card)]"
              }`}
            >
              {highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-[10px] font-semibold rounded-full bg-[var(--accent)] text-white tracking-wide uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366f1]/15 to-[#8b5cf6]/15 border border-[#6366f1]/20 flex items-center justify-center mb-4">
                <Icon size={20} className="text-[var(--accent)]" />
              </div>

              <h3 className="font-bold mb-1">{title}</h3>
              <p className="text-sm font-semibold text-[var(--accent)] mb-3">
                {price}
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                {desc}
              </p>

              <ul className="space-y-1.5 mb-6">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-[var(--muted)]">
                    <div className="w-1 h-1 rounded-full bg-[var(--accent)] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  highlight
                    ? "bg-[var(--accent)] text-white hover:opacity-90"
                    : "border border-[var(--card-border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }`}
              >
                Get Started
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
