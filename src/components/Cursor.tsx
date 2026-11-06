import { useEffect, useRef } from 'react';

/** Colourful ring + dot that follow the pointer, and a tiny robot that trails behind it. Fine pointers only. */
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const bot = useRef<HTMLDivElement>(null);

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
      bx += (mx + 26 - bx) * 0.09; by += (my + 26 - by) * 0.09;
      rot += (Math.max(-25, Math.min(25, (bx - px) * 2.2)) - rot) * 0.15;
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px)`;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      if (bot.current) bot.current.style.transform = `translate(${bx}px, ${by + Math.sin(performance.now() / 300) * 3}px) rotate(${rot}deg)`;
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
        <svg viewBox="0 0 32 32">
          <line x1="16" y1="3" x2="16" y2="8" stroke="#f0587a" strokeWidth="2" strokeLinecap="round" />
          <circle cx="16" cy="3" r="2" fill="#d0e266" />
          <rect x="5" y="8" width="22" height="17" rx="6" fill="#2d5bcc" />
          <rect x="2" y="14" width="3" height="6" rx="1.5" fill="#f0587a" />
          <rect x="27" y="14" width="3" height="6" rx="1.5" fill="#f0587a" />
          <circle className="eye" cx="11.5" cy="15.5" r="2.4" fill="#fff" />
          <circle className="eye" cx="20.5" cy="15.5" r="2.4" fill="#fff" />
          <rect x="11" y="20" width="10" height="2" rx="1" fill="#d0e266" />
        </svg>
      </div>
    </div>
  );
}
