import Title from './Title';
import { Split } from '../lib/motion';
import { portfolioData as d } from '../data/portfolioData';

const stats = [
  { v: 10, s: '+', l: 'Projects Built' },
  { v: 650, s: '+', l: 'Git Commits' },
  { v: 225, s: '+', l: 'Pull Requests' },
  { v: 8.5, s: '', l: 'CGPA', dec: 1 },
];

const spec: [string, React.ReactNode][] = [
  ['Education', <>{d.education[0].degree} in Artificial Intelligence & Data Science<br /><span className="muted">{d.education[0].institution}</span></>],
  ['CGPA', '8.5 / 10'],
  ['Featured Projects', d.projects.slice(0, 4).map((p) => p.title).join(' · ')],
  ['Open Source', "Connect Global '26 · ELUSoC Summer of Code '26 · ECSoC"],
  ['Languages', 'TypeScript · JavaScript · Python · C++'],
  ['Location', d.location],
];

const focus = [
  'Full-Stack Web Development (MERN, FastAPI)',
  'AI Applications & LLM Integration',
  'Mobile Applications (Android/Compose)',
  'Open Source Software Contributions',
];

export const About = () => (
  <section id="about" className="section" style={{ borderRadius: '28px 28px 0 0' }}>
    <div className="wrap">
      <Title text="About Me" />
      <Split
        as="p" split="lit" className="statement"
        text="I am an undergraduate student in Artificial Intelligence & Data Science at K. K. Wagh Institute of Engineering Education & Research (KKWIEER). My passion lies at the intersection of building robust full-stack software and deploying practical, intelligent machine learning {chip} solutions."
      />
      <div style={{ display: 'grid', gap: '1.25rem', maxWidth: '46rem', marginTop: '4rem' }} className="muted">
        <p>I don't just write code; I design systems. Whether it is engineering high-performance APIs in Node.js, styling polished interfaces with React and Tailwind, or analyzing model training pipelines in PyTorch, I approach development with a focus on performance, scalability, and user experience.</p>
        <p>In addition to my coursework and projects, I'm an active open-source contributor. I believe in giving back to the community and collaborating on codebases that make developer lives easier.</p>
      </div>

      <dl style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem 5rem', margin: '6rem 0' }}>
        {stats.map((s) => (
          <div key={s.l}>
            <dt className="tnum" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1 }}>
              <span data-count={s.v} data-suffix={s.s} data-decimals={s.dec}>{s.v}{s.s}</span>
            </dt>
            <dd className="mono-label muted" style={{ margin: '.6rem 0 0' }}>{s.l}</dd>
          </div>
        ))}
      </dl>

      <dl className="box" data-rows style={{ margin: '0 auto', maxWidth: '58rem', padding: '.25rem clamp(1.1rem, 2.4vw, 2rem)' }}>
        {spec.map(([k, v]) => (
          <div className="row kv" data-row key={k}>
            <dt className="mono-label muted">{k}</dt>
            <dd style={{ margin: 0, fontWeight: 600 }}>{v}</dd>
          </div>
        ))}
        {d.education.map((e) => (
          <div className="row kv" data-row key={e.institution}>
            <dt className="mono-label muted">Duration</dt>
            <dd style={{ margin: 0 }}>{e.degree} — {e.specialization}, {e.duration} <span className="muted">(GPA: {e.gpa})</span></dd>
          </div>
        ))}
        <div className="row kv" data-row>
          <dt className="mono-label muted">Focus Areas</dt>
          <dd style={{ margin: 0 }}><ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '.5rem' }}>
            {focus.map((f) => <li key={f}><span className="dot">/</span> {f}</li>)}
          </ul></dd>
        </div>
      </dl>

      <button
        type="button" className="mac-term" aria-label="Launch Terminal CLI"
        onClick={() => window.dispatchEvent(new CustomEvent('toggle-terminal'))}
      >
        <span className="mac-bar" aria-hidden="true">
          <i style={{ background: '#ff5f57' }} /><i style={{ background: '#febc2e' }} /><i style={{ background: '#28c840' }} />
          <span className="mac-title">Sanket's Bash Terminal · v1.0.0</span>
        </span>
        <span className="mac-body">
          <span style={{ color: '#28c840', fontWeight: 700 }}>&gt; Welcome to the interactive portfolio CLI shell!</span>
          <span className="mac-dim">You can trigger this terminal session at any time by pressing the ESC button.</span>
          <span className="mac-prompt">visitor@sanket:~$ <b className="mac-caret" /></span>
          <span className="mac-launch">Launch Terminal CLI ↗</span>
        </span>
      </button>
    </div>
  </section>
);
export default About;
