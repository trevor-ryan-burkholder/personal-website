// Services — four numbered service blocks.
const serviceStyles = {
  section: { padding: '88px 0 64px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 48px' },
  pricingNote: {
    fontFamily: 'var(--mono)', fontSize: 12,
    color: 'var(--mute)', letterSpacing: '0.04em',
    margin: '-40px 0 56px',
    paddingTop: 16,
    borderTop: '1px solid var(--rule)',
    display: 'flex', alignItems: 'center', gap: 10,
  },
  pricingDash: { width: 24, height: 1, background: 'var(--crimson)' },
  num: { fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--crimson)', letterSpacing: '0.08em', margin: '0 0 10px' },
  title: { fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 24, letterSpacing: '-0.01em', margin: '0 0 10px' },
  body: { fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', margin: '0 0 12px' },
  meta: { fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--mute)' },
};

const SERVICES = [
  {
    num: '01 — BUILD',
    title: 'Product MVPs from zero',
    body: "You have a spec or a sketch. You want a working product in 6–10 weeks, not a quote for a 6-month engagement. I scope it, build it, and hand it off documented.",
    meta: 'Typical: 6–10 weeks · fixed scope or weekly retainer',
  },
  {
    num: '02 — RESCUE',
    title: 'Stalled builds, unblocked',
    body: "A previous developer left, a contractor disappeared, or the codebase has slowed to a crawl. I come in, read what's there, tell you the truth, and pick up the work.",
    meta: 'Typical: 2–6 weeks · weekly retainer',
  },
  {
    num: '03 — MODERNIZE',
    title: 'React codebases brought current',
    body: "Plenty of React apps shipped in 2018–2021 are stuck on class components, prop-drilling, or Pages Router. I plan and run the upgrade — to current React, App Router, TypeScript, server components — staged so the roadmap doesn't freeze.",
    meta: 'Typical: 2–4 months · staged migration',
  },
  {
    num: '04 — ADVISE',
    title: 'Fractional senior engineer',
    body: "You don't need a full-time hire yet but the team needs someone who's shipped this kind of thing before. Code review, technical direction, and hands-on work when it matters.",
    meta: 'Typical: ongoing · 1–2 days/week',
  },
];

function ServiceBlock({ num, title, body, meta }) {
  return (
    <div>
      <p style={serviceStyles.num}>{num}</p>
      <h3 style={serviceStyles.title}>{title}</h3>
      <p style={serviceStyles.body}>{body}</p>
      <p style={serviceStyles.meta}>{meta}</p>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="container" style={serviceStyles.section}>
      <p className="section-eyebrow">What I do</p>
      <h2 className="section-title">Four kinds of project, scoped tight, shipped fast.</h2>
      <p style={serviceStyles.pricingNote}>
        <span style={serviceStyles.pricingDash}></span>
        PRICING SCOPED AFTER THE INTRO CALL · NO RATE CARD
      </p>
      <div style={serviceStyles.grid}>
        {SERVICES.map((s) => <ServiceBlock key={s.num} {...s} />)}
      </div>
    </section>
  );
}

window.Services = Services;
window.ServiceBlock = ServiceBlock;
