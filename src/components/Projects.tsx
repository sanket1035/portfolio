import { useState } from 'react';
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

const DOTS = ['#f0587a', '#d0e266', '#6f94ff', '#eeeeec'];

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
  const FEATURED = 5;
  const all = d.projects.slice(0, FEATURED);
  const other = d.projects.slice(FEATURED);
  const [openOther, setOpenOther] = useState(false);
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
            {all.length} featured projects across AI, full-stack and data, plus {other.length} more in Other Works.
          </p>
        </div>
        <span className="circle-blob" data-circle-blob aria-hidden="true" style={{ background: CHAPTERS[0].bg }} />
      </div>

      <div className="chapter-stack">
        {all.map((p, i) => {
          const c = CHAPTERS[i % CHAPTERS.length];
          return (
            <article key={p.id} className="chapter" style={{ background: c.bg, color: c.ink, ['--ink' as string]: c.ink, ['--bgc' as string]: c.bg }}>
              <span className="chapter-dim" aria-hidden="true" />
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

      <div className="wrap section" style={{ paddingBlock: 'clamp(3rem, 8vh, 5rem)' }}>
        <button type="button" className="box drawer-btn" aria-expanded={openOther} aria-controls="drawer-other" onClick={() => setOpenOther((o) => !o)}>
          <span>
            <span className="mono-label muted" style={{ display: 'block' }}>{other.length} more projects</span>
            <span style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.8rem)', fontWeight: 740, letterSpacing: '-.02em' }}>Other Works</span>
          </span>
          <span className="plus" aria-hidden="true">+</span>
        </button>

        <div id="drawer-other" className={`drawer ${openOther ? 'open' : ''}`} aria-hidden={!openOther}>
          <div>
            <div style={{ paddingTop: '1.5rem' }}>
              {other.map((p, i) => (
                <article className="row row-head" key={p.id}>
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
