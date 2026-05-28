import type { CSSProperties } from "react";
import { engagements, type Engagement } from "@/content/engagements";

const styles: Record<string, CSSProperties> = {
  section: { padding: "64px 0 80px", background: "#ffffff" },
  list: { display: "grid", gap: 0, borderTop: "1px solid var(--rule)" },
  num: { fontFamily: "var(--mono)", fontSize: 12, color: "var(--mute)" },
  title: {
    fontFamily: "var(--serif)",
    fontWeight: 500,
    fontSize: 26,
    letterSpacing: "-0.01em",
  },
  sub: {
    fontFamily: "var(--mono)",
    fontSize: 11,
    color: "var(--mute)",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginTop: 6,
  },
  blurb: { fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55 },
  meta: {
    fontFamily: "var(--mono)",
    fontSize: 12,
    color: "var(--mute)",
  },
};

// Row-hover (title → crimson) is handled in globals.css via .work-row:hover,
// so this stays a server component with no client JS.
function WorkRow({ year, title, sub, blurb, stack }: Engagement) {
  return (
    <div className="work-row">
      <div style={styles.num}>{year}</div>
      <div>
        <div className="work-title" style={styles.title}>
          {title}
        </div>
        <div style={styles.sub}>{sub}</div>
      </div>
      <div style={styles.blurb}>{blurb}</div>
      <div className="work-meta" style={styles.meta}>
        {stack}
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" style={styles.section}>
      <div className="container">
        <p className="section-eyebrow">Recent engagements</p>
        <h2 className="section-title">What I&apos;ve been building.</h2>
        <div style={styles.list}>
          {engagements.map((r) => (
            <WorkRow key={r.year} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
