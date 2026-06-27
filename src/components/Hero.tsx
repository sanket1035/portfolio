import React, { useEffect, useRef } from 'react';
import { m, useInView, animate } from 'framer-motion';
import { FileText, ArrowRight, Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, YoutubeIcon as Youtube, LeetcodeIcon as Leetcode, DevtoIcon as Devto, MediumIcon as Medium, RedditIcon as Reddit } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const CountUpNumber: React.FC<{ value: number; decimals?: number; suffix?: string; prefix?: string }> = ({ value, decimals = 0, suffix = '', prefix = '' }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      if (!node) return;
      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(latest) {
          node.textContent = prefix + latest.toFixed(decimals) + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, decimals, prefix, suffix]);

  return <span ref={nodeRef}>{prefix}{(0).toFixed(decimals)}{suffix}</span>;
};


export const Hero: React.FC = () => {
  const heroRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !finePointer) return;

    const chars = hero.querySelectorAll('.kinetic-char');
    if (!chars.length) return;

    let raf: number | null = null;
    let mx = 0;
    let my = 0;
    const RADIUS = 220;

    const update = () => {
      raf = null;
      chars.forEach((node) => {
        const ch = node as HTMLElement;
        const r = ch.getBoundingClientRect();
        const charCenterX = r.left + r.width / 2;
        const charCenterY = r.top + r.height / 2;
        const d = Math.hypot(mx - charCenterX, my - charCenterY);
        const t = Math.max(0, 1 - d / RADIUS);

        if (t > 0.01) {
          const wght = (850 - 330 * t).toFixed(0);
          const wdth = (125 - 45 * t).toFixed(1);
          ch.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}`;
        } else {
          ch.style.fontVariationSettings = '';
        }
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (raf === null) {
        raf = requestAnimationFrame(update);
      }
    };

    const handlePointerLeave = () => {
      if (raf !== null) {
        cancelAnimationFrame(raf);
        raf = null;
      }
      chars.forEach((node) => {
        (node as HTMLElement).style.fontVariationSettings = '';
      });
    };

    hero.addEventListener('pointermove', handlePointerMove);
    hero.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      hero.removeEventListener('pointermove', handlePointerMove);
      hero.removeEventListener('pointerleave', handlePointerLeave);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  const handleScrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-28 pb-12 px-6 bg-brand-bg">
      <div className="max-w-6xl w-full mx-auto">
        <m.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Typography & Specification Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              {/* Monospace Subtitle */}
              <m.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent-glow text-xs font-semibold text-brand-accent tracking-wider uppercase"
              >
                <span>Software & AI Engineering</span>
              </m.div>

              {/* Unique Heading */}
              <m.h1
                variants={itemVariants}
                className="font-mihir font-black tracking-tight text-brand-primary uppercase leading-[0.9] select-none"
                style={{
                  fontStretch: '125%',
                  fontWeight: 850,
                  fontSize: 'clamp(2rem, 7.5vw, 4.8rem)'
                }}
              >
                <span className="block overflow-hidden pb-1 -mb-1 whitespace-nowrap">
                  {"SANKET".split('').map((char, i) => (
                    <span
                      key={i}
                      className="kinetic-char inline-block"
                      style={{
                        fontVariationSettings: "'wght' 850, 'wdth' 125",
                        willChange: 'font-variation-settings'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span className="block overflow-hidden pb-1 -mb-1 text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-indigo-400 to-violet-500 whitespace-nowrap">
                  {"CHAUDHARI".split('').map((char, i) => (
                    <span
                      key={i}
                      className="kinetic-char inline-block"
                      style={{
                        fontVariationSettings: "'wght' 850, 'wdth' 125",
                        willChange: 'font-variation-settings'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </m.h1>

              {/* Bio */}
              <m.p
                variants={itemVariants}
                className="text-sm md:text-base text-brand-text-muted max-w-xl leading-relaxed font-sans"
              >
                {portfolioData.bio}
              </m.p>

              {/* Status Badge */}
              <m.div variants={itemVariants} className="pt-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 w-fit select-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-green-400 text-xs font-medium">Open to Opportunities · 2027</span>
                </div>
              </m.div>
            </div>

            {/* Specifications Table */}
            <m.div variants={itemVariants} className="border-t border-brand-border/60">
              <table className="w-full text-left font-sans text-xs md:text-sm text-brand-text border-collapse">
                <tbody>
                  {/* Row 1: Education */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-3 font-mono text-[10px] tracking-wider text-gray-600 dark:text-gray-400 uppercase w-28 md:w-36">
                      Education
                    </td>
                    <td className="py-3 text-brand-primary font-medium">
                      {portfolioData.education[0].degree} in Artificial Intelligence & Data Science
                      <br />
                      <span className="text-xs text-brand-text-muted">
                        {portfolioData.education[0].institution}
                      </span>
                    </td>
                  </tr>

                  {/* Row 2: CGPA */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-3 font-mono text-[10px] tracking-wider text-gray-600 dark:text-gray-400 uppercase">
                      CGPA
                    </td>
                    <td className="py-3 text-brand-primary font-medium font-mono">
                      {portfolioData.education[0].gpa} / 10
                    </td>
                  </tr>

                  {/* Row 3: Projects */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-3 font-mono text-[10px] tracking-wider text-gray-600 dark:text-gray-400 uppercase">
                      Featured Projects
                    </td>
                    <td className="py-3 text-brand-primary font-medium">
                      <div className="flex flex-wrap gap-2 mt-1">
                        {['PlaceTrack AI', 'Algonix', 'GST Billing App', 'Carbonomics AI'].map(p => (
                          <a href="#projects" key={p}
                            className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer">
                            {p}
                          </a>
                        ))}
                      </div>
                    </td>
                  </tr>

                  {/* Row 4: Open Source */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-3 font-mono text-[10px] tracking-wider text-gray-600 dark:text-gray-400 uppercase">
                      Open Source
                    </td>
                    <td className="py-3 text-brand-primary font-medium">
                      Connect Global '26 · ELUSOC Summer of Code '26
                    </td>
                  </tr>

                  {/* Row 5: Languages */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-3 font-mono text-[10px] tracking-wider text-gray-600 dark:text-gray-400 uppercase">
                      Languages
                    </td>
                    <td className="py-3 text-brand-primary font-medium font-mono text-xs text-indigo-400">
                      {portfolioData.skills.languages.slice(0, 5).join(' · ')}
                    </td>
                  </tr>

                  {/* Row 6: Location */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-3 font-mono text-[10px] tracking-wider text-gray-600 dark:text-gray-400 uppercase">
                      Location
                    </td>
                    <td className="py-3 text-brand-primary font-medium">
                      {portfolioData.location}
                    </td>
                  </tr>
                </tbody>
              </table>
            </m.div>

            {/* Stats Strip */}
            <m.div
              variants={itemVariants}
              className="flex flex-row items-center justify-between gap-3 md:gap-6 py-5 border-y border-brand-border/40 my-6 w-full"
            >
              {/* Projects Shipped */}
              <div className="flex-1 flex flex-col gap-1">
                <div className="text-2xl md:text-3xl font-bold text-purple-500 dark:text-purple-400 font-mono leading-none">
                  <CountUpNumber value={4} suffix="+" />
                </div>
                <div className="text-[10px] tracking-widest text-brand-text-muted mt-1 uppercase font-mono leading-tight">
                  PROJECTS<br />SHIPPED
                </div>
              </div>

              <div className="w-px h-8 bg-white/10 dark:bg-white/10 shrink-0" />

              {/* GitHub Commits */}
              <div className="flex-1 flex flex-col gap-1">
                <div className="text-2xl md:text-3xl font-bold text-purple-500 dark:text-purple-400 font-mono leading-none">
                  <CountUpNumber value={500} suffix="+" />
                </div>
                <div className="text-[10px] tracking-widest text-brand-text-muted mt-1 uppercase font-mono leading-tight">
                  GITHUB<br />COMMITS
                </div>
              </div>

              <div className="w-px h-8 bg-white/10 dark:bg-white/10 shrink-0" />

              {/* OSS Contributions */}
              <div className="flex-1 flex flex-col gap-1">
                <div className="text-2xl md:text-3xl font-bold text-purple-500 dark:text-purple-400 font-mono leading-none">
                  <CountUpNumber value={2} />
                </div>
                <div className="text-[10px] tracking-widest text-brand-text-muted mt-1 uppercase font-mono leading-tight">
                  OSS<br />CONTRIBUTIONS
                </div>
              </div>

              <div className="w-px h-8 bg-white/10 dark:bg-white/10 shrink-0" />

              {/* CGPA */}
              <div className="flex-1 flex flex-col gap-1">
                <div className="text-2xl md:text-3xl font-bold text-purple-500 dark:text-purple-400 font-mono leading-none">
                  <CountUpNumber value={8.66} decimals={2} />
                </div>
                <div className="text-[10px] tracking-widest text-brand-text-muted mt-1 uppercase font-mono leading-tight">
                  CGPA / 10
                </div>
              </div>
            </m.div>

            {/* CTAs */}
            <m.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-brand-primary text-brand-bg font-bold text-xs hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md dark:bg-purple-600 dark:hover:bg-purple-500 dark:text-white dark:border-transparent"
              >
                View My Work
                <ArrowRight size={14} />
              </button>
              
              <a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-lg border border-brand-border bg-brand-card/50 hover:bg-brand-card hover:border-brand-accent/50 text-brand-text font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText size={14} className="text-brand-accent" />
                Preview Resume
              </a>

              {/* Social links */}
              <div className="flex flex-wrap items-center gap-3 pl-0 sm:pl-4 border-l border-none sm:border-brand-border text-brand-text-muted">
                {/* GitHub */}
                <div className="relative group">
                  <a
                    href={portfolioData.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-accent transition-colors block"
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} />
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md z-30">
                    GitHub
                  </span>
                </div>

                {/* LinkedIn */}
                <div className="relative group">
                  <a
                    href={portfolioData.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-accent transition-colors block"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md z-30">
                    LinkedIn
                  </span>
                </div>

                {/* LeetCode */}
                {portfolioData.socials.leetcode && (
                  <div className="relative group">
                    <a
                      href={portfolioData.socials.leetcode}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-brand-accent transition-colors block"
                      aria-label="LeetCode Profile"
                    >
                      <Leetcode size={18} />
                    </a>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md z-30">
                      LeetCode
                    </span>
                  </div>
                )}

                {/* YouTube */}
                {portfolioData.socials.youtube && (
                  <div className="relative group">
                    <a
                      href={portfolioData.socials.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-brand-accent transition-colors block"
                      aria-label="YouTube Channel"
                    >
                      <Youtube size={18} />
                    </a>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md z-30">
                      YouTube
                    </span>
                  </div>
                )}

                {/* Dev.to */}
                {portfolioData.socials.devto && (
                  <div className="relative group">
                    <a
                      href={portfolioData.socials.devto}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-brand-accent transition-colors block"
                      aria-label="Dev.to Blog"
                    >
                      <Devto size={18} />
                    </a>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md z-30">
                      Dev.to
                    </span>
                  </div>
                )}

                {/* Medium */}
                {portfolioData.socials.medium && (
                  <div className="relative group">
                    <a
                      href={portfolioData.socials.medium}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-brand-accent transition-colors block"
                      aria-label="Medium Blog"
                    >
                      <Medium size={18} />
                    </a>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md z-30">
                      Medium
                    </span>
                  </div>
                )}

                {/* Reddit */}
                {portfolioData.socials.reddit && (
                  <div className="relative group">
                    <a
                      href={portfolioData.socials.reddit}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-brand-accent transition-colors block"
                      aria-label="Reddit Profile"
                    >
                      <Reddit size={18} />
                    </a>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md z-30">
                      Reddit
                    </span>
                  </div>
                )}

                {/* Email */}
                <div className="relative group">
                  <a
                    href={`mailto:${portfolioData.socials.email}`}
                    className="hover:text-brand-accent transition-colors block"
                    aria-label="Send Email"
                  >
                    <Mail size={18} />
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md z-30">
                    Email
                  </span>
                </div>
              </div>
            </m.div>
          </div>

          {/* Right Column: Profile Picture */}
          <div className="lg:col-span-5 flex items-end justify-center mt-8 lg:mt-0">
            <m.div
              variants={itemVariants}
              className="relative w-full flex items-end justify-center h-[400px] md:h-[560px] overflow-visible"
            >
              {/* Dot texture */}
              <div
                className="absolute w-80 h-80 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(124,58,237,0.15) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />
              {/* Glow blob */}
              <div className="absolute w-72 h-72 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/20 dark:bg-purple-600/35 blur-[60px] dark:blur-[80px] pointer-events-none" />
              {/* Ring border */}
              <div className="absolute w-80 h-80 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-purple-400/15 dark:border-purple-500/20 rounded-full pointer-events-none" />
              {/* Photo */}
              <img
                src="/placeholders/hero.png"
                alt="Sanket Chaudhari Profile"
                className="relative z-10 max-h-full w-auto object-contain"
              />
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
};
export default Hero;
