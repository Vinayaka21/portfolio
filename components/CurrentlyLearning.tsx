"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Server, GitBranch, Bot, Shield, TrendingUp } from "lucide-react";

const learningItems = [
  {
    icon: Cloud,
    title: "AWS Cloud Practitioner & Solutions Architect",
    status: "Active",
    progress: 55,
    desc: "Working through the AWS Solutions Architect Associate certification, covering VPC, EC2, S3, Lambda, IAM, and core architectural patterns.",
    color: "#f59e0b",
  },
  {
    icon: Server,
    title: "Cloud Infrastructure & IaC",
    status: "Active",
    progress: 45,
    desc: "Hands-on with Terraform for infrastructure-as-code, learning to provision and manage cloud resources programmatically.",
    color: "#06b6d4",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD Pipelines",
    status: "Active",
    progress: 60,
    desc: "Building pipelines with GitHub Actions, containerizing applications with Docker, and learning deployment orchestration.",
    color: "#6366f1",
  },
  {
    icon: Bot,
    title: "AI Engineering & LLM APIs",
    status: "Exploring",
    progress: 70,
    desc: "Building applications with LLM APIs, exploring RAG architectures, agent frameworks, and production AI deployment patterns.",
    color: "#8b5cf6",
  },
  {
    icon: Shield,
    title: "Cloud Security Fundamentals",
    status: "Upcoming",
    progress: 25,
    desc: "Studying AWS IAM best practices, encryption, network security groups, and compliance frameworks for cloud environments.",
    color: "#10b981",
  },
  {
    icon: TrendingUp,
    title: "System Design for Scale",
    status: "Active",
    progress: 50,
    desc: "Learning distributed systems concepts — load balancing, caching, database sharding, and designing for high availability.",
    color: "#ec4899",
  },
];

const statusColors: Record<string, string> = {
  Active: "#10b981",
  Exploring: "#6366f1",
  Upcoming: "#f59e0b",
};

export function CurrentlyLearning() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="learning" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="tag inline-flex mb-4">Currently Learning</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Building for the{" "}
            <span className="gradient-text">cloud-first world.</span>
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            I&apos;m actively investing in cloud computing and modern infrastructure skills to become a well-rounded engineer in Canada&apos;s tech market.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {learningItems.map(({ icon: Icon, title, status, progress, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-5 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] glow-card transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    color: statusColors[status] ?? "#6b7280",
                    background: `${statusColors[status] ?? "#6b7280"}18`,
                  }}
                >
                  {status}
                </span>
              </div>

              <h3 className="font-bold text-sm mb-2 leading-snug">{title}</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
                {desc}
              </p>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[10px] text-[var(--muted)] uppercase tracking-wider font-medium">
                    Progress
                  </span>
                  <span className="text-[10px] font-semibold" style={{ color }}>
                    {progress}%
                  </span>
                </div>
                <div className="h-1 bg-[var(--surface)] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${progress}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full"
                    style={{ background: color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center p-8 rounded-2xl border border-[var(--card-border)] bg-gradient-to-br from-[var(--card)] to-[var(--surface)]"
        >
          <p className="text-[var(--muted)] text-sm max-w-lg mx-auto">
            <span className="text-[var(--foreground)] font-semibold">Why Canada?</span>{" "}
            Canada&apos;s tech ecosystem — from Toronto to Vancouver — is one of the fastest-growing
            in the world. I&apos;m here to build, contribute, and grow with it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
