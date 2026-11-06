import { portfolioData } from '../data/portfolioData';
import Title from './Title';
import Marquee from './Marquee';

interface Skill {
  name: string;
  slug: string;
  color: string;
}

export const Skills = () => {
  const track1: Skill[] = [
    { name: "C", slug: "c", color: "A8B9CC" },
    { name: "C++", slug: "cplusplus", color: "00599C" },
    { name: "CSS3", slug: "css", color: "1572B6" },
    { name: "HTML5", slug: "html5", color: "E34F26" },
    { name: "Java", slug: "openjdk", color: "ED8B00" },
    { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
    { name: "Kotlin", slug: "kotlin", color: "7F52FF" },
    { name: "Python", slug: "python", color: "3776AB" },
    { name: "AWS", slug: "aws", color: "FF9900" },
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


  const names = (t: Skill[]) => t.map((s) => s.name);
  const groups: [string, string[]][] = [
    ['Languages', portfolioData.skills.languages],
    ['Frameworks', portfolioData.skills.frameworks],
    ['Databases', portfolioData.skills.databases],
    ['Tools', portfolioData.skills.tools],
    ['AI / ML', portfolioData.skills.aiMl],
  ];

  return (
    <section id="skills" className="section">
      <div className="wrap">
        <Title text="Skills" kicker="Tech stack" />
        <dl data-rows style={{ margin: '0 0 6rem' }}>
          {groups.map(([k, v]) => (
            <div className="row kv" data-row key={k}>
              <dt className="title" style={{ fontWeight: 700, fontSize: '1.25rem' }}>{k}</dt>
              <dd className="muted" style={{ margin: 0 }}>{v.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </div>
      <Marquee items={[...names(track1), ...names(track2)]} />
      <Marquee items={[...names(track3), ...names(track4)]} reverse />
    </section>
  );
};
export default Skills;
