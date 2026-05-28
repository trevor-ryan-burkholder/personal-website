// Testimonials — two quote cards + LinkedIn count.
const testimonialStyles = {
  section: { padding: '88px 0 80px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 },
  quote: {
    padding: 32,
    border: '1px solid var(--rule)',
    borderRadius: 6,
    background: 'white',
    display: 'flex', flexDirection: 'column',
  },
  body: {
    fontFamily: 'var(--serif)', fontWeight: 400,
    fontSize: 19, lineHeight: 1.5,
    color: 'var(--ink)',
    margin: '0 0 24px',
  },
  who: { display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' },
  avatar: {
    width: 36, height: 36,
    background: 'var(--paper-2)',
    borderRadius: '50%',
    border: '1px solid var(--rule)',
  },
  name: { fontSize: 14, fontWeight: 500 },
  role: { fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '0.04em' },
  more: {
    margin: '36px 0 0',
    display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
    padding: '18px 0 0',
    borderTop: '1px solid var(--rule)',
  },
  count: { fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--mute)', letterSpacing: '0.06em', textTransform: 'uppercase' },
  countStrong: { color: 'var(--ink)', fontWeight: 600 },
  link: { fontSize: 14, color: 'var(--crimson)', borderBottom: '1px solid var(--crimson)', paddingBottom: 2 },
};

function Quote({ body, name, role }) {
  return (
    <div style={testimonialStyles.quote}>
      <p style={testimonialStyles.body}>{body}</p>
      <div style={testimonialStyles.who}>
        <div style={testimonialStyles.avatar} />
        <div>
          <div style={testimonialStyles.name}>{name}</div>
          <div style={testimonialStyles.role}>{role}</div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="container" style={testimonialStyles.section}>
      <p className="section-eyebrow">What people say</p>
      <h2 className="section-title">25 recommendations on LinkedIn. Two of them:</h2>
      <div style={testimonialStyles.grid}>
        <Quote
          body={'"Trevor is exceptionally talented and uncommonly motivated. He has a great eye for design, cares about doing things right, and is great at communicating complex ideas with all levels of stakeholders. He understands the full stack and is able to define the needs of the UI developers to the backend developers in a way that moves projects along quickly and gets things done right the first time."'}
          name="Rex Petersen"
          role="DIR. APPLICATION ENGINEERING · WESTERRA CREDIT UNION"
        />
        <Quote
          body={'"Trevor approaches complex issues with a clear, analytical mindset, and consistently comes up with effective solutions. His attention to detail is unmatched — an exceptional ability to identify edge cases and address issues that others might overlook. He is an excellent communicator who can easily explain technical concepts to non-technical stakeholders, and was able to take more junior engineers and mentor them to grow their own skillset."'}
          name="Keith O'Connel"
          role="PRACTICE LEAD, DEVOPS & CLOUD · XTIVIA"
        />
      </div>
      <div style={testimonialStyles.more}>
        <div style={testimonialStyles.count}>
          <strong style={testimonialStyles.countStrong}>23</strong> more on LinkedIn
        </div>
        <a
          href="https://www.linkedin.com/in/trevorburkholder/details/recommendations/"
          target="_blank" rel="noopener"
          style={testimonialStyles.link}
        >Read all 25 →</a>
      </div>
    </section>
  );
}

window.Testimonials = Testimonials;
window.Quote = Quote;
