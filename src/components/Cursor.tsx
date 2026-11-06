import { useEffect, useRef } from 'react';

/** Colourful ring + dot that follow the pointer, and a tiny robot that trails behind it. Fine pointers only. */
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const bot = useRef<HTMLDivElement>(null);
  const pupils = useRef<SVGGElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;
    const root = document.documentElement;
    let mx = -100, my = -100, rx = -100, ry = -100, bx = -100, by = -100, rot = 0, raf = 0;

    const move = (e: PointerEvent) => {
      mx = e.clientX; my = e.clientY;
      root.classList.add('cur-on', 'cur-active');
      root.classList.toggle('cur-hover', !!(e.target as Element | null)?.closest?.('a, button, [role="button"], input, textarea, summary'));
    };
    const leave = () => root.classList.remove('cur-on', 'cur-active');

    const tick = () => {
      rx += (mx - rx) * 0.22; ry += (my - ry) * 0.22;
      const px = bx;
      bx += (rx + 30 - bx) * 0.12; by += (ry + 30 - by) * 0.12;
      rot += (Math.max(-25, Math.min(25, (bx - px) * 2.2)) - rot) * 0.15;
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px)`;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      if (pupils.current) {
        const dx = mx - bx, dy = my - by, d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / 60) * 1.8;
        pupils.current.style.transform = `translate(${(dx / d) * k}px, ${(dy / d) * k}px)`;
      }
      if (bot.current) bot.current.style.transform = `translate(${bx - 3}px, ${by - 3 + Math.sin(performance.now() / 300) * 3}px) rotate(${rot}deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      root.classList.remove('cur-on', 'cur-hover', 'cur-active');
    };
  }, []);

  return (
    <div aria-hidden="true">
      <div className="cur-ring" ref={ring}><i /></div>
      <div className="cur-dot" ref={dot} />
      <div className="cur-bot" ref={bot}>
        <svg viewBox="0 0 40 40">
          <g className="prop"><rect x="9" y="3" width="22" height="3" rx="1.5" fill="#d0e266" /></g>
          <rect x="19" y="5" width="2" height="5" fill="#f0587a" />
          <path d="M20 9c-9 0-14 6-14 13 0 8 6 13 14 13s14-5 14-13c0-7-5-13-14-13z" fill="#f0587a" />
          <ellipse cx="14.5" cy="20" rx="5" ry="5.6" fill="#fff" className="eye" />
          <ellipse cx="25.5" cy="20" rx="5" ry="5.6" fill="#fff" className="eye" />
          <g ref={pupils} style={{ transition: 'transform .08s' }}>
            <circle cx="14.5" cy="20.5" r="2.4" fill="#141414" />
            <circle cx="25.5" cy="20.5" r="2.4" fill="#141414" />
          </g>
          <path d="M13 28q7 5 14 0" fill="#7a1230" stroke="#7a1230" strokeWidth="1.5" strokeLinecap="round" />
          <path className="tongue" d="M22 29.6q0 5 3 5t3-5z" fill="#ff9db3" />
          <circle cx="8" cy="26" r="2" fill="#ff9db3" opacity=".7" />
          <circle cx="32" cy="26" r="2" fill="#ff9db3" opacity=".7" />
        </svg>
      </div>
    </div>
  );
}
