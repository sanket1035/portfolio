import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text transition-colors duration-300">
          {/* Top navigation bar */}
          <Navbar />

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
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
