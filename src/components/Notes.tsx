import Title from './Title';

/** Masonry "in my words" notes. Every line is existing portfolio copy, highlighted keywords underlined. */
const hl = (text: string, key: string) => {
  const i = text.indexOf(key);
  if (i < 0) return text;
  return <>{text.slice(0, i)}<mark>{key}</mark>{text.slice(i + key.length)}</>;
};

const notes = {
  big: {
    tag: 'About me',
    quote: "I don't just write code; I design systems.",
    key: 'design systems',
    more: 'Whether it is engineering high-performance APIs in Node.js, styling polished interfaces with React and Tailwind, or analyzing model training pipelines in PyTorch, I approach development with a focus on performance, scalability, and user experience.',
  },
  side: [
    { tag: 'StudyBuddy KKW', quote: 'Built in first year with zero backend experience using AI tools. Now serves 1,500+ students with notes, PYQs, and exam resources across 10+ subjects.', key: 'serves 1,500+ students', rot: -1.1 },
    { tag: 'Open source', quote: 'I believe in giving back to the community and collaborating on codebases that make developer lives easier.', key: 'giving back to the community', rot: 0.9 },
  ],
  trio: [
    { tag: 'National Football Championship', quote: 'The tournament strengthened my ability to work as part of a team, stay focused under pressure, and perform consistently in competitive environments.', key: 'stay focused under pressure', rot: 0.8 },
    { tag: 'CSI KKWIEER', quote: 'Organize major technical events, coding contests, and technology workshops for engineering students.', key: 'coding contests', rot: -0.7 },
    { tag: 'Innov-ERA Hackathon', quote: 'Managed on-ground operations, developer assistance, and participant support for a 24-hour national hackathon.', key: 'participant support', rot: 1 },
  ],
};

type N = { tag: string; quote: string; key: string; rot: number };
const Note = ({ n }: { n: N }) => (
  <figure className="note" data-note data-rot={n.rot} style={{ margin: 0 }}>
    <figcaption className="tag">{n.tag}</figcaption>
    <q>{hl(n.quote, n.key)}</q>
  </figure>
);

export const Notes = () => (
  <section id="words" className="section">
    <div className="wrap">
      <Title text="In my words" kicker="Notes" />
      <div className="dotgrid">
        <div className="notes">
          <figure className="note big" data-note data-rot="0" style={{ margin: 0 }}>
            <figcaption className="tag">{notes.big.tag}</figcaption>
            <q>{hl(notes.big.quote, notes.big.key)}</q>
            <p className="more">{notes.big.more}</p>
          </figure>
          <div style={{ display: 'grid', gap: '1.25rem', alignContent: 'start' }}>
            {notes.side.map((n) => <Note key={n.tag} n={n} />)}
          </div>
          <div className="trio">
            {notes.trio.map((n) => <Note key={n.tag} n={n} />)}
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Notes;
