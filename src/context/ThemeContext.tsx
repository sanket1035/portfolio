import React, { createContext, useContext, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (e?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('sanket-theme');
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    // Default is dark mode per PRD
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('sanket-theme', theme);
  }, [theme]);

  const toggleTheme = (e?: React.MouseEvent) => {
    const root = document.documentElement;
    const flip = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    type VT = Document & { startViewTransition?: (cb: () => void) => unknown };
    const doc = document as VT;
    if (!reduce && doc.startViewTransition && e) {
      // circular reveal from the toggle button
      root.style.setProperty('--tx', `${e.clientX}px`);
      root.style.setProperty('--ty', `${e.clientY}px`);
      doc.startViewTransition(() => { flushSync(flip); });
    } else {
      root.classList.add('theme-anim');
      flip();
      window.setTimeout(() => root.classList.remove('theme-anim'), 600);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
export default ThemeContext;
