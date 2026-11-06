import { useRef } from 'react';
import { useMotion } from '../lib/motion';
import SectionIndex from '../components/SectionIndex';
import Hero from '../components/Hero';
import Statement from '../components/Statement';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Notes from '../components/Notes';
import Achievements from '../components/Achievements';
import OpenSource from '../components/OpenSource';
import ResumeView from '../components/ResumeView';
import Contact from '../components/Contact';

export const Home = () => {
  const root = useRef<HTMLElement>(null);
  useMotion(root);
  return (
    <main className="page" ref={root} style={{ flex: 1 }}>
      <SectionIndex />
      <Hero />
      <div className="rises">
        <Statement />
        <About />
        <Projects />
        <Skills />
        <Notes />
        <Achievements />
        <OpenSource />
        <ResumeView />
        <Contact />
      </div>
    </main>
  );
};
export default Home;
