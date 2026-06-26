import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import OpenSource from '../components/OpenSource';
import GitHubGrid from '../components/GitHubGrid';
import ResumeView from '../components/ResumeView';
import Contact from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <div className="flex-1 w-full max-w-6xl mx-auto">
      {/* Sections with anchors for navigation */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <OpenSource />
      <GitHubGrid />
      <ResumeView />
      <Contact />
    </div>
  );
};
export default Home;
