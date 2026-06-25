import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Cpu, ListChecks, HelpCircle, Milestone } from 'lucide-react';
import { GithubIcon as Github } from '../components/BrandIcons';
import { portfolioData } from '../data/portfolioData';

export const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the requested project
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h2 className="font-heading font-bold text-3xl text-brand-primary mb-4">
          Project Not Found
        </h2>
        <p className="text-brand-text-muted mb-8 text-center">
          The case study you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 rounded-xl bg-brand-primary text-brand-bg font-semibold text-sm transition-opacity hover:opacity-90 flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-32 pb-24 px-6 max-w-4xl mx-auto">
      {/* Back Link */}
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-2 text-sm text-brand-text-muted hover:text-brand-accent transition-colors mb-8 cursor-pointer group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>

      {/* Header Info */}
      <div className="space-y-4 mb-10">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border border-brand-accent/30 bg-brand-accent-glow text-brand-accent">
          {project.category} Case Study
        </span>
        <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-primary tracking-tight leading-tight">
          {project.title}
        </h1>
        <p className="font-sans text-base md:text-xl text-brand-text-muted max-w-3xl leading-relaxed">
          {project.tagline}
        </p>
      </div>

      {/* Action Buttons Row */}
      <div className="flex flex-wrap items-center gap-4 py-6 border-y border-brand-border/60 mb-10">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-brand-primary text-brand-bg font-semibold text-sm transition-opacity hover:opacity-90 flex items-center gap-2 cursor-pointer"
          >
            <ExternalLink size={16} />
            Visit Live Application
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-xl border border-brand-border bg-brand-card hover:bg-brand-card hover:border-brand-accent/50 text-brand-text font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
        >
          <Github size={16} />
          View Source Repository
        </a>
      </div>

      {/* Case Study Details */}
      <div className="space-y-12 font-sans">
        {/* Description / Overview */}
        <section className="space-y-4">
          <h2 className="font-heading font-bold text-xl md:text-2xl text-brand-primary flex items-center gap-2.5">
            <Cpu className="text-brand-accent" size={20} />
            Project Overview
          </h2>
          <p className="text-brand-text-muted leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* Problem Statement */}
        <section className="space-y-4 p-6 rounded-2xl bg-brand-card border border-brand-border/60 shadow-md">
          <h2 className="font-heading font-bold text-lg md:text-xl text-brand-primary flex items-center gap-2.5">
            <HelpCircle className="text-brand-accent" size={20} />
            The Challenge
          </h2>
          <p className="text-brand-text-muted text-sm md:text-base leading-relaxed">
            {project.problem}
          </p>
        </section>

        {/* Key Features */}
        <section className="space-y-4">
          <h2 className="font-heading font-bold text-xl md:text-2xl text-brand-primary flex items-center gap-2.5">
            <ListChecks className="text-brand-accent" size={20} />
            Core Implementation & Features
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="p-4 rounded-xl border border-brand-border bg-brand-card/50 text-sm text-brand-text-muted leading-relaxed"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="space-y-4">
          <h2 className="font-heading font-bold text-lg md:text-xl text-brand-primary">
            Technology Stack & Tools
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-brand-card border border-brand-border text-brand-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Architecture (if defined) */}
        {project.architecture && (
          <section className="space-y-4">
            <h2 className="font-heading font-bold text-xl md:text-2xl text-brand-primary">
              System Architecture
            </h2>
            <p className="text-brand-text-muted leading-relaxed">
              {project.architecture}
            </p>
          </section>
        )}

        {/* Future Improvements (if defined) */}
        {project.futureImprovements && project.futureImprovements.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-heading font-bold text-xl md:text-2xl text-brand-primary flex items-center gap-2.5">
              <Milestone className="text-brand-accent" size={20} />
              Roadmap & Future Enhancements
            </h2>
            <ul className="space-y-3 text-brand-text-muted">
              {project.futureImprovements.map((imp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm md:text-base leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0"></span>
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
};
export default CaseStudy;
