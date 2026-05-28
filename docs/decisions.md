# Decisions log

A running log of decisions made about the portfolio site. The point is
not to capture every minor choice — it's to capture decisions that
future-Trevor might be tempted to second-guess, with the reasoning at
the time so the second-guess starts from informed ground.

Format per entry:

```
## YYYY-MM-DD — Short title

**Decision:** what was decided, in one sentence.

**Context:** what prompted it.

**Considered:** alternatives weighed.

**Reasoning:** why this option won.

**Reversal criteria:** what would have to be true to revisit.
```

Entries go newest-first.

---

## 2026-05-28 — Responsive pass (single 768px breakpoint) + gutter normalization

**Decision:** Added mobile responsiveness with one breakpoint at 768px:
multi-column grids (About, Services, Testimonials, Work) collapse to a single
column, the three nav section-links hide (leaving logo + "Book a call"),
`.container` gutters shrink 48px → 24px, and the largest display type (hero h1,
section titles, CTA-band h2) scales fluidly via `clamp()`. As part of this,
section gutters were normalized: the five sections that put
`className="container"` directly on the element with an inline `padding`
shorthand were changed to longhand vertical padding, so `.container` owns the
48px horizontal gutter.

**Context:** The design system and JSX kit define no responsive behavior —
fixed px, rigid grids, no media queries — so the ported site overflowed on
phones (flagged in the build-decisions entry). The user asked for a responsive
pass. Separately, the inline `padding` shorthand on the container-classed
sections (Nav, Hero, About, Services, Testimonials) was overriding the
container's horizontal padding to 0, so those sections sat flush to the 1080px
edge while the others (Background, Work, Process, Footer, CtaBand) had 48px
gutters — their content left-edges misaligned by 48px down the page.

**Considered:**
- A JS hamburger menu for mobile nav (rejected — adds a client component +
  state to an otherwise zero-JS page; the section links are non-essential
  scroll-jumps on a one-pager, the CTA is what matters)
- Overriding inline styles with media-query `!important` (rejected — fragile;
  instead, layout that must change at breakpoints moved into CSS classes in
  `globals.css`, since inline styles can't be overridden by media queries)
- Multiple breakpoints / `auto-fit` fluid grids (rejected — one breakpoint is
  simpler and `auto-fit` couldn't hold the exact 2-col desktop design)

**Reasoning:** Keeps the page a pure server component with no client JS. The
gutter normalization both enables responsive gutters and fixes the pre-existing
desktop misalignment, matching the design-system README's "gutters 48px."
Desktop changes slightly: Nav/Hero/About/Services/Testimonials content now sits
within 48px gutters (≈984px column) instead of flush to 1080px, aligning with
every other section.

**Reversal criteria:** A future design that genuinely wants edge-to-edge hero
content, or a need for a richer mobile nav (at which point a hamburger is
justified).

---

## 2026-05-28 — Engagement rows anonymized; design-system JSX diverges

**Decision:** The engagement rows ship anonymized (sector descriptors, not
client names), per `positioning.md`. The Next.js content
(`src/content/engagements.ts`) and the ported `Background.tsx` carry the
anonymized wording. The design-system source (`Work.jsx`, `Background.jsx`)
was left untouched and now diverges from the live site.

**Context:** During the port, `design-system/ui_kits/site/Work.jsx` and
`Background.jsx` were found to contain named real clients (Quadax, Usmon,
West Bend Mutual) and the line "named with client permission" — conflicting
with `positioning.md` (#1), `voice.md`, the design-system README, and
`claims-register.md`, which all specify anonymized/NDA-safe rows. Trevor
confirmed: anonymize.

**Considered:**
- Ship named clients as-is (rejected — no confirmed written permission; NDA
  exposure)
- Bracketed placeholders (rejected — Trevor wanted real, specific, anonymized
  copy now)
- Anonymize, keep specifics (selected)

**Reasoning:** `positioning.md` is the top source of truth and is unambiguous
that recent work is NDA-protected and described anonymously.
Anonymized-but-specific is the documented voice.

**Reversal criteria:** Trevor obtains written permission to name a client, or
wants a row he can describe in more depth — at which point update
`engagements.ts` and back-port the design-system JSX in the same change.

**Follow-up:** Per CLAUDE.md ("change it in TSX first, back-port
intentionally"), `Work.jsx`/`Background.jsx` still hold the named-client copy
and should be deliberately back-ported to anonymized wording so the reference
stops drifting.

---

## 2026-05-28 — Port build: Next 15 / Tailwind v3 pin, token-copy, fonts

**Decision:** Pin Next.js 15 and Tailwind v3; build `globals.css` by copying
the design tokens (not `@import`-ing `colors_and_type.css`); load Inter +
JetBrains Mono via `next/font/local` (woff2) and Fraunces via
`next/font/google`; serve first-party logo SVGs through `next/image` with
`dangerouslyAllowSVG`.

**Context:** `create-next-app@latest` now defaults to Next 16 + Tailwind v4;
`stack.md`/`architecture.md` are written for Next 15 + Tailwind v3.
`architecture.md` slice 1 says to `@import` `colors_and_type.css`, but that
file's ~100 `@font-face` rules would make the bundler emit every font (Inter
Display, all Fraunces cuts, …), violating the `stack.md` <100 KB /
Lighthouse-95 budget.

**Considered:**
- Next 16 / Tailwind v4 (rejected — deviates from the locked stack; would
  invalidate the doc examples for no benefit on a static page)
- `@import` the token CSS (rejected — emits ~100 unused font files)
- Convert all inline styles to Tailwind utilities (rejected — the plan
  explicitly permits retaining style objects; retaining them is the
  highest-fidelity, lowest-risk port)

**Reasoning:** Match the locked stack; keep the perf budget; reproduce the
reference 1:1. Components keep their inline style objects + the chrome classes
from `styles.css` (moved into `globals.css`); Tailwind is present for stack
conformance + preflight + token maps but barely used. `next/font/google`
self-hosts Fraunces at build time, so there is no runtime Google call.

**Reversal criteria:** A future need for Tailwind v4 / Next 16 features, or a
real `Fraunces.woff2` lands in `design-system/fonts` (swap Fraunces to
`next/font/local`).

**Known gap — responsive:** The design system and ported components are
fixed-px with rigid grids and no media queries (the kit has none), so the site
overflows on mobile. The port reproduced this faithfully (no redesign
mid-port). A dedicated responsive pass is needed before sharing widely, given
LinkedIn/Upwork traffic is mobile-heavy.

---

## 2026-05-22 — Site purpose is freelance lead-gen, not FTE job-search

**Decision:** The site exists primarily to convert warm Upwork and
LinkedIn traffic into booked Calendly calls. Secondary: any
FTE-curious visitor gets the same signal from the same site.

**Context:** Earlier versions of these docs framed the site as an
FTE-job-search portfolio. That positioning is wrong for Trevor's
current goal.

**Considered:**
- FTE-only positioning (rejected — he's freelancing)
- Dual-target positioning (rejected — pages that try to serve both
  audiences typically do both poorly; one site, one primary funnel)
- Freelance-only positioning (selected)

**Reasoning:** The audience is already in evaluation mode when they
arrive. The job is to confirm credibility and lower friction to a
call, not to win an unfamiliar reader from cold.

**Reversal criteria:** Trevor takes a full-time role and wants to keep
the site as a public portfolio without an active funnel.

---

## 2026-05-22 — Single-page site, no MDX, no case studies

**Decision:** The site is a single homepage with stacked sections (Nav
→ Hero → Background → About → Services → Work → Testimonials → Process
→ CtaBand → Footer). No `/work/[slug]` deep pages, no MDX content
pipeline, no markdown rendering.

**Context:** The original scaffolding docs specified MDX for case
studies. There are no case studies — work is anonymized and described
in one paragraph per engagement, displayed as table rows.

**Considered:**
- MDX with one-page-per-engagement (rejected — engagements are NDA-
  anonymized, there's nothing more to say about each one than one
  paragraph)
- Multi-page site with separate /about, /services (rejected — buyers
  scroll; they don't navigate. One-page sites convert better for this
  audience)

**Reasoning:** Less code, faster to ship, better fit for the actual
content shape. The full design is in `design-system/ui_kits/site/`
as a single-page composition.

**Reversal criteria:** A future engagement Trevor *can* name and *does*
want to write up in depth — at which point add one MDX page for it,
not a whole content pipeline.

---

## 2026-05-22 — Pre-existing design system; port to Next.js

**Decision:** The design system in `design-system/` is canonical. The
implementation job is to port the existing JSX components in
`design-system/ui_kits/site/*.jsx` to TSX in `src/components/site/` of
a Next.js project, preserving the visual design and the copy.

**Context:** A complete design system was generated from the v3.1
freelance mockup before scaffolding the Next.js project. Components,
tokens, fonts, and brand assets all exist.

**Considered:**
- Redesigning during the port (rejected — the design is done; redoing
  it is scope creep)
- Treating `design-system/` as throwaway prototyping and rebuilding
  from scratch in Next.js (rejected — wasteful)

**Reasoning:** Porting is faster than redesigning, and the design
system itself is a reference asset Trevor can keep using for other
projects (per its SKILL.md, it's a Claude Code-compatible skill).

**Reversal criteria:** A round of port reveals a structural problem
with the design (e.g., responsive behavior that doesn't work at common
viewports). At that point, fix in-place in the TSX, and update the
design-system JSX to match.

---

## 2026-05-22 — Calendly yes, email capture no

**Decision:** Calendly is the primary CTA in three places (nav, hero,
closing band). No email-for-PDF lead-magnet section on the homepage.

**Context:** Trevor initially asked for both. Lead-magnet email capture
is a B2B-SaaS nurture pattern; the audience here decides in minutes,
not weeks.

**Considered:**
- Both on the homepage (rejected — friction)
- Lead magnet on a separate landing page driven by LinkedIn posts
  (deferred; possible v2)

**Reasoning:** Warm Upwork/LinkedIn traffic wants to know in 60
seconds whether to book. A PDF download is friction between them and
the call.

**Reversal criteria:** Trevor wants to run a content-led LinkedIn
strategy. At that point, build a separate landing page (not a homepage
section).

---

## 2026-05-22 — No CMS, no database, no analytics

**Decision:** Content lives as TypeScript data files in `src/content/`.
No CMS, no database, no analytics, no newsletter, no contact form.
Contact is a `mailto:` link and a Calendly URL.

**Context:** Portfolio sites accrete features quickly. Naming the
absences makes them defensible.

**Reasoning:** Each of these solves a problem the site doesn't have.
Content is small enough to live in TS. Analytics encourage building
for metrics instead of for the reader. The contact form solves "how
does someone reach me" — `mailto:` + Calendly solves it with less
moving parts.

**Reversal criteria:** A specific feature requires interactive data
that can't be statically built. At that point add the narrowest
possible solution.

---

## 2026-05-21 — Use Next.js App Router

**Decision:** Build on Next.js 15 with the App Router, TypeScript,
Tailwind. Hosted on Vercel.

**Context:** Starting from zero. Stack choice is the first real
decision.

**Considered:**
- Vite + React, Astro, pure HTML, Next.js Pages Router

**Reasoning:** App Router gives SSG, file-based routing, image
optimization, and `next/font` out of the box. Working in it puts a
Next.js codebase on Trevor's GitHub at the same time the site ships,
which doubles the portfolio value of the build.

**Reversal criteria:** Would only reconsider if App Router blocked
something specific (it shouldn't on a static site).

---

## TEMPLATE — copy this when adding a new entry

## YYYY-MM-DD — Short title

**Decision:**

**Context:**

**Considered:**

**Reasoning:**

**Reversal criteria:**
