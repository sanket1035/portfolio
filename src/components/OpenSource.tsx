import { portfolioData } from '../data/portfolioData';
import Title from './Title';


export const OpenSource = () => {
  // Featured Engineering Repositories
  const featuredRepos = [
    { name: 'Carbonomics AI', desc: 'GHG Protocol carbon-accounting engine with leakage-free forecasting. Final year project and research manuscript.', tech: 'Python | FastAPI | PostgreSQL | React', status: 'Research', url: 'https://github.com/sanket1035/carbonomics-ai' },
    { name: 'PlaceTrack AI', desc: 'Full-stack placement platform with a 6-stage hiring pipeline and Gemini interview feedback.', tech: 'Next.js | TypeScript | Express | Prisma | PostgreSQL', status: 'Completed', url: 'https://github.com/sanket1035/placetrack-ai' },
    { name: 'Prodexa AI', desc: 'AI product operating system: blueprint, six-module launch audit and AI Co-Founder with isolated per-project context. InnovaHack Chapter 1 finalist.', tech: 'Next.js | TypeScript | Firebase | Groq | Gemini', status: 'Live', url: 'https://github.com/sanket1035/Prodexa' },
    { name: 'Pramana AI', desc: 'Multi-agent LLM platform that researches and verifies claims with citation-backed reports.', tech: 'Next.js | TypeScript | Firebase | Gemini API', status: 'Live', url: 'https://github.com/sanket1035/pramana-ai' },
  ];

  // ELUSOC 2026 merged-PR breakdown
  const elusoc = [
    { repo: 'Interview-Intelligence', prs: 46, detail: 'Docker code sandbox, Zustand session store, role-based access control' },
    { repo: 'Foodie', prs: 26, detail: 'Jest unit tests, i18n, theme persistence, reusable search component' },
    { repo: 'Aarini', prs: 8, detail: 'Custom error hierarchy, rate limiting, cycle-prediction endpoint' },
  ];

  // Tech Ecosystem Card
  const techEcosystem = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Recharts'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'Prisma', 'REST APIs'] },
    { category: 'AI/ML', items: ['PyTorch', 'Scikit-learn', 'XGBoost', 'OpenCV', 'ONNX', 'Gemini API'] },
    { category: 'Data', items: ['Power BI', 'DAX', 'Power Query', 'Pandas', 'SQL'] },
    { category: 'Database', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Firebase'] },
    { category: 'DevOps & Testing', items: ['Docker', 'GitHub Actions', 'pytest', 'Jest', 'Vitest'] },
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
    'Generative AI & Prompt Engineering'
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
    { text: 'Launch Carbonomics AI', done: true },
    { text: 'Build end-to-end AI products', done: true },
    { text: 'Learn RAG & Agentic AI', done: false },
    { text: 'Contribute to production-grade open source', done: true },
    { text: 'Master System Design', done: false },
    { text: 'Participate in Hacktoberfest (online)', done: true }
  ];

  // GitHub & Development Section Metrics
  const devMetrics = [
    { label: 'Total Commits', value: '902' },
    { label: 'PRs Merged', value: '320' },
    { label: 'Issues Closed', value: '196' },
    { label: 'Longest Streak', value: '31 days' },
    { label: 'Repos Contributed To', value: '18+' },
  ];


  const metricNum = (v: string) => parseFloat(v.replace(/[^0-9.]/g, ''));
  const metricSuffix = (v: string) => v.replace(/[0-9.,]/g, '');
  const Pills = ({ items, done }: { items: string[]; done?: boolean[] }) => (
    <ul className="tagpills">{items.map((i, n) => <li key={i} className={done?.[n] ? 'done' : ''}>{done?.[n] ? '✓ ' : ''}{i}</li>)}</ul>
  );

  return (
    <section id="opensource" className="section">
      <div className="wrap">
        <Title text="Developer Profile" kicker="Dev activity" stack />
        <p className="statement muted" style={{ maxWidth: '40ch', marginBottom: '4rem' }}>
          A snapshot of my current engineering focus, technologies, and software development workflow.
        </p>

        <dl className="kpis" style={{ margin: '0 0 5rem' }}>
          {devMetrics.map((m) => (
            <div className="box" key={m.label}>
              <dt className="tnum" style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)', whiteSpace: 'nowrap', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1 }}>
                {/^[0-9]/.test(m.value) ? (
                  <span data-count={metricNum(m.value)} data-suffix={metricSuffix(m.value)}>{m.value}</span>
                ) : m.value}
              </dt>
              <dd className="mono-label muted" style={{ margin: '.6rem 0 0' }}>{m.label}</dd>
            </div>
          ))}
        </dl>

        <h3 className="mono-label muted" style={{ marginBottom: '1.25rem' }}>Open Source Programs</h3>
        <div className="bento" data-rows style={{ marginBottom: '5rem' }}>
          {portfolioData.openSource.programs.map((p) => (
            <article className="box" data-row key={p.programName} style={{ display: 'grid', gap: '.75rem', alignContent: 'start' }}>
              {p.image && (
                <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('open-lightbox', { detail: { src: p.image } }))}
                  title="Click to view full credential" style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', justifySelf: 'start' }}>
                  <img src={p.image} alt={p.programName} loading="lazy" style={{ width: '5.5rem', aspectRatio: '1', objectFit: 'cover', borderRadius: 'calc(var(--radius) - 6px)' }} />
                </button>
              )}
              <p className="mono-label muted">{p.role} · {p.year}</p>
              <h4 style={{ fontSize: '1.3rem', letterSpacing: '-.01em', textTransform: 'none', fontFamily: 'inherit', color: 'var(--foreground)', margin: 0, fontWeight: 700 }}>{p.programName}</h4>
              <p className="muted" style={{ margin: 0 }}>{p.description}</p>
            </article>
          ))}
        </div>

        <h3 className="mono-label muted" style={{ marginBottom: '1.25rem' }}>ELUSOC 2026 · Ranked 6th globally · 300+ merged PRs</h3>
        <div className="bento" data-rows style={{ marginBottom: '3rem' }}>
          {elusoc.map((e) => (
            <article className="box" data-row key={e.repo} style={{ display: 'grid', gap: '.6rem', alignContent: 'start' }}>
              <p className="tnum" style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1, margin: 0 }}>{e.prs}</p>
              <p className="mono-label muted" style={{ margin: 0 }}>Merged PRs</p>
              <h4 style={{ fontSize: '1.3rem', letterSpacing: '-.01em', textTransform: 'none', fontFamily: 'inherit', color: 'var(--foreground)', margin: 0, fontWeight: 700 }}>{e.repo}</h4>
              <p className="muted" style={{ margin: 0 }}>{e.detail}</p>
            </article>
          ))}
        </div>

        <h3 className="mono-label muted" style={{ marginBottom: '1.25rem' }}>Featured Engineering Repositories</h3>
        <div className="bento" data-rows style={{ marginBottom: '5rem' }}>
          {featuredRepos.map((r) => (
            <article className="box" data-row key={r.name} style={{ display: 'grid', gap: '.75rem', alignContent: 'start' }}>
              <span className="status" style={{ justifySelf: 'start' }}>{r.status}</span>
              <h4 style={{ fontSize: '1.3rem', letterSpacing: '-.01em', textTransform: 'none', fontFamily: 'inherit', color: 'var(--foreground)', margin: 0, fontWeight: 700 }}>{r.name}</h4>
              <p className="muted" style={{ margin: 0 }}>{r.desc}</p>
              <p className="mono-label muted" style={{ margin: 0 }}>{r.tech}</p>
              <a className="ulink" href={r.url} target="_blank" rel="noreferrer" style={{ justifySelf: 'start' }}>GitHub ↗</a>
            </article>
          ))}
        </div>

        <div className="bento" data-rows>
          <section className="box wide" data-row>
            <h4>Tech Ecosystem</h4>
            <div className="subgrid">
              {techEcosystem.map((t) => (
                <div className="subgroup" key={t.category}><span>{t.category}</span><Pills items={t.items} /></div>
              ))}
            </div>
          </section>

          <section className="box" data-row>
            <h4>Current Focus</h4>
            <Pills items={currentFocus} />
          </section>

          <section className="box" data-row>
            <h4>Currently Building</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '.9rem' }}>
              {currentlyBuilding.map((b) => (
                <li key={b.name}><strong>{b.name}</strong><br /><span className="muted">{b.detail}</span></li>
              ))}
            </ul>
          </section>

          <section className="box" data-row>
            <h4>Currently Learning</h4>
            <Pills items={currentlyLearning} />
          </section>

          <section className="box" data-row>
            <h4>2026 Goals</h4>
            <Pills items={goals2026.map((g) => g.text)} done={goals2026.map((g) => g.done)} />
          </section>

          <section className="box span2" data-row>
            <h4>Development Environment</h4>
            <div className="subgroup"><span>Tools</span><Pills items={envTools} /></div>
            <div className="subgrid">
              <div className="subgroup"><span>Branch Strategy</span><Pills items={['main & feature/*']} /></div>
              <div className="subgroup"><span>Version Control</span><Pills items={['Git + GitHub']} /></div>
            </div>
            <div className="subgroup"><span>Practices</span><Pills items={gitPractices} /></div>
          </section>
        </div>

        <p style={{ marginTop: '4rem' }}>
          <a className="ulink" href={portfolioData.socials.github} target="_blank" rel="noreferrer">Explore Complete Profile ↗</a>
        </p>
      </div>
    </section>
  );
};
export default OpenSource;
