import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  section: {
    padding: "64px 0",
    borderTop: "1px solid var(--rule)",
    borderBottom: "1px solid var(--rule)",
    background: "var(--paper-2)",
  },
  intro: {
    fontFamily: "var(--serif)",
    fontWeight: 400,
    fontSize: 22,
    lineHeight: 1.5,
    color: "var(--ink)",
    maxWidth: "60ch",
    margin: "0 0 16px",
  },
  nda: {
    fontSize: 14,
    color: "var(--mute)",
    lineHeight: 1.55,
    maxWidth: "60ch",
    margin: 0,
  },
};

export function Background() {
  return (
    <section style={styles.section} id="about">
      <div className="container">
        <p className="section-eyebrow">Background</p>
        <p style={styles.intro}>
          Fifteen years writing software at consultancies and SaaS companies.
          Senior IC throughout. Going freelance now to work on more projects,
          more directly, with founders and product teams who need someone who
          can ship without supervision.
        </p>
        <p style={styles.nda}>
          Almost all of my recent work is under NDA. The engagements below are
          anonymized but specific. Happy to walk through particulars on a call.
        </p>
      </div>
    </section>
  );
}
