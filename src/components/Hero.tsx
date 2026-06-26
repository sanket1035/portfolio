import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export const Hero: React.FC = () => {
  const [statusIndex, setStatusIndex] = useState(0);
  const statuses = [
    { text: "Building Carbonomics AI", emoji: "🟢" },
    { text: "Final Year B.Tech Student", emoji: "📚" },
    { text: "Open to Opportunities", emoji: "💻" }
  ];

  const heroRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Typography & Specification Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              {/* Monospace Subtitle */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent-glow text-xs font-semibold text-brand-accent tracking-wider uppercase"
              >
                <span>Software & AI Engineering</span>
              </motion.div>

              {/* Unique Heading */}
              <motion.h1
                variants={itemVariants}
                className="font-mihir font-black text-5xl md:text-8xl tracking-tight text-brand-primary uppercase leading-[0.9] select-none"
                style={{ fontStretch: '125%', fontWeight: 850 }}
              >
                <span className="block overflow-hidden pb-1 -mb-1">
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
                <span className="block overflow-hidden pb-1 -mb-1 text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-indigo-400 to-violet-500">
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
              </motion.h1>

              {/* Bio */}
              <motion.p
                variants={itemVariants}
                className="text-sm md:text-base text-brand-text-muted max-w-xl leading-relaxed font-sans"
              >
                {portfolioData.bio}
              </motion.p>
            </div>

            {/* Specifications Table */}
            <motion.div variants={itemVariants} className="border-t border-brand-border/60">
              <table className="w-full text-left font-sans text-xs md:text-sm text-brand-text border-collapse">
                <tbody>
                  {/* Row 1: Education */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-3 font-mono text-[10px] tracking-wider text-brand-text-muted uppercase w-28 md:w-36">
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
                    <td className="py-3 font-mono text-[10px] tracking-wider text-brand-text-muted uppercase">
                      CGPA
                    </td>
                    <td className="py-3 text-brand-primary font-medium font-mono">
                      {portfolioData.education[0].gpa} / 10
                    </td>
                  </tr>

                  {/* Row 3: Projects */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-3 font-mono text-[10px] tracking-wider text-brand-text-muted uppercase">
                      Featured Projects
                    </td>
                    <td className="py-3 text-brand-primary font-medium">
                      PlaceTrack AI · Algonix · GST Billing App · Carbonomics AI
                    </td>
                  </tr>

                  {/* Row 4: Open Source */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-3 font-mono text-[10px] tracking-wider text-brand-text-muted uppercase">
                      Open Source
                    </td>
                    <td className="py-3 text-brand-primary font-medium">
                      Connect Global '26 · ELUSOC Summer of Code '26
                    </td>
                  </tr>

                  {/* Row 5: Languages */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-3 font-mono text-[10px] tracking-wider text-brand-text-muted uppercase">
                      Languages
                    </td>
                    <td className="py-3 text-brand-primary font-medium font-mono text-xs text-indigo-400">
                      {portfolioData.skills.languages.slice(0, 5).join(' · ')}
                    </td>
                  </tr>

                  {/* Row 6: Location */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-3 font-mono text-[10px] tracking-wider text-brand-text-muted uppercase">
                      Location
                    </td>
                    <td className="py-3 text-brand-primary font-medium">
                      {portfolioData.location}
                    </td>
                  </tr>

                  {/* Row 7: Status */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-3 font-mono text-[10px] tracking-wider text-brand-text-muted uppercase">
                      Status
                    </td>
                    <td className="py-3 text-brand-primary font-medium h-12">
                      <div className="flex items-center gap-2 overflow-hidden h-full">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={statusIndex}
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -15, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-2"
                          >
                            <span>{statuses[statusIndex].emoji}</span>
                            <span>{statuses[statusIndex].text}</span>
                          </motion.span>
                        </AnimatePresence>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-brand-primary text-brand-bg font-bold text-xs hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
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
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-accent transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-accent transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                {portfolioData.socials.leetcode && (
                  <a
                    href={portfolioData.socials.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-accent transition-colors"
                    aria-label="LeetCode Profile"
                  >
                    <Leetcode size={18} />
                  </a>
                )}
                {portfolioData.socials.youtube && (
                  <a
                    href={portfolioData.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-accent transition-colors"
                    aria-label="YouTube Channel"
                  >
                    <Youtube size={18} />
                  </a>
                )}
                {portfolioData.socials.devto && (
                  <a
                    href={portfolioData.socials.devto}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-accent transition-colors"
                    aria-label="Dev.to Blog"
                  >
                    <Devto size={18} />
                  </a>
                )}
                {portfolioData.socials.medium && (
                  <a
                    href={portfolioData.socials.medium}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-accent transition-colors"
                    aria-label="Medium Blog"
                  >
                    <Medium size={18} />
                  </a>
                )}
                {portfolioData.socials.reddit && (
                  <a
                    href={portfolioData.socials.reddit}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-accent transition-colors"
                    aria-label="Reddit Profile"
                  >
                    <Reddit size={18} />
                  </a>
                )}
                <a
                  href={`mailto:${portfolioData.socials.email}`}
                  className="hover:text-brand-accent transition-colors"
                  aria-label="Send Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Original Abstract Portfolio Picture */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              variants={itemVariants}
              className="p-3 rounded-2xl bg-brand-card border border-brand-border shadow-2xl max-w-sm w-full"
            >
              {/* Natural Color Portrait (No Grayscale, No hover effects filters) */}
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-brand-bg border border-brand-border/40">
                <img
                  src="/placeholders/hero.jpg"
                  alt="Sanket Chaudhari Profile Banner"
                  className="w-full h-full object-cover brightness-95"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
