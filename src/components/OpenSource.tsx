import React from 'react';
import { Award, Globe, ExternalLink, Cpu, Laptop, ListChecks, CheckCircle2, GitBranch, Terminal, Check, Square, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const OpenSource: React.FC = () => {
  // Featured Engineering Repositories
  const featuredRepos = [
    {
      name: 'Atlas AI',
      desc: 'AI-powered learning path generator & skill graph builder.',
      tech: 'TypeScript | React | Python | Gemini API',
      status: 'Active',
      statusColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      url: 'https://github.com/Hills081199/AMD-HACKATHON-II'
    },
    {
      name: 'PlaceTrack AI',
      desc: 'AI-powered location verification & geofenced check-in system for small teams.',
      tech: 'TypeScript | React | Node.js | PostgreSQL',
      status: 'Completed',
      statusColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      url: 'https://github.com/sanket1035/placetrack-ai'
    },
    {
      name: 'Carbonomics AI',
      desc: 'Predictive carbon footprint estimator & industrial emissions optimization platform.',
      tech: 'Python | FastAPI | PyTorch | Next.js',
      status: 'Predictive Modeling',
      statusColor: 'bg-brand-accent/10 text-brand-accent border-brand-accent/20',
      url: 'https://github.com/sanket1035/Carbonomics-AI'
    },
    {
      name: 'Predictive Maintenance ML',
      desc: 'Detects equipment vibration anomalies & trains ML predictive maintenance models.',
      tech: 'Python | Scikit-learn | Pandas | NumPy',
      status: 'In Progress',
      statusColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      url: 'https://github.com/sanket1035/Predictive-Maintenance-ML'
    }
  ];

  // Tech Ecosystem Card
  const techEcosystem = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'FastAPI'] },
    { category: 'AI/ML', items: ['Python', 'Scikit-learn', 'Pandas', 'Gemini API'] },
    { category: 'Database', items: ['PostgreSQL', 'Firebase'] }
  ];

  // Current Focus Checklist
  const currentFocus = [
    'AI Applications',
    'Full Stack Systems',
    'Developer Experience',
    'Open Source',
    'Android Development',
    'ML Research'
  ];

  // Currently Building
  const currentlyBuilding = [
    { name: 'Carbonomics AI', detail: 'Building predictive ML pipelines' },
    { name: 'Atlas AI', detail: 'Concept graph generation' },
    { name: 'Predictive Maintenance ML', detail: 'Detects vibration & ML model training' }
  ];

  // Currently Learning
  const currentlyLearning = [
    'System Design',
    'Docker',
    'CI/CD',
    'RAG',
    'Agentic AI',
    'Redis'
  ];

  // Development Environment Tools
  const envTools = ['VS Code', 'Git', 'Docker', 'Postman', 'Android Studio', 'Power BI', 'Figma', 'Linux'];

  // Git Practices
  const gitPractices = [
    'Conventional Commits',
    'Feature Branches',
    'Code Reviews',
    'Semantic Versioning'
  ];

  // 2026 Goals
  const goals2026 = [
    { text: 'Launch Carbonomics AI', done: false },
    { text: 'Build end-to-end AI products', done: false },
    { text: 'Learn RAG & Agentic AI', done: false },
    { text: 'Contribute to production-grade open source', done: true },
    { text: 'Master System Design', done: false },
    { text: 'Participate in Hacktoberfest', done: false }
  ];

  return (
    <section id="opensource" className="w-full py-24 px-6 lg:px-8 border-t border-brand-border/40 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center">
          <p className="font-mono text-[10px] tracking-widest text-brand-accent uppercase font-bold flex items-center justify-center gap-1.5">
            <Terminal size={12} />
            DEVELOPER PROFILE
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-primary tracking-tight mt-3 uppercase">
            GitHub &amp; Development
          </h2>
          <p className="font-sans text-xs md:text-sm text-brand-text-muted max-w-2xl mx-auto mt-2 leading-relaxed">
            A snapshot of my current engineering focus, technologies, and software development workflow.
          </p>
          <div className="h-1 w-16 bg-brand-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Unified Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT PANEL (Col Span 5): Tech Ecosystem & Current Focus */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Tech Ecosystem Card */}
            <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-4">
              <h3 className="font-heading font-bold text-sm md:text-base text-brand-primary flex items-center gap-2 uppercase tracking-wide border-b border-brand-border/40 pb-3">
                <Cpu size={16} className="text-brand-accent" />
                Tech Ecosystem
              </h3>
              <div className="space-y-4">
                {techEcosystem.map((group) => (
                  <div key={group.category} className="space-y-1.5">
                    <p className="text-[10px] font-mono font-semibold text-brand-text-muted uppercase tracking-wider">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="px-2.5 py-1 rounded-md text-xs font-sans font-medium bg-brand-bg border border-brand-border text-brand-primary">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Focus Card */}
            <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-4">
              <h3 className="font-heading font-bold text-sm md:text-base text-brand-primary flex items-center gap-2 uppercase tracking-wide border-b border-brand-border/40 pb-3">
                <ListChecks size={16} className="text-brand-accent" />
                Current Focus
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {currentFocus.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-sans font-medium text-brand-primary">
                    <Check size={14} className="text-green-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Environment Tools */}
            <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-4">
              <h3 className="font-heading font-bold text-sm md:text-base text-brand-primary flex items-center gap-2 uppercase tracking-wide border-b border-brand-border/40 pb-3">
                <Laptop size={16} className="text-brand-accent" />
                Development Environment
              </h3>
              <div className="flex flex-wrap gap-2">
                {envTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-brand-bg border border-brand-border text-brand-primary flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT PANEL (Col Span 7): Featured Repositories, Currently Building/Learning */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            
            {/* Featured Engineering Repositories */}
            <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-4">
              <h3 className="font-heading font-bold text-sm md:text-base text-brand-primary flex items-center gap-2 uppercase tracking-wide border-b border-brand-border/40 pb-3">
                <Code2 size={16} className="text-brand-accent" />
                Featured Engineering Repositories
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {featuredRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-lg bg-brand-bg/50 border border-brand-border/60 space-y-2 hover:border-brand-accent/40 hover:bg-brand-card/25 transition-all duration-300 block group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-bold text-xs md:text-sm text-brand-primary group-hover:text-brand-accent transition-colors flex items-center gap-1">
                        {repo.name}
                        <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-accent" />
                      </h4>
                      <span className={`text-[8px] font-mono font-semibold border px-2 py-0.5 rounded ${repo.statusColor}`}>
                        {repo.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-brand-text-muted leading-relaxed font-sans">
                      {repo.desc}
                    </p>
                    <p className="text-[9px] font-mono text-brand-accent">{repo.tech}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Currently Building & Currently Learning Side-by-Side */}
            <div className="grid sm:grid-cols-2 gap-6">
              
              {/* Currently Building */}
              <div className="p-5 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-3">
                <h4 className="font-heading font-bold text-xs text-brand-primary uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                  Currently Building
                </h4>
                <div className="space-y-2.5 font-sans text-xs">
                  {currentlyBuilding.map((item) => (
                    <div key={item.name} className="p-2.5 rounded bg-brand-bg/50 border border-brand-border/40 space-y-0.5">
                      <p className="font-bold text-brand-primary">{item.name}</p>
                      <p className="text-[11px] text-brand-text-muted">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Currently Learning */}
              <div className="p-5 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-3">
                <h4 className="font-heading font-bold text-xs text-brand-primary uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  Currently Learning
                </h4>
                <ul className="space-y-2 font-sans text-xs text-brand-text-muted pt-1">
                  {currentlyLearning.map((item) => (
                    <li key={item} className="flex items-center gap-2 p-1.5 rounded bg-brand-bg/40 border border-brand-border/30">
                      <span className="text-indigo-400 font-mono font-bold">-</span>
                      <span className="text-brand-primary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM PANEL: Side-by-Side Git Workflow & 2026 Goals */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Git Workflow & Architecture */}
          <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-4">
            <h4 className="font-heading font-bold text-xs md:text-sm text-brand-primary uppercase tracking-wide flex items-center gap-1.5 border-b border-brand-border/40 pb-2">
              <GitBranch size={14} className="text-brand-accent" />
              Git Workflow &amp; Architecture
            </h4>
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-brand-text-muted block text-[10px] uppercase tracking-wider">Branch Strategy</span>
                <span className="text-brand-primary">main &amp; feature/*</span>
              </div>
              <div>
                <span className="text-brand-text-muted block text-[10px] uppercase tracking-wider font-mono">Version Control</span>
                <span className="text-brand-primary">Git + GitHub</span>
              </div>
            </div>
            <div className="pt-2 space-y-2">
              <span className="text-brand-text-muted block text-[10px] uppercase tracking-wider font-mono">Practices</span>
              <div className="flex flex-wrap gap-2">
                {gitPractices.map((practice) => (
                  <span key={practice} className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono bg-brand-bg border border-brand-border/60 text-brand-primary">
                    <Check size={12} className="text-green-500" />
                    {practice}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2026 Goals */}
          <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-4">
            <h4 className="font-heading font-bold text-xs md:text-sm text-brand-primary uppercase tracking-wide flex items-center gap-1.5 border-b border-brand-border/40 pb-2">
              <CheckCircle2 size={14} className="text-brand-accent" />
              2026 Goals
            </h4>
            <div className="grid sm:grid-cols-2 gap-3 text-xs font-sans">
              {goals2026.map((goal, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded bg-brand-bg/50 border border-brand-border/50 text-brand-primary">
                  {goal.done ? (
                    <CheckCircle2 size={14} className="text-green-400 shrink-0 font-bold" />
                  ) : (
                    <Square size={14} className="text-brand-text-muted/60 shrink-0" />
                  )}
                  <span className={goal.done ? 'font-semibold text-green-400' : ''}>{goal.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Open Source Programs Section */}
        <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-5">
          <h3 className="font-heading font-bold text-xs md:text-sm text-brand-primary flex items-center gap-2 uppercase tracking-wide border-b border-brand-border/40 pb-2">
            <Award className="text-brand-accent" size={16} />
            Open Source Programs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.openSource.programs.map((program, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-brand-bg/50 border border-brand-border/60 flex items-start gap-4 hover:border-brand-accent/30 hover:bg-brand-card/30 transition-all duration-300"
              >
                {program.image ? (
                  <button
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-lightbox', { detail: { src: program.image } }))}
                    className="block shrink-0 mt-0.5 cursor-pointer hover:opacity-80 transition-opacity focus:outline-none font-mono"
                    title="Click to view full credential"
                  >
                    <img
                      src={program.image}
                      alt={program.programName}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover border border-brand-border/60 shadow"
                    />
                  </button>
                ) : (
                  <div className="p-3.5 rounded-lg bg-brand-border/50 text-brand-accent shrink-0 mt-0.5">
                    <Globe size={24} />
                  </div>
                )}
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-xs md:text-sm text-brand-primary flex items-center gap-2 flex-wrap font-mono">
                    {program.programName}
                    <span className="text-[9px] font-mono font-medium bg-brand-border px-2 py-0.5 rounded text-brand-text-muted">
                      {program.year}
                    </span>
                  </h4>
                  <p className="text-[10px] font-mono font-semibold text-brand-accent uppercase tracking-wider font-mono">{program.role}</p>
                  <p className="text-[11px] text-brand-text-muted leading-relaxed font-sans">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 flex justify-center">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-brand-border bg-brand-card/40 hover:bg-brand-card hover:border-brand-accent/50 text-xs font-semibold text-brand-text transition-all cursor-pointer font-mono tracking-widest uppercase font-mono"
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
