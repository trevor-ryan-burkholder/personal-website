// Process — four numbered steps with timing chips.
const processStyles = {
  section: { padding: '88px 0 80px', background: 'white' },
  list: { display: 'grid', gap: 28, maxWidth: 720 },
  step: {
    display: 'grid',
    gridTemplateColumns: '56px 1fr',
    gap: 24,
    alignItems: 'baseline',
    padding: '24px 0',
    borderTop: '1px solid var(--rule)',
  },
  stepLast: { borderBottom: '1px solid var(--rule)' },
  num: { fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--crimson)', letterSpacing: '0.04em' },
  title: {
    fontFamily: 'var(--serif)', fontWeight: 500,
    fontSize: 22, letterSpacing: '-0.01em',
    margin: '0 0 6px',
  },
  timing: {
    fontFamily: 'var(--mono)', fontSize: 12,
    color: 'var(--mute)', fontWeight: 400,
    letterSpacing: '0.04em', marginLeft: 12,
  },
  body: { fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0, maxWidth: '56ch' },
};

const STEPS = [
  {
    num: '01',
    title: 'Intro call',
    timing: '15 min · free',
    body: "We figure out if this is the kind of project I can help with. If not, I'll usually know someone who can.",
  },
  {
    num: '02',
    title: 'Scoping doc',
    timing: '1–3 days · paid',
    body: "I read your code or spec and write you a plan: timeline, milestones, what's in scope, what isn't, pricing. You decide whether to move forward.",
  },
  {
    num: '03',
    title: 'Build',
    timing: 'weekly retainer or fixed scope',
    body: "Weekly check-in. Written status note every Friday. Direct access on Slack or whatever your team uses. Code in your repos, not mine.",
  },
  {
    num: '04',
    title: 'Handoff',
    timing: 'two weeks of post-launch support included',
    body: "Documented handoff, walkthrough call with whoever's taking over, two weeks of free bug-fix support so the team isn't holding the bag the day I leave.",
  },
];

function Step({ num, title, timing, body, isLast }) {
  return (
    <div style={{ ...processStyles.step, ...(isLast ? processStyles.stepLast : null) }}>
      <div style={processStyles.num}>{num}</div>
      <div>
        <h3 style={processStyles.title}>
          {title}<span style={processStyles.timing}>{timing}</span>
        </h3>
        <p style={processStyles.body}>{body}</p>
      </div>
    </div>
  );
}

function Process() {
  return (
    <section style={processStyles.section}>
      <div className="container">
        <p className="section-eyebrow">How an engagement works</p>
        <h2 className="section-title">Four steps. No surprises.</h2>
        <div style={processStyles.list}>
          {STEPS.map((s, i) => <Step key={s.num} {...s} isLast={i === STEPS.length - 1} />)}
        </div>
      </div>
    </section>
  );
}

window.Process = Process;
window.Step = Step;
