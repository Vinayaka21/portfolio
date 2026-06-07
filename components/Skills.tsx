"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Web Development",
    color: "#6366f1",
    skills: [
      { name: "HTML / CSS", level: 88 },
      { name: "JavaScript", level: 82 },
      { name: "React.js", level: 78 },
      { name: "PHP", level: 68 },
      { name: "Bootstrap", level: 72 },
      { name: "REST APIs", level: 70 },
    ],
  },
  {
    title: "Mobile & AI Integration",
    color: "#8b5cf6",
    skills: [
      { name: "Flutter", level: 65 },
      { name: "Android Studio", level: 62 },
      { name: "Claude AI Integration", level: 80 },
      { name: "Prompt Engineering", level: 82 },
      { name: "Generative AI (ChatGPT/Gemini)", level: 78 },
    ],
  },
  {
    title: "Data & Cloud",
    color: "#06b6d4",
    skills: [
      { name: "MySQL", level: 75 },
      { name: "PostgreSQL", level: 65 },
      { name: "Git & GitHub", level: 82 },
      { name: "IBM Cloud", level: 60 },
      { name: "Apache Server", level: 58 },
    ],
  },
  {
    title: "Design & Digital Marketing",
    color: "#f59e0b",
    skills: [
      { name: "Canva", level: 84 },
      { name: "Figma", level: 68 },
      { name: "Digital Marketing (IIDE)", level: 72 },
      { name: "Basic SEO", level: 65 },
      { name: "UI/UX Principles", level: 70 },
    ],
  },
];

const techBadges = [
  "Python", "Java", "JavaScript", "React.js", "PHP", "HTML/CSS",
  "Flutter", "MySQL", "PostgreSQL", "Bootstrap", "Git", "GitHub",
  "IBM Cloud", "Claude AI", "Canva", "Figma", "VS Code", "IoT",
  "MATLAB", "Agile", "OOP", "REST API", "Hostinger", "Apache",
];

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-[var(--muted)]">{level}%</span>
      </div>
      <div className="h-1.5 bg-[var(--surface)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
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
          <div className="tag inline-flex mb-4">Skills & Expertise</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Tools I use to build,{" "}
            <span className="gradient-text">create, and ship.</span>
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            A hands-on stack built through internships, real projects, and 15+
            certifications from NPTEL, IBM, Oracle, and IIDE.
          </p>
        </motion.div>

        {/* Skill Bars Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {skillCategories.map(({ title, color, skills }, ci) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="p-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card)]"
            >
              <div className="flex items-center gap-2 mb-6">
                <div
                  className="w-2 h-6 rounded-full"
                  style={{ background: color }}
                />
                <h3 className="font-bold text-sm tracking-wide uppercase text-[var(--muted)]">
                  {title}
                </h3>
              </div>
              {skills.map(({ name, level }, si) => (
                <SkillBar
                  key={name}
                  name={name}
                  level={level}
                  color={color}
                  delay={si * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-widest text-[var(--muted)] mb-6 font-medium">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.03 }}
                className="px-3 py-1.5 text-xs font-medium rounded-full border border-[var(--card-border)] bg-[var(--background)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--foreground)] transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
