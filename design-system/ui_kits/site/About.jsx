// About — photo + bio block. Sits between Background and Services in the flow,
// or anywhere a longer-form personal note is wanted. Photo uses --r-lg.
const aboutStyles = {
  section: { padding: '88px 0 64px', background: 'var(--paper)' },
  grid: {
    display: 'grid',
    gridTemplateColumns: '280px 1fr',
    gap: 48,
    alignItems: 'start',
  },
  photoWrap: {
    width: 280,
  },
  photo: {
    width: '100%',
    aspectRatio: '4 / 5',
    objectFit: 'cover',
    objectPosition: 'center 25%',
    borderRadius: 6,
    display: 'block',
  },
  caption: {
    fontFamily: 'var(--mono)',
    fontSize: 11,
    color: 'var(--mute)',
    letterSpacing: '0.04em',
    marginTop: 12,
  },
  body: { display: 'flex', flexDirection: 'column', gap: 18 },
  lede: {
    fontFamily: 'var(--serif)', fontWeight: 400,
    fontSize: 22, lineHeight: 1.5,
    color: 'var(--ink)',
    margin: 0,
    maxWidth: '52ch',
  },
  p: { fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: '52ch' },
};

function About() {
  return (
    <section className="container" style={aboutStyles.section}>
      <p className="section-eyebrow">About</p>
      <h2 className="section-title" style={{ marginBottom: 40 }}>
        The person you'd be working with.
      </h2>
      <div style={aboutStyles.grid}>
        <div style={aboutStyles.photoWrap}>
          <img src="../../assets/headshot.jpg" alt="Trevor Burkholder" style={aboutStyles.photo} />
          <p style={aboutStyles.caption}>Cleveland, OH · 2025</p>
        </div>
        <div style={aboutStyles.body}>
          <p style={aboutStyles.lede}>
            I'm Trevor. I've spent the last fifteen years writing software —
            mostly senior IC at consultancies and SaaS companies — and I'm
            freelancing now to work on more projects, more directly.
          </p>
          <p style={aboutStyles.p}>
            React and TypeScript every day. I've been doing it long enough to
            remember when class components were the right answer; long enough
            to know when they aren't. Day-to-day in Node and Postgres on the
            backend. I work fluidly with Claude and ChatGPT — part of how I
            ship fast, not a substitute for thinking.
          </p>
          <p style={aboutStyles.p}>
            [ Optional personal line: where you grew up, what you do outside
            work, a hobby that hints at the kind of person you are.
            One sentence is enough. ]
          </p>
        </div>
      </div>
    </section>
  );
}

window.About = About;
