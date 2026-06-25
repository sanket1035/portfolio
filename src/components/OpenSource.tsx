import React from 'react';
import { GitPullRequest, Award, Globe, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const OpenSource: React.FC = () => {
  return (
    <section id="opensource" className="py-16 px-6 border-t border-brand-border/40 bg-brand-bg">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="font-mono text-[10px] tracking-widest text-brand-accent uppercase font-bold">
            COMMUNITY
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary tracking-tight mt-2 uppercase">
            Open Source Scope
          </h2>
          <div className="h-0.5 w-10 bg-brand-accent mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* PR Count Card */}
          <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-lg text-center md:col-span-1 flex flex-col items-center justify-center space-y-3">
            <div className="p-3.5 rounded-full bg-brand-accent-glow text-brand-accent border border-brand-accent/20">
              <GitPullRequest size={28} />
            </div>
            <h3 className="font-heading font-extrabold text-4xl text-brand-primary">
              {portfolioData.openSource.mergedPRsCount}+
            </h3>
            <p className="text-xs font-mono tracking-widest uppercase text-brand-accent">
              PRs Merged
            </p>
            <p className="text-[11px] text-brand-text-muted leading-relaxed max-w-xs mx-auto">
              Approved commits in design elements, accessibility structures, and CLI tool configurations.
            </p>
          </div>

          {/* Programs Card */}
          <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-lg md:col-span-2 space-y-5">
            <h3 className="font-heading font-bold text-base md:text-lg text-brand-primary flex items-center gap-2 uppercase tracking-wide">
              <Award className="text-brand-accent" size={18} />
              Open Source Programs & Contributions
            </h3>
            <div className="space-y-4">
              {portfolioData.openSource.programs.map((program, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-brand-bg border border-brand-border/60 flex items-start gap-4 hover:border-brand-accent/30 transition-colors"
                >
                  <div className="p-2 rounded bg-brand-border/50 text-brand-accent shrink-0 mt-0.5">
                    <Globe size={16} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-xs md:text-sm text-brand-primary flex items-center gap-2">
                      {program.programName}
                      <span className="text-[9px] font-mono font-medium bg-brand-border px-2 py-0.5 rounded text-brand-text-muted">
                        {program.year}
                      </span>
                    </h4>
                    <p className="text-[10px] font-mono font-semibold text-brand-accent uppercase tracking-wider">{program.role}</p>
                    <p className="text-xs text-brand-text-muted leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 flex justify-center">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-brand-border bg-brand-card/40 hover:bg-brand-card hover:border-brand-accent/50 text-xs font-semibold text-brand-text transition-all cursor-pointer font-mono tracking-widest uppercase"
          >
            Explore Complete Profile
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
};
export default OpenSource;
