"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Rocket, Globe, Brain, Award, Cpu } from "lucide-react";

const traits = [
  {
    icon: Brain,
    title: "CS Graduate — CGPA 7.81",
    desc: "B.Tech in Computer Science from PIET, Panipat (2020–2024). Strong foundation in data structures, networking, OOP, databases, and IoT systems.",
  },
  {
    icon: Lightbulb,
    title: "Full-Stack Builder",
    desc: "From PHP + MySQL in 2022 to React.js + PostgreSQL today — I build complete web and mobile applications that work in the real world.",
  },
  {
    icon: Cpu,
    title: "AI Integration in Practice",
    desc: "Integrated Claude AI into a live mobile application at Haett. I use AI as a practical engineering tool, not just a buzzword.",
  },
  {
    icon: Award,
    title: "15+ Certifications",
    desc: "Certified by NPTEL, IBM, Oracle, IIDE, and Udemy across cloud computing, data science, networking, Python, IoT, and digital marketing.",
  },
  {
    icon: Rocket,
    title: "Real Industry Experience",
    desc: "Interned at National Fertilizer Limited building web tools, trained at AICTE in IoT and robotics, and worked as a full-stack developer at Haett.",
  },
  {
    icon: Globe,
    title: "Cloud-First in Canada",
    desc: "Pursuing cloud computing studies in Canada to build on my NPTEL Cloud Computing and IBM Cloud certifications with hands-on AWS expertise.",
  },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="tag inline-flex mb-4"
            >
              About Me
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            >
              Not just a developer.
              <br />
              <span className="gradient-text">A builder of ideas.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-[var(--muted)] leading-relaxed"
            >
              <p>
                I graduated with a B.Tech in Computer Science from{" "}
                <span className="text-[var(--foreground)] font-medium">
                  Panipat Institute of Engineering and Technology
                </span>{" "}
                in 2024 with a CGPA of 7.81 — but the real education happened
                through the projects, internships, and labs that ran alongside
                it. From programming IoT robots at AICTE to building web
                applications at National Fertilizer Limited, every experience
                sharpened a different skill.
              </p>
              <p>
                Most recently I worked as a{" "}
                <span className="text-[var(--foreground)] font-medium">
                  Full Stack Developer at Haett
                </span>
                , a meal-planning platform, where I built React.js interfaces,
                worked with PostgreSQL databases, and integrated Claude AI
                features into the mobile application — shipping real software
                that real people used.
              </p>
              <p>
                I complement hands-on experience with structured learning — 15+
                certifications from NPTEL, IBM, Oracle, and IIDE across cloud
                computing, data science, networking, and digital marketing. In
                Canada, I&apos;m looking to add cloud infrastructure depth to
                this foundation and contribute to teams building scalable,
                modern systems.
              </p>
            </motion.div>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 grid grid-cols-2 gap-3"
            >
              {[
                { label: "Degree", value: "B.Tech — CS (CGPA 7.81)" },
                { label: "Status", value: "Open to Part-Time & Internships" },
                { label: "Location", value: "Canada" },
                { label: "Last Role", value: "Full Stack Dev @ Haett" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--card-border)]"
                >
                  <p className="text-[10px] uppercase tracking-wider text-[var(--muted)] font-medium mb-0.5">
                    {label}
                  </p>
                  <p className="text-xs font-semibold">{value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Cards Side */}
          <div className="grid sm:grid-cols-2 gap-4">
            {traits.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.09 }}
                className="p-5 rounded-xl border border-[var(--card-border)] bg-[var(--card)] glow-card transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 flex items-center justify-center mb-3 border border-[#6366f1]/20">
                  <Icon size={18} className="text-[var(--accent)]" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{title}</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
