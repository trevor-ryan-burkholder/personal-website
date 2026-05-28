import { AVAILABILITY, EMAIL } from "./site";

export type Hero = {
  availability: string;
  headlineLead: string;
  headlineAccent: string;
  lede: string;
  primaryCta: string;
  email: string;
  reassurance: string;
};

export const hero: Hero = {
  availability: AVAILABILITY,
  headlineLead: "Senior fullstack engineer.",
  headlineAccent: "Ships the thing.",
  lede:
    "I build production web apps for founders and product teams who need a senior engineer who can scope, ship, and explain the tradeoffs. Ten years in React, plus Next.js. Day-to-day in TypeScript, Node, and Postgres. I work fluidly with Claude and ChatGPT — part of how I ship fast, not a substitute for thinking. Cleveland-based, remote-first.",
  primaryCta: "Book a 15-min intro",
  email: EMAIL,
  reassurance: "Typical response within one business day. Free consult, no pitch.",
};
