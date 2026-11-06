import { portfolioData as d } from '../data/portfolioData';

const go = (hash: string) => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
const [first, ...rest] = d.name.split(' ');

/**
 * Opening scene: a big photo panel with the name split across it. On scroll the panel shrinks into a
 * centred card, the two name halves slide apart, and a line of text appears on each side.
 */
export const Hero = () => (
  <section className="opener" data-opener aria-label="Introduction">
    <h1 className="sr-only">{d.name}</h1>
    <div className="rv" data-rv>
      <div className="rv-stage">
        <div className="rv-side rv-left" data-rv-left>
          <p className="rv-big">Practical software, built end to end.</p>
        </div>

        <div className="rv-cell" data-rv-cell>
          <div className="rv-card" data-rv-card>
            <span className="rv-name rv-l" data-rv-nl aria-hidden="true">{first}</span>
            <span className="rv-name rv-r" data-rv-nr aria-hidden="true">{rest.join(' ')}</span>
            <img className="rv-photo" src="/placeholders/hero.webp" alt="Sanket Chaudhari" fetchPriority="high" width={1400} height={1750} />
            <p className="rv-meta mono-label" data-rv-meta>{d.title} · {d.location}<br />Scroll ↓</p>
          </div>
        </div>

        <div className="rv-side rv-right" data-rv-right>
          <p className="rv-big" style={{ color: 'var(--primary)' }}>Plus AI that actually learns.</p>
          <p className="rv-para">{d.bio}</p>
          <p className="mono-label" style={{ margin: '.75rem 0 0', color: 'var(--primary)' }}>Available from Dec 2026 (remote) · Jan 2027 (on-site)</p>
          <p className="rv-links">
            <button type="button" className="ulink" onClick={() => go('#projects')}>View my work ↓</button>
            <button type="button" className="ulink" onClick={() => go('#resume')}>Preview resume ↗</button>
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;
