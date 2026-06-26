import React, { Suspense } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

// Lazy loading heavy components for bundle optimization
const Achievements = React.lazy(() => import('../components/Achievements'));
const OpenSource = React.lazy(() => import('../components/OpenSource'));
const ResumeView = React.lazy(() => import('../components/ResumeView'));
const Contact = React.lazy(() => import('../components/Contact'));

export const Home: React.FC = () => {
  return (
    <div className="flex-1 w-full max-w-6xl mx-auto">
      {/* Sections with anchors for navigation */}
      <Hero />
      
      <About />
      
      <Projects />
      
      <Skills />
      
      <Suspense fallback={<div className="py-12 text-center text-xs font-mono text-brand-text-muted">Loading Milestones...</div>}>
        <Achievements />
      </Suspense>
      
      <Suspense fallback={<div className="py-12 text-center text-xs font-mono text-brand-text-muted">Loading Open Source & GitHub Insights...</div>}>
        <OpenSource />
      </Suspense>
      
      <Suspense fallback={<div className="py-12 text-center text-xs font-mono text-brand-text-muted">Loading Resume Credentials...</div>}>
        <ResumeView />
      </Suspense>
      
      <Suspense fallback={<div className="py-12 text-center text-xs font-mono text-brand-text-muted">Loading Contact Form...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
};
export default Home;
