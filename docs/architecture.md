# Architecture

## Repo structure (target)

```
portfolio/
├── CLAUDE.md
├── README.md
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── .eslintrc.json
├── .gitignore
│
├── docs/                                 ← project docs (this directory)
│   ├── positioning.md
│   ├── stack.md
│   ├── voice.md
│   ├── claims-register.md
│   ├── decisions.md
│   ├── architecture.md                   ← this file
│   └── implementation-plan.md
│
├── design-system/                        ← canonical brand source; do NOT edit during port
│   ├── README.md
│   ├── SKILL.md
│   ├── colors_and_type.css
│   ├── assets/                           ← logos, headshot (copied into public/)
│   ├── fonts/                            ← woff2 files (referenced from src/styles/fonts.ts)
│   ├── preview/
│   ├── reference/portfolio-v3.html
│   └── ui_kits/site/*.jsx                ← source components to port
│
├── public/
│   ├── logo.svg                          ← copied from design-system/assets/
│   ├── logo-mark.svg
│   ├── logo-paper.svg
│   ├── logo-mono-ink.svg
│   ├── headshot.jpg
│   └── favicon.ico                       ← derived from logo-mark.svg
│
└── src/
    ├── app/
    │   ├── layout.tsx                    ← root layout: fonts, metadata, body wrapper
    │   ├── page.tsx                      ← homepage; composes site components
    │   ├── globals.css                   ← imports design-system/colors_and_type.css + Tailwind layers
    │   └── opengraph-image.tsx           ← OG image (optional v1.1)
    │
    ├── components/
    │   └── site/
    │       ├── Nav.tsx
    │       ├── Hero.tsx
    │       ├── Background.tsx
    │       ├── About.tsx
    │       ├── Services.tsx
    │       ├── Work.tsx
    │       ├── Testimonials.tsx
    │       ├── Process.tsx
    │       ├── CtaBand.tsx
    │       ├── Footer.tsx
    │       └── Logo.tsx
    │
    ├── content/
    │   ├── hero.ts                       ← hero copy + availability flag
    │   ├── services.ts                   ← 4 service buckets
    │   ├── engagements.ts                ← anonymized recent work rows
    │   ├── testimonials.ts               ← featured LinkedIn recs
    │   ├── process.ts                    ← 4-step engagement process
    │   └── site.ts                       ← site-wide constants (calendly URL, email, etc.)
    │
    ├── lib/
    │   └── fonts.ts                      ← next/font/local declarations
    │
    └── styles/
        (nothing here yet; globals.css lives in app/)
```

## Component port map

Every component on the homepage is a 1:1 port from
`design-system/ui_kits/site/*.jsx`. The port converts:

- JSX with inline `style` objects → TSX with Tailwind classes (or
  `style` objects retained where Tailwind would require many arbitrary
  values for one component)
- `window.Component = Component` globals → standard ES module `export default`
- React 18 UMD via Babel-in-browser → first-party Next.js compilation
- Image and asset paths → `public/` paths via `next/image` or
  `<Image>`

Example: `Hero.jsx` (47 lines, inline styles) becomes `Hero.tsx`
(similar line count, Tailwind classes that resolve to the same CSS
variables). The copy and the structure are unchanged.

## Content data layer

Content lives as typed TS files in `src/content/`. No frontmatter, no
MDX. Each file exports an object literal with a named export.

Example: `src/content/engagements.ts`

```ts
export type Engagement = {
  year: string;
  title: string;            // e.g. "[ Series B SaaS ]"
  blurb: string;            // one-sentence description
  stack: string;            // e.g. "React · Next.js · TS · Postgres"
};

export const engagements: Engagement[] = [
  { year: '2024', title: '[ Series B SaaS ]', blurb: '...', stack: 'React · Next.js · TS · Postgres' },
  // ...
];
```

Components read from `src/content/` directly. No props drilling from
the page; each section component imports its own data. This keeps
`page.tsx` short (it just composes sections) and makes the content
easy to find.

Why TS files instead of JSON: type safety on `Engagement[]` catches
shape errors at build time. A typo in a stack string is an instant
type error; a missing field fails the build.

## Routing

```
src/app/
  layout.tsx           →  /  (wrapper for all routes; sets fonts, metadata)
  page.tsx             →  /  (the single homepage)
```

That's the whole route table. No dynamic segments, no other routes.
Anchor navigation within the page is via plain `<a href="#work">` —
the design system already uses these.

If a public 404 page is needed, Next.js provides a default; only add
`src/app/not-found.tsx` if a custom one is wanted.

## Fonts

`src/lib/fonts.ts` declares the fonts via `next/font/local`:

```ts
import localFont from 'next/font/local';

export const inter = localFont({
  src: '../../design-system/fonts/InterVariable.woff2',
  variable: '--font-inter',
  display: 'swap',
});

export const jetbrainsMono = localFont({
  src: [
    { path: '../../design-system/fonts/JetBrainsMono-Regular.woff2', weight: '400' },
    { path: '../../design-system/fonts/JetBrainsMono-Medium.woff2', weight: '500' },
  ],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

// Fraunces — use next/font/google until a woff2 lands in design-system/fonts
import { Fraunces } from 'next/font/google';
export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-fraunces',
  display: 'swap',
});
```

The CSS variables defined here (`--font-inter`, etc.) are mapped to
the design-system's variables (`--sans`, `--mono`, `--serif`) in
`globals.css` so existing component CSS keeps working:

```css
:root {
  --sans:  var(--font-inter);
  --mono:  var(--font-jetbrains-mono);
  --serif: var(--font-fraunces);
}
```

## Styling

`src/app/globals.css` does three things in order:

1. Imports `design-system/colors_and_type.css` (the token source of
   truth — colors, type scale, radii, motion, semantic classes like
   `.tb-h1`, `.tb-eyebrow`).
2. Maps `next/font` variables to the design-system's font variables.
3. Loads Tailwind layers.

`tailwind.config.ts` mirrors the design tokens so components can use
Tailwind classes that bind to the CSS variables:

```ts
colors: {
  crimson: 'var(--crimson)',
  'crimson-deep': 'var(--crimson-deep)',
  paper: 'var(--paper)',
  'paper-2': 'var(--paper-2)',
  ink: 'var(--ink)',
  'ink-2': 'var(--ink-2)',
  mute: 'var(--mute)',
  rule: 'var(--rule)',
  green: 'var(--green)',
},
fontFamily: {
  serif: 'var(--serif)',
  sans:  'var(--sans)',
  mono:  'var(--mono)',
},
```

If a component reaches for a one-off value (`max-w-[18ch]`,
`tracking-[-0.025em]`), use Tailwind's arbitrary-value syntax. Don't
add it to the config unless it appears in three or more places.

## Build & deploy

- Local dev: `npm run dev` (or `pnpm dev`)
- Typecheck: `npm run typecheck` (script alias for `tsc --noEmit`)
- Lint: `npm run lint`
- Build: `npm run build`
- Deploy: push to main; Vercel auto-deploys (after initial `vercel`
  setup)

## What's deliberately out of scope

- Theme switching (light/dark toggle) — not in v1
- i18n / multiple languages
- Server actions, API routes, route handlers
- Middleware
- Edge runtime considerations
- ISR — everything is fully static
