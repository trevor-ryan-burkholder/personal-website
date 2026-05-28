import type { CSSProperties } from "react";
import { services, type Service } from "@/content/services";

const styles: Record<string, CSSProperties> = {
  section: { paddingTop: 88, paddingBottom: 64 },
  pricingNote: {
    fontFamily: "var(--mono)",
    fontSize: 12,
    color: "var(--mute)",
    letterSpacing: "0.04em",
    margin: "-40px 0 56px",
    paddingTop: 16,
    borderTop: "1px solid var(--rule)",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  pricingDash: { width: 24, height: 1, background: "var(--crimson)" },
  num: {
    fontFamily: "var(--mono)",
    fontSize: 12,
    color: "var(--crimson)",
    letterSpacing: "0.08em",
    margin: "0 0 10px",
  },
  title: {
    fontFamily: "var(--serif)",
    fontWeight: 500,
    fontSize: 24,
    letterSpacing: "-0.01em",
    margin: "0 0 10px",
  },
  body: {
    fontSize: 15,
    lineHeight: 1.6,
    color: "var(--ink-2)",
    margin: "0 0 12px",
  },
  meta: { fontFamily: "var(--mono)", fontSize: 12, color: "var(--mute)" },
};

function ServiceBlock({ num, title, body, meta }: Service) {
  return (
    <div>
      <p style={styles.num}>{num}</p>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.body}>{body}</p>
      <p style={styles.meta}>{meta}</p>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="container" style={styles.section}>
      <p className="section-eyebrow">What I do</p>
      <h2 className="section-title">
        Four kinds of project, scoped tight, shipped fast.
      </h2>
      <p style={styles.pricingNote}>
        <span style={styles.pricingDash} />
        PRICING SCOPED AFTER THE INTRO CALL · NO RATE CARD
      </p>
      <div className="services-grid">
        {services.map((s) => (
          <ServiceBlock key={s.num} {...s} />
        ))}
      </div>
    </section>
  );
}
