import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { lenisRef, reduced } from '../lib/motion';

/** Giant looping type. Lenis scroll velocity speeds it up / reverses it. */
export default function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el || reduced()) return;
    const anim = el.animate(
      [{ transform: reverse ? 'translateX(-50%)' : 'translateX(0)' }, { transform: reverse ? 'translateX(0)' : 'translateX(-50%)' }],
      { duration: 38000, iterations: Infinity, easing: 'linear' },
    );
    let boost = 0;
    const tick = () => {
      const v = lenisRef.current?.velocity ?? 0;
      boost += (Math.max(-6, Math.min(6, v)) * 0.5 - boost) * 0.08;
      anim.playbackRate = 1 + boost;
    };
    gsap.ticker.add(tick);
    return () => { gsap.ticker.remove(tick); anim.cancel(); };
  }, [reverse]);

  const row = items.map((t, i) => (
    <span className="marquee-item" key={i}>{t}<span className="slash">/</span></span>
  ));
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" ref={track}>
        <div style={{ display: 'inline-flex' }}>{row}</div>
        <div style={{ display: 'inline-flex' }}>{row}</div>
      </div>
    </div>
  );
}
