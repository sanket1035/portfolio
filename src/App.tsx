import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

import TerminalOverlay from './components/TerminalOverlay';
import MatrixOverlay from './components/MatrixOverlay';
import FloatingChatbot from './components/FloatingChatbot';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isMatrixOpen, setIsMatrixOpen] = useState(false);
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);

  // Toggle recruiter mode CSS class on root document element
  useEffect(() => {
    if (isRecruiterMode) {
      document.documentElement.classList.add('recruiter-mode');
    } else {
      document.documentElement.classList.remove('recruiter-mode');
    }
  }, [isRecruiterMode]);

  // Key handlers for Terminal mode, Recruiter mode, and Konami Code
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
      // Don't trigger if user is typing in form inputs
      const activeEl = document.activeElement;
      const isTyping = activeEl && (
        activeEl.tagName === 'INPUT' ||
        activeEl.tagName === 'TEXTAREA' ||
        activeEl.getAttribute('contenteditable') === 'true'
      );
      if (isTyping) return;

      // 1. Recruiter Mode (R or r key)
      if (e.key === 'r' || e.key === 'R') {
        setIsRecruiterMode(prev => !prev);
      }

      // 2. Konami Code detection
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

  // Custom event listener from Navbar toggle button
  useEffect(() => {
    const toggleTerminalHandler = () => {
      setIsTerminalOpen(prev => !prev);
    };
    window.addEventListener('toggle-terminal', toggleTerminalHandler);
    return () => window.removeEventListener('toggle-terminal', toggleTerminalHandler);
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
              <Route path="/projects/:id" element={<CaseStudy />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Footer content */}
          <Footer />

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
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
