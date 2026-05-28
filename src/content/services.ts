export type Service = {
  num: string;
  title: string;
  body: string;
  meta: string;
};

export const services: Service[] = [
  {
    num: "01 — BUILD",
    title: "Product MVPs from zero",
    body: "You have a spec or a sketch. You want a working product in 6–10 weeks, not a quote for a 6-month engagement. I scope it, build it, and hand it off documented.",
    meta: "Typical: 6–10 weeks · fixed scope or weekly retainer",
  },
  {
    num: "02 — RESCUE",
    title: "Stalled builds, unblocked",
    body: "A previous developer left, a contractor disappeared, or the codebase has slowed to a crawl. I come in, read what's there, tell you the truth, and pick up the work.",
    meta: "Typical: 2–6 weeks · weekly retainer",
  },
  {
    num: "03 — MODERNIZE",
    title: "React codebases brought current",
    body: "Plenty of React apps shipped in 2018–2021 are stuck on class components, prop-drilling, or Pages Router. I plan and run the upgrade — to current React, App Router, TypeScript, server components — staged so the roadmap doesn't freeze.",
    meta: "Typical: 2–4 months · staged migration",
  },
  {
    num: "04 — ADVISE",
    title: "Fractional senior engineer",
    body: "You don't need a full-time hire yet but the team needs someone who's shipped this kind of thing before. Code review, technical direction, and hands-on work when it matters.",
    meta: "Typical: ongoing · 1–2 days/week",
  },
];
