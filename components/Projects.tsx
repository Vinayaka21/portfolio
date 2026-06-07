"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

const categories = ["All", "Web", "Mobile", "AI", "Hardware"];

const projects = [
  {
    id: 1,
    category: "AI",
    title: "Resume Analyzer — ATS Keyword Matcher",
    tag: "Front-End · HTML · CSS · JavaScript",
    period: "Mar 2025 – May 2025",
    challenge:
      "Job seekers had no accessible way to check how their resume performed against ATS (Applicant Tracking System) filters before applying — expensive tools existed, but nothing free and simple.",
    solution:
      "Built a browser-based ATS simulator using pure HTML, CSS, and JavaScript. The tool extracts keywords from a job description, compares them against the uploaded resume, identifies matched and missing skills, and calculates a percentage match score — all client-side with no backend or server required.",
    outcome:
      "Fully functional, responsive tool that runs entirely in the browser. Designed following modern UI/UX principles. Zero deployment dependencies.",
    tech: ["HTML", "CSS", "JavaScript", "ATS Algorithm", "Text Processing"],
    color: "#6366f1",
    github: null,
    live: null,
  },
  {
    id: 2,
    category: "Hardware",
    title: "Oshidhi — Smart Medication ATM",
    tag: "Full-Stack · PHP · MySQL · Hardware",
    period: "Mar 2024 – May 2024",
    challenge:
      "In underserved areas, patients faced long waits to collect prescribed medications after doctor consultations. There was no automated bridge between the digital prescription and the physical dispensing of medicines.",
    solution:
      "Designed an end-to-end healthcare system combining a web platform (HTML, CSS, JS, PHP, MySQL) with a custom CNC-machined medicine vending machine. Patients book appointments, describe symptoms, receive prescriptions, print QR codes, and collect medicines automatically — no pharmacist queue required.",
    outcome:
      "Capstone project demonstrating full-stack development combined with hardware integration. Featured doctor-patient appointment flow, QR-based authentication, and real-time prescription processing.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "QR Auth", "CNC Hardware"],
    color: "#10b981",
    github: null,
    live: null,
  },
  {
    id: 3,
    category: "Web",
    title: "Artist E-Commerce Platform",
    tag: "Full-Stack · PHP · MySQL",
    period: "Oct 2022 – Jan 2023",
    challenge:
      "Independent artists lacked an affordable, purpose-built marketplace to showcase and sell their work. Generic platforms charged high commissions and didn't cater to the specific needs of visual creators.",
    solution:
      "Built a complete e-commerce platform from scratch — responsive UI with HTML, CSS, and JavaScript, and a PHP + MySQL backend handling user authentication, artwork listings, management dashboards, and secure payment processing. No CMS or third-party framework dependencies.",
    outcome:
      "Fully deployed platform with working authentication, product management, and order processing. Covered quality assurance, testing, and ongoing maintenance.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "User Auth", "Payment Flow"],
    color: "#f59e0b",
    github: null,
    live: null,
  },
  {
    id: 4,
    category: "Web",
    title: "AVS Inventory — Asset Management System",
    tag: "Full-Stack · Java · MySQL · Bootstrap",
    period: "Jun 2023 – Aug 2023",
    challenge:
      "Organizations managing software and hardware assets were relying on manual tracking via spreadsheets — error-prone, slow, and impossible to scale across multiple departments.",
    solution:
      "Developed a full-stack inventory management system with role-based access control for administrators, employees, and IT staff. Java backend with MySQL database, Bootstrap frontend. Features include real-time inventory tracking, automated stock updates, and scheduled database backups for reliability.",
    outcome:
      "Production-ready system with optimized MySQL queries, logging, error handling, and role separation. Available publicly on GitHub.",
    tech: ["Java", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "RBAC"],
    color: "#06b6d4",
    github: "https://github.com/Vinayaka21/AVS_Inventory",
    live: null,
  },
  {
    id: 5,
    category: "Mobile",
    title: "Haett — Meal Planning App",
    tag: "React.js · PostgreSQL · Claude AI · Mobile",
    period: "Mar 2026 – May 2026",
    challenge:
      "Busy professionals struggle to plan nutritious meals consistently. Most apps offer rigid plans without intelligence — they don't adapt to what users actually have, want, or need in the moment.",
    solution:
      "Worked as Full Stack Developer at Haett — built responsive React.js web interfaces backed by PostgreSQL, and contributed to a mobile application with Claude AI integration that personalized meal suggestions and improved user experience dynamically.",
    outcome:
      "Successfully contributed to a live production product — shipped new features, resolved complex bugs, and integrated Claude AI enhancements that improved app functionality and user engagement.",
    tech: ["React.js", "PostgreSQL", "Claude AI", "Mobile Dev", "REST API"],
    color: "#8b5cf6",
    github: null,
    live: null,
  },
];

function ProjectCard({
  project,
  inView,
}: {
  project: (typeof projects)[0];
  inView: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="group rounded-2xl border border-[var(--card-border)] bg-[var(--card)] overflow-hidden glow-card transition-all duration-300"
    >
      <div className="h-1" style={{ background: project.color }} />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">
                {project.tag}
              </p>
            </div>
            <h3 className="font-bold text-base leading-snug">{project.title}</h3>
            <p className="text-xs text-[var(--muted)] mt-0.5">{project.period}</p>
          </div>
          <div className="flex gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on GitHub"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)] transition-all"
              >
                <GithubIcon size={14} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)] transition-all"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-medium rounded-full border border-[var(--card-border)] text-[var(--muted)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expand/Collapse */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="space-y-3 mb-4 pt-3 border-t border-[var(--card-border)]">
                {[
                  { label: "Challenge", text: project.challenge },
                  { label: "Solution", text: project.solution },
                  { label: "Outcome", text: project.outcome },
                ].map(({ label, text }) => (
                  <div key={label}>
                    <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-medium mb-1">
                      {label}
                    </p>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1 text-xs font-medium text-[var(--accent)] hover:underline"
        >
          {expanded ? "Show less" : "Read case study"}
          <ArrowUpRight
            size={12}
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="tag inline-flex mb-4">Projects</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Built from scratch.{" "}
            <span className="gradient-text">Shipped for real.</span>
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Every project here solved a genuine problem — from healthcare
            automation to AI-powered meal planning. Click any card to read the
            full breakdown.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-10 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)] border border-[var(--card-border)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} inView={inView} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
