// Closing CTA band — full-bleed crimson.
const ctaStyles = {
  section: {
    padding: '80px 0',
    background: 'var(--crimson)',
    color: 'var(--paper)',
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'var(--serif)', fontWeight: 500,
    fontSize: 44, letterSpacing: '-0.02em',
    margin: '0 0 16px', lineHeight: 1.1,
  },
  p: {
    fontSize: 16, lineHeight: 1.55,
    color: 'rgba(251,248,244, 0.85)',
    margin: '0 0 32px',
  },
};

function CtaBand() {
  return (
    <section id="book" style={ctaStyles.section}>
      <div className="container">
        <h2 style={ctaStyles.h2}>Want to talk about your project?</h2>
        <p style={ctaStyles.p}>15 minutes. No pitch. Either I'm a fit or I can recommend someone who is.</p>
        <a className="btn-inverse" href="#" onClick={(e) => { e.preventDefault(); alert('(demo) opens Calendly'); }}>
          Book a call on Calendly
          <span className="cal">→</span>
        </a>
      </div>
    </section>
  );
}

window.CtaBand = CtaBand;
