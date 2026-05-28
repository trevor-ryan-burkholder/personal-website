# portfolio

Personal site + freelance lead-gen page for Trevor Burkholder.

Live: TBD (deployed to Vercel; domain pending)

---

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Vercel.

Content lives as TypeScript files in `src/content/`. No CMS, no
database, no analytics.

---

## Layout

```
portfolio/
├── CLAUDE.md                ← project guide for Claude Code in this repo
├── docs/                    ← positioning, voice, stack, architecture, plan, etc.
├── design-system/           ← canonical brand source (palette, type, components, fonts)
├── public/                  ← logo, headshot, favicon
└── src/
    ├── app/                 ← layout + single page
    ├── components/site/     ← TSX components ported from design-system/ui_kits/site/
    ├── content/             ← typed content data
    └── lib/                 ← fonts + helpers
```

Full layout in `docs/architecture.md`.

---

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck    # tsc --noEmit
npm run lint
npm run build
```

---

## Implementation status

Project is mid-port. The design system is complete in
`design-system/`; the Next.js project is being built out per
`docs/implementation-plan.md`.

To understand the project, read in this order:

1. `docs/positioning.md` — what the site is for
2. `docs/stack.md` — what's in
3. `docs/architecture.md` — where the code lives
4. `docs/implementation-plan.md` — ordered slices to ship

To work in the repo, read `CLAUDE.md` first.

---

## Deploy

Vercel project linked to `main`. Push to deploy.

Initial setup: `vercel` from the repo root after first `npm install`.

---

## Contact

tburk83@gmail.com · [LinkedIn](https://www.linkedin.com/in/trevorburkholder/)
