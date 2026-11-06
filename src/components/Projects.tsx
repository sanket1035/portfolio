import { useNavigate } from 'react-router-dom';
import { portfolioData as d } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

// Per-project chapter colours: 1 warm dark, 1 light/fluorescent, 1 cool dark (contrast checked >= 4.5:1)
const CHAPTERS = [
  { bg: '#b52845', ink: '#f5f5f3' },
  { bg: '#d0e266', ink: '#141414' },
  { bg: '#2d5bcc', ink: '#f5f5f3' },
  { bg: '#6d3fd6', ink: '#f5f5f3' },
  { bg: '#f0a82d', ink: '#141414' },
  { bg: '#0f8a78', ink: '#f5f5f3' },
];

function Links({ p, onCase }: { p: Project; onCase: () => void }) {
  return (
    <p className="chapter-actions">
      <button type="button" className="cpill solid" onClick={onCase}>Case study ↗</button>
      <a className="cpill" href={p.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
      {p.liveUrl && <a className="cpill" href={p.liveUrl} target="_blank" rel="noreferrer">Live ↗</a>}
    </p>
  );
}

export const Projects = () => {
  const nav = useNavigate();
  const go = (id: string) => { nav(`/projects/${id}`); window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); };
  const all = d.projects;
  return (
    <section id="projects" style={{ background: 'var(--background)' }}>
      <div className="circle-intro" data-circle-intro>
        <div className="wrap" style={{ width: '100%', textAlign: 'center' }}>
          <p className="mono-label muted" style={{ marginBottom: '1.5rem' }}>Showcase</p>
          <h2 className="mega intro-title" data-split aria-label="Featured work.">
            {['Featured', 'work'].map((w) => (
              <span className="mask" key={w} aria-hidden="true"><span className="w">{w}</span></span>
            ))}
            <span className="dot-spot" data-circle-dot aria-hidden="true" style={{ background: CHAPTERS[0].bg }} />
          </h2>
          <p className="muted" style={{ maxWidth: '30rem', margin: '2rem auto 0' }}>
            {all.length} projects across AI, full-stack and mobile, from research platforms to production-style apps.
          </p>
        </div>
        <span className="circle-blob" data-circle-blob aria-hidden="true" style={{ background: CHAPTERS[0].bg }} />
      </div>

      <div className="chapter-stack">
        {all.map((p, i) => {
          const c = CHAPTERS[i % CHAPTERS.length];
          return (
            <article key={p.id} className="chapter" style={{ background: c.bg, color: c.ink, ['--ink' as string]: c.ink, ['--bgc' as string]: c.bg }}>
              <div className="chapter-grid">
                <div style={{ display: 'grid', gap: '1.5rem', alignContent: 'center' }}>
                  <p className="mono-label" style={{ opacity: .85 }}>{String(i + 1).padStart(2, '0')} / {String(all.length).padStart(2, '0')} · {p.category}</p>
                  <h3 className="mega" aria-label={p.title}>{p.title}</h3>
                  <p style={{ fontSize: '1.25rem', fontWeight: 600, maxWidth: '34rem' }}>{p.tagline}</p>
                  <p style={{ maxWidth: '34rem', opacity: .85 }}>{p.description}</p>
                  <dl className="cstats">
                    <div><dt>{p.features.length}</dt><dd>Features built</dd></div>
                    <div><dt>{p.techStack.length}</dt><dd>Technologies used</dd></div>
                  </dl>
                  <p className="mono-label" style={{ opacity: .8 }}>{p.techStack.join(' · ')}</p>
                  <Links p={p} onCase={() => go(p.id)} />
                </div>
                <div className="chapter-media">
                  <img src={p.image} alt={`${p.title} Cover Thumbnail`} loading="lazy" data-parallax />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
