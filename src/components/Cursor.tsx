import { useEffect, useRef } from 'react';

/** Colourful ring + dot that follow the pointer, and a tiny robot that trails behind it. Fine pointers only. */
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const bot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;
    const root = document.documentElement;
    let mx = -100, my = -100, rx = -100, ry = -100, bx = -100, by = -100, ang = 0, raf = 0;

    const move = (e: PointerEvent) => {
      mx = e.clientX; my = e.clientY;
      root.classList.add('cur-on', 'cur-active');
      root.classList.toggle('cur-hover', !!(e.target as Element | null)?.closest?.('a, button, [role="button"], input, textarea, summary'));
    };
    const leave = () => root.classList.remove('cur-on', 'cur-active');

    const tick = () => {
      rx += (mx - rx) * 0.22; ry += (my - ry) * 0.22;
      const px = bx, py = by;
      bx += (rx + 34 - bx) * 0.1; by += (ry + 34 - by) * 0.1;
      const vx = bx - px, vy = by - py;
      if (Math.hypot(vx, vy) > 0.35) {
        const target = (Math.atan2(vy, vx) * 180) / Math.PI + 90;
        let d = target - ang; d = ((d + 540) % 360) - 180;
        ang += d * 0.12;
      }
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      if (bot.current) bot.current.style.transform = `translate(${bx - 3}px, ${by - 3}px) rotate(${ang}deg)`;
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
      <div className="cur-bot" ref={bot}>
        <svg viewBox="0 0 40 60">
          <defs>
            <linearGradient id="rk-body" x1="0" x2="1"><stop offset="0" stopColor="#b9bfc9" /><stop offset=".45" stopColor="#ffffff" /><stop offset="1" stopColor="#9aa2ae" /></linearGradient>
            <linearGradient id="rk-fl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff6c2" /><stop offset=".45" stopColor="#ffb23e" /><stop offset="1" stopColor="#f0587a" stopOpacity="0" /></linearGradient>
          </defs>
          <g className="flame"><path d="M15 44q5 20 10 0z" fill="url(#rk-fl)" /></g>
          <path d="M12 34L4 46l8-2zM28 34l8 12-8-2z" fill="#c23a58" />
          <path d="M20 2C12 10 11 24 12 44h16c1-20 0-34-8-42z" fill="url(#rk-body)" stroke="#7d8591" strokeWidth=".8" />
          <path d="M20 2c-4 4-6.500 9-7.500 15h15C26.500 11 24 6 20 2z" fill="#d6405f" />
          <rect x="11.500" y="40" width="17" height="4" rx="1" fill="#6d7480" />
          <circle cx="20" cy="26" r="4.600" fill="#2d3f66" stroke="#6d7480" strokeWidth="1.500" />
          <circle cx="18.500" cy="24.500" r="1.400" fill="#9db7ff" opacity=".8" />
          <rect x="12" y="32" width="16" height="1.200" fill="#c23a58" />
        </svg>
      </div>
    </div>
  );
}
