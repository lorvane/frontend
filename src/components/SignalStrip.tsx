function SignalStrip() { return <section className="signal-strip"><div className="signal-track">{['Research', 'Knowledge', 'Evidence', 'Discovery', 'Retrieval', 'Research', 'Knowledge'].map((x, i) => <span key={`${x}-${i}`}>{i > 0 && <b>+</b>}{x}</span>)}</div></section>; }
export { SignalStrip };
