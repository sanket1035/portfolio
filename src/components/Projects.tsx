import { useNavigate } from 'react-router-dom';
import { portfolioData as d } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import Title from './Title';

// Per-project chapter colours: 1 warm dark, 1 light/fluorescent, 1 cool dark (contrast checked >= 4.5:1)
const CHAPTERS = [
  { bg: '#b52845', ink: '#f5f5f3' },
  { bg: '#d0e266', ink: '#141414' },
  { bg: '#2d5bcc', ink: '#f5f5f3' },
];
const DOTS = ['#f0587a', '#d0e266', '#6f94ff', '#eeeeec'];

function Links({ p, onCase }: { p: Project; onCase: () => void }) {
  return (
    <p style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
      <button type="button" className="ulink" onClick={onCase} style={{ background: 'none', border: 0, color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}>Case Study ↗</button>
      <a className="ulink" href={p.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
      {p.liveUrl && <a className="ulink" href={p.liveUrl} target="_blank" rel="noreferrer">Live ↗</a>}
    </p>
  );
}

export const Projects = () => {
  const nav = useNavigate();
  const go = (id: string) => { nav(`/projects/${id}`); window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); };
  const top = d.projects.slice(0, 3);
  const rest = d.projects.slice(3);
  return (
    <section id="projects" style={{ background: 'var(--background)' }}>
      <div className="circle-intro" data-circle-intro>
        <div className="wrap" style={{ width: '100%', paddingBlock: 'clamp(6rem, 12vh, 9rem) 0' }}>
          <Title text="Featured Systems" kicker="Showcase" />
        </div>
        <span className="circle-blob" data-circle-blob aria-hidden="true" style={{ background: CHAPTERS[0].bg }} />
      </div>

      <div className="chapter-stack">
        {top.map((p, i) => (
          <article key={p.id} className="chapter" style={{ background: CHAPTERS[i].bg, color: CHAPTERS[i].ink }}>
            <div className="chapter-grid">
              <div style={{ display: 'grid', gap: '1.75rem', alignContent: 'end' }}>
                <p className="mono-label">{p.category}</p>
                <h3 className="mega" aria-label={p.title}>{p.title}</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 600, maxWidth: '34rem' }}>{p.tagline}</p>
                <p style={{ maxWidth: '34rem', opacity: .85 }}>{p.description}</p>
                <p className="mono-label" style={{ opacity: .8 }}>{p.techStack.join(' · ')}</p>
                <Links p={p} onCase={() => go(p.id)} />
              </div>
              <div className="chapter-media">
                <img src={p.image} alt={`${p.title} Cover Thumbnail`} loading="lazy" data-parallax />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="wrap section" data-rows>
        {rest.map((p, i) => (
          <article className="row row-head" data-row key={p.id}>
            <div style={{ display: 'grid', gap: '.75rem' }}>
              <h3 className="title h2"><i className="pip" style={{ background: DOTS[i % DOTS.length] }} />{p.title}</h3>
              <p style={{ fontWeight: 600 }}>{p.tagline}</p>
              <p className="muted" style={{ maxWidth: '44rem' }}>{p.description}</p>
              <p className="mono-label muted">{p.techStack.join(' · ')}</p>
              <Links p={p} onCase={() => go(p.id)} />
            </div>
            <div>
              <p className="mono-label muted">{p.category}</p>
              <img src={p.image} alt={`${p.title} Cover Thumbnail`} loading="lazy" style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: 'var(--radius)', marginTop: '.75rem' }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Projects;
