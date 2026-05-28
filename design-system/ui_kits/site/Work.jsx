// Work — three anonymized engagement rows.
const workStyles = {
  section: { padding: '64px 0 80px', background: 'white' },
  list: { display: 'grid', gap: 0, borderTop: '1px solid var(--rule)' },
  row: {
    display: 'grid',
    gridTemplateColumns: '60px 1fr 1.4fr auto',
    gap: 32,
    alignItems: 'baseline',
    padding: '32px 0',
    borderBottom: '1px solid var(--rule)',
    cursor: 'pointer',
  },
  num: { fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--mute)' },
  title: {
    fontFamily: 'var(--serif)', fontWeight: 500,
    fontSize: 26, letterSpacing: '-0.01em',
    transition: 'color var(--t-fast)',
  },
  sub: {
    fontFamily: 'var(--mono)', fontSize: 11,
    color: 'var(--mute)', letterSpacing: '0.06em',
    textTransform: 'uppercase',
    marginTop: 6,
  },
  blurb: { fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 },
  meta: { fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--mute)', textAlign: 'right' },
};

const ROWS = [
  {
    year: '2024',
    title: 'Quadax',
    sub: 'Eligibility Management Suite',
    blurb: 'Designed and built the internal eligibility verification and management suite used by billing and operations teams at a healthcare revenue cycle company — complex multi-step workflows, insurance verification API integration, and audit logging throughout.',
    stack: 'React · TS',
  },
  {
    year: '2023',
    title: 'Usmon',
    sub: 'Patient Tracking',
    blurb: 'Built a patient tracking system with server-side rendering for performance, role-based access for compliance, and real-time status updates across care team workflows. Built to HIPAA-adjacent standards.',
    stack: 'Next.js · TS',
  },
  {
    year: '2022',
    title: 'West Bend Mutual',
    sub: 'Claims Management',
    blurb: "Designed and built a cross-platform claims management application for a mid-size insurance carrier — web and mobile from a shared codebase, handling the full claims lifecycle from intake through resolution. Production deployment serving internal adjusters and field agents.",
    stack: 'React · React Native',
  },
];

function WorkRow({ year, title, sub, blurb, stack }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={workStyles.row}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={workStyles.num}>{year}</div>
      <div>
        <div style={{ ...workStyles.title, color: hover ? 'var(--crimson)' : 'var(--ink)' }}>{title}</div>
        <div style={workStyles.sub}>{sub}</div>
      </div>
      <div style={workStyles.blurb}>{blurb}</div>
      <div style={workStyles.meta}>{stack}</div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" style={workStyles.section}>
      <div className="container">
        <p className="section-eyebrow">Recent engagements</p>
        <h2 className="section-title">What I've been building.</h2>
        <div style={workStyles.list}>
          {ROWS.map((r) => <WorkRow key={r.year} {...r} />)}
        </div>
      </div>
    </section>
  );
}

window.Work = Work;
window.WorkRow = WorkRow;
