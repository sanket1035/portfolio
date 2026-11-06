import { portfolioData } from '../data/portfolioData';
import Title from './Title';


export const OpenSource = () => {
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

  // GitHub & Development Section Metrics
  const devMetrics = [
    { label: 'Repositories', value: '30+' },
    { label: 'Git Commits (2026)', value: '650+' },
    { label: 'Pull Requests', value: '225+' },
    { label: 'Contributions', value: '1,100+' },
    { label: 'Contributed To', value: '18 Repos' },
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
