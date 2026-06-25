import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, BookOpen } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const navigate = useNavigate();

  const handleCaseStudyClick = (id: string) => {
    navigate(`/projects/${id}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section id="projects" className="py-24 px-6 border-t border-brand-border/40 bg-brand-card/10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-brand-primary tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1 w-12 bg-brand-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-brand-text-muted mt-4 text-sm max-w-lg mx-auto">
            A selection of software systems, AI-powered applications, and offline utilities.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project: Project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/40 shadow-lg hover:shadow-brand-accent/5 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                {/* Category Badge & Tech Stacks */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border border-brand-accent/30 bg-brand-accent-glow text-brand-accent">
                    {project.category}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="font-heading font-bold text-xl md:text-2xl text-brand-primary group-hover:text-brand-accent transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="font-sans text-xs md:text-sm font-semibold text-brand-text mb-3 leading-snug">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="font-sans text-sm text-brand-text-muted mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-brand-bg border border-brand-border text-brand-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-border/60">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-4 py-2.5 rounded-lg bg-brand-primary text-brand-bg font-semibold text-xs transition-opacity hover:opacity-90 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg border border-brand-border bg-brand-bg hover:bg-brand-card hover:border-brand-accent/50 text-brand-text font-semibold text-xs flex items-center justify-center gap-1.5 flex-1 cursor-pointer"
                >
                  <Github size={14} />
                  GitHub
                </a>
                <button
                  onClick={() => handleCaseStudyClick(project.id)}
                  className="px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-bg hover:bg-brand-card hover:border-brand-accent/50 text-brand-accent hover:text-brand-text font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  aria-label={`View ${project.title} Case Study`}
                >
                  <BookOpen size={14} />
                  Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
