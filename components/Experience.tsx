"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, FlaskConical, Star } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Full Stack Developer & Mobile Developer",
    org: "Haett — Meal Plan for Busy People",
    period: "March 2026 — May 2026",
    location: "Remote",
    highlights: [
      "Developed and maintained responsive web applications using React.js, ensuring seamless UI/UX across devices and browsers.",
      "Worked with PostgreSQL databases to design, query, and optimize data-driven features for the platform.",
      "Contributed to mobile app development integrating Claude AI to enhance application functionality and personalize user experience.",
      "Collaborated with cross-functional teams to implement new features, optimize performance, and debug complex issues.",
      "Assisted in automating workflows and integrating AI-driven solutions to improve overall application efficiency.",
    ],
    tags: ["React.js", "PostgreSQL", "Claude AI", "Mobile Dev", "REST API"],
    icon: Briefcase,
  },
  {
    type: "work",
    title: "Networking Intern",
    org: "National Fertilizer Limited",
    period: "July 2023 — September 2023",
    location: "Panipat, Haryana",
    highlights: [
      "Developed and maintained responsive web applications using HTML, CSS, and JavaScript for internal tools.",
      "Implemented UI/UX best practices, enhancing website accessibility and cross-browser compatibility.",
      "Worked with backend technologies including PHP and SQL, contributing to dynamic, data-driven web applications.",
      "Gained hands-on experience with networking devices — routers, switches, servers — and their impact on web and server environments.",
      "Assisted in automation, debugging, and system optimization in collaboration with cross-functional teams.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Networking"],
    icon: Briefcase,
  },
  {
    type: "internship",
    title: "AICTE Lab Internship — IoT, Robotics, Python & MATLAB",
    org: "AICTE Lab, PIET",
    period: "July 2022",
    location: "Panipat, India",
    highlights: [
      "Designed and programmed IoT-enabled robotic systems using Python and MATLAB, integrating sensors and automation logic.",
      "Developed and optimized control algorithms for improved system performance and real-time data processing.",
      "Tested, debugged, and documented robotic systems to ensure functionality, reliability, and efficiency.",
      "Worked with IoT protocols and microcontrollers, enhancing connectivity and automation in embedded systems.",
      "Collaborated on system integration, troubleshooting hardware and software issues for seamless operation.",
    ],
    tags: ["Python", "MATLAB", "IoT", "Robotics", "Embedded Systems", "Automation"],
    icon: FlaskConical,
  },
  {
    type: "edu",
    title: "B.Tech — Computer Science & Engineering",
    org: "Panipat Institute of Engineering and Technology (PIET)",
    period: "August 2020 — June 2024",
    location: "Samalkha, Panipat",
    highlights: [
      "CGPA: 7.81 — strong academic performance across all four years.",
      "Core coursework: Data Structures, OOP, DBMS, Operating Systems, Computer Networks, IoT, and Software Engineering.",
      "Completed multiple industry projects including a capstone healthcare automation system (Oshidhi).",
      "Active participant in AICTE lab programs and technical workshops on IoT, Python, and automation.",
    ],
    tags: ["Computer Science", "CGPA 7.81", "Data Structures", "DBMS", "Networking", "IoT"],
    icon: GraduationCap,
  },
];

const iconColorMap: Record<string, string> = {
  work: "text-[var(--accent)]",
  internship: "text-[#10b981]",
  edu: "text-[#f59e0b]",
};

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding bg-[var(--surface)]"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="tag inline-flex mb-4">Experience & Education</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            A track record of{" "}
            <span className="gradient-text">shipping and learning.</span>
          </h2>
          <p className="text-[var(--muted)] max-w-lg mx-auto">
            From robotics labs to production React apps — every role added
            something real to the toolkit.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--card-border)] to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pl-16"
                >
                  {/* Timeline icon */}
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-[var(--card)] border-2 border-[var(--card-border)] flex items-center justify-center">
                    <IconComp
                      size={18}
                      className={iconColorMap[item.type] ?? "text-[var(--accent)]"}
                    />
                  </div>

                  {/* Card */}
                  <div className="p-5 rounded-xl border border-[var(--card-border)] bg-[var(--card)] glow-card transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold leading-snug">{item.title}</h3>
                        <p className="text-sm font-medium text-[var(--accent)]">
                          {item.org}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xs text-[var(--muted)]">{item.period}</p>
                        <p className="text-xs text-[var(--muted)]">{item.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {item.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <Star
                            size={12}
                            className="text-[var(--accent)] mt-1 shrink-0"
                            fill="currentColor"
                          />
                          <span className="text-sm text-[var(--muted)] leading-relaxed">
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-full border border-[var(--card-border)] text-[var(--muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
