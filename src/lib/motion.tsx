import { useLayoutEffect, type ReactNode, type ElementType, createElement } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Shared Lenis instance so the marquee can read scroll velocity. */
export const lenisRef: { current: Lenis | null } = { current: null };

/** Split text into words, each in an overflow-hidden mask. Keeps full string in aria-label. */
export function Words({ text }: { text: string }) {
  return (
    <>
      {text.split(' ').map((w, i) =>
        w === '{chip}' ? (
          <span className="w chip" key={i} aria-hidden="true" />
        ) : (
          <span className="mask" key={i} aria-hidden="true">
            <span className="w">{w}</span>
          </span>
        ),
      )}
    </>
  );
}

export function Split({ as = 'h2', text, className, split = 'reveal' }: {
  as?: ElementType; text: string; className?: string; split?: 'reveal' | 'lit'; children?: ReactNode;
}) {
  return createElement(
    as,
    { className: `${className ?? ''} ${split === 'lit' ? 'lit' : ''}`, 'aria-label': text.replace('{chip} ', ''), [split === 'lit' ? 'data-lit' : 'data-split']: '' },
    <Words text={text} />,
  );
}

/** One place that wires Lenis + every scroll animation. Call once from the page. */
export function useMotion(root: React.RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    if (!root.current) return;
    const mm = gsap.matchMedia();
    let lenis: Lenis | null = null;
    let tick: ((t: number) => void) | null = null;

    mm.add(
      { motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 1024px)' },
      (ctx) => {
        const { motion, desktop } = ctx.conditions as { motion: boolean; desktop: boolean };

        // Reduced motion: final state, no Lenis, no scrub, no pin.
        if (!motion) {
          root.current!.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
            el.textContent = fmt(el, Number(el.dataset.count));
          });
          return;
        }

        lenis = new Lenis({ lerp: 0.1 });
        lenisRef.current = lenis;
        lenis.on('scroll', ScrollTrigger.update);
        tick = (t: number) => lenis!.raf(t * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        const ease = 'expo.out';

        // 1. Split-text mask reveal
        gsap.utils.toArray<HTMLElement>('[data-split]').forEach((el) => {
          gsap.from(el.querySelectorAll('.w'), {
            yPercent: 110, duration: 1.1, ease, stagger: 0.03,
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          });
        });
        // Opener reveals on load, not on scroll
        gsap.from('[data-load] .w', { yPercent: 110, duration: 1.2, ease, stagger: 0.035, delay: 0.15 });
        gsap.from('[data-load-fade]', { opacity: 0, y: 12, duration: 1, ease, delay: 0.9 });

        // 1b. Statement words lit up on scroll
        gsap.utils.toArray<HTMLElement>('[data-lit]').forEach((el) => {
          gsap.fromTo(el.querySelectorAll('.w'), { opacity: 0.08 }, {
            opacity: 1, ease: 'none', stagger: 0.1,
            scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
          });
        });

        // 2. Opening scene: big photo panel shrinks into a centred card, name halves part, text appears each side
        const rv = root.current!.querySelector<HTMLElement>('[data-rv]');
        if (rv) {
          const q = <T extends HTMLElement>(sel: string) => rv.querySelector<T>(sel)!;
          const card = q('[data-rv-card]'), cell = q('[data-rv-cell]');
          const stage = () => rv.getBoundingClientRect();
          const tlm = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: { trigger: '[data-opener]', start: 'top top', end: '+=170%', scrub: true, pin: true, anticipatePin: 1, invalidateOnRefresh: true, refreshPriority: 10 },
          });
          const top = () => (window.innerWidth >= 900 ? 88 : 80);
          const w0 = () => stage().width - (window.innerWidth >= 900 ? 80 : 32);
          tlm.fromTo(card, {
            width: w0,
            height: () => stage().height - top() - 16,
            x: () => { const s = stage(), c = cell.getBoundingClientRect(); return s.left + (s.width - w0()) / 2 - c.left; },
            y: () => { const s = stage(), c = cell.getBoundingClientRect(); return s.top + top() - c.top; },
          }, { width: () => cell.getBoundingClientRect().width, height: () => cell.getBoundingClientRect().height, x: 0, y: 0 }, 0);
          tlm.fromTo(q('[data-rv-nl]'), { xPercent: 0, opacity: 1 }, { xPercent: -130, opacity: 0 }, 0.05);
          tlm.fromTo(q('[data-rv-nr]'), { xPercent: 0, opacity: 1 }, { xPercent: 130, opacity: 0 }, 0.05);
          tlm.fromTo(q('[data-rv-meta]'), { opacity: 1 }, { opacity: 0, duration: 0.25 }, 0);
          tlm.fromTo(q('[data-rv-left]'), { opacity: 0, x: -70 }, { opacity: 1, x: 0, duration: 0.5 }, 0.5);
          tlm.fromTo(q('[data-rv-right]'), { opacity: 0, x: 70 }, { opacity: 1, x: 0, duration: 0.5 }, 0.5);
        }

        // 3a. The dot after the title becomes a colour circle that floods the screen into chapter one (desktop)
        const blob = root.current!.querySelector<HTMLElement>('[data-circle-blob]');
        const spot = root.current!.querySelector<HTMLElement>('[data-circle-dot]');
        const intro = root.current!.querySelector<HTMLElement>('[data-circle-intro]');
        if (desktop && blob && spot && intro) {
          gsap.set(blob, { display: 'block' });
          const at = () => {
            const d = spot.getBoundingClientRect(), s = intro.getBoundingClientRect();
            return { x: d.left - s.left + d.width / 2, y: d.top - s.top + d.height / 2, r: d.width / 2 };
          };
          gsap.fromTo(blob,
            { clipPath: () => { const a = at(); return `circle(${a.r}px at ${a.x}px ${a.y}px)`; } },
            { clipPath: () => { const a = at(); return `circle(150vmax at ${a.x}px ${a.y}px)`; }, ease: 'power2.in',
              scrollTrigger: { trigger: intro, start: 'top top', end: '+=90%', scrub: true, pin: true, invalidateOnRefresh: true } });
        }

        // 3. Stacked chapters (desktop only; mobile stacks normally with fade)
        const chapters = gsap.utils.toArray<HTMLElement>('.chapter');
        if (desktop) {
          chapters.forEach((ch, i) => {
            const next = chapters[i + 1];
            if (!next) return;
            const trig = { trigger: next, start: 'top bottom', end: 'top top', scrub: true };
            gsap.fromTo(ch, { scale: 1 }, { scale: 0.985, ease: 'none', scrollTrigger: trig });
            gsap.fromTo(ch.querySelector('.chapter-dim'), { opacity: 0 }, { opacity: 0.4, ease: 'none', scrollTrigger: trig });
          });
        } else {
          chapters.forEach((ch) =>
            gsap.from(ch, { y: 40, opacity: 0, duration: 1, ease, scrollTrigger: { trigger: ch, start: 'top 90%', once: true } }));
        }

        // 3b. Chapter media parallax
        gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((img) => {
          gsap.fromTo(img, { yPercent: -8 }, {
            yPercent: 8, ease: 'none',
            scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true },
          });
        });

        // 6. Notes rise with a slight random rotation that settles to 0
        gsap.utils.toArray<HTMLElement>('[data-note]').forEach((n, i) => {
          const rot = Number(n.dataset.rot ?? 0);
          gsap.fromTo(n, { y: 70, opacity: 0, rotate: rot * 3 }, {
            y: 0, opacity: 1, rotate: rot, duration: 1.1, ease, delay: (i % 3) * 0.06,
            scrollTrigger: { trigger: n, start: 'top 90%', once: true },
          });
        });

        // 4. Count-up
        gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
          const target = Number(el.dataset.count);
          const o = { v: 0 };
          gsap.to(o, {
            v: target, duration: 1.6, ease, snap: { v: el.dataset.decimals ? 0.01 : 1 },
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
            onUpdate: () => { el.textContent = fmt(el, o.v); },
          });
        });

        // 5. Hairline rows rise in
        gsap.utils.toArray<HTMLElement>('[data-rows]').forEach((group) => {
          gsap.from(group.querySelectorAll('[data-row]'), {
            y: 24, opacity: 0, duration: 0.9, ease, stagger: 0.08,
            scrollTrigger: { trigger: group, start: 'top 85%', once: true },
          });
        });

        // 8. Magnetic CTA circle
        const cta = root.current!.querySelector<HTMLElement>('[data-magnet]');
        if (cta) {
          const move = (e: PointerEvent) => {
            const r = cta.getBoundingClientRect();
            const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
            const dx = e.clientX - cx, dy = e.clientY - cy;
            const d = Math.hypot(dx, dy);
            if (d < r.width / 2 + 40) gsap.to(cta, { x: dx * 0.35, y: dy * 0.35, duration: 0.4, ease: 'power3.out' });
            else gsap.to(cta, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.6)' });
          };
          window.addEventListener('pointermove', move);
          return () => window.removeEventListener('pointermove', move);
        }
      },
    );

    // Refresh after fonts/images so pin positions are right
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('load', onLoad);
      mm.revert();
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
      lenisRef.current = null;
    };
  }, [root]);
}

function fmt(el: HTMLElement, v: number) {
  const d = Number(el.dataset.decimals ?? 0);
  return (el.dataset.prefix ?? '') + v.toLocaleString('en-IN', { minimumFractionDigits: d, maximumFractionDigits: d }) + (el.dataset.suffix ?? '');
}
