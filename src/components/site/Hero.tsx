import type { CSSProperties } from "react";
import { hero } from "@/content/hero";

const styles: Record<string, CSSProperties> = {
  section: { paddingTop: 80, paddingBottom: 72 },
  pill: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "var(--mono)",
    fontSize: 12,
    color: "var(--green)",
    padding: "6px 12px",
    background: "var(--green-soft)",
    borderRadius: 100,
    margin: "0 0 28px",
  },
  dot: { width: 6, height: 6, background: "var(--green)", borderRadius: "50%" },
  h1: {
    fontFamily: "var(--serif)",
    fontWeight: 500,
    fontSize: "clamp(34px, 6.5vw, 60px)",
    lineHeight: 1.05,
    letterSpacing: "-0.025em",
    margin: "0 0 24px",
    maxWidth: "18ch",
  },
  accent: { color: "var(--crimson)", fontStyle: "italic" },
  lede: {
    fontSize: 19,
    lineHeight: 1.55,
    color: "var(--ink-2)",
    maxWidth: "58ch",
    margin: "0 0 36px",
  },
  ctaRow: { display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" },
  reassure: { margin: "20px 0 0", fontSize: 13, color: "var(--mute)" },
};

export function Hero() {
  return (
    <section id="top" className="container" style={styles.section}>
      <div style={styles.pill}>
        <div style={styles.dot} />
        {hero.availability}
      </div>
      <h1 style={styles.h1}>
        {hero.headlineLead}{" "}
        <span style={styles.accent}>{hero.headlineAccent}</span>
      </h1>
      <p style={styles.lede}>{hero.lede}</p>
      <div style={styles.ctaRow}>
        <a className="btn-primary" href="#book">
          {hero.primaryCta}
          <span className="cal">CALENDLY</span>
        </a>
        <a className="btn-secondary" href={`mailto:${hero.email}`}>
          {hero.email} →
        </a>
      </div>
      <p style={styles.reassure}>{hero.reassurance}</p>
    </section>
  );
}
