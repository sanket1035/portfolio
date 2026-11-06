import { useEffect, useState } from 'react';

export const SECTIONS = [
  ['about', 'Overview'], ['projects', 'Projects'], ['skills', 'Skills'], ['achievements', 'Milestones'],
  ['opensource', 'Dev Activity'], ['resume', 'Resume'], ['contact', 'Contact'],
] as const;

/** Minimal vertical index. Hidden on the opener, appears once you scroll past it. */
export default function SectionIndex() {
  const [cur, setCur] = useState<string | null>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setCur(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    SECTIONS.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <nav className={`index ${cur ? 'on' : ''}`} aria-label="Sections">
      {SECTIONS.map(([id, label], i) => (
        <a key={id} href={`#${id}`} className={cur === id ? 'cur' : ''}>
          <span className="lbl">{String(i + 1).padStart(2, '0')} {label}</span>
          <span className="pt" />
        </a>
      ))}
    </nav>
  );
}
