import { portfolioData as d } from '../data/portfolioData';
import Title from './Title';

const light = (src?: string) => src && window.dispatchEvent(new CustomEvent('open-lightbox', { detail: { src } }));

const Thumb = ({ src, alt }: { src?: string; alt: string }) =>
  src ? (
    <button type="button" onClick={() => light(src)} title="Click to view full image" style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', justifySelf: 'start' }}>
      <img src={src} alt={alt} loading="lazy" style={{ width: '100%', maxWidth: '22rem', aspectRatio: '16/10', objectFit: 'cover', borderRadius: 'var(--radius)', display: 'block' }} />
    </button>
  ) : null;

export const Achievements = () => (
  <section id="achievements" className="section">
    <div className="wrap" style={{ display: 'grid', gap: 'clamp(5rem, 12vh, 9rem)' }}>
      <div>
        <Title text="Achievements & Activities" kicker="Milestones & Community" />
        <h3 className="mono-label muted" style={{ marginBottom: '1.5rem' }}>Achievements</h3>
        <div data-rows>
          {d.achievements.map((a) => (
            <article className="row" data-row key={a.title}>
              <div style={{ display: 'grid', gap: '.5rem' }}>
                <h4 className="title" style={{ fontWeight: 700, fontSize: '1.5rem' }}><i className="pip" style={{ background: 'var(--primary)' }} />{a.title}</h4>
                <p className="mono-label muted">{a.issuer}</p>
                <p className="muted" style={{ maxWidth: '44rem' }}>{a.description}</p>
              </div>
              <p className="tnum muted">{a.date}</p>
            </article>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mono-label muted" style={{ marginBottom: '1.5rem' }}>Extra Curriculars</h3>
        <div data-rows>
          {d.activities.map((a) => (
            <article className="row" data-row key={a.role + a.organization}>
              <div style={{ display: 'grid', gap: '.5rem' }}>
                <h4 className="title" style={{ fontWeight: 700, fontSize: '1.5rem' }}><i className="pip" style={{ background: 'var(--primary)' }} />{a.role}</h4>
                <p className="mono-label muted">{a.organization}</p>
                <p className="muted" style={{ maxWidth: '44rem' }}>{a.description}</p>
                <p className="tnum muted">{a.duration}</p>
              </div>
              <Thumb src={a.image} alt={a.organization} />
            </article>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mono-label muted" style={{ marginBottom: '1.5rem' }}>Verified Certificates</h3>
        <div data-rows>
          {d.certificates.map((c) => (
            <article className="row" data-row key={c.title}>
              <div style={{ display: 'grid', gap: '.6rem' }}>
                <h4 className="title" style={{ fontWeight: 700, fontSize: '1.5rem' }}><i className="pip" style={{ background: 'var(--primary)' }} />{c.title}</h4>
                <p className="mono-label muted">{c.issuer} · {c.date}</p>
                {c.summary && <p className="muted" style={{ maxWidth: '44rem' }}>{c.summary}</p>}
                <p className="muted" style={{ fontSize: '.9rem' }}>Credential ID: {c.credentialId}</p>
                <p className="mono-label">{c.skills.join(' · ')}</p>
                {c.verifyUrl !== '#' && <a className="ulink" href={c.verifyUrl} target="_blank" rel="noreferrer" style={{ justifySelf: 'start' }}>Verify ↗</a>}
              </div>
              <Thumb src={c.image} alt={`${c.title} Cover`} />
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default Achievements;
