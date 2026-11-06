import { portfolioData as d } from '../data/portfolioData';

const ring = (r: number, text: string) => (
  <div className="ring" style={{ width: r * 2, height: r * 2 }} aria-hidden="true">
    <svg viewBox={`0 0 ${r * 2} ${r * 2}`}>
      <defs><path id={`ring${r}`} d={`M ${r},${r} m -${r - 14},0 a ${r - 14},${r - 14} 0 1,1 ${(r - 14) * 2},0 a ${r - 14},${r - 14} 0 1,1 -${(r - 14) * 2},0`} /></defs>
      <text><textPath href={`#ring${r}`}>{text}</textPath></text>
    </svg>
  </div>
);

export const Contact = () => {
  const s = d.socials;
  const links: [string, string | undefined][] = [
    ['LinkedIn', s.linkedin], ['GitHub', s.github], ['Twitter / X', s.twitter], ['LeetCode', s.leetcode],
    ['YouTube', s.youtube], ['Dev.to', s.devto], ['Medium', s.medium], ['Reddit', s.reddit],
  ];
  const t = `${d.name} · ${d.title} · ${d.location} · `;
  return (
    <section id="contact" className="section" style={{ minHeight: '100svh', display: 'grid', alignContent: 'center', overflow: 'hidden' }}>
      <div className="orbit-wrap">{ring(260, t.repeat(2))}{ring(380, t.repeat(3))}{ring(500, t.repeat(4))}</div>
      <div className="wrap" style={{ position: 'relative', textAlign: 'center', display: 'grid', gap: '2.5rem', justifyItems: 'center' }}>
        <p className="mono-label muted">Let's connect</p>
        <h2 className="mega" data-split aria-label="Let's build something real">
          {"Let's build something real".split(' ').map((w, i) => (
            <span className="mask" key={i} aria-hidden="true"><span className="w">{w}</span></span>
          ))}
          <span className="dot" aria-hidden="true">.</span>
        </h2>
        <a href={`mailto:${s.email}`} className="cta-circle" data-magnet>Email Address</a>
        <p className="muted">{s.email}</p>
        <ul style={{ display: 'flex', gap: '.75rem 1.75rem', flexWrap: 'wrap', justifyContent: 'center', listStyle: 'none', padding: 0, maxWidth: '40rem' }}>
          {links.filter(([, h]) => h).map(([l, h]) => (
            <li key={l}><a className="ulink" href={h} target="_blank" rel="noreferrer">{l} ↗</a></li>
          ))}
        </ul>
        <p className="muted">Based in <span style={{ color: 'var(--foreground)', fontWeight: 600 }}>{d.location}</span></p>
        <p className="mono-label muted">© 2026 {d.name}</p>
      </div>
    </section>
  );
};
export default Contact;
