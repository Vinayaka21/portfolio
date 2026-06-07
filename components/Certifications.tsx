"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle } from "lucide-react";

const issuers = [
  {
    name: "NPTEL",
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,0.08)",
    borderColor: "rgba(245,158,11,0.2)",
    count: 8,
    certs: [
      "Cloud Computing",
      "Reinforcement Learning",
      "Data Science for Engineers",
      "Python for Data Science",
      "Design Thinking",
      "Computer Networks & Internet Protocols",
      "Introduction to Internet of Things",
      "Ethics of Engineering Practice",
    ],
  },
  {
    name: "IBM",
    color: "#3b82f6",
    bgColor: "rgba(59,130,246,0.08)",
    borderColor: "rgba(59,130,246,0.2)",
    count: 4,
    certs: [
      "Introduction to Python",
      "IBM Cloud",
      "Agile Training",
      "Design Thinking",
    ],
  },
  {
    name: "Oracle Academy",
    color: "#ef4444",
    bgColor: "rgba(239,68,68,0.08)",
    borderColor: "rgba(239,68,68,0.2)",
    count: 1,
    certs: ["DBMS Programming in SQL & Java"],
  },
  {
    name: "IIDE",
    color: "#8b5cf6",
    bgColor: "rgba(139,92,246,0.08)",
    borderColor: "rgba(139,92,246,0.2)",
    count: 1,
    certs: ["Digital Marketing Fundamentals"],
  },
  {
    name: "Udemy",
    color: "#10b981",
    bgColor: "rgba(16,185,129,0.08)",
    borderColor: "rgba(16,185,129,0.2)",
    count: 1,
    certs: ["Internet of Things (IoT)"],
  },
];

export function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="certifications"
      ref={ref}
      className="section-padding bg-[var(--surface)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="tag inline-flex mb-4">Certifications</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            15+ certifications across{" "}
            <span className="gradient-text">5 institutions.</span>
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Structured learning from globally recognized institutions — covering
            cloud, data science, networking, AI, marketing, and engineering
            ethics.
          </p>
        </motion.div>

        {/* Issuer stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {issuers.map(({ name, color, bgColor, borderColor, count }) => (
            <div
              key={name}
              className="flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{
                background: bgColor,
                borderColor,
              }}
            >
              <Award size={14} style={{ color }} />
              <span className="text-sm font-semibold" style={{ color }}>
                {name}
              </span>
              <span
                className="text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center text-white"
                style={{ background: color }}
              >
                {count}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Cert cards by issuer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {issuers.map(({ name, color, bgColor, borderColor, certs }, ci) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              className="p-5 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] glow-card transition-all duration-300"
              style={{
                gridRow: certs.length > 4 ? "span 2" : undefined,
              }}
            >
              {/* Issuer header */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4"
                style={{ background: bgColor, border: `1px solid ${borderColor}` }}
              >
                <Award size={14} style={{ color }} />
                <span
                  className="text-xs font-bold tracking-wide uppercase"
                  style={{ color }}
                >
                  {name}
                </span>
              </div>

              {/* Cert list */}
              <ul className="space-y-2.5">
                {certs.map((cert) => (
                  <li key={cert} className="flex items-start gap-2.5">
                    <CheckCircle
                      size={14}
                      className="mt-0.5 shrink-0"
                      style={{ color }}
                    />
                    <span className="text-sm text-[var(--muted)] leading-snug">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Total callout card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-6 rounded-2xl border border-[var(--accent)]/30 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-secondary)]/5 flex flex-col items-center justify-center text-center"
          >
            <div className="text-5xl font-bold gradient-text mb-2">15+</div>
            <p className="text-sm font-semibold mb-1">Total Certifications</p>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Spanning cloud, AI, data science, networking, IoT, marketing, and
              engineering ethics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
