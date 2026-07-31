import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, 
  CheckCircle2, 
  Square, 
  Layers, 
  Cpu, 
  BookOpen, 
  Sparkles, 
  Code2, 
  GitBranch, 
  ExternalLink, 
  ArrowRight, 
  Check, 
  Workflow, 
  Compass, 
  FolderGit2 
} from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';

export const OpenSource: React.FC = () => {
  // Top Summary Cards Data
  const summaryCards = [
    { label: 'Projects Built', value: '8+', icon: Code2 },
    { label: 'Open Source Programs', value: '2', icon: GitBranch },
    { label: 'Technologies', value: '20+', icon: Cpu },
    { label: 'Current Status', value: 'Building & Open to Opportunities', isStatus: true, icon: Sparkles },
  ];

  // Current Focus List
  const currentFocus = [
    'Full Stack Development',
    'Artificial Intelligence',
    'Machine Learning',
    'Android Development',
    'Open Source',
    'Developer Experience'
  ];

  // Currently Building List
  const currentlyBuilding = [
    { title: 'Carbonomics AI', desc: 'Research-driven carbon intelligence platform' },
    { title: 'Pramana AI', desc: 'Multi-agent AI research assistant' },
    { title: 'Developer Portfolio v3', desc: 'Personal brand and engineering showcase' }
  ];

  // Currently Learning List
  const currentlyLearning = [
    'System Design',
    'Docker',
    'CI/CD',
    'Agentic AI',
    'RAG Pipelines',
    'LLM Evaluation'
  ];

  // Tech Stack Categories
  const techStackGroups = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'FastAPI'] },
    { category: 'Database', items: ['PostgreSQL', 'Firebase'] },
    { category: 'AI / ML', items: ['Python', 'Scikit-learn', 'Pandas', 'Gemini API'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Docker', 'Postman', 'Android Studio', 'Power BI', 'Figma'] }
  ];

  // Engineering Principles
  const engineeringPrinciples = [
    'Clean Architecture',
    'Readable Code',
    'Reusable Components',
    'API-first Design',
    'Mobile Responsive',
    'Performance Optimization',
    'Accessibility',
    'Documentation',
    'Git Workflow',
    'Testing Mindset'
  ];

  // Development Workflow Stages
  const workflowStages = [
    { stage: 'Idea', caption: 'Problem formulation & requirement breakdown' },
    { stage: 'Research', caption: 'Tech stack audit & architecture planning' },
    { stage: 'Design', caption: 'Data schemas & UI/UX component mapping' },
    { stage: 'Development', caption: 'Modular, clean code implementation' },
    { stage: 'Testing', caption: 'Edge-case handling & performance tuning' },
    { stage: 'Deployment', caption: 'CI/CD pipeline & production hosting' },
    { stage: 'Iteration', caption: 'Refinement & feature enhancements' }
  ];

  // 2026 Engineering Goals Checklist
  const engineeringGoals2026 = [
    { text: 'Publish an npm package', done: false },
    { text: 'Participate in Hacktoberfest', done: false },
    { text: 'Contribute to AI open-source projects', done: false },
    { text: 'Build reusable React libraries', done: false },
    { text: 'Improve documentation', done: false },
    { text: 'Build production-ready AI products', done: false }
  ];

  // Project Highlights List
  const projectHighlights = [
    {
      id: 'placetrack-ai',
      name: 'PlaceTrack AI',
      desc: 'Geolocation-verified attendance tracking platform with geofencing & Wi-Fi SSID identification.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Firebase'],
      status: 'Live',
      githubUrl: 'https://github.com/sanket1035/placetrack-ai'
    },
    {
      id: 'carbonomics-ai',
      name: 'Carbonomics AI',
      desc: 'AI-powered industrial carbon footprint estimator & supply chain emissions analytics platform.',
      tech: ['Next.js', 'Python', 'PyTorch', 'Tailwind'],
      status: 'Research',
      githubUrl: 'https://github.com/sanket1035/Carbonomics-AI'
    },
    {
      id: 'pramana-ai',
      name: 'Pramana AI',
      desc: 'Multi-agent AI research assistant engineered to eliminate LLM hallucinations with citation reports.',
      tech: ['Next.js', 'TypeScript', 'Gemini API', 'Firebase'],
      status: 'Active',
      githubUrl: 'https://github.com/sanket1035/pramana-ai'
    },
    {
      id: 'algonix',
      name: 'Algonix',
      desc: 'Interactive Data Structures & Algorithms visualizer for tree, graph, and sorting algorithms.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      status: 'Completed',
      githubUrl: 'https://github.com/sanket1035/algonix'
    },
    {
      id: 'gst-billing-app',
      name: 'GST Billing App',
      desc: 'Desktop/mobile invoicing solution with PDF generation & inventory management for small businesses.',
      tech: ['Kotlin', 'Android Jetpack', 'Room DB'],
      status: 'Completed',
      githubUrl: 'https://github.com/sanket1035/GST-Billing-App-v1'
    }
  ];

  return (
    <section id="opensource" className="w-full py-20 px-6 lg:px-8 border-t border-brand-border/40 bg-brand-bg relative">
      <div className="max-w-7xl w-full mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <p className="font-mono text-[10px] tracking-widest text-brand-accent uppercase font-bold flex items-center justify-center gap-1.5">
            <Terminal size={12} />
            ENGINEERING DASHBOARD
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-brand-primary tracking-tight uppercase">
            Engineering Dashboard
          </h2>
          <p className="font-sans text-xs md:text-sm text-brand-text-muted max-w-2xl mx-auto leading-relaxed">
            A snapshot of my current engineering focus, technologies, and software development workflow.
          </p>
          <div className="h-1 w-16 bg-brand-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Top Summary Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryCards.map((card, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-xl bg-brand-card border border-brand-border shadow-sm hover:border-brand-accent/40 transition-colors flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-brand-text-muted">
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">{card.label}</span>
                <card.icon size={16} className="text-brand-accent" />
              </div>
              <div className="mt-4">
                {card.isStatus ? (
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="font-sans font-bold text-xs md:text-sm text-brand-primary">{card.value}</span>
                  </div>
                ) : (
                  <h3 className="font-mono font-extrabold text-2xl md:text-3xl text-brand-primary">
                    {card.value}
                  </h3>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Main Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Current Focus Card */}
            <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-sm space-y-4 hover:border-brand-accent/30 transition-colors">
              <h3 className="font-heading font-bold text-base md:text-lg text-brand-primary flex items-center gap-2 uppercase tracking-wide">
                <Compass size={18} className="text-brand-accent" />
                Current Focus
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {currentFocus.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-brand-primary">
                    <Check className="text-green-500 shrink-0" size={16} />
                    <span className="font-sans font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Building Card */}
            <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-sm space-y-4 hover:border-brand-accent/30 transition-colors">
              <h3 className="font-heading font-bold text-base md:text-lg text-brand-primary flex items-center gap-2 uppercase tracking-wide">
                <FolderGit2 size={18} className="text-brand-accent" />
                Currently Building
              </h3>
              <div className="space-y-3 pt-1">
                {currentlyBuilding.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-brand-border/60 bg-brand-bg/40 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-bold text-xs md:text-sm text-brand-primary">{item.title}</h4>
                      <span className="text-[9px] font-mono text-brand-accent uppercase bg-brand-accent-glow px-2 py-0.5 rounded">Active</span>
                    </div>
                    <p className="text-xs text-brand-text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Learning Card */}
            <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-sm space-y-4 hover:border-brand-accent/30 transition-colors">
              <h3 className="font-heading font-bold text-base md:text-lg text-brand-primary flex items-center gap-2 uppercase tracking-wide">
                <BookOpen size={18} className="text-brand-accent" />
                Currently Learning
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {currentlyLearning.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-brand-bg border border-brand-border text-brand-text-muted"
                  >
                    • {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Preferred Tech Stack Card */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-sm space-y-6 hover:border-brand-accent/30 transition-colors">
              <h3 className="font-heading font-bold text-base md:text-lg text-brand-primary flex items-center gap-2 uppercase tracking-wide">
                <Cpu size={18} className="text-brand-accent" />
                Preferred Tech Stack
              </h3>
              
              <div className="space-y-5">
                {techStackGroups.map((group, idx) => (
                  <div key={idx} className="space-y-2">
                    <p className="text-[11px] font-mono font-semibold text-brand-text-muted uppercase tracking-wider">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-3 py-1.5 rounded-lg text-xs font-sans font-medium bg-brand-bg border border-brand-border text-brand-primary hover:border-brand-accent/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* FULL WIDTH CARD: Engineering Principles */}
        <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-sm space-y-4 hover:border-brand-accent/30 transition-colors">
          <h3 className="font-heading font-bold text-base md:text-lg text-brand-primary flex items-center gap-2 uppercase tracking-wide">
            <CheckCircle2 size={18} className="text-brand-accent" />
            Engineering Principles
          </h3>
          <div className="flex flex-wrap gap-2.5 pt-1">
            {engineeringPrinciples.map((principle, idx) => (
              <span 
                key={idx} 
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-brand-bg border border-brand-border text-brand-primary"
              >
                <Check size={13} className="text-green-500 shrink-0" />
                {principle}
              </span>
            ))}
          </div>
        </div>

        {/* FULL WIDTH CARD: Development Workflow */}
        <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-sm space-y-6 hover:border-brand-accent/30 transition-colors">
          <h3 className="font-heading font-bold text-base md:text-lg text-brand-primary flex items-center gap-2 uppercase tracking-wide">
            <Workflow size={18} className="text-brand-accent" />
            Development Workflow
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 relative">
            {workflowStages.map((step, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-lg bg-brand-bg border border-brand-border flex flex-col justify-between space-y-2 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-brand-accent font-bold">0{idx + 1}</span>
                  {idx < workflowStages.length - 1 && (
                    <ArrowRight size={12} className="hidden lg:block text-brand-text-muted/40" />
                  )}
                </div>
                <h4 className="font-heading font-bold text-xs md:text-sm text-brand-primary">{step.stage}</h4>
                <p className="text-[10px] text-brand-text-muted leading-snug">{step.caption}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CARD: 2026 Engineering Goals Checklist */}
        <div className="p-6 rounded-xl bg-brand-card border border-brand-border shadow-sm space-y-4 hover:border-brand-accent/30 transition-colors">
          <h3 className="font-heading font-bold text-base md:text-lg text-brand-primary flex items-center gap-2 uppercase tracking-wide">
            <Layers size={18} className="text-brand-accent" />
            2026 Engineering Goals
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
            {engineeringGoals2026.map((goal, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-brand-bg/50 border border-brand-border text-xs md:text-sm text-brand-text">
                <Square size={16} className="text-brand-text-muted/60 shrink-0" />
                <span className="font-sans">{goal.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECT HIGHLIGHTS */}
        <div className="space-y-6 pt-4">
          <div className="space-y-1">
            <h3 className="font-heading font-extrabold text-xl md:text-2xl text-brand-primary uppercase tracking-tight">
              Project Highlights
            </h3>
            <p className="text-xs text-brand-text-muted font-sans">
              Handpicked software builds showcasing real-world architecture and code quality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectHighlights.map((proj) => (
              <div 
                key={proj.id} 
                className="p-5 rounded-xl bg-brand-card border border-brand-border shadow-sm hover:border-brand-accent/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading font-bold text-base text-brand-primary">{proj.name}</h4>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-brand-accent/30 bg-brand-accent-glow text-brand-accent">
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-xs text-brand-text-muted leading-relaxed font-sans">
                    {proj.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-bg border border-brand-border/60 text-brand-text-muted">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-brand-border/40">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2 rounded-lg border border-brand-border bg-brand-bg hover:bg-brand-card text-brand-primary text-xs font-mono font-bold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                    <Link
                      to={`/case-study/${proj.id}`}
                      className="flex-1 py-2 rounded-lg bg-brand-primary text-brand-bg text-xs font-mono font-bold transition-opacity hover:opacity-90 flex items-center justify-center gap-1.5"
                    >
                      Case Study
                      <ExternalLink size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OpenSource;
