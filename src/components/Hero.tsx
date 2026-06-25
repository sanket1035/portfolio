import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
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

  const handleScrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-28 pb-12 px-6 bg-brand-bg">
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
                className="font-heading font-extrabold text-5xl md:text-7xl tracking-tight text-brand-primary uppercase leading-none"
              >
                SANKET<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-indigo-400 to-violet-500">
                  CHAUDHARI
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
                    <td className="py-3 text-brand-primary font-medium flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Open to Software Development & AI opportunities (Graduating {portfolioData.education[0].duration.split(' - ')[1]})
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
              <div className="flex items-center gap-4 pl-0 sm:pl-4 border-l border-none sm:border-brand-border h-6 text-brand-text-muted">
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
