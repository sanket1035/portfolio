import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', label: 'OVERVIEW', hash: '#about' },
    { num: '02', label: 'OPEN SOURCE', hash: '#opensource' },
    { num: '03', label: 'PROJECTS', hash: '#projects' },
    { num: '04', label: 'SKILLS', hash: '#skills' },
    { num: '05', label: 'GITHUB', hash: '#github' },
    { num: '06', label: 'CONTACT', hash: '#contact', border: true },
  ];

  const handleNavClick = (hash: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 glass border-b border-brand-border/30 shadow-md'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left Side: Monogram Logo & Name */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 select-none group"
        >
          {/* Stylized SC Block Monogram */}
          <div className="font-heading font-extrabold text-lg bg-gradient-to-br from-indigo-400 to-brand-accent text-brand-bg px-2.5 py-1 rounded transition-transform group-hover:scale-105">
            SC
          </div>
          <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-brand-primary font-bold transition-colors group-hover:text-brand-accent">
            SANKET.CHAUDHARI
          </span>
        </Link>

        {/* Desktop Right Side: Monospace Numbered Links & Theme Box */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.hash)}
                className={`font-mono text-[11px] tracking-widest transition-all cursor-pointer ${
                  link.border
                    ? 'border border-brand-border px-4 py-2 hover:border-brand-accent hover:text-brand-accent'
                    : 'text-brand-text-muted hover:text-brand-text'
                }`}
              >
                <span className="text-[9px] text-brand-accent/50 mr-1.5">{link.num}</span>
                {link.label}
              </button>
            ))}
          </div>

          {/* Monospace Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="border border-brand-border px-4 py-2 hover:border-brand-accent text-brand-text hover:text-brand-accent font-mono text-[11px] tracking-widest cursor-pointer transition-all uppercase"
            aria-label="Toggle Theme Mode"
          >
            {theme === 'dark' ? 'LIGHT' : 'DARK'}
          </button>
        </div>

        {/* Mobile Hamburger Drawer Menu Button */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button
            onClick={toggleTheme}
            className="border border-brand-border px-3 py-1.5 text-brand-text font-mono text-[10px] tracking-widest uppercase cursor-pointer"
          >
            {theme === 'dark' ? 'LIGHT' : 'DARK'}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-brand-text hover:text-brand-accent transition-colors"
            aria-label="Toggle Navigation Drawer"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar/Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden glass absolute top-full left-0 right-0 border-b border-brand-border/40 py-6 px-6 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.hash)}
                className={`text-left font-mono text-xs tracking-widest py-2 transition-colors cursor-pointer ${
                  link.border
                    ? 'border border-brand-border/60 text-center py-2.5 rounded-lg hover:border-brand-accent text-brand-accent'
                    : 'text-brand-text-muted hover:text-brand-text'
                }`}
              >
                <span className="text-[10px] text-brand-accent/50 mr-2">{link.num}</span>
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
