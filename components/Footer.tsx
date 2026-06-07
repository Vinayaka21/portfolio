"use client";

import { Mail, Code2, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./SocialIcons";

const socials = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/Vinayaka21" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com/in/vinayaka_prasad" },
  { icon: XIcon, label: "Twitter / X", href: "https://twitter.com/vinayakap" },
  { icon: Mail, label: "Email", href: "mailto:Vinayakaprasad2001@gmail.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
              <Code2 size={14} className="text-white" />
            </div>
            <span className="font-bold text-sm text-[var(--foreground)]">
              Vinayaka Prasad<span className="text-[var(--accent)]">.</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)] transition-all"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors group"
          >
            Back to top
            <ArrowUp
              size={16}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--card-border)] text-center">
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} Vinayaka Prasad. Built with Next.js &
            Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
