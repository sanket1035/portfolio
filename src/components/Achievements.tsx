import { useState } from 'react';
import { portfolioData as d } from '../data/portfolioData';
import Title from './Title';

const light = (src?: string) => src && window.dispatchEvent(new CustomEvent('open-lightbox', { detail: { src } }));

const Thumb = ({ src, alt }: { src?: string; alt: string }) =>
  src ? (
    <button type="button" onClick={() => light(src)} title="Click to view full image" style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', justifySelf: 'start', width: '100%', maxWidth: '20rem' }}>
      <img src={src} alt={alt} loading="lazy" style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: 'calc(var(--radius) - 6px)', display: 'block' }} />
    </button>
  ) : null;

type Key = 'activities' | 'certificates';

export const Achievements = () => {
  const [open, setOpen] = useState<Key | null>(null);
  const toggle = (k: Key) => setOpen((cur) => (cur === k ? null : k));

  return (
    <section id="achievements" className="section">
      <div className="wrap" style={{ display: 'grid', gap: 'clamp(2.5rem, 6vh, 4rem)' }}>
        <Title text="Achievements & Activities" kicker="Milestones & Community" stack />

        {/* Achievements are always on screen */}
        <div className="bento" data-rows>
          {d.achievements.map((a) => (
            <article className="box wide" data-row key={a.title} style={{ display: 'grid', gap: '.6rem' }}>
              <p className="mono-label muted">{a.issuer} · {a.date}</p>
              <h3 style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 740, letterSpacing: '-.02em', lineHeight: 1.1, margin: 0 }}>{a.title}</h3>
              <p className="muted" style={{ maxWidth: '60rem', margin: 0 }}>{a.description}</p>
            </article>
          ))}
        </div>

        {/* Two drawers: open to see everything inside */}
        <div className="drawer-btns">
          <button type="button" className="box drawer-btn" aria-expanded={open === 'activities'} aria-controls="drawer-activities" onClick={() => toggle('activities')}>
            <span>
              <span className="mono-label muted" style={{ display: 'block' }}>{d.activities.length} entries</span>
              <span style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.8rem)', fontWeight: 740, letterSpacing: '-.02em' }}>Extra Curriculars</span>
            </span>
            <span className="plus" aria-hidden="true">+</span>
          </button>
          <button type="button" className="box drawer-btn" aria-expanded={open === 'certificates'} aria-controls="drawer-certificates" onClick={() => toggle('certificates')}>
            <span>
              <span className="mono-label muted" style={{ display: 'block' }}>{d.certificates.length} verified</span>
              <span style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.8rem)', fontWeight: 740, letterSpacing: '-.02em' }}>Verified Certificates</span>
            </span>
            <span className="plus" aria-hidden="true">+</span>
          </button>
        </div>

        <div id="drawer-activities" className={`drawer ${open === 'activities' ? 'open' : ''}`} aria-hidden={open !== 'activities'}>
          <div>
            <div className="bento" style={{ paddingTop: '.25rem' }}>
              {d.activities.map((a) => (
                <article className="box" key={a.role + a.organization} style={{ display: 'grid', gap: '.75rem', alignContent: 'start' }}>
                  <Thumb src={a.image} alt={a.organization} />
                  <p className="mono-label muted">{a.duration}</p>
                  <h4 style={{ fontSize: '1.25rem', letterSpacing: '-.01em', textTransform: 'none', fontFamily: 'inherit', color: 'var(--foreground)', margin: 0, fontWeight: 700 }}>{a.role}</h4>
                  <p style={{ fontWeight: 600, margin: 0 }}>{a.organization}</p>
                  <p className="muted" style={{ margin: 0 }}>{a.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div id="drawer-certificates" className={`drawer ${open === 'certificates' ? 'open' : ''}`} aria-hidden={open !== 'certificates'}>
          <div>
            <div className="bento" style={{ paddingTop: '.25rem' }}>
              {d.certificates.map((c) => (
                <article className="box" key={c.title} style={{ display: 'grid', gap: '.7rem', alignContent: 'start' }}>
                  <Thumb src={c.image} alt={`${c.title} Cover`} />
                  <p className="mono-label muted">{c.issuer} · {c.date}</p>
                  <h4 style={{ fontSize: '1.2rem', letterSpacing: '-.01em', textTransform: 'none', fontFamily: 'inherit', color: 'var(--foreground)', margin: 0, fontWeight: 700 }}>{c.title}</h4>
                  {c.summary && <p className="muted" style={{ margin: 0, fontSize: '.95rem' }}>{c.summary}</p>}
                  <ul className="tagpills">{c.skills.map((sk) => <li key={sk}>{sk}</li>)}</ul>
                  {c.credentialId !== '-' && <p className="muted" style={{ fontSize: '.85rem', margin: 0 }}>Credential ID: {c.credentialId}</p>}
                  {c.verifyUrl !== '#' && <a className="ulink" href={c.verifyUrl} target="_blank" rel="noreferrer" style={{ justifySelf: 'start' }}>Verify ↗</a>}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Achievements;
