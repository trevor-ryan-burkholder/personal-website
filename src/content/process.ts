export type ProcessStep = {
  num: string;
  title: string;
  timing: string;
  body: string;
};

export const steps: ProcessStep[] = [
  {
    num: "01",
    title: "Intro call",
    timing: "15 min · free",
    body: "We figure out if this is the kind of project I can help with. If not, I'll usually know someone who can.",
  },
  {
    num: "02",
    title: "Scoping doc",
    timing: "1–3 days · paid",
    body: "I read your code or spec and write you a plan: timeline, milestones, what's in scope, what isn't, pricing. You decide whether to move forward.",
  },
  {
    num: "03",
    title: "Build",
    timing: "weekly retainer or fixed scope",
    body: "Weekly check-in. Written status note every Friday. Direct access on Slack or whatever your team uses. Code in your repos, not mine.",
  },
  {
    num: "04",
    title: "Handoff",
    timing: "two weeks of post-launch support included",
    body: "Documented handoff, walkthrough call with whoever's taking over, two weeks of free bug-fix support so the team isn't holding the bag the day I leave.",
  },
];
