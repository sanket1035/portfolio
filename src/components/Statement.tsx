import { Split } from '../lib/motion';

const go = (hash: string) => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });

const COLS = [
  {
    h: 'Build',
    p: 'Full-stack products with React, Node.js and FastAPI, designed for performance, scalability and a clean user experience.',
    tags: ['React', 'Node.js', 'FastAPI', 'Tailwind CSS'],
    link: ['See my projects', '#projects'],
  },
  {
    h: 'Learn',
    p: 'Machine learning in Python and PyTorch: model training pipelines, LLM integrations and practical AI applications.',
    tags: ['PyTorch', 'Scikit-learn', 'LLMs', 'Pandas'],
    link: ['See my skills', '#skills'],
  },
  {
    h: 'Contribute',
    p: 'Active open-source contributor, collaborating on codebases that make developers’ lives easier.',
    tags: ['ELUSOC 2026', 'ECSOC 2026', 'Open Source Connect'],
    link: ['See dev activity', '#opensource'],
  },
] as const;

/** Second scene: a huge statement that lights up word by word, then three short columns. */
export const Statement = () => (
  <section className="statement-scene" aria-label="What I do">
    <div className="wrap">
      <Split
        as="p" split="lit" className="big-statement"
        text="Code is how I think. I build full-stack products, train practical machine learning models, and ship them in the open, so everyone sees the problem through the same lens."
      />
      <div className="triple" data-rows>
        {COLS.map((c) => (
          <article key={c.h} className="triple-col" data-row>
            <h3>{c.h}</h3>
            <p className="muted">{c.p}</p>
            <ul className="tagpills">{c.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            <button type="button" className="ulink" onClick={() => go(c.link[1])}>{c.link[0]} ↗</button>
          </article>
        ))}
      </div>
    </div>
  </section>
);
export default Statement;
