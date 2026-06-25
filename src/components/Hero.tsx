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
          className="grid lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Column: Typography & Spec Table */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              {/* Monospace Subheader */}
              <motion.p
                variants={itemVariants}
                className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-brand-accent uppercase font-bold"
              >
                TECHNICAL SPECIFICATION · HUMAN, GENERALLY CAPABLE
              </motion.p>

              {/* Big Bold Monospace Name */}
              <motion.h1
                variants={itemVariants}
                className="font-heading font-extrabold text-5xl md:text-7xl tracking-tight text-brand-primary uppercase leading-tight"
              >
                SANKET<br />CHAUDHARI
              </motion.h1>
            </div>

            {/* Spec Table */}
            <motion.div variants={itemVariants} className="border-t border-brand-border/60">
              <table className="w-full text-left font-sans text-xs md:text-sm text-brand-text border-collapse">
                <tbody>
                  {/* Row 1 */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-4 font-mono text-[10px] tracking-wider text-brand-text-muted uppercase w-28 md:w-36">
                      CLASS
                    </td>
                    <td className="py-4 text-brand-primary font-medium">
                      Software Developer — practical systems, end to end
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-4 font-mono text-[10px] tracking-wider text-brand-text-muted uppercase">
                      TRAINING
                    </td>
                    <td className="py-4 text-brand-primary font-medium">
                      B.E. AI & Data Science, PICT · GPA {portfolioData.education[0].gpa} · May 2027
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-4 font-mono text-[10px] tracking-wider text-brand-text-muted uppercase">
                      MODALITIES
                    </td>
                    <td className="py-4 text-brand-primary font-medium">
                      Full Stack · ML / Data Science · Open Source · Mobile Dev
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-4 font-mono text-[10px] tracking-wider text-brand-text-muted uppercase">
                      DEPLOYED AT
                    </td>
                    <td className="py-4 text-brand-primary font-medium font-mono text-xs text-indigo-400">
                      PlaceTrack AI · Algonix · GST Billing App
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-4 font-mono text-[10px] tracking-wider text-brand-text-muted uppercase">
                      LOCATION
                    </td>
                    <td className="py-4 text-brand-primary font-medium">
                      Pune, India
                    </td>
                  </tr>

                  {/* Row 6 */}
                  <tr className="border-b border-brand-border/40">
                    <td className="py-4 font-mono text-[10px] tracking-wider text-brand-text-muted uppercase">
                      STATUS
                    </td>
                    <td className="py-4 text-brand-primary font-medium flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Open to Software Development & AI internships
                    </td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            {/* CTAs & Socials */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
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

              {/* Quick Socials */}
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

          {/* Right Column: Profile Picture Card & Caption */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              variants={itemVariants}
              className="p-3 rounded-2xl bg-brand-card border border-brand-border shadow-2xl max-w-sm w-full"
            >
              {/* Profile Image container */}
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-brand-bg relative group border border-brand-border/40">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&h=600&q=80"
                  alt="Sanket Chaudhari Portrait"
                  className="w-full h-full object-cover grayscale contrast-[1.05] brightness-90 group-hover:scale-[1.02] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Monospace Figure Caption */}
              <p className="mt-3 text-center font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-brand-text-muted uppercase">
                FIG. 1 — THE SYSTEM IN QUESTION
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
