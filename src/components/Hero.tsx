import { portfolioData as d } from '../data/portfolioData';

/** Typographic-only opener. No header, no nav, no buttons, no photo. */
export const Hero = () => (
  <section className="opener" data-opener aria-label="Introduction">
    <div className="wrap" data-opener-inner style={{ width: '100%' }}>
      <h1 className="statement" data-load aria-label={d.bio} style={{ maxWidth: '22ch' }}>
        {d.bio.split(' ').map((w, i) => (
          <span className="mask" key={i} aria-hidden="true"><span className="w">{w}</span></span>
        ))}
      </h1>
      <p className="mono-label muted" data-load-fade style={{ marginTop: '2.5rem', lineHeight: 2 }}>
        {d.name} · {d.title}<br />
        {d.location} · Open to Opportunities · 2027
      </p>
    </div>
    <span className="scroll-cue" aria-hidden="true" />
  </section>
);
export default Hero;
