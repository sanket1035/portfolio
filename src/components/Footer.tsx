import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-brand-border bg-brand-card/30 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Info */}
        <div className="text-center md:text-left">
          <p className="font-heading font-bold text-lg text-brand-primary">
            Sanket Chaudhari
          </p>
          <p className="text-xs text-brand-text-muted mt-1">
            © {new Date().getFullYear()} All Rights Reserved. Built with React & Tailwind CSS.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-brand-text-muted font-medium">
          <Link to="/privacy" className="hover:text-brand-accent transition-colors">
            Privacy Policy
          </Link>
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${portfolioData.socials.email}`}
            className="hover:text-brand-accent transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Action Button */}
        <button
          onClick={handleScrollToTop}
          className="p-3 rounded-xl border border-brand-border bg-brand-card hover:bg-brand-border/40 hover:border-brand-accent/50 text-brand-text hover:text-brand-accent transition-all cursor-pointer shadow-md"
          aria-label="Scroll to top of the page"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};
export default Footer;
