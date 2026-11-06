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
  const List = ({ title, items }: { title: string; items: string[] }) => (
    <div className="row" data-row>
      <h4 className="mono-label muted">{title}</h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '.4rem 1.25rem' }}>
        {items.map((i) => <li key={i}><span className="dot">/</span> {i}</li>)}
      </ul>
    </div>
  );

  return (
    <section id="opensource" className="section">
      <div className="wrap">
        <Title text="Developer Profile" kicker="Dev activity" />
        <p className="statement muted" style={{ maxWidth: '40ch', marginBottom: '5rem' }}>
          A snapshot of my current engineering focus, technologies, and software development workflow.
        </p>

        <dl style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem 5rem', margin: '0 0 6rem' }}>
          {devMetrics.map((m) => (
            <div key={m.label}>
              <dt className="tnum" style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1 }}>
                {/^[0-9]/.test(m.value) ? (
                  <span data-count={metricNum(m.value)} data-suffix={metricSuffix(m.value)}>{m.value}</span>
                ) : m.value}
              </dt>
              <dd className="mono-label muted" style={{ margin: '.6rem 0 0' }}>{m.label}</dd>
            </div>
          ))}
        </dl>

        <h3 className="mono-label muted" style={{ marginBottom: '1.5rem' }}>Open Source Programs</h3>
        <div data-rows style={{ marginBottom: '6rem' }}>
          {portfolioData.openSource.programs.map((p) => (
            <article className="row" data-row key={p.programName}>
              <div style={{ display: 'grid', gap: '.5rem' }}>
                <h4 className="title" style={{ fontWeight: 700, fontSize: '1.5rem' }}><i className="pip" style={{ background: 'var(--primary)' }} />{p.programName}</h4>
                <p className="mono-label muted">{p.role} · {p.year}</p>
                <p className="muted" style={{ maxWidth: '44rem' }}>{p.description}</p>
              </div>
              {p.image && (
                <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('open-lightbox', { detail: { src: p.image } }))}
                  title="Click to view full credential" style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', justifySelf: 'start' }}>
                  <img src={p.image} alt={p.programName} loading="lazy" style={{ width: '100%', maxWidth: '16rem', aspectRatio: '1', objectFit: 'cover', borderRadius: 'var(--radius)' }} />
                </button>
              )}
            </article>
          ))}
        </div>

        <h3 className="mono-label muted" style={{ marginBottom: '1.5rem' }}>Featured Engineering Repositories</h3>
        <div data-rows style={{ marginBottom: '6rem' }}>
          {featuredRepos.map((r) => (
            <article className="row" data-row key={r.name}>
              <div style={{ display: 'grid', gap: '.5rem' }}>
                <h4 className="title" style={{ fontWeight: 700, fontSize: '1.5rem' }}><i className="pip" style={{ background: 'var(--primary)' }} />{r.name}</h4>
                <p className="muted">{r.desc}</p>
                <p className="mono-label muted">{r.tech}</p>
                <a className="ulink" href={r.url} target="_blank" rel="noreferrer" style={{ justifySelf: 'start' }}>GitHub ↗</a>
              </div>
              <p className="mono-label">{r.status}</p>
            </article>
          ))}
        </div>

        <div data-rows>
          {techEcosystem.map((t) => <List key={t.category} title={`Tech Ecosystem — ${t.category}`} items={t.items} />)}
          <List title="Current Focus" items={currentFocus} />
          <List title="Currently Building" items={currentlyBuilding.map((b) => `${b.name}: ${b.detail}`)} />
          <List title="Currently Learning" items={currentlyLearning} />
          <List title="Development Environment" items={envTools} />
          <List title="Branch Strategy" items={['main & feature/*']} />
          <List title="Version Control" items={['Git + GitHub']} />
          <List title="Practices" items={gitPractices} />
          <List title="2026 Goals" items={goals2026.map((g) => `${g.done ? '✓ ' : ''}${g.text}`)} />
        </div>

        <p style={{ marginTop: '4rem' }}>
          <a className="ulink" href={portfolioData.socials.github} target="_blank" rel="noreferrer">Explore Complete Profile ↗</a>
        </p>
      </div>
    </section>
  );
};
export default OpenSource;
