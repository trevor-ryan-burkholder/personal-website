# Implementation plan

## Budget

**Two weekends to shipped.** Roughly: weekend one is slices 0–4
(scaffold + components ported + composing on localhost), weekend two
is slices 5–7 (remaining components + content + deploy + domain).

If by end of weekend two the site isn't on a `*.vercel.app` URL with
real engagement copy in place, something went wrong with scope.

## Operating rules during the build

1. **Don't redesign during the port.** The design system is canonical.
   If something looks wrong in the TSX, the bug is in the port, not in
   the design. Same applies to copy.
2. **Don't add dependencies that aren't in `stack.md`.** Every new
   library is a half-hour minimum (install, type, configure, learn).
3. **Don't refactor the design-system source.** It stays a reference.
   The only files that change during normal slices are inside
   `src/` and the root config files.
4. **Ship rough. Polish in flight.** Once it's on Vercel, iterate
   there.

## Slice 0 — Scaffold (≈30 min)

Goal: a working `npm run dev` showing the default Next.js page.

```bash
cd ~/dev
# IF portfolio dir is empty except for design-system/, docs/, mockups/, etc:
cd portfolio
git init  # if not already
# Use create-next-app to add Next files alongside the existing folders:
npx create-next-app@latest . \
  --typescript --tailwind --app --src-dir \
  --import-alias "@/*" --eslint --no-turbopack
# When prompted to overwrite, decline; choose merge if offered.
# Or simpler: create in a tmp dir and copy files in.
```

Add to `package.json`:

```json
"scripts": {
  "typecheck": "tsc --noEmit"
}
```

Commit: `chore: scaffold next.js app router project`

Completion check: `npm run dev` opens the Next.js default page.
`npm run typecheck` exits 0. `npm run lint` exits 0. `npm run build`
exits 0.

## Slice 1 — Design tokens, fonts, layout shell (≈45 min)

Goal: the page renders blank but with the right fonts, the right
background, and the right text color. No content yet.

- Copy `design-system/assets/{logo*.svg,headshot.jpg}` into `public/`.
- Create `src/lib/fonts.ts` per `architecture.md`.
- Create `src/app/globals.css`:
  - `@import "../../design-system/colors_and_type.css";`
  - Map `next/font` CSS variables to `--sans`, `--mono`, `--serif`.
  - Include the Tailwind layer directives.
- Edit `tailwind.config.ts` to register the color / font tokens.
- Edit `src/app/layout.tsx`:
  - Pull fonts from `@/lib/fonts`, apply their `variable` classes to
    `<html>`.
  - Set `<body>` background to `bg-paper-3` (page shell).
  - Add metadata (title, description, OG basics).
- Edit `src/app/page.tsx` to render a single `<main>` with a paper
  background. Empty otherwise.

Commit: `feat: set up design tokens, fonts, and layout shell`

Completion check: page loads, fonts are loaded (visible in network
tab), background is `--paper-3`, content area is `--paper`. Typecheck
+ lint + build all pass.

## Slice 2 — Nav + Hero + Logo (≈90 min)

Goal: top of the page renders identically to
`design-system/ui_kits/site/index.html`.

Port these JSX files to TSX in `src/components/site/`:

- `Logo.tsx` ← `Logo.jsx`
- `Nav.tsx` ← `Nav.jsx`
- `Hero.tsx` ← `Hero.jsx`

Create content files referenced by Hero:

- `src/content/site.ts` — exports `CALENDLY_URL`, `EMAIL`,
  `AVAILABILITY` (string like "Available for new projects · June
  2026").
- `src/content/hero.ts` — exports the hero copy block.

Wire them into `page.tsx`:

```tsx
import { Nav } from '@/components/site/Nav';
import { Hero } from '@/components/site/Hero';

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
}
```

Commit: `feat: port Nav, Hero, Logo from design system`

Completion check: visual diff against
`design-system/ui_kits/site/index.html` shows no meaningful
difference for the top of the page. Available pill, hero h1, italic
crimson accent, lede, two CTAs, reassurance line — all present and
styled correctly.

## Slice 3 — Background, About, Services (≈90 min)

Goal: paper-2 band → About → 4-up services grid render.

Port:

- `Background.tsx` ← `Background.jsx`
- `About.tsx` ← `About.jsx`
- `Services.tsx` ← `Services.jsx`

Create content:

- `src/content/services.ts` — exports `services: Service[]` (4
  entries) from the JSX source.

Wire into `page.tsx` in order:

```tsx
<Nav />
<Hero />
<Background />
<About />
<Services />
```

Commit: `feat: port Background, About, Services`

Completion check: section eyebrows, two-column service grid, paper
backgrounds alternating correctly.

## Slice 4 — Work + Testimonials (≈120 min)

Goal: the table-row engagements section and the testimonials grid
render with the real recommendation quotes.

Port:

- `Work.tsx` ← `Work.jsx` (port the row-hover behavior; use
  client component for the hover state, or convert hover to a Tailwind
  `group-hover:` pattern and keep server)
- `Testimonials.tsx` ← `Testimonials.jsx`

Create content:

- `src/content/engagements.ts` — three rows. Pull bracketed
  placeholders from `Work.jsx`. Real content fills these later.
- `src/content/testimonials.ts` — Rex Petersen + Keith O'Connel quotes,
  pulled verbatim from `Testimonials.jsx`. Constant for the LinkedIn
  recommendations URL.

Wire into `page.tsx`:

```tsx
<Work />
<Testimonials />
```

Note: this is the only slice where a section needs interaction
(row hover). If you keep the React state pattern from `Work.jsx`, it
becomes a `'use client'` component — that's fine, scope is one
section. The Tailwind `group-hover:` alternative is purely server-side
and is the cleaner choice.

Commit: `feat: port Work and Testimonials`

Completion check: 3 engagement rows with the bracket placeholders, 2
real recommendation cards, "23 more on LinkedIn" + "Read all 25 →"
link working.

## Slice 5 — Process + CtaBand + Footer (≈90 min)

Goal: the rest of the page.

Port:

- `Process.tsx` ← `Process.jsx`
- `CtaBand.tsx` ← `CtaBand.jsx`
- `Footer.tsx` ← `Footer.jsx`

Create content:

- `src/content/process.ts` — 4 steps with titles, timing chips, body
  copy.

Wire into `page.tsx`:

```tsx
<Process />
<CtaBand />
<Footer />
```

Commit: `feat: port Process, CtaBand, Footer; site composition complete`

Completion check: full page renders, scrolls, matches the reference
HTML. All Calendly anchor links resolve to `#book`. Email mailto:
link present. LinkedIn link in footer points to Trevor's profile.

## Slice 6 — Deploy to Vercel (≈30 min)

Goal: a `*.vercel.app` URL Trevor can share.

```bash
npm install -g vercel
vercel
# follow prompts; create a project
```

Verify the deploy:

- Open the URL on desktop and mobile
- Run Lighthouse — check Performance ≥ 95, Accessibility = 100
- Verify fonts load (no FOUT for >100ms)
- Verify the Calendly link goes to Trevor's actual Calendly (set in
  `src/content/site.ts`)

Commit: `chore: configure vercel deploy`
Push to main; verify auto-deploy.

Completion check: URL works for an incognito browser. Lighthouse
green.

## Slice 7 — Real content + domain (≈variable)

Goal: ship-quality site. This slice is not a code slice; it's the
content-writing slice that's been deferred the whole time.

Trevor's job here, not Claude's:

1. **Write the three engagement descriptions.** One specific sentence
   each. Replace the bracketed placeholders in
   `src/content/engagements.ts`. Each row should answer: what was the
   problem, what did you build, what changed.
2. **Write the About section copy.** 100–200 words, first person,
   per the voice doc. Replace whatever placeholder is in `About.jsx`.
3. **Confirm the two featured testimonials.** They're already
   populated with Rex Petersen and Keith O'Connel — confirm those
   are the two strongest, swap if not.
4. **Buy a domain.** `trevorburkholder.com` or `.dev` — recruiters
   search the literal name. Configure in Vercel.

Commit: `content: write engagement descriptions + About copy`

Completion check: every bracketed placeholder on the live site is gone
or has a justified reason to remain. Domain resolves. SSL is on.

## Total time estimate

Coding slices (0–6): ~7 hours.
Content slice (7): as long as it takes. Probably 2–4 hours.

That's two weekends with breathing room. If you blow through it,
something is wrong with the scope, not with the work.

## What this plan deliberately does not include

- A blog
- A dark-mode toggle
- A custom 404 page
- An OG image generator (defer to v1.1)
- A `/sitemap.xml` route (defer to v1.1)
- E2E tests (this is a static page; visual review on the live URL is
  the test)
- Vitest setup (defer until the codebase has logic worth testing)
- shadcn (no shadcn primitives are needed for this design)
