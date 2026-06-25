import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  // Flatten skills into two balanced arrays for dual marquee tracks
  const track1 = [
    ...portfolioData.skills.languages,
    ...portfolioData.skills.frameworks,
  ];

  const track2 = [
    ...portfolioData.skills.aiMl,
    ...portfolioData.skills.databases,
    ...portfolioData.skills.tools,
  ];

  // Helper to render duplicate lists for seamless infinite looping
  const renderMarqueeTrack = (items: string[], directionClass: string) => {
    return (
      <div className="relative w-full overflow-hidden py-4 flex select-none">
        <div className={`flex gap-6 whitespace-nowrap min-w-full shrink-0 ${directionClass}`}>
          {items.map((item, index) => (
            <div
              key={`t1-${index}`}
              className="px-6 py-3 rounded-xl border border-brand-border bg-brand-card hover:border-brand-accent/50 text-brand-text font-medium text-sm transition-all shadow-md flex items-center justify-center shrink-0 cursor-default"
            >
              {item}
            </div>
          ))}
        </div>
        {/* Duplicate the array to create seamless loop effect */}
        <div className={`flex gap-6 whitespace-nowrap min-w-full shrink-0 ${directionClass}`} aria-hidden="true">
          {items.map((item, index) => (
            <div
              key={`t2-${index}`}
              className="px-6 py-3 rounded-xl border border-brand-border bg-brand-card hover:border-brand-accent/50 text-brand-text font-medium text-sm transition-all shadow-md flex items-center justify-center shrink-0 cursor-default"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 px-6 border-t border-brand-border/40 overflow-hidden bg-brand-bg">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-brand-primary tracking-tight">
            Skills & Technologies
          </h2>
          <div className="h-1 w-12 bg-brand-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-brand-text-muted mt-4 text-sm max-w-md mx-auto">
            Hover over any item to pause the slider and inspect the technology.
          </p>
        </div>

        {/* Marquees */}
        <div className="space-y-6">
          {/* Left Scrolling Track */}
          {renderMarqueeTrack(track1, 'animate-marquee')}

          {/* Right Scrolling Track (reverse marquee using inline style scale-x-[-1] or CSS style) */}
          <div className="[direction:rtl]">
            {renderMarqueeTrack(track2, 'animate-marquee')}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
