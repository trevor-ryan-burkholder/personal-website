# Portfolio Site — Setup Guide

You're starting from zero. This walks you from "empty folder" to "first
deploy" without yak-shaving. Assume Node 20+ and pnpm or npm are already
installed.

---

## 1. Scaffold the repo

Decide where it lives. Suggested: `~/dev/portfolio`.

```bash
cd ~/dev
npx create-next-app@latest portfolio \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --eslint \
  --no-turbopack
cd portfolio
```

Notes on the flags:
- `--app` — App Router, not Pages Router. Don't argue with the default.
- `--src-dir` — keeps `src/` separation, matches what most production Next
  projects look like. Worth the habit.
- `--no-turbopack` — Turbopack is fine but skips a class of bundler issues
  you might want to learn from. Optional; flip if you don't care.

Initialize git and make the first commit before adding anything else, so
the scaffold itself is a clean baseline:

```bash
git init
git add .
git commit -m "chore: initial Next.js scaffold"
```

---

## 2. Drop in the docs

Move this `portfolio-starter/` directory out of the Thresh folder first:

```bash
mv ~/dev/thresh/portfolio-starter ~/dev/portfolio-starter
```

Then copy the docs into your new repo:

```bash
cp ~/dev/portfolio-starter/CLAUDE.md ~/dev/portfolio/CLAUDE.md
cp -r ~/dev/portfolio-starter/docs ~/dev/portfolio/docs
```

Final layout in the new repo:

```
portfolio/
├── CLAUDE.md                ← repo root
└── docs/
    ├── positioning.md
    ├── stack.md
    ├── voice.md
    ├── claims-register.md
    └── decisions.md
```

The Claude.ai project instructions (`claude-ai-project-instructions.md`)
do NOT go in the repo. Paste them into the project settings in Claude.ai
under the project you create for the portfolio site.

Commit:

```bash
git add CLAUDE.md docs/
git commit -m "docs: add CLAUDE.md, positioning, stack, voice, claims, decisions log"
```

---

## 3. Install shadcn

```bash
npx shadcn@latest init
```

When it asks:
- Style: `New York` (more typographic, fewer rounded corners — fits the
  portfolio voice better than `Default`)
- Base color: `Neutral` (you'll override via CSS variables)
- CSS variables: yes
- Tailwind config path: defaults
- Components alias: `@/components`
- Utils alias: `@/lib/utils`
- RSC: yes

Add the primitives you'll actually use as you need them. Don't pre-install
the whole library. Start with:

```bash
npx shadcn@latest add button
```

Commit:

```bash
git add .
git commit -m "chore: add shadcn"
```

---

## 4. Set up the directory structure

Create the skeleton you'll fill in:

```bash
mkdir -p src/content/case-studies
mkdir -p src/lib
mkdir -p src/components/site
```

- `src/content/case-studies/` — one `.mdx` file per case study, frontmatter
  for metadata. Loaded at build time. No CMS.
- `src/components/site/` — your custom components (hero, case-study layout,
  footer). Kept separate from `src/components/ui/` (shadcn-owned).
- `src/lib/` — pure helpers (MDX loaders, type definitions). No React.

Don't build out the full app shell on day one. Get the homepage rendering
"hello" first, then iterate.

---

## 5. Install MDX support

Case studies are MDX, not raw markdown — so you can drop in components
inline (a code snippet, a callout, an image with a caption) without
building a custom renderer.

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react gray-matter
```

You'll configure `next.config.mjs` to handle MDX. The Next.js docs are the
authoritative reference here — don't try to remember the config from
scratch, just follow their MDX page.

Commit when working:

```bash
git add .
git commit -m "feat: add MDX support for case studies"
```

---

## 6. First deploy

Before writing any real content, deploy the empty scaffold to Vercel.
Why: confirms the deploy pipeline works before you have anything to be
nervous about losing. Saves you debugging "why won't this deploy" the
night before you want to send the URL to a recruiter.

```bash
npm install -g vercel
vercel
```

Follow the prompts. It'll create a `*.vercel.app` URL. Don't worry about
a custom domain yet — that comes after the site has content worth pointing
at.

---

## 7. First slice

Now you start working in slices, per the workflow in `CLAUDE.md`. The
first slice is the site skeleton:

- Homepage with hero (one sentence about you)
- Stub case-study route (`/work/[slug]`)
- About page (placeholder)
- Footer with two links (GitHub, email)

That's it. No case study content yet. Goal: a navigable shell that
deploys. Once it's deployed, the next slice is writing the Thresh case
study.

---

## 8. Custom domain (when ready)

When the site has at least one real case study and you'd be willing to
share the URL with a hiring manager today, point a domain at Vercel.

- Buy a domain (~$12/year — Cloudflare Registrar or Namecheap, both fine)
- Add it in Vercel project settings under Domains
- Update DNS as Vercel instructs
- Vercel handles SSL automatically

Domain suggestion: `firstname-lastname.dev` or `firstnamelastname.com`.
Resist clever names. The portfolio's job is to make you findable, and
recruiters search your literal name.

---

## What you've avoided

- A CMS (Contentful, Sanity, Strapi)
- A custom markdown renderer
- A blog engine
- Analytics
- Email signup
- Dark-mode toggle work

All of these have legitimate uses and none of them belong in v1. The
`CLAUDE.md` explicitly forbids adding them without a written reason. If
you find yourself thinking "I should add X," check that file first.

---

## Time budget

The implicit budget for v1 is **two weekends to shipped**. That's enough
for: scaffolded site, one real case study (Thresh), an About page, and
a custom domain. If you're at week three and still not deployed, something
is wrong with the scope, not with the work.

Ship rough. Polish in flight.
