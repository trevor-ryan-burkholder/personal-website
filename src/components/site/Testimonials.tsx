import type { CSSProperties } from "react";
import {
  testimonials,
  type Testimonial,
  RECOMMENDATIONS_TOTAL,
  RECOMMENDATIONS_MORE,
  recommendationsUrl,
} from "@/content/testimonials";

const styles: Record<string, CSSProperties> = {
  section: { paddingTop: 88, paddingBottom: 80 },
  quote: {
    padding: 32,
    border: "1px solid var(--rule)",
    borderRadius: 6,
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
  },
  body: {
    fontFamily: "var(--serif)",
    fontWeight: 400,
    fontSize: 19,
    lineHeight: 1.5,
    color: "var(--ink)",
    margin: "0 0 24px",
  },
  who: { display: "flex", alignItems: "center", gap: 12, marginTop: "auto" },
  avatar: {
    width: 36,
    height: 36,
    background: "var(--paper-2)",
    borderRadius: "50%",
    border: "1px solid var(--rule)",
  },
  name: { fontSize: 14, fontWeight: 500 },
  role: {
    fontFamily: "var(--mono)",
    fontSize: 11,
    color: "var(--mute)",
    letterSpacing: "0.04em",
  },
  more: {
    margin: "36px 0 0",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    padding: "18px 0 0",
    borderTop: "1px solid var(--rule)",
  },
  count: {
    fontFamily: "var(--mono)",
    fontSize: 12,
    color: "var(--mute)",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
  countStrong: { color: "var(--ink)", fontWeight: 600 },
  link: {
    fontSize: 14,
    color: "var(--crimson)",
    borderBottom: "1px solid var(--crimson)",
    paddingBottom: 2,
  },
};

function Quote({ body, name, role }: Testimonial) {
  return (
    <div style={styles.quote}>
      <p style={styles.body}>{body}</p>
      <div style={styles.who}>
        <div style={styles.avatar} />
        <div>
          <div style={styles.name}>{name}</div>
          <div style={styles.role}>{role}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="container" style={styles.section}>
      <p className="section-eyebrow">What people say</p>
      <h2 className="section-title">
        {RECOMMENDATIONS_TOTAL} recommendations on LinkedIn. Two of them:
      </h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <Quote key={t.name} {...t} />
        ))}
      </div>
      <div style={styles.more}>
        <div style={styles.count}>
          <strong style={styles.countStrong}>{RECOMMENDATIONS_MORE}</strong>{" "}
          more on LinkedIn
        </div>
        <a
          href={recommendationsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Read all {RECOMMENDATIONS_TOTAL} →
        </a>
      </div>
    </section>
  );
}
