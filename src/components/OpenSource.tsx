import React, { useEffect, useState } from 'react';
import { Award, Globe, ExternalLink, BookOpen, Cpu, Laptop, ListChecks, CheckCircle2, GitBranch, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
}

export const OpenSource: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  const username = portfolioData.socials.github.split('/').pop() || 'sanket1035';

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const profileRes = await fetch(`https://api.github.com/users/${username}`);
        if (profileRes.ok) {
          const profileData = await profileRes.json();
          setStats({
            public_repos: profileData.public_repos,
            followers: profileData.followers,
            following: profileData.following,
          });
        }
      } catch (error) {
        console.warn('GitHub API rate limited. Using local fallback metrics.');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  // Static Languages Used data
  const languages = [
    { name: 'TypeScript', percent: 100, color: 'bg-blue-500' },
    { name: 'Python', percent: 80, color: 'bg-yellow-500' },
    { name: 'Java', percent: 70, color: 'bg-red-500' },
    { name: 'Kotlin', percent: 50, color: 'bg-purple-500' },
    { name: 'SQL', percent: 40, color: 'bg-pink-500' }
  ];

  // Static Coding Activity focus data
  const focusAreas = [
    { name: 'Web Development', percent: 100, color: 'bg-brand-accent' },
    { name: 'AI Projects & ML', percent: 80, color: 'bg-brand-accent' },
    { name: 'Mobile Apps (Android)', percent: 60, color: 'bg-brand-accent' },
    { name: 'Open Source Modules', percent: 40, color: 'bg-brand-accent' }
  ];

  // Local environment tools
  const envTools = ['VS Code', 'Windows 11', 'Git', 'Docker', 'Postman', 'Android Studio', 'Figma', 'Power BI'];

  // Open source goals list
  const ossGoals = [
    { text: 'First 50 GitHub Contributions', done: true },
    { text: '100+ Commit Milestones', done: true },
    { text: '10+ Public Repositories', done: true },
    { text: 'First Major OSS Contribution', done: false },
    { text: 'Participate in Hacktoberfest', done: false },
    { text: 'Contribute to GSSoC / Social programs', done: false }
  ];

  return (
    <section id="opensource" className="py-24 px-6 border-t border-brand-border/40 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-brand-accent-glow/5 blur-[150px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-[10px] tracking-widest text-brand-accent uppercase font-bold flex items-center justify-center gap-1.5">
            <Terminal size={12} />
            DEVELOPER PROFILE
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-primary tracking-tight mt-3 uppercase">
            GitHub & Development
          </h2>
          <div className="h-1 w-16 bg-brand-accent mx-auto mt-4 rounded-full shadow-lg shadow-brand-accent/50"></div>
        </div>

        {/* Unified Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT PANEL: Live Metrics, Languages & Focus (Col Span 5) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-brand-card border border-brand-border shadow-sm flex flex-col justify-center">
                <p className="text-[10px] text-brand-text-muted font-mono uppercase tracking-wider">Repositories</p>
                <h3 className="font-heading font-extrabold text-2xl text-brand-primary mt-1.5 flex items-center gap-2">
                  <BookOpen size={16} className="text-brand-accent" />
                  {loading ? '...' : stats?.public_repos ?? '14'}
                </h3>
              </div>

              <div className="p-5 rounded-xl bg-brand-card border border-brand-border shadow-sm flex flex-col justify-center">
                <p className="text-[10px] text-brand-text-muted font-mono uppercase tracking-wider">Profile Status</p>
                <h3 className="font-heading font-extrabold text-sm text-brand-primary mt-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active / Open
                </h3>
              </div>
            </div>

            {/* Languages Stack */}
            <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-5">
              <h4 className="font-heading font-bold text-xs md:text-sm text-brand-primary uppercase tracking-wide flex items-center gap-1.5 border-b border-brand-border/40 pb-2">
                <Cpu size={14} className="text-brand-accent" />
                Languages Used
              </h4>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-brand-primary">{lang.name}</span>
                      <span className="text-brand-text-muted">{lang.percent}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-brand-border rounded-full overflow-hidden">
                      <div className={`h-full ${lang.color} rounded-full`} style={{ width: `${lang.percent}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coding Focus Areas */}
            <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-5">
              <h4 className="font-heading font-bold text-xs md:text-sm text-brand-primary uppercase tracking-wide flex items-center gap-1.5 border-b border-brand-border/40 pb-2">
                <Globe size={14} className="text-brand-accent" />
                Development Focus
              </h4>
              <div className="space-y-3">
                {focusAreas.map((area) => (
                  <div key={area.name} className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-brand-primary">{area.name}</span>
                      <span className="text-brand-text-muted">{area.percent}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-brand-border rounded-full overflow-hidden">
                      <div className={`h-full ${area.color} rounded-full`} style={{ width: `${area.percent}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* MIDDLE PANEL: Featured Engineering Repos & Roadmap (Col Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Featured Projects & Repos */}
            <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-4">
              <h4 className="font-heading font-bold text-xs md:text-sm text-brand-primary uppercase tracking-wide flex items-center gap-1.5 border-b border-brand-border/40 pb-2">
                <Laptop size={14} className="text-brand-accent" />
                Featured Engineering Repositories
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                
                {/* Repo 1: PlaceTrack AI */}
                <div className="p-4 rounded-lg bg-brand-bg/50 border border-brand-border/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <h5 className="font-heading font-bold text-xs md:text-sm text-brand-primary">PlaceTrack AI</h5>
                    <span className="text-[8px] font-mono font-semibold bg-brand-border text-brand-text-muted px-2 py-0.5 rounded">
                      In Development
                    </span>
                  </div>
                  <p className="text-[11px] text-brand-text-muted leading-relaxed">
                    AI-powered location verification & geofenced check-in system for small teams.
                  </p>
                  <p className="text-[9px] font-mono text-brand-accent">TypeScript • React • Node.js</p>
                </div>

                {/* Repo 2: Carbonomics AI */}
                <div className="p-4 rounded-lg bg-brand-bg/50 border border-brand-border/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <h5 className="font-heading font-bold text-xs md:text-sm text-brand-primary">Carbonomics AI</h5>
                    <span className="text-[8px] font-mono font-semibold bg-brand-border text-brand-text-muted px-2 py-0.5 rounded">
                      Research Phase
                    </span>
                  </div>
                  <p className="text-[11px] text-brand-text-muted leading-relaxed">
                    Carbon emission estimates and optimization recommendation engine.
                  </p>
                  <p className="text-[9px] font-mono text-brand-accent">Python • FastAPI • PyTorch</p>
                </div>

                {/* Repo 3: Algonix */}
                <div className="p-4 rounded-lg bg-brand-bg/50 border border-brand-border/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <h5 className="font-heading font-bold text-xs md:text-sm text-brand-primary">Algonix</h5>
                    <span className="text-[8px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
                      Live
                    </span>
                  </div>
                  <p className="text-[11px] text-brand-text-muted leading-relaxed">
                    Interactive sorting algorithm visualizer and sandbox built for DSA students.
                  </p>
                  <p className="text-[9px] font-mono text-brand-accent">TypeScript • React • Framer Motion</p>
                </div>

                {/* Repo 4: GST Billing App */}
                <div className="p-4 rounded-lg bg-brand-bg/50 border border-brand-border/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <h5 className="font-heading font-bold text-xs md:text-sm text-brand-primary">GST Billing App</h5>
                    <span className="text-[8px] font-mono font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded">
                      Completed
                    </span>
                  </div>
                  <p className="text-[11px] text-brand-text-muted leading-relaxed">
                    Offline-first invoice POS application for small and medium retail merchants.
                  </p>
                  <p className="text-[9px] font-mono text-brand-accent">Java • Android SDK • SQLite</p>
                </div>

              </div>
            </div>

            {/* Currently Building & Currently Learning */}
            <div className="grid sm:grid-cols-2 gap-6">
              
              <div className="p-5 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-4">
                <h5 className="font-heading font-bold text-xs text-brand-primary uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                  Currently Building
                </h5>
                <ul className="space-y-2.5 font-sans text-xs text-brand-text-muted">
                  <li className="flex items-center gap-2">
                    <span className="text-brand-accent font-mono">•</span> Carbonomics AI Models
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-accent font-mono">•</span> PlaceTrack Mobile Core
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-accent font-mono">•</span> Developer Portfolio v3
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-4">
                <h5 className="font-heading font-bold text-xs text-brand-primary uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  Currently Learning
                </h5>
                <ul className="space-y-2.5 font-sans text-xs text-brand-text-muted">
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-400 font-mono">•</span> System Design & Load Balancing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-400 font-mono">•</span> Docker & Kubernetes Orchestration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-400 font-mono">•</span> AI Agents & LangChain Orchestration
                  </li>
                </ul>
              </div>

            </div>

            {/* Development Environment Tools */}
            <div className="p-5 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-4">
              <h5 className="font-heading font-bold text-xs text-brand-primary uppercase tracking-wider flex items-center gap-1.5">
                <ListChecks size={14} className="text-brand-accent" />
                Development Environment
              </h5>
              <div className="flex flex-wrap gap-2">
                {envTools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] font-mono bg-brand-bg px-2.5 py-1 rounded-md border border-brand-border text-brand-primary"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM PANEL: Open Source Programs, Principles & Git Workflow */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          
          {/* Programs Card with Larger Clickable Badge Images */}
          <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-5">
            <h3 className="font-heading font-bold text-xs md:text-sm text-brand-primary flex items-center gap-2 uppercase tracking-wide border-b border-brand-border/40 pb-2">
              <Award className="text-brand-accent" size={16} />
              Open Source Programs
            </h3>
            <div className="space-y-4">
              {portfolioData.openSource.programs.map((program, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-brand-bg/50 border border-brand-border/60 flex items-start gap-4 hover:border-brand-accent/30 hover:bg-brand-card/30 transition-all duration-300"
                >
                  {program.image ? (
                    <a
                      href={program.image}
                      target="_blank"
                      rel="noreferrer"
                      className="block shrink-0 mt-0.5 cursor-pointer hover:opacity-80 transition-opacity"
                      title="Click to view full credential"
                    >
                      <img
                        src={program.image}
                        alt={program.programName}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover border border-brand-border/60 shadow"
                      />
                    </a>
                  ) : (
                    <div className="p-3.5 rounded-lg bg-brand-border/50 text-brand-accent shrink-0 mt-0.5">
                      <Globe size={24} />
                    </div>
                  )}
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-xs md:text-sm text-brand-primary flex items-center gap-2">
                      {program.programName}
                      <span className="text-[9px] font-mono font-medium bg-brand-border px-2 py-0.5 rounded text-brand-text-muted">
                        {program.year}
                      </span>
                    </h4>
                    <p className="text-[10px] font-mono font-semibold text-brand-accent uppercase tracking-wider">{program.role}</p>
                    <p className="text-[11px] text-brand-text-muted leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Principles & OSS Goals */}
          <div className="space-y-6">
            
            {/* Git Workflow & Dev Principles */}
            <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-4">
              <h4 className="font-heading font-bold text-xs md:text-sm text-brand-primary uppercase tracking-wide flex items-center gap-1.5 border-b border-brand-border/40 pb-2">
                <GitBranch size={14} className="text-brand-accent" />
                Git Workflow & Architecture
              </h4>
              <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-brand-text-muted block text-[10px] uppercase tracking-wider">Branch Strategy</span>
                  <span className="text-brand-primary">main & feature/*</span>
                </div>
                <div>
                  <span className="text-brand-text-muted block text-[10px] uppercase tracking-wider">Version Control</span>
                  <span className="text-brand-primary">Git + GitHub</span>
                </div>
              </div>
              <div className="pt-2">
                <span className="text-brand-text-muted block text-[10px] uppercase tracking-wider font-mono mb-2">Engineering Principles</span>
                <div className="flex flex-wrap gap-1.5">
                  {['Clean Architecture', 'Type Safety', 'REST APIs', 'Responsive UI', 'Component Design', 'Git Workflow', 'Automated Testing'].map((p) => (
                    <span key={p} className="text-[9px] font-mono bg-brand-bg/50 px-2 py-0.5 rounded border border-brand-border text-brand-text-muted">
                      ✔ {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* OSS Goals (Roadmap) */}
            <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-md space-y-4">
              <h4 className="font-heading font-bold text-xs md:text-sm text-brand-primary uppercase tracking-wide flex items-center gap-1.5 border-b border-brand-border/40 pb-2">
                <CheckCircle2 size={14} className="text-brand-accent" />
                OSS Roadmap & Goals (2026)
              </h4>
              <div className="grid sm:grid-cols-2 gap-2 text-[11px] font-sans text-brand-text-muted">
                {ossGoals.map((goal, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 font-mono text-[9px] ${
                      goal.done ? 'bg-brand-accent/20 border-brand-accent text-brand-accent' : 'border-brand-border text-brand-text-muted'
                    }`}>
                      {goal.done ? '✓' : ' '}
                    </span>
                    <span>{goal.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Action Button */}
        <div className="pt-12 flex justify-center">
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
