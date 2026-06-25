import React from 'react';

interface Skill {
  name: string;
  slug: string;
  color: string;
}

export const Skills: React.FC = () => {
  const track1: Skill[] = [
    { name: "C", slug: "c", color: "A8B9CC" },
    { name: "C++", slug: "cplusplus", color: "00599C" },
    { name: "CSS3", slug: "css3", color: "1572B6" },
    { name: "HTML5", slug: "html5", color: "E34F26" },
    { name: "Java", slug: "java", color: "ED8B00" },
    { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
    { name: "Kotlin", slug: "kotlin", color: "7F52FF" },
    { name: "Python", slug: "python", color: "3776AB" },
    { name: "AWS", slug: "amazonwebservices", color: "FF9900" },
    { name: "Netlify", slug: "netlify", color: "00AD9F" },
    { name: "Google Cloud", slug: "googlecloud", color: "4285F4" }
  ];

  const track2: Skill[] = [
    { name: "Angular.js", slug: "angular", color: "DD0031" },
    { name: "Chart.js", slug: "chartdotjs", color: "FF6384" },
    { name: "FastAPI", slug: "fastapi", color: "05998B" },
    { name: "Express.js", slug: "express", color: "818181" },
    { name: "Flask", slug: "flask", color: "FFFFFF" },
    { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
    { name: "Node.js", slug: "nodedotjs", color: "339933" },
    { name: "React", slug: "react", color: "61DAFB" },
    { name: "React Native", slug: "react", color: "61DAFB" },
    { name: "Streamlit", slug: "streamlit", color: "FF4B4B" },
    { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" }
  ];

  const track3: Skill[] = [
    { name: "Amazon DynamoDB", slug: "amazondynamodb", color: "4053D6" },
    { name: "SQLite", slug: "sqlite", color: "003B57" },
    { name: "Supabase", slug: "supabase", color: "3ECF8E" },
    { name: "MySQL", slug: "mysql", color: "4479A1" },
    { name: "MongoDB", slug: "mongodb", color: "47A248" },
    { name: "Canva", slug: "canva", color: "00C4CC" },
    { name: "Figma", slug: "figma", color: "F24E1E" },
    { name: "Keras", slug: "keras", color: "D00000" },
    { name: "Matplotlib", slug: "matplotlib", color: "11557C" },
    { name: "MLflow", slug: "mlflow", color: "0194E2" },
    { name: "NumPy", slug: "numpy", color: "013243" }
  ];

  const track4: Skill[] = [
    { name: "Pandas", slug: "pandas", color: "150458" },
    { name: "Plotly", slug: "plotly", color: "3F4F75" },
    { name: "PyTorch", slug: "pytorch", color: "EE4C2C" },
    { name: "Scikit-learn", slug: "scikitlearn", color: "F7931E" },
    { name: "SciPy", slug: "scipy", color: "8CAAE6" },
    { name: "TensorFlow", slug: "tensorflow", color: "FF6F00" },
    { name: "Git", slug: "git", color: "F05033" },
    { name: "GitHub", slug: "github", color: "FFFFFF" },
    { name: "Notion", slug: "notion", color: "FFFFFF" },
    { name: "Power BI", slug: "powerbi", color: "F2C811" }
  ];

  // Helper to double the track items for seamless loop
  const prepareTrack = (skills: Skill[]) => [...skills, ...skills];

  return (
    <section id="skills" className="relative py-20 overflow-hidden bg-[#0a0a0f] border-t border-brand-border/40">
      {/* Premium glowing background streak/diagonal blur matching the purple theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-tr from-purple-800/15 via-violet-600/10 to-transparent blur-[120px] -rotate-12 pointer-events-none"></div>
      
      {/* Fade overlay gradients to blur out the edges of the marquee scrolling */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-36 bg-gradient-to-r from-[#0a0a0f] to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 md:w-36 bg-gradient-to-l from-[#0a0a0f] to-transparent pointer-events-none z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-white tracking-wide uppercase">
            My Skills
          </h2>
          <div className="h-1 w-16 bg-purple-500 mx-auto mt-4 rounded-full shadow-lg shadow-purple-500/50"></div>
        </div>

        {/* Marquee Rows */}
        <div className="space-y-6 md:space-y-8">
          {/* Row 1 - Left */}
          <div className="flex overflow-hidden select-none gap-4 py-1">
            <div className="animate-marquee flex gap-4 shrink-0">
              {prepareTrack(track1).map((skill, idx) => (
                <div 
                  key={`t1-${idx}`} 
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 hover:border-purple-500/40 hover:bg-zinc-900/80 transition-all duration-300 shadow-sm cursor-default"
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`} 
                    alt={skill.name} 
                    className="w-4.5 h-4.5 object-contain"
                    loading="lazy"
                  />
                  <span className="text-xs md:text-sm font-semibold text-zinc-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right */}
          <div className="flex overflow-hidden select-none gap-4 py-1">
            <div className="animate-marquee-reverse flex gap-4 shrink-0">
              {prepareTrack(track2).map((skill, idx) => (
                <div 
                  key={`t2-${idx}`} 
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 hover:border-purple-500/40 hover:bg-zinc-900/80 transition-all duration-300 shadow-sm cursor-default"
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`} 
                    alt={skill.name} 
                    className="w-4.5 h-4.5 object-contain"
                    loading="lazy"
                  />
                  <span className="text-xs md:text-sm font-semibold text-zinc-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Left */}
          <div className="flex overflow-hidden select-none gap-4 py-1">
            <div className="animate-marquee flex gap-4 shrink-0">
              {prepareTrack(track3).map((skill, idx) => (
                <div 
                  key={`t3-${idx}`} 
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 hover:border-purple-500/40 hover:bg-zinc-900/80 transition-all duration-300 shadow-sm cursor-default"
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`} 
                    alt={skill.name} 
                    className="w-4.5 h-4.5 object-contain"
                    loading="lazy"
                  />
                  <span className="text-xs md:text-sm font-semibold text-zinc-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 4 - Right */}
          <div className="flex overflow-hidden select-none gap-4 py-1">
            <div className="animate-marquee-reverse flex gap-4 shrink-0">
              {prepareTrack(track4).map((skill, idx) => (
                <div 
                  key={`t4-${idx}`} 
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 hover:border-purple-500/40 hover:bg-zinc-900/80 transition-all duration-300 shadow-sm cursor-default"
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`} 
                    alt={skill.name} 
                    className="w-4.5 h-4.5 object-contain"
                    loading="lazy"
                  />
                  <span className="text-xs md:text-sm font-semibold text-zinc-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
