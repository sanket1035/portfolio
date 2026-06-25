import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, TwitterIcon as Twitter } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Tagline Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent-glow text-xs font-semibold text-brand-accent tracking-wide uppercase">
            <span>Available for Internships & Projects</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-brand-primary leading-tight"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-indigo-400 to-violet-500">{portfolioData.name}</span>
          </motion.h1>

          {/* Subtitles */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-medium text-brand-text">
              {portfolioData.title}
            </h2>
            <p className="font-sans text-sm md:text-base text-brand-accent font-semibold tracking-wider uppercase">
              {portfolioData.subtitle}
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto font-sans text-base md:text-lg text-brand-text-muted leading-relaxed"
          >
            {portfolioData.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={handleScrollToProjects}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-primary text-brand-bg font-semibold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-primary/10 group"
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-brand-border bg-brand-card/50 hover:bg-brand-card hover:border-brand-accent/50 text-brand-text font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText size={16} className="text-brand-accent" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-6 pt-8 text-brand-text-muted"
          >
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-accent transition-colors p-2 hover:bg-brand-border/30 rounded-full"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-accent transition-colors p-2 hover:bg-brand-border/30 rounded-full"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={portfolioData.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-accent transition-colors p-2 hover:bg-brand-border/30 rounded-full"
              aria-label="Twitter Profile"
            >
              <Twitter size={20} />
            </a>
            <a
              href={`mailto:${portfolioData.socials.email}`}
              className="hover:text-brand-accent transition-colors p-2 hover:bg-brand-border/30 rounded-full"
              aria-label="Send Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
