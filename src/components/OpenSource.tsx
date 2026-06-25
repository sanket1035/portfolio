import React from 'react';
import { GitPullRequest, Award, Globe, ExternalLink, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const OpenSource: React.FC = () => {
  return (
    <section id="opensource" className="py-24 px-6 border-t border-brand-border/40 bg-brand-bg">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-brand-primary tracking-tight">
            Open Source Work
          </h2>
          <div className="h-1 w-12 bg-brand-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-brand-text-muted mt-4 text-sm max-w-lg mx-auto">
            Active contributor and program participant in developer-centric libraries and web products.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* PR Count Card */}
          <div className="p-6 rounded-2xl bg-brand-card border border-brand-border/60 shadow-lg text-center md:col-span-1 flex flex-col items-center justify-center space-y-3">
            <div className="p-4 rounded-full bg-brand-accent-glow text-brand-accent">
              <GitPullRequest size={32} />
            </div>
            <h3 className="font-heading font-bold text-3xl text-brand-primary">
              {portfolioData.openSource.mergedPRsCount}+
            </h3>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent">
              Merged Pull Requests
            </p>
            <p className="text-xs text-brand-text-muted">
              Across foundational design libraries and developer CLI toolkits.
            </p>
          </div>

          {/* Programs Card */}
          <div className="p-6 rounded-2xl bg-brand-card border border-brand-border/60 shadow-lg md:col-span-2 space-y-6">
            <h3 className="font-heading font-bold text-xl text-brand-primary flex items-center gap-2">
              <Award className="text-brand-accent" size={20} />
              Contributor Programs & Scholar Fellowships
            </h3>
            <div className="space-y-4">
              {portfolioData.openSource.programs.map((program, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-brand-bg border border-brand-border flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-brand-border/40 text-brand-text shrink-0 mt-0.5">
                    <Globe size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm md:text-base text-brand-text flex items-center gap-2">
                      {program.programName}
                      <span className="text-xs font-mono font-medium bg-brand-border px-2 py-0.5 rounded text-brand-text-muted">
                        {program.year}
                      </span>
                    </h4>
                    <p className="text-xs font-semibold text-brand-accent mb-1.5">{program.role}</p>
                    <p className="text-xs md:text-sm text-brand-text-muted leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contributions Timeline */}
        <div className="p-8 rounded-2xl bg-brand-card/50 border border-brand-border/60 shadow-lg space-y-8">
          <h3 className="font-heading font-bold text-xl text-brand-primary flex items-center gap-2">
            <Calendar className="text-brand-accent" size={20} />
            Activity Timeline
          </h3>
          <div className="relative border-l-2 border-brand-border/80 pl-6 ml-3 space-y-8">
            {portfolioData.openSource.contributionsTimeline.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-brand-accent bg-brand-bg"></div>
                <p className="font-sans text-sm md:text-base text-brand-text leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex justify-center">
            <a
              href={`${portfolioData.socials.github}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-brand-border bg-brand-bg hover:bg-brand-card hover:border-brand-accent/50 text-sm font-semibold text-brand-text transition-all cursor-pointer"
            >
              Explore My Repositories
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OpenSource;
