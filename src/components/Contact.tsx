import { portfolioData as d } from '../data/portfolioData';

const CHAR = 10.4; // approx px per char of the 13px mono text with tracking
const ring = (r: number, text: string) => {
  const circ = 2 * Math.PI * (r - 14);
  const reps = Math.ceil(circ / (text.length * CHAR));
  return (
    <div className="ring" key={r} style={{ width: r * 2, height: r * 2 }} aria-hidden="true">
      <svg viewBox={`0 0 ${r * 2} ${r * 2}`}>
        <defs><path id={`ring${r}`} d={`M ${r},${r} m -${r - 14},0 a ${r - 14},${r - 14} 0 1,1 ${(r - 14) * 2},0 a ${r - 14},${r - 14} 0 1,1 -${(r - 14) * 2},0`} /></defs>
        <text><textPath href={`#ring${r}`} textLength={circ}>{text.repeat(reps)}</textPath></text>
      </svg>
    </div>
  );
};

const go = (hash: string) => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });

/** Closing section: oversized text rings behind a big headline, circle CTA, links, footer bar. */
export const Contact = () => {
  const s = d.socials;
  const links: [string, string | undefined][] = [
    ['LinkedIn', s.linkedin], ['GitHub', s.github], ['Twitter / X', s.twitter], ['LeetCode', s.leetcode],
    ['YouTube', s.youtube], ['Dev.to', s.devto], ['Medium', s.medium], ['Reddit', s.reddit],
  ];
  const t = `${d.name} / ${d.title} / ${d.location} / `;
  const phrase = "Let's build something real";
  return (
    <section id="contact" style={{ position: 'relative', background: 'var(--background)' }}>
      <div className="orbit-wrap">{ring(380, t)}{ring(560, t)}{ring(740, t)}{ring(920, t)}</div>
      <div className="wrap" style={{ position: 'relative', zIndex: 1, display: 'grid', gap: 'clamp(2rem, 5vh, 3.5rem)', justifyItems: 'center', textAlign: 'center', paddingBlock: 'clamp(7rem, 18vh, 11rem) clamp(5rem, 12vh, 8rem)' }}>
        <h2 className="contact-h" data-split aria-label={phrase} style={{ maxWidth: '12ch' }}>
          {phrase.split(' ').map((w, i) => (
            <span className="mask" key={i} aria-hidden="true"><span className="w">{w}</span></span>
          ))}
          <span className="dot" aria-hidden="true">.</span>
        </h2>

        <a href={`mailto:${s.email}`} className="cta-circle" data-magnet>Get in<br />touch</a>

        <a className="ulink" href={`mailto:${s.email}`} style={{ fontSize: '1.35rem' }}>{s.email}</a>
        <ul style={{ display: 'flex', gap: '.5rem 2rem', flexWrap: 'wrap', justifyContent: 'center', listStyle: 'none', padding: 0, margin: 0, maxWidth: '46rem' }}>
          {links.filter(([, h]) => h).map(([l, h]) => (
            <li key={l}><a className="ulink" href={h} target="_blank" rel="noreferrer" style={{ fontSize: '1.05rem' }}>{l} ↗</a></li>
          ))}
          <li><a className="ulink" href={d.resumeUrl} download style={{ fontSize: '1.05rem' }}>Resume (PDF) ↓</a></li>
        </ul>
      </div>

      <div className="foot-bar">
        <div className="wrap">
          <p className="muted">© 2026 {d.name} · {d.location}</p>
          <nav aria-label="Footer">
            {[['#projects', 'Projects'], ['#skills', 'Skills'], ['#achievements', 'Milestones'], ['#resume', 'Resume']].map(([h, l]) => (
              <button key={h} type="button" className="nav-link" onClick={() => go(h)}>{l}</button>
            ))}
            <button type="button" className="nav-link" style={{ opacity: 1 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default Contact;
