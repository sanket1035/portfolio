import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Cpu, ListChecks, HelpCircle, Milestone, FolderTree, BookOpen, Layers } from 'lucide-react';
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
    <article className="min-h-screen pt-32 pb-24 px-6 max-w-4xl mx-auto bg-brand-bg text-brand-text">
      {/* Back Link */}
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-brand-text-muted hover:text-brand-accent transition-colors mb-8 cursor-pointer group uppercase"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>

      {/* Header Info */}
      <div className="space-y-4 mb-10">
        <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase border border-brand-accent/30 bg-brand-accent-glow text-brand-accent">
          {project.category} Case Study
        </span>
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-primary tracking-tight leading-tight uppercase">
          {project.title}
        </h1>
        <p className="font-sans text-sm md:text-base text-brand-text-muted max-w-3xl leading-relaxed">
          {project.tagline}
        </p>
      </div>

      {/* Image Banner */}
      <div className="w-full aspect-video rounded-2xl overflow-hidden border border-brand-border bg-brand-card shadow-xl mb-10">
        <img
          src={project.image}
          alt={`${project.title} Banner Image`}
          className="w-full h-full object-cover grayscale brightness-90 contrast-[1.05]"
        />
      </div>

      {/* Action Buttons Row */}
      <div className="flex flex-wrap items-center gap-4 py-6 border-y border-brand-border/40 mb-10">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-lg border border-brand-border bg-brand-card hover:bg-brand-card hover:border-brand-accent/50 text-brand-text font-bold text-xs transition-all flex items-center gap-2 cursor-pointer"
        >
          <Github size={15} />
          View Source Repository
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-lg bg-brand-primary text-brand-bg font-bold text-xs transition-opacity hover:opacity-90 flex items-center gap-2 cursor-pointer"
          >
            <ExternalLink size={15} />
            Visit Live Application
          </a>
        )}
      </div>

      {/* Case Study Details */}
      <div className="space-y-12 font-sans">
        {/* Description / Overview & Motivation */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="space-y-4">
            <h2 className="font-heading font-bold text-lg md:text-xl text-brand-primary flex items-center gap-2.5 uppercase tracking-wide">
              <Cpu className="text-brand-accent" size={18} />
              Project Overview
            </h2>
            <p className="text-sm text-brand-text-muted leading-relaxed">
              {project.description}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading font-bold text-lg md:text-xl text-brand-primary flex items-center gap-2.5 uppercase tracking-wide">
              <BookOpen className="text-brand-accent" size={18} />
              Motivation
            </h2>
            <p className="text-sm text-brand-text-muted leading-relaxed">
              {project.motivation}
            </p>
          </section>
        </div>

        {/* Problem Statement */}
        <section className="space-y-4 p-6 rounded-xl bg-brand-card border border-brand-border shadow-md">
          <h2 className="font-heading font-bold text-base md:text-lg text-brand-primary flex items-center gap-2.5 uppercase tracking-wide">
            <HelpCircle className="text-brand-accent" size={18} />
            The Challenge & Problem
          </h2>
          <p className="text-brand-text-muted text-xs md:text-sm leading-relaxed">
            {project.problem}
          </p>
        </section>

        {/* Key Features */}
        <section className="space-y-4">
          <h2 className="font-heading font-bold text-lg md:text-xl text-brand-primary flex items-center gap-2.5 uppercase tracking-wide">
            <ListChecks className="text-brand-accent" size={18} />
            Core Implementation & Features
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="p-4 rounded-lg border border-brand-border bg-brand-card/50 text-xs md:text-sm text-brand-text-muted leading-relaxed"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Technical Folder Structure and Architecture */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Folder Structure */}
          <section className="space-y-4">
            <h2 className="font-heading font-bold text-lg md:text-xl text-brand-primary flex items-center gap-2.5 uppercase tracking-wide">
              <FolderTree className="text-brand-accent" size={18} />
              Folder Structure
            </h2>
            <pre className="p-4 rounded-xl bg-brand-card border border-brand-border text-xs text-brand-text-muted font-mono leading-relaxed overflow-x-auto">
              <code>{project.folderStructure}</code>
            </pre>
          </section>

          {/* Architecture */}
          {project.architecture && (
            <section className="space-y-4">
              <h2 className="font-heading font-bold text-lg md:text-xl text-brand-primary flex items-center gap-2.5 uppercase tracking-wide">
                <Layers className="text-brand-accent" size={18} />
                Architecture Outline
              </h2>
              <div className="p-4 rounded-xl bg-brand-card border border-brand-border text-xs text-brand-text-muted leading-relaxed font-mono space-y-3">
                <div className="bg-brand-bg px-2.5 py-1.5 rounded border border-brand-border/40 text-center font-bold text-brand-primary">
                  Client UI (React/Android)
                </div>
                <div className="text-center font-bold text-brand-accent">↓ REST / WS API</div>
                <div className="bg-brand-bg px-2.5 py-1.5 rounded border border-brand-border/40 text-center font-bold text-brand-primary">
                  Backend Router (Node/FastAPI)
                </div>
                <div className="text-center font-bold text-brand-accent">↓ Storage Query</div>
                <div className="bg-brand-bg px-2.5 py-1.5 rounded border border-brand-border/40 text-center font-bold text-brand-primary">
                  Database Schema (Postgres/SQLite)
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Challenges & Learnings */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="space-y-4 p-6 rounded-xl bg-brand-card/30 border border-brand-border shadow-md">
            <h3 className="font-heading font-bold text-sm md:text-base text-brand-primary uppercase tracking-wide">
              Development Bottlenecks
            </h3>
            <p className="text-xs md:text-sm text-brand-text-muted leading-relaxed">
              {project.challenges}
            </p>
          </section>

          <section className="space-y-4 p-6 rounded-xl bg-brand-card/30 border border-brand-border shadow-md">
            <h3 className="font-heading font-bold text-sm md:text-base text-brand-primary uppercase tracking-wide">
              Key Technical Learnings
            </h3>
            <p className="text-xs md:text-sm text-brand-text-muted leading-relaxed">
              {project.learnings}
            </p>
          </section>
        </div>

        {/* Future Improvements */}
        {project.futureImprovements && project.futureImprovements.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-heading font-bold text-lg md:text-xl text-brand-primary flex items-center gap-2.5 uppercase tracking-wide">
              <Milestone className="text-brand-accent" size={18} />
              Future Roadmap
            </h2>
            <div className="overflow-hidden rounded-xl border border-brand-border bg-brand-card/40">
              <table className="w-full text-left text-xs md:text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-border/50 text-brand-primary border-b border-brand-border">
                    <th className="p-3 w-16 text-center font-mono">Phase</th>
                    <th className="p-3">Improvement Item</th>
                  </tr>
                </thead>
                <tbody>
                  {project.futureImprovements.map((imp, idx) => (
                    <tr key={idx} className="border-b border-brand-border/40 hover:bg-brand-card/85 transition-colors">
                      <td className="p-3 text-center font-mono text-brand-accent font-semibold">0{idx + 1}</td>
                      <td className="p-3 text-brand-text-muted">{imp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>
    </article>
  );
};
export default CaseStudy;
