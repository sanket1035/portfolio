import { portfolioData } from '../data/portfolioData';
import Title from './Title';
import Marquee from './Marquee';

interface Skill {
  name: string;
  slug: string;
  color: string;
}

export const Skills = () => {
  const S = (name: string, slug: string, color: string): Skill => ({ name, slug, color });
  const track1: Skill[] = [
    S('Python', 'python', '3776AB'), S('TypeScript', 'typescript', '3178C6'), S('JavaScript', 'javascript', 'F7DF1E'),
    S('SQL', 'mysql', '4479A1'), S('Java', 'openjdk', 'ED8B00'), S('HTML5', 'html5', 'E34F26'), S('CSS3', 'css', '1572B6'),
    S('React', 'react', '61DAFB'), S('Next.js', 'nextdotjs', 'FFFFFF'), S('Tailwind CSS', 'tailwindcss', '06B6D4'),
  ];
  const track2: Skill[] = [
    S('Node.js', 'nodedotjs', '339933'), S('Express.js', 'express', '818181'), S('FastAPI', 'fastapi', '05998B'),
    S('Prisma', 'prisma', 'FFFFFF'), S('REST APIs', 'fastapi', '05998B'), S('Streamlit', 'streamlit', 'FF4B4B'),
    S('PostgreSQL', 'postgresql', '4169E1'), S('MySQL', 'mysql', '4479A1'), S('SQLite', 'sqlite', '003B57'), S('Firebase', 'firebase', 'FFCA28'),
  ];
  const track3: Skill[] = [
    S('PyTorch', 'pytorch', 'EE4C2C'), S('Scikit-learn', 'scikitlearn', 'F7931E'), S('XGBoost', 'xgboost', '337AB7'),
    S('OpenCV', 'opencv', '5C3EE8'), S('ONNX', 'onnx', '005CED'), S('Pandas', 'pandas', '150458'), S('NumPy', 'numpy', '013243'),
    S('Gemini API', 'googlegemini', '8E75B2'), S('Generative AI', 'googlegemini', '8E75B2'), S('Multi-Agent Systems', 'googlegemini', '8E75B2'),
  ];
  const track4: Skill[] = [
    S('Power BI', 'powerbi', 'F2C811'), S('DAX', 'powerbi', 'F2C811'), S('Power Query', 'powerbi', 'F2C811'), S('Excel', 'microsoftexcel', '217346'),
    S('Docker', 'docker', '2496ED'), S('GitHub Actions', 'githubactions', '2088FF'), S('Git', 'git', 'F05033'), S('GitHub', 'github', 'FFFFFF'),
    S('Vercel', 'vercel', 'FFFFFF'), S('pytest', 'pytest', '0A9EDC'), S('Jest', 'jest', 'C21325'), S('Postman', 'postman', 'FF6C37'),
  ];

  const names = (t: Skill[]) => t.map((s) => s.name);
  const groups: [string, string[]][] = Object.entries(portfolioData.skills);

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
