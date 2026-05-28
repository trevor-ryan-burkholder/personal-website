import type { CSSProperties } from "react";
import { Logo } from "./Logo";

const styles: Record<string, CSSProperties> = {
  wrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 20,
    borderBottom: "1px solid var(--rule)",
  },
  brand: { display: "flex", alignItems: "center", gap: 12 },
  word: {
    fontFamily: "var(--serif)",
    fontWeight: 500,
    fontSize: 17,
    letterSpacing: "-0.01em",
  },
  links: { display: "flex", alignItems: "center", gap: 28 },
  link: { fontSize: 14, color: "var(--ink-2)" },
};

export function Nav() {
  return (
    <nav className="container" style={styles.wrap}>
      <a href="#top" style={styles.brand}>
        <Logo size={36} variant="badge" priority />
        <span style={styles.word}>Trevor Burkholder</span>
      </a>
      <div style={styles.links}>
        <div className="nav-sections">
          <a href="#services" className="nav-link" style={styles.link}>
            Services
          </a>
          <a href="#work" className="nav-link" style={styles.link}>
            Work
          </a>
          <a href="#about" className="nav-link" style={styles.link}>
            About
          </a>
        </div>
        <a href="#book" className="btn-primary btn-primary--sm">
          Book a call
        </a>
      </div>
    </nav>
  );
}
