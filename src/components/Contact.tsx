import React from 'react';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, TwitterIcon as Twitter } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 border-t border-brand-border/40 bg-brand-card/10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-br from-purple-800/10 via-transparent to-transparent blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <p className="font-mono text-[10px] tracking-widest text-brand-accent uppercase font-bold">
            LET'S CONNECT
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-primary tracking-tight mt-2">
            Get In Touch
          </h2>
          <div className="h-1 w-12 bg-brand-accent mx-auto mt-4 rounded-full shadow-lg shadow-purple-500/50"></div>
          <p className="text-brand-text-muted mt-4 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            I am always open to discussing new projects, collaboration opportunities, or software & AI engineering roles. Feel free to reach out directly through any of these platforms!
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Email Card - Spans 2 columns on medium screens for prominence */}
          <div className="sm:col-span-2 md:col-span-3 p-6 rounded-2xl bg-brand-card/80 border border-brand-border hover:border-brand-accent/40 shadow-xl transition-all duration-300 group flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
              <div className="p-4 rounded-xl bg-brand-accent-glow text-brand-accent border border-brand-accent/20 group-hover:scale-105 transition-transform duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-mono font-semibold uppercase text-brand-accent tracking-wider">Email Address</p>
                <h4 className="font-heading font-bold text-lg md:text-xl text-brand-primary mt-1 select-all">
                  {portfolioData.socials.email}
                </h4>
              </div>
            </div>
            <a
              href={`mailto:${portfolioData.socials.email}`}
              className="w-full md:w-auto px-6 py-3 rounded-xl bg-brand-primary text-brand-bg font-bold text-xs hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shrink-0"
            >
              Email Me Directly
              <ExternalLink size={13} />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 rounded-2xl bg-brand-card/85 border border-brand-border hover:border-brand-accent/40 shadow-lg transition-all duration-300 group flex flex-col justify-between h-48">
            <div className="flex justify-between items-start">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                <Linkedin size={20} />
              </div>
              <span className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">Professional</span>
            </div>
            <div>
              <p className="text-xs font-mono font-semibold uppercase text-brand-text-muted mt-4">LinkedIn</p>
              <h4 className="font-heading font-bold text-base text-brand-primary mt-1 truncate">
                Sanket Chaudhari
              </h4>
            </div>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-4 py-2 rounded-lg border border-brand-border bg-brand-bg hover:bg-brand-card text-brand-text hover:text-brand-accent font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              Connect On LinkedIn
              <ExternalLink size={11} />
            </a>
          </div>

          {/* GitHub Card */}
          <div className="p-6 rounded-2xl bg-brand-card/85 border border-brand-border hover:border-brand-accent/40 shadow-lg transition-all duration-300 group flex flex-col justify-between h-48">
            <div className="flex justify-between items-start">
              <div className="p-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 group-hover:scale-105 transition-transform duration-300">
                <Github size={20} />
              </div>
              <span className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">Codebase</span>
            </div>
            <div>
              <p className="text-xs font-mono font-semibold uppercase text-brand-text-muted mt-4">GitHub</p>
              <h4 className="font-heading font-bold text-base text-brand-primary mt-1 truncate">
                @sanket1035
              </h4>
            </div>
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-4 py-2 rounded-lg border border-brand-border bg-brand-bg hover:bg-brand-card text-brand-text hover:text-brand-accent font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              Explore Repos
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Twitter / X Card */}
          <div className="p-6 rounded-2xl bg-brand-card/85 border border-brand-border hover:border-brand-accent/40 shadow-lg transition-all duration-300 group flex flex-col justify-between h-48">
            <div className="flex justify-between items-start">
              <div className="p-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 group-hover:scale-105 transition-transform duration-300">
                <Twitter size={20} />
              </div>
              <span className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">Social</span>
            </div>
            <div>
              <p className="text-xs font-mono font-semibold uppercase text-brand-text-muted mt-4">Twitter / X</p>
              <h4 className="font-heading font-bold text-base text-brand-primary mt-1 truncate">
                @sanket_codes
              </h4>
            </div>
            <a
              href={portfolioData.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-4 py-2 rounded-lg border border-brand-border bg-brand-bg hover:bg-brand-card text-brand-text hover:text-brand-accent font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              Follow On X
              <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* Location & Status Summary */}
        <div className="mt-12 p-5 rounded-2xl bg-brand-card/40 border border-brand-border/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <MapPin className="text-brand-accent shrink-0" size={18} />
            <p className="text-xs md:text-sm text-brand-text-muted">
              Based in <span className="text-brand-primary font-semibold">{portfolioData.location}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="text-xs text-brand-text-muted">
              Actively open to software & ML engineering opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
