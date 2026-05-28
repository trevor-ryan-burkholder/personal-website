import type { CSSProperties } from "react";
import { steps, type ProcessStep } from "@/content/process";

const styles: Record<string, CSSProperties> = {
  section: { padding: "88px 0 80px", background: "#ffffff" },
  list: { display: "grid", gap: 28, maxWidth: 720 },
  step: {
    display: "grid",
    gridTemplateColumns: "56px 1fr",
    gap: 24,
    alignItems: "baseline",
    padding: "24px 0",
    borderTop: "1px solid var(--rule)",
  },
  stepLast: { borderBottom: "1px solid var(--rule)" },
  num: {
    fontFamily: "var(--mono)",
    fontSize: 14,
    color: "var(--crimson)",
    letterSpacing: "0.04em",
  },
  title: {
    fontFamily: "var(--serif)",
    fontWeight: 500,
    fontSize: 22,
    letterSpacing: "-0.01em",
    margin: "0 0 6px",
  },
  timing: {
    fontFamily: "var(--mono)",
    fontSize: 12,
    color: "var(--mute)",
    fontWeight: 400,
    letterSpacing: "0.04em",
    marginLeft: 12,
  },
  body: {
    fontSize: 15,
    lineHeight: 1.6,
    color: "var(--ink-2)",
    margin: 0,
    maxWidth: "56ch",
  },
};

function Step({ num, title, timing, body, isLast }: ProcessStep & { isLast: boolean }) {
  return (
    <div style={{ ...styles.step, ...(isLast ? styles.stepLast : {}) }}>
      <div style={styles.num}>{num}</div>
      <div>
        <h3 style={styles.title}>
          {title}
          <span style={styles.timing}>{timing}</span>
        </h3>
        <p style={styles.body}>{body}</p>
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section style={styles.section}>
      <div className="container">
        <p className="section-eyebrow">How an engagement works</p>
        <h2 className="section-title">Four steps. No surprises.</h2>
        <div style={styles.list}>
          {steps.map((s, i) => (
            <Step key={s.num} {...s} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
