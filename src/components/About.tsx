import React from 'react';
import { BookOpen, Award, Compass, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-6 border-t border-brand-border/40 bg-brand-card/20">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-brand-primary tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-12 bg-brand-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Main Story Column */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="font-heading font-semibold text-xl md:text-2xl text-brand-primary flex items-center gap-2">
              <Compass className="text-brand-accent" size={20} />
              My Journey
            </h3>
            <p className="font-sans text-brand-text-muted leading-relaxed">
              I am an undergraduate student in Artificial Intelligence & Data Science at K. K. Wagh Institute of Engineering Education & Research (KKWIEER).
              My passion lies at the intersection of building robust full-stack software and deploying practical, intelligent machine learning solutions.
            </p>
            <p className="font-sans text-brand-text-muted leading-relaxed">
              I don't just write code; I design systems. Whether it is engineering high-performance APIs in Node.js, styling polished interfaces with React and Tailwind, or analyzing model training pipelines in PyTorch, I approach development with a focus on performance, scalability, and user experience.
            </p>
            <p className="font-sans text-brand-text-muted leading-relaxed">
              In addition to my coursework and projects, I'm an active open-source contributor. I believe in giving back to the community and collaborating on codebases that make developer lives easier.
            </p>
          </div>

          {/* Education & Info Column */}
          <div className="space-y-8">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-brand-card border border-brand-border/60 shadow-lg">
              <h3 className="font-heading font-semibold text-lg text-brand-primary mb-4 flex items-center gap-2">
                <BookOpen className="text-brand-accent" size={18} />
                Education
              </h3>
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-heading font-bold text-sm md:text-base text-brand-text">
                    {edu.institution}
                  </h4>
                  <p className="text-xs text-brand-accent font-semibold uppercase tracking-wider">
                    {edu.degree} — {edu.specialization}
                  </p>
                  <div className="flex justify-between items-center text-xs text-brand-text-muted pt-1">
                    <span>{edu.duration}</span>
                    <span className="bg-brand-border/60 px-2 py-0.5 rounded font-mono font-medium">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Focus Card */}
            <div className="p-6 rounded-2xl bg-brand-card border border-brand-border/60 shadow-lg">
              <h3 className="font-heading font-semibold text-lg text-brand-primary mb-4 flex items-center gap-2">
                <Award className="text-brand-accent" size={18} />
                Focus Areas
              </h3>
              <ul className="space-y-3.5 text-sm text-brand-text-muted">
                <li className="flex items-start gap-2.5">
                  <Star size={16} className="text-brand-accent mt-0.5 shrink-0" />
                  <span>Full-Stack Web Development (MERN, FastAPI)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Star size={16} className="text-brand-accent mt-0.5 shrink-0" />
                  <span>AI Applications & LLM Integration</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Star size={16} className="text-brand-accent mt-0.5 shrink-0" />
                  <span>Mobile Applications (Android/Compose)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Star size={16} className="text-brand-accent mt-0.5 shrink-0" />
                  <span>Open Source Software Contributions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
