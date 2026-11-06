/** Mega section opener, ends with the accent dot. Split-text mask reveal is wired in lib/motion. */
export default function Title({ text, kicker, stack = false }: { text: string; kicker?: string; stack?: boolean }) {
  return (
    <div style={{ marginBottom: 'clamp(3rem, 8vh, 6rem)' }}>
      {kicker && <p className="mono-label muted" style={{ marginBottom: '1.5rem' }}>{kicker}</p>}
      <h2 className="mega" data-split aria-label={text}>
        {text.split(' ').map((w, i) => (
          <span className="mask" key={i} aria-hidden="true" style={stack ? { display: 'block', marginRight: 0 } : undefined}><span className="w">{w}</span></span>
        ))}
        {!stack && <span className="dot" aria-hidden="true">.</span>}
      </h2>
    </div>
  );
}
