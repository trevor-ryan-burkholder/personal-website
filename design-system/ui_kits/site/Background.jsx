// Background band — paper-2, between hero and services.
const backgroundStyles = {
  section: {
    padding: '64px 0',
    borderTop: '1px solid var(--rule)',
    borderBottom: '1px solid var(--rule)',
    background: 'var(--paper-2)',
  },
  intro: {
    fontFamily: 'var(--serif)', fontWeight: 400,
    fontSize: 22, lineHeight: 1.5, color: 'var(--ink)',
    maxWidth: '60ch', margin: '0 0 16px',
  },
  nda: { fontSize: 14, color: 'var(--mute)', lineHeight: 1.55, maxWidth: '60ch', margin: 0 },
  em: { color: 'var(--ink-2)', fontStyle: 'italic' },
};

function Background() {
  return (
    <section style={backgroundStyles.section} id="about">
      <div className="container">
        <p className="section-eyebrow">Background</p>
        <p style={backgroundStyles.intro}>
          Fifteen years writing software at consultancies and SaaS
          companies. Senior IC throughout. Going freelance now to
          work on more projects, more directly, with founders and
          product teams who need someone who can ship without supervision.
        </p>
        <p style={backgroundStyles.nda}>
          The engagements below are named with client permission. Other recent
          work is under NDA — happy to walk through particulars on a call.
        </p>
      </div>
    </section>
  );
}

window.Background = Background;
