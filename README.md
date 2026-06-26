<div align="center">

<p align="center">
  <img
    src="public/placeholders/hero.jpg"
    alt="Portfolio Preview"
    width="450"
    style="border-radius: 12px;"
  />
</p>

# sanketchaudhari.in

**Personal portfolio of Sanket Chaudhari — Software Developer & AI Engineer**

[![Live Site](https://img.shields.io/badge/Live-sanketchaudhari.in-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://sanketchaudhari.in)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-EF0E7B?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)

</div>

---

## Overview

A premium single-page application built for placement season — combining clean recruiter-focused design with developer-grade interactive features. Built with React 19 + TypeScript + Vite, deployed on Vercel.

**Domain:** [sanketchaudhari.in](https://sanketchaudhari.in) — registered `.in` domain, fully custom.

---

## Interactive Features

### Terminal Overlay — `>_`
Click the terminal icon in the navbar to open a full-screen developer shell.

```
$ help
Available commands: about, projects, resume, github, clear, exit

$ projects
▸ Algonix       — Gamified inter-college coding platform
▸ Carbonomics   — AI-driven carbon intelligence system
▸ PlaceTrack    — Placement tracking platform
▸ GSTbillingApp — Android billing application

$ resume
Opening resume...
```

### Command Palette — `Ctrl + K`
VS Code-style spotlight search. Navigate the entire site keyboard-only — sections, external links, and system actions grouped and fuzzy-searchable.

### Recruiter Mode — `R`
Press `R` to instantly switch to a print-friendly, animation-free, high-contrast layout. All transitions, canvas effects, and marquee animations are halted via a single `.recruiter-mode` class override.

```css
.recruiter-mode * {
  animation: none !important;
  transition: none !important;
}
```

### Floating Chatbot Assistant
Bottom-right conversational widget with pre-scripted queries:
- *What projects did you build?*
- *What is your tech stack?*
- *Are you open to opportunities?*
- *Download resume*

Fully offline — no API keys, no network calls. Instant response with typing animation.

### Konami Code Easter Egg
Type `↑ ↑ ↓ ↓ ← → ← → B A` — Matrix digital rain canvas overlay activates with `[DEVELOPER MODE UNLOCKED]` in the console. Press `Esc` to exit.

### 2048 Arcade Game — `/2048`
Fully playable in-browser merge puzzle. Supports keyboard arrows (desktop) and touch swipe (mobile). Local high score via `localStorage`. Responsive across desktop, tablet, and mobile with dynamic tile sizing.

### Infinite Skills Marquee
Hardware-accelerated CSS keyframe marquee — pauses on hover. No JS re-renders. Edge fade gradients via Tailwind's `bg-gradient-to-r`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + TypeScript |
| Build | Vite (code splitting + lazy loading) |
| Styling | Tailwind CSS v4 + CSS Variables |
| Animations | Framer Motion |
| Routing | React Router DOM v7 |
| Icons | Lucide React + custom SVGs |
| Deployment | Vercel |

Initial bundle: **< 420 kB**. Heavy features (game, overlays, open source dashboard) are lazy-loaded via `React.lazy` + `Suspense`.

---

## Project Structure

```
sanketchaudhari.in/
├── public/
│   ├── placeholders/          # Static images, certificates, banners
│   └── Sanket_Chaudhari_Resume.pdf
├── src/
│   ├── components/
│   │   ├── TerminalOverlay.tsx
│   │   ├── FloatingChatbot.tsx
│   │   ├── CommandPalette.tsx
│   │   ├── Game2048.jsx
│   │   └── Skills.tsx
│   ├── App.tsx                # Global key listeners (R, Konami, Ctrl+K)
│   └── index.css              # Recruiter mode overrides + marquee keyframes
└── portfolioData.ts           # All content: projects, socials, certs
```

---

## Running Locally

```bash
git clone https://github.com/sanket1035/sanketchaudhari.in
cd sanketchaudhari.in
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Featured Projects

### Algonix
Gamified inter-college competitive coding platform with XP-based leveling, real-time leaderboards, and secure container-native code execution.

`React 18` `TypeScript` `Node.js` `Express` `MongoDB` `Docker`

### Carbonomics AI *(In Development)*
AI-driven carbon intelligence and decision-support system. Final year B.Tech major project.

`Python` `Machine Learning` `Streamlit` `Data Analysis`

### PlaceTrack
Placement tracking and management platform for college students.

### StudyBuddy
Academic resource platform built in first year — organically scaled to **1,500+ users** and **400+ active students per year** at KKWIEER.

---

## Open Source Contributions

- [`dcondrey/zotero-validate`](https://github.com/dcondrey/zotero-validate) — Docs PR merged ✅
- [`delmalih/saas-genai-starter`](https://github.com/delmalih/saas-genai-starter) — Together AI provider addition (in review)

---

## About

**Sanket Milind Chaudhari**
Final Year B.Tech — Artificial Intelligence & Data Science
K.K. Wagh Institute of Engineering Education & Research, Nashik
CGPA: 8.52 | Core Committee — CSI KKWIEER

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/sanketchaudhari1035)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/sanket1035)
[![Portfolio](https://img.shields.io/badge/Portfolio-sanketchaudhari.in-000?style=flat-square)](https://sanketchaudhari.in)

---

<div align="center">
<sub>Built with React 19 + TypeScript + Tailwind CSS v4 — Deployed on Vercel</sub>
</div>
