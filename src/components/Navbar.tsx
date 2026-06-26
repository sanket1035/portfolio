import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#about');
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

  // Intersection Observer to track active section scrollspy
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = ['#about', '#opensource', '#projects', '#achievements', '#skills', '#github', '#contact'];
    const observers = sections.map((hash) => {
      const element = document.querySelector(hash);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(hash);
            }
          });
        },
        { rootMargin: '-40% 0px -40% 0px' } // triggers when section is in the middle of viewport
      );
      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, [location.pathname]);

  const navLinks = [
    { num: '01', label: 'OVERVIEW', hash: '#about' },
    { num: '02', label: 'OPEN SOURCE', hash: '#opensource' },
    { num: '03', label: 'PROJECTS', hash: '#projects' },
    { num: '04', label: 'MILESTONES', hash: '#achievements' },
    { num: '05', label: 'SKILLS', hash: '#skills' },
    { num: '06', label: 'GITHUB', hash: '#github' },
    { num: '07', label: 'CONTACT', hash: '#contact', border: true },
  ];

  const handleNavClick = (hash: string) => {
    setIsOpen(false);
    setActiveSection(hash);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-4 glass border-b border-brand-border/30 shadow-md'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left Side: Monogram Logo & Name */}
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('#about');
          }}
          className="flex items-center gap-3 select-none group"
        >
          <div className="font-heading font-extrabold text-lg bg-gradient-to-br from-indigo-400 to-brand-accent text-brand-bg px-2.5 py-1 rounded transition-transform group-hover:scale-105">
            SC
          </div>
          <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-brand-primary font-bold transition-colors group-hover:text-brand-accent">
            SANKET.CHAUDHARI
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-6 relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.hash && location.pathname === '/';
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.hash)}
                  className={`relative font-mono text-[11px] tracking-widest transition-all py-2 cursor-pointer ${
                    link.border
                      ? 'border border-brand-border px-4 py-1.5 hover:border-brand-accent hover:text-brand-accent'
                      : isActive
                      ? 'text-brand-accent'
                      : 'text-brand-text-muted hover:text-brand-text'
                  }`}
                >
                  <span className="text-[9px] text-brand-accent/50 mr-1.5">{link.num}</span>
                  {link.label}

                  {/* Sliding Underline Animation */}
                  {isActive && !link.border && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-accent"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Monospace Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="border border-brand-border px-4 py-1.5 hover:border-brand-accent text-brand-text hover:text-brand-accent font-mono text-[11px] tracking-widest cursor-pointer transition-all uppercase"
            aria-label="Toggle Theme Mode"
          >
            {theme === 'dark' ? 'LIGHT' : 'DARK'}
          </button>

          {/* Terminal Toggle Button */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('toggle-terminal'))}
            className="border border-brand-border px-3.5 py-1.5 hover:border-brand-accent text-brand-text hover:text-brand-accent font-mono text-[11px] tracking-widest cursor-pointer transition-all flex items-center gap-1.5"
            aria-label="Toggle Terminal Mode"
            title="Open Interactive Terminal"
          >
            <span>&gt;_</span>
          </button>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('toggle-terminal'))}
            className="border border-brand-border px-2.5 py-1 text-brand-text font-mono text-[10px] tracking-widest cursor-pointer"
            title="Open Interactive Terminal"
          >
            &gt;_
          </button>
          <button
            onClick={toggleTheme}
            className="border border-brand-border px-3 py-1 text-brand-text font-mono text-[10px] tracking-widest uppercase cursor-pointer"
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden glass absolute top-full left-0 right-0 border-b border-brand-border/40 py-6 px-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.hash && location.pathname === '/';
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.hash)}
                    className={`text-left font-mono text-xs tracking-widest py-2 transition-colors cursor-pointer ${
                      link.border
                        ? 'border border-brand-border/60 text-center py-2 rounded-lg hover:border-brand-accent text-brand-accent'
                        : isActive
                        ? 'text-brand-accent'
                        : 'text-brand-text-muted hover:text-brand-text'
                    }`}
                  >
                    <span className="text-[10px] text-brand-accent/50 mr-2">{link.num}</span>
                    {link.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
