import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

// Performance optimization: dynamic bundle imports
const CaseStudy = React.lazy(() => import('./pages/CaseStudy'));
const TerminalOverlay = React.lazy(() => import('./components/TerminalOverlay'));
const MatrixOverlay = React.lazy(() => import('./components/MatrixOverlay'));
const FloatingChatbot = React.lazy(() => import('./components/FloatingChatbot'));
const CommandPalette = React.lazy(() => import('./components/CommandPalette'));

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isMatrixOpen, setIsMatrixOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);

  // Toggle recruiter mode CSS class on root document element
  useEffect(() => {
    if (isRecruiterMode) {
      document.documentElement.classList.add('recruiter-mode');
    } else {
      document.documentElement.classList.remove('recruiter-mode');
    }
  }, [isRecruiterMode]);

  // Key handlers for Command Palette, Terminal mode, Recruiter mode, and Konami Code
  useEffect(() => {
    // Konami code key sequence: Up Up Down Down Left Right Left Right B A
    const konamiSequence = [
      'ArrowUp', 'ArrowUp',
      'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight',
      'ArrowLeft', 'ArrowRight',
      'b', 'a'
    ];
    let konamiIdx = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. Command Palette (Ctrl+K or Cmd+K)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
        return;
      }

      // Don't trigger other shortcuts if user is typing in form inputs
      const activeEl = document.activeElement;
      const isTyping = activeEl && (
        activeEl.tagName === 'INPUT' ||
        activeEl.tagName === 'TEXTAREA' ||
        activeEl.getAttribute('contenteditable') === 'true'
      );
      if (isTyping) return;

      // 2. Recruiter Mode (R or r key)
      if (e.key === 'r' || e.key === 'R') {
        setIsRecruiterMode(prev => !prev);
      }

      // 3. Konami Code detection
      if (e.key === konamiSequence[konamiIdx]) {
        konamiIdx++;
        if (konamiIdx === konamiSequence.length) {
          setIsMatrixOpen(true);
          konamiIdx = 0;
        }
      } else {
        // Reset or restart sequence
        konamiIdx = e.key === konamiSequence[0] ? 1 : 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Custom event listener for overlays
  useEffect(() => {
    const toggleTerminalHandler = () => {
      setIsTerminalOpen(prev => !prev);
    };
    const toggleMatrixHandler = () => {
      setIsMatrixOpen(prev => !prev);
    };

    window.addEventListener('toggle-terminal', toggleTerminalHandler);
    window.addEventListener('toggle-matrix', toggleMatrixHandler);

    return () => {
      window.removeEventListener('toggle-terminal', toggleTerminalHandler);
      window.removeEventListener('toggle-matrix', toggleMatrixHandler);
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text transition-colors duration-300">
          {/* Top navigation bar */}
          <Navbar />

          {/* Recruiter Mode Banner indicator */}
          {isRecruiterMode && (
            <div className="fixed top-18 left-1/2 -translate-x-1/2 z-40 px-4 py-1.5 rounded-full bg-indigo-600 text-white text-[10px] md:text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg border border-indigo-400/30 animate-pulse">
              <span>👔 Recruiter Mode Active</span>
              <button
                onClick={() => setIsRecruiterMode(false)}
                className="hover:text-zinc-200 underline cursor-pointer"
              >
                Disable
              </button>
            </div>
          )}

          {/* Main content route views */}
          <main className="flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={
                <Suspense fallback={
                  <div className="min-h-screen bg-brand-bg flex items-center justify-center text-xs font-mono text-brand-text-muted">
                    Loading Case Study...
                  </div>
                }>
                  <CaseStudy />
                </Suspense>
              } />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Footer content */}
          <Footer />

          {/* Lazy loaded interactive components */}
          <Suspense fallback={null}>
            {/* Interactive Floating Chatbot */}
            <FloatingChatbot />

            {/* Terminal Mock Command Line Overlay */}
            <TerminalOverlay
              isOpen={isTerminalOpen}
              onClose={() => setIsTerminalOpen(false)}
            />

            {/* Cyber falling Matrix code simulation */}
            <MatrixOverlay
              isOpen={isMatrixOpen}
              onClose={() => setIsMatrixOpen(false)}
            />

            {/* VS Code Command Palette Search Modal */}
            <CommandPalette
              isOpen={isCommandPaletteOpen}
              onClose={() => setIsCommandPaletteOpen(false)}
            />
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
