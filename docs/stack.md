# Stack

## Locked stack

- **Framework:** Next.js 15, App Router
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS with CSS variables sourced from
  `design-system/colors_and_type.css`
- **Components:** ported from `design-system/ui_kits/site/*.jsx` into
  `src/components/site/*.tsx`
- **Content:** TypeScript data files in `src/content/` (no MDX, no
  markdown)
- **Fonts:** self-hosted via `next/font/local` from
  `design-system/fonts/`
- **Hosting:** Vercel (free tier)
- **Domain:** TBD (~$12/year via Cloudflare Registrar or Namecheap)

## What's NOT in the stack

The absences are deliberate.

- No CMS (Contentful, Sanity, Strapi)
- No database (Postgres, Supabase, SQLite)
- No MDX, no markdown rendering. There are no long-form pages.
- No authentication
- No analytics (Google Analytics, Plausible, Vercel Analytics)
- No email service (Resend, Postmark)
- No form backend (Formspree, Netlify Forms) — no forms
- No comments
- No search — the site is one page
- No state management (Zustand, Redux) — no shared client state
- No data-fetching library (TanStack Query, SWR) — all content is at
  build time
- No animation library — color transitions only, per the design system

## Why Next.js App Router

Decided over Vite + React, Astro, and pure HTML.

**Vs. Vite + React:** the site is content-shaped, not app-shaped. App
Router gives SSG, file-based routing, image optimization, and
`next/font` out of the box.

**Vs. Astro:** Astro is arguably the right pick for a one-page
content-heavy site, but the design system is already in React (JSX);
porting to Astro's component model is more work than continuing in
React, and the App Router is the React pattern most current job
listings name. Bonus: working in App Router puts a Next.js codebase on
Trevor's GitHub at the same time as it ships the marketing site.

**Vs. pure HTML:** tempting for a one-page site, but loses the type
safety and component reuse that make the design system valuable.

## Why no MDX

Earlier versions of this stack doc specified MDX for case studies. There
are no case studies. The site has three anonymized engagement *rows*,
each one paragraph of text, displayed in a table. They live as
TypeScript objects in `src/content/engagements.ts`, not as `.mdx`
files. Same for testimonials and services.

If a future need for long-form content appears (it shouldn't), add MDX
then and log it in `decisions.md`.

## Tailwind + design tokens

The design system is built on CSS variables (`--crimson`, `--paper`,
`--ink`, `--fs-display`, etc., defined in
`design-system/colors_and_type.css`). The Tailwind config in the
Next.js project should map these to Tailwind class names, e.g.:

```ts
// tailwind.config.ts (sketch)
colors: {
  crimson: 'var(--crimson)',
  paper: 'var(--paper)',
  ink: 'var(--ink)',
  // ...
},
fontFamily: {
  serif: 'var(--serif)',
  sans: 'var(--sans)',
  mono: 'var(--mono)',
},
```

The source-of-truth file (`colors_and_type.css`) is imported once in
`src/app/globals.css` so the variables resolve at runtime. Components
use Tailwind classes (`text-crimson`, `font-serif`) that bind to those
variables.

Inline styles from the JSX components are converted to Tailwind classes
during the port, except where a value is so specific to one component
that a one-off arbitrary class makes sense (e.g. `max-w-[18ch]` for the
hero h1's character-based max-width).

## Fonts

Self-hosted via `next/font/local`:

- **Inter** — body sans. Use the variable file
  (`design-system/fonts/InterVariable.woff2`) — covers all weights.
- **JetBrains Mono** — labels, eyebrows, meta. Weights 400 and 500
  loaded from individual files in `design-system/fonts/`.
- **Fraunces** — display serif. The design system still loads this
  from Google Fonts via `@import` because no `.woff2` file has been
  uploaded. When a `Fraunces[opsz,wght].woff2` file lands in
  `design-system/fonts/`, swap to `next/font/local`. Until then, load
  via `next/font/google`, not via `@import` (the `@import` blocks the
  critical path).

## Images

- All images go through `next/image`
- `design-system/assets/headshot.jpg` is the only photographic asset
- Logos are SVG (`design-system/assets/logo.svg`,
  `logo-mark.svg`, `logo-paper.svg`, `logo-mono-ink.svg`) — used inline
  or via `next/image` depending on whether they need to be currentColor

## Performance budget

- Lighthouse Performance: 95+ on every page (it's one page)
- Lighthouse Accessibility: 100
- LCP under 1.5s on a 3G connection
- Total JS shipped (first load): under 100KB gzipped

These are achievable on this stack without effort if the constraint
list above is respected. They become hard the moment any of those
absences gets violated.
