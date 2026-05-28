import type { CSSProperties } from "react";
import { EMAIL, LINKEDIN_URL, GITHUB_URL, UPWORK_URL } from "@/content/site";

const styles: Record<string, CSSProperties> = {
  section: {
    padding: "40px 0",
    background: "var(--paper)",
    borderTop: "1px solid var(--rule)",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    flexWrap: "wrap",
    gap: 16,
  },
  left: { fontSize: 13, color: "var(--mute)" },
  links: { display: "flex", gap: 24, fontSize: 13 },
  link: { color: "var(--ink-2)", transition: "color var(--t-fast)" },
};

export function Footer() {
  return (
    <footer style={styles.section}>
      <div className="container" style={styles.row}>
        <div style={styles.left}>© 2026 Trevor Burkholder · Cleveland, OH</div>
        <div style={styles.links}>
          <a href={`mailto:${EMAIL}`} style={styles.link}>
            {EMAIL}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            GitHub
          </a>
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Upwork
          </a>
        </div>
      </div>
    </footer>
  );
}
