/** Mega section opener, ends with the accent dot. Split-text mask reveal is wired in lib/motion. */
export default function Title({ text, kicker }: { text: string; kicker?: string }) {
  return (
    <div style={{ marginBottom: 'clamp(3rem, 8vh, 6rem)' }}>
      {kicker && <p className="mono-label muted" style={{ marginBottom: '1.5rem' }}>{kicker}</p>}
      <h2 className="mega" data-split aria-label={text}>
        {text.split(' ').map((w, i) => (
          <span className="mask" key={i} aria-hidden="true"><span className="w">{w}</span></span>
        ))}
        <span className="dot" aria-hidden="true">.</span>
      </h2>
    </div>
  );
}
