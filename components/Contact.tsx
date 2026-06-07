"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, MapPin, Clock, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./SocialIcons";

const socials = [
  {
    icon: GithubIcon,
    label: "GitHub",
    handle: "Vinayaka21",
    href: "https://github.com/Vinayaka21",
    color: "#6366f1",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    handle: "vinayaka_prasad",
    href: "https://linkedin.com/in/vinayaka_prasad",
    color: "#0a66c2",
  },
  {
    icon: XIcon,
    label: "Twitter / X",
    handle: "@vinayakap",
    href: "https://twitter.com/vinayakap",
    color: "#1d9bf0",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "Vinayakaprasad2001@gmail.com",
    href: "mailto:Vinayakaprasad2001@gmail.com",
    color: "#10b981",
  },
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="tag inline-flex mb-4">Get In Touch</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s build something{" "}
            <span className="gradient-text">great together.</span>
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Whether you&apos;re a recruiter, startup founder, or someone with an interesting problem — I want to hear about it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Availability */}
            <div className="p-5 rounded-2xl border border-[var(--card-border)] bg-[var(--card)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-semibold text-sm">Currently Available</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                  <MapPin size={15} className="text-[var(--accent)] shrink-0" />
                  Based in Canada · Open to remote & on-site
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                  <Clock size={15} className="text-[var(--accent)] shrink-0" />
                  Response time: within 24 hours
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                  <Mail size={15} className="text-[var(--accent)] shrink-0" />
                  Vinayakaprasad2001@gmail.com
                </div>
              </div>
            </div>

            {/* Looking for */}
            <div>
              <h3 className="font-bold mb-4">Open to:</h3>
              <div className="space-y-2">
                {[
                  "Part-time developer roles (Canada)",
                  "Co-op & internship programs",
                  "Cloud computing apprenticeships",
                  "Freelance web & mobile projects",
                  "Startup founding team collaborations",
                  "AI workflow integration contracts",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="font-bold mb-4">Find me on:</h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map(({ icon: Icon, label, handle, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-[var(--card-border)] bg-[var(--card)] hover:border-[var(--accent)] transition-all group"
                  >
                    <Icon size={18} style={{ color }} />
                    <div>
                      <p className="text-xs font-semibold">{label}</p>
                      <p className="text-[10px] text-[var(--muted)]">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 rounded-2xl border border-[var(--card-border)] bg-[var(--card)]">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle size={56} className="text-green-400 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-[var(--muted)] text-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 btn-secondary text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 md:p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-[var(--muted)]">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-[var(--surface)] border border-[var(--card-border)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-[var(--muted)]">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-[var(--surface)] border border-[var(--card-border)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[var(--muted)]">
                    I&apos;m reaching out about...
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[var(--surface)] border border-[var(--card-border)] text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="job">Full-time / Part-time Role</option>
                    <option value="internship">Internship / Co-op</option>
                    <option value="freelance">Freelance Project</option>
                    <option value="collab">Collaboration</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[var(--muted)]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project, role, or what you have in mind..."
                    className="w-full px-4 py-3 rounded-lg bg-[var(--surface)] border border-[var(--card-border)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
