import { portfolioData as d } from '../data/portfolioData';

const go = (hash: string) => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });

/** Giant name behind the cutout photo, bio and actions bottom-left. */
export const Hero = () => (
  <section className="opener" data-opener aria-label="Introduction">
    <div data-opener-inner style={{ position: 'absolute', inset: 0 }}>
      <h1 className="hero-name" data-load aria-label={d.name}>
        {d.name.split(' ').map((w, i) => (
          <span className="line" key={i} aria-hidden="true"><span className="mask"><span className="w">{w}</span></span></span>
        ))}
      </h1>

      <img className="hero-photo" src="/placeholders/hero.png" alt="Sanket Chaudhari Profile" fetchPriority="high" width={1755} height={2194} />

      <div className="hero-copy" data-load-fade>
        <p className="mono-label muted">{d.title} · {d.location}</p>
        <p style={{ fontSize: '1.15rem', lineHeight: 1.4, fontWeight: 500 }}>{d.bio}</p>
        <p className="mono-label" style={{ color: 'var(--primary)' }}>Open to Opportunities · 2027</p>
        <p style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
          <button type="button" className="pill solid" onClick={() => go('#projects')}><span>View My Work ↓</span></button>
          <button type="button" className="pill" onClick={() => go('#resume')}><span>Preview Resume ↗</span></button>
        </p>
      </div>

      <div className="hero-side" data-load-fade>
        <p className="mono-label muted">{d.subtitle}</p>
      </div>
    </div>
  </section>
);
export default Hero;
