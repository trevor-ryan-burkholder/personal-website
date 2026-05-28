import type { CSSProperties } from "react";
import { CALENDLY_URL } from "@/content/site";

const styles: Record<string, CSSProperties> = {
  section: {
    padding: "80px 0",
    background: "var(--crimson)",
    color: "var(--paper)",
    textAlign: "center",
  },
  h2: {
    fontFamily: "var(--serif)",
    fontWeight: 500,
    fontSize: "clamp(30px, 6vw, 44px)",
    letterSpacing: "-0.02em",
    margin: "0 0 16px",
    lineHeight: 1.1,
  },
  p: {
    fontSize: 16,
    lineHeight: 1.55,
    color: "rgba(251, 248, 244, 0.85)",
    margin: "0 0 32px",
  },
};

export function CtaBand() {
  return (
    <section id="book" style={styles.section}>
      <div className="container">
        <h2 style={styles.h2}>Want to talk about your project?</h2>
        <p style={styles.p}>
          15 minutes. No pitch. Either I&apos;m a fit or I can recommend someone
          who is.
        </p>
        <a
          className="btn-inverse"
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a call on Calendly
          <span className="cal">→</span>
        </a>
      </div>
    </section>
  );
}
