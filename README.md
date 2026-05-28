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

## Deploy

Vercel project linked to `main`. Push to deploy.

Initial setup: `vercel` from the repo root after first `npm install`.

---

## Contact

tburk83@gmail.com · [LinkedIn](https://www.linkedin.com/in/trevorburkholder/)

