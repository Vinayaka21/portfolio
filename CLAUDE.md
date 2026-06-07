@AGENTS.md

# Vinayaka Prasad — Portfolio

This is a personal portfolio website for **Vinayaka Prasad** (she/her).

## Tech Stack

- **Next.js 16.2.7** (App Router, Turbopack)
- **React 19**, **TypeScript**
- **Tailwind CSS v4** — uses `@import "tailwindcss"` (not the old `@tailwind base/components/utilities`)
- **Framer Motion v12** — `ease` arrays must be cast as `[number, number, number, number]`
- **lucide-react v1+** — brand icons (Github, Twitter, LinkedIn) were removed; use `components/SocialIcons.tsx` instead

## Project Structure

```
app/
  layout.tsx       # Root layout — imports ThemeProvider, SEO metadata
  page.tsx         # Main page — imports and orders all sections
  globals.css      # CSS variables, dark/light theme, utility classes (.glass, .btn-primary etc.)

components/
  ThemeProvider.tsx      # data-theme toggle (dark/light), persisted in localStorage
  ScrollProgress.tsx     # Animated top progress bar
  Navbar.tsx             # Sticky glass nav, mobile menu, theme toggle
  Hero.tsx               # Hero section with animated background orbs and stats
  About.tsx              # Story, trait cards, quick facts
  Skills.tsx             # Skill bars by category + tech badge cloud
  Projects.tsx           # 5 real projects with filterable categories + expandable case studies
  Experience.tsx         # Timeline: Haett → NFL internship → AICTE lab → PIET education
  Certifications.tsx     # 15 certifications grouped by issuer (NPTEL, IBM, Oracle, IIDE, Udemy)
  Services.tsx           # 6 freelance services with CAD pricing
  WhyMe.tsx              # 6 strength cards + testimonial quote
  Contact.tsx            # Contact form + social links + availability
  Footer.tsx             # Social links, back-to-top
  SocialIcons.tsx        # Custom SVGs: GithubIcon, LinkedinIcon, XIcon

public/
  resume.pdf       # ← DROP RESUME HERE to enable download buttons
```

## Theme System

- Default: **dark mode**
- Toggle stored in `localStorage` under key `"theme"`
- Applied as `data-theme="dark"` or `data-theme="light"` on `<html>`
- CSS variables in `globals.css` control all colours — edit there to change the palette

## Owner Details (Vinayaka Prasad)

- **Email:** Vinayakaprasad2001@gmail.com
- **LinkedIn:** linkedin.com/in/vinayaka_prasad
- **GitHub:** github.com/Vinayaka21
- **Education:** B.Tech CS, PIET Panipat — Aug 2020 to June 2024, CGPA 7.81
- **Pronouns:** she/her

### Real Experience (past tense — no longer employed)
1. **Full Stack Developer** — Haett (meal plan app) · March 2026 – May 2026 · ReactJS, PostgreSQL, Claude AI
2. **Networking Intern** — National Fertilizer Limited · July–September 2023 · HTML/CSS/JS/PHP/SQL/Networking
3. **AICTE Lab Intern** — PIET · July 2022 · Python, MATLAB, IoT, Robotics

### Real Projects
1. **Resume Analyzer** (Mar–May 2025) — HTML/CSS/JS, ATS keyword simulation
2. **Oshidhi Medication ATM** (Mar–May 2024) — PHP/MySQL + CNC hardware
3. **Artist E-commerce Platform** (Oct 2022–Jan 2023) — PHP/MySQL
4. **AVS Inventory** (Jun–Aug 2023) — Java/MySQL/Bootstrap · [github.com/Vinayaka21/AVS_Inventory](https://github.com/Vinayaka21/AVS_Inventory)
5. **Haett** (Mar–May 2026) — React.js/PostgreSQL/Claude AI

### Certifications (15 total)
- **NPTEL (8):** Cloud Computing, Reinforcement Learning, Data Science for Engineers, Python for Data Science, Design Thinking, Computer Networks & Internet Protocols, Introduction to IoT, Ethics of Engineering Practice
- **IBM (4):** Introduction to Python, IBM Cloud, Agile Training, Design Thinking
- **Oracle Academy (1):** DBMS Programming in SQL & Java
- **IIDE (1):** Digital Marketing Fundamentals
- **Udemy (1):** Internet of Things (IoT)

## Common Update Tasks

### Add a new project
Edit `components/Projects.tsx` → add an object to the `projects` array. Fields: `id`, `category`, `title`, `tag`, `period`, `challenge`, `solution`, `outcome`, `tech[]`, `color`, `github`, `live`.

### Add a new job / experience
Edit `components/Experience.tsx` → add an object to the `timeline` array at the top. Use past tense for all bullet points.

### Update contact info / social links
Edit `components/Contact.tsx` (the `socials` array + the email in the availability card) and `components/Footer.tsx` (the `socials` array).

### Enable the resume download
Drop `resume.pdf` into the `public/` folder. All buttons already link to `/resume.pdf`.

### Re-enable the "Currently Learning" section
When cloud course starts, add these two lines back to `app/page.tsx`:
```ts
import { CurrentlyLearning } from "@/components/CurrentlyLearning";
// inside <main>:
<CurrentlyLearning />
```

### Change colour palette
Edit the CSS variables at the top of `app/globals.css`. `:root` = dark mode, `[data-theme="light"]` = light mode.

### Add a new nav link
Edit the `navLinks` array in `components/Navbar.tsx`.

## Commands

```bash
npm run dev      # Start dev server → http://localhost:3000
npm run build    # Production build (run this to check for type errors)
npm run start    # Serve production build
```
