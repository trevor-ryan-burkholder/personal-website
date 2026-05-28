# Claims register

The canonical facts Trevor asserts about himself professionally.
Everything on the site, on LinkedIn, in an Upwork profile, on a resume,
or in a proposal should match this file. When facts change, change them
here first; everything else follows.

If a claim feels squishy, sharpen it here before letting it appear
anywhere else.

---

## Core identity

- **Name:** Trevor Burkholder
- **Role:** Senior fullstack engineer, freelance
- **Location:** Cleveland, Ohio
- **Open to:** Remote work primarily; hybrid in Cleveland case by case
- **Email:** tburk83@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/trevorburkholder/

## Experience claims

These appear without qualification.

- **Total professional experience:** 15 years writing software
- **All at consultancies and SaaS companies** (W-2 employment). No
  prior freelance client history under his own name; going freelance
  now.
- **React:** 10 years. Day-to-day current.
- **Next.js:** in use; depth less than React but enough to ship on it.
  Don't claim "expert"; claim "work with it."
- **TypeScript:** in active use across all current work.
- **Node.js:** in active use.
- **PostgreSQL:** in active use.

## AI workflow claims

- Works fluidly with Claude and ChatGPT as part of the daily workflow.
- Claude Code in active use on real projects.
- Frame: "part of how I ship fast, not a substitute for thinking."
  Avoid "AI-powered" / "AI-augmented" as adjectives on the site itself.

## Recommendations / social proof

- **25 LinkedIn recommendations.** Featured on the site:
  - Rex Petersen, Director of Application Engineering at Westerra
    Credit Union
  - Keith O'Connel, Practice Lead, DevOps & Cloud at Xtivia
  - The other 23 are reachable via the LinkedIn recommendations URL.

## Recent engagement claims

All recent work is under NDA. The site displays three anonymized rows;
their canonical descriptions live in `src/content/engagements.ts` once
the Next.js project is scaffolded. Drafts of the descriptions live in
`design-system/ui_kits/site/Work.jsx` as the source of truth until then
— currently bracketed placeholders, to be filled in by Trevor.

Each engagement row carries: year, anonymized company descriptor,
one-sentence project description, stack.

## Skill claims

Listed so resume, LinkedIn, Upwork, and site stay aligned.

**Daily / fluent:**
- TypeScript
- React (modern, App Router and Vite)
- Node.js
- PostgreSQL
- Tailwind CSS

**Working knowledge:**
- Next.js (App Router)
- GraphQL
- Stripe
- Supabase
- Various AI dev tools (Claude Code, ChatGPT, Cursor)

**Familiar:**
- [Fill in honestly — Docker, AWS, CI/CD, testing frameworks, etc.]

**Explicitly NOT claimed:**
- AngularJS / Angular 1.x (was on a prior version of this register; not
  Trevor's stack — removed)
- Mobile native (iOS / Android Kotlin / Swift)

## Services / engagement types

Documented in `design-system/ui_kits/site/Services.jsx`. Four buckets:

1. **Build** — product MVPs from zero. 6–10 weeks typical.
2. **Rescue** — stalled or underperforming builds. 2–6 weeks typical.
3. **Modernize** — React codebases brought current (React 16/17 →
   current, Pages Router → App Router, prop-drilling → server
   components). 2–4 months typical.
4. **Advise** — fractional senior engineer, 1–2 days/week ongoing.

These are the claims Trevor will defend in a Calendly intro. If a
prospect asks for something outside these four, the answer is either
"yes, and here's how it fits one of these" or "no, here's someone who
does that."

## What Trevor is looking for

Stated as concretely as he's willing to commit to:

- **Project type:** ideally Build or Modernize on a serious product.
  Open to Rescue and Advise if the fit's good.
- **Client stage:** seed through public. Slight preference for
  series A–B startups with a product team and no senior generalist yet.
- **Domains of interest:** [TBD — Trevor to list 2–3]
- **Not interested in:** [TBD — Trevor to list, so the filter is
  real: crypto, ad tech, gambling, defense, whatever applies]

## What Trevor will not claim

The bright line. If a draft starts saying these, stop.

- "Architected scalable systems" — without naming the system and the scale
- "Led teams" — solo or IC throughout recent work
- "AI-powered everything" — see the AI workflow framing above
- Any specific past employer name unless it would also appear on the
  resume with dates and role

## Update protocol

When something here changes, update this file FIRST, then propagate to:

- Hero copy (`src/components/site/Hero.tsx` once ported)
- About section (`src/components/site/About.tsx` once ported)
- `design-system/ui_kits/site/*.jsx` (the reference)
- LinkedIn profile
- Upwork profile
- Resume PDF

The site is downstream of this file, not parallel to it.
