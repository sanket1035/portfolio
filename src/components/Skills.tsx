import React from 'react';
import { 
  Code2, Braces, Database, Terminal, Cpu, 
  Layers, Settings, Globe, Smartphone, GitBranch 
} from 'lucide-react';

interface SkillItem {
  name: string;
  category: string;
  icon: React.ReactNode;
  colorClass: string; // custom color class for hover border/shadow
  accentColor: string; // inline style text/icon color
}

export const Skills: React.FC = () => {
  const skillList: SkillItem[] = [
    { 
      name: "TypeScript", 
      category: "Language", 
      icon: <Braces size={22} />, 
      colorClass: "glow-ts",
      accentColor: "#3178c6"
    },
    { 
      name: "React", 
      category: "Frontend", 
      icon: <Layers size={22} />, 
      colorClass: "glow-react",
      accentColor: "#61dafb"
    },
    { 
      name: "Node.js", 
      category: "Backend", 
      icon: <Terminal size={22} />, 
      colorClass: "glow-node",
      accentColor: "#398239"
    },
    { 
      name: "Python", 
      category: "Language", 
      icon: <Code2 size={22} />, 
      colorClass: "glow-python",
      accentColor: "#fcd34d"
    },
    { 
      name: "FastAPI", 
      category: "Framework", 
      icon: <Cpu size={22} />, 
      colorClass: "glow-ai",
      accentColor: "#05998b"
    },
    { 
      name: "Docker", 
      category: "DevOps", 
      icon: <Settings size={22} />, 
      colorClass: "glow-docker",
      accentColor: "#1d1a99"
    },
    { 
      name: "PostgreSQL", 
      category: "Database", 
      icon: <Database size={22} />, 
      colorClass: "glow-db",
      accentColor: "#ef4444"
    },
    { 
      name: "Git", 
      category: "Version Control", 
      icon: <GitBranch size={22} />, 
      colorClass: "glow-git",
      accentColor: "#f05032"
    },
    { 
      name: "Jetpack Compose", 
      category: "Mobile", 
      icon: <Smartphone size={22} />, 
      colorClass: "glow-mobile",
      accentColor: "#3ddc84"
    },
    { 
      name: "PyTorch", 
      category: "Machine Learning", 
      icon: <Globe size={22} />, 
      colorClass: "glow-ai",
      accentColor: "#ee4c2c"
    }
  ];

  return (
    <section id="skills" className="py-16 px-6 border-t border-brand-border/40 bg-brand-bg">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="font-mono text-[10px] tracking-widest text-brand-accent uppercase font-bold">
            ABILITIES & STACK
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary tracking-tight mt-2 uppercase">
            Technical Modalities
          </h2>
          <div className="h-0.5 w-10 bg-brand-accent mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skillList.map((skill) => (
            <div
              key={skill.name}
              className={`group p-5 rounded-xl bg-brand-card border border-brand-border/80 transition-all duration-300 transform hover:-translate-y-1 cursor-default ${skill.colorClass}`}
            >
              {/* Icon Container */}
              <div 
                className="p-2.5 rounded-lg bg-brand-bg border border-brand-border/40 inline-block mb-3.5 group-hover:scale-105 transition-transform"
                style={{ color: skill.accentColor }}
              >
                {skill.icon}
              </div>

              {/* Title & Category */}
              <div>
                <h3 className="font-heading font-bold text-sm text-brand-primary tracking-tight group-hover:text-brand-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-[10px] font-mono text-brand-text-muted mt-1 uppercase tracking-wider">
                  {skill.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
