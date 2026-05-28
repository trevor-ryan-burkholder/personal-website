// Hero — availability pill, serif h1 with italic crimson accent, lede, CTAs.
const heroStyles = {
  section: { padding: '80px 0 72px' },
  pill: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontFamily: 'var(--mono)', fontSize: 12,
    color: 'var(--green)',
    padding: '6px 12px',
    background: 'rgba(47, 110, 78, 0.08)',
    borderRadius: 100,
    margin: '0 0 28px',
  },
  dot: { width: 6, height: 6, background: 'var(--green)', borderRadius: '50%' },
  h1: {
    fontFamily: 'var(--serif)', fontWeight: 500,
    fontSize: 60, lineHeight: 1.05, letterSpacing: '-0.025em',
    margin: '0 0 24px',
    maxWidth: '18ch',
  },
  accent: { color: 'var(--crimson)', fontStyle: 'italic' },
  lede: {
    fontSize: 19, lineHeight: 1.55,
    color: 'var(--ink-2)', maxWidth: '58ch',
    margin: '0 0 36px',
  },
  ctaRow: { display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' },
  reassure: { margin: '20px 0 0', fontSize: 13, color: 'var(--mute)' },
};

function Hero() {
  return (
    <section id="top" className="container" style={heroStyles.section}>
      <div style={heroStyles.pill}>
        <div style={heroStyles.dot} />
        Available for new projects · June 2026
      </div>
      <h1 style={heroStyles.h1}>
        Senior fullstack engineer.{' '}
        <span style={heroStyles.accent}>Ships the thing.</span>
      </h1>
      <p style={heroStyles.lede}>
        I build production web apps for founders and product teams who need
        a senior engineer who can scope, ship, and explain the tradeoffs.
        Ten years in React, plus Next.js. Day-to-day in TypeScript, Node,
        and Postgres. I work fluidly with Claude and ChatGPT — part of how
        I ship fast, not a substitute for thinking. Cleveland-based,
        remote-first.
      </p>
      <div style={heroStyles.ctaRow}>
        <a className="btn-primary" href="#book">
          Book a 15-min intro
          <span className="cal">CALENDLY</span>
        </a>
        <a className="btn-secondary" href="mailto:tburk83@gmail.com">tburk83@gmail.com →</a>
      </div>
      <p style={heroStyles.reassure}>Typical response within one business day. Free consult, no pitch.</p>
    </section>
  );
}

window.Hero = Hero;
