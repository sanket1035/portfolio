import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Gamepad2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const LINKS = [
  ['#projects', 'Projects'],
  ['#skills', 'Skills'],
  ['#achievements', 'Milestones'],
  ['#opensource', 'Dev Activity'],
  ['#resume', 'Resume'],
] as const;

/** Fixed, transparent header with logo, links, pill CTA and theme toggle (reference layout). */
export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const nav = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 24);
      if (pathname !== '/') return;
      const y = window.scrollY + window.innerHeight / 3;
      let cur = '';
      for (const [h] of LINKS) {
        const el = document.querySelector<HTMLElement>(h);
        if (el && y >= el.getBoundingClientRect().top + window.scrollY) cur = h;
      }
      setActive(cur);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, [pathname]);

  const go = (hash: string) => {
    setOpen(false);
    if (pathname !== '/') { nav('/' + hash); return; }
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
  };

  const ThemeBtn = (
    <button type="button" className="icon-btn" onClick={toggleTheme} aria-label="Toggle Theme Mode">
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );

  return (
    <header className={`site-nav ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="wrap" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: 'flex', alignItems: 'center', gap: '.7rem', textDecoration: 'none', fontWeight: 700 }}>
          <img src="/Sanket_Chaudhari_logo.png" alt="" width={32} height={32} style={{ borderRadius: 8 }} />
          <span>Sanket Chaudhari</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex" style={{ alignItems: 'center', gap: '1.6rem' }}>
          {LINKS.map(([h, l]) => (
            <button key={h} type="button" className={`nav-link ${active === h ? 'cur' : ''}`} onClick={() => go(h)}>{l}</button>
          ))}
          <button type="button" className="pill solid" onClick={() => go('#contact')}><span>Get in touch</span></button>
          <Link to="/2048" className="icon-btn" aria-label="Play 2048 Arcade Game" title="Play 2048"><Gamepad2 size={16} /></Link>
          <button type="button" className="icon-btn" aria-label="Open Interactive Terminal" title="Terminal" style={{ fontFamily: 'var(--font-mono)', fontSize: '.8rem' }}
            onClick={() => window.dispatchEvent(new CustomEvent('toggle-terminal'))}>&gt;_</button>
          {ThemeBtn}
        </nav>

        <div className="flex lg:hidden" style={{ alignItems: 'center', gap: '.5rem' }}>
          {ThemeBtn}
          <button type="button" className="icon-btn" onClick={() => setOpen(!open)} aria-label="Toggle Navigation Drawer" aria-expanded={open}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden" style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--background)', borderBottom: '1px solid var(--border)', padding: '1rem 1.25rem 1.5rem', display: 'grid', gap: '.25rem' }}>
          {LINKS.map(([h, l]) => (
            <button key={h} type="button" className="nav-link" style={{ textAlign: 'left', fontSize: '1.25rem', padding: '.7rem 0', minHeight: 44 }} onClick={() => go(h)}>{l}</button>
          ))}
          <button type="button" className="pill solid" style={{ justifySelf: 'start', marginTop: '.75rem' }} onClick={() => go('#contact')}><span>Get in touch</span></button>
          <p style={{ display: 'flex', gap: '1.25rem', marginTop: '1rem' }}>
            <Link className="ulink" to="/2048" onClick={() => setOpen(false)}>2048 ↗</Link>
            <button type="button" className="ulink" style={{ background: 'none', border: 0, font: 'inherit', cursor: 'pointer' }}
              onClick={() => { setOpen(false); window.dispatchEvent(new CustomEvent('toggle-terminal')); }}>Terminal ↗</button>
          </p>
        </div>
      )}
    </header>
  );
};
export default Navbar;
