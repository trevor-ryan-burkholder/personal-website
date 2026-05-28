# Portfolio — Claude Code project guide

## What this is

The portfolio + freelance lead-gen site for Trevor Burkholder. Senior
fullstack engineer, Cleveland-based, available remote. The site exists
to convert warm Upwork and LinkedIn traffic into booked Calendly calls.
It is also a small portfolio piece in its own right — its
architecture, voice, and restraint should reflect the same judgment a
client wants in the engineer they hire.

Single-page Next.js App Router site. Content in TypeScript data
files. Hosted on Vercel. No CMS, no database, no analytics.

---

## Source-of-truth order

When something is unclear or two sources disagree, escalate in this
order:

1. `docs/positioning.md` — what the site is for, who it's for
2. `docs/stack.md` — what's in and out
3. `design-system/README.md` — voice, palette, type, brand rules
4. `design-system/ui_kits/site/*.jsx` — canonical component source
5. `docs/architecture.md` — Next.js project structure
6. `docs/voice.md` — quick reference + banned words
7. `docs/claims-register.md` — canonical facts about Trevor
8. `docs/decisions.md` — historical decisions with reasoning
9. Existing TSX code in `src/`
10. Claude assumptions ← lowest authority; effectively zero

If two documents conflict, stop and report it before writing code.

---

## Fixed constraints

These exist because portfolio sites collapse under accreted features.
Changing any of these requires adding a paragraph to
`docs/decisions.md` first.

- **No CMS.** Content is TypeScript in `src/content/`.
- **No database, no API routes** unless an entry in `decisions.md`
  justifies it.
- **No MDX, no markdown rendering.** Site content lives as typed TS.
- **No analytics** (Google Analytics, Plausible, Vercel Analytics).
- **No newsletter signup, no email capture, no contact form.**
- **No view counters, no clap buttons, no engagement metrics.**
- **No cookie banner.**
- **No `/work/[slug]` deep pages.** Engagements are anonymized table
  rows; that's the whole presentation.
- **No dark-mode toggle** in v1.
- **No blog.**
- **No animation library.** Color transitions only, per the design
  system.
- **No design-system edits** during the port; the JSX source is the
  reference. If something needs to change, change it in TSX first, and
  back-port intentionally.

---

## What Claude must not implement

Unless explicitly requested and documented:

- A CMS integration, in any form
- Analytics or telemetry of any kind
- An email signup form or modal
- A contact form (use `mailto:` + Calendly)
- Comments, view counters, share counts
- An authentication system
- A database
- AI-generated copy that wasn't written by Trevor

These conflict with the project's positioning.

---

## Implementation style

- Simple code over clever code.
- **Server components by default;** `"use client"` only when there's
  a concrete reason (state, event handlers, browser APIs). On this
  site, `Work.tsx` is the only candidate that needs client behavior
  (row hover) — prefer the Tailwind `group-hover:` route if possible
  to keep it server.
- Explicit names. Narrow functions. Typed boundaries.
- All content data has TypeScript types defined alongside the data.
- Small commits.
- Boring beats clever. Readable beats haunted.

Do not introduce a new library without explicit justification and a
matching entry in `docs/decisions.md`.

---

## Voice rules

Full guide in `design-system/README.md` ("Content fundamentals"). Quick
version:

- First-person singular. "I build," "I worked." Never "we." Never
  "Trevor" in third person on the site.
- Sentence case for titles, headings, buttons.
- UPPERCASE for mono eyebrows only.
- Specifics over claims. Numbers, names, real decisions.
- No emoji. No exclamation marks in marketing copy.
- No hype superlatives ("10x," "world-class," "transform").
- No "powered by AI." AI fluency gets one honest line in the hero;
  that's the whole frame.

---

## Slice initialization

At the start of every new slice:

1. Re-read `docs/implementation-plan.md` for the current slice's
   goal and completion check.
2. Re-read the relevant section of `design-system/ui_kits/site/`
   (the JSX source for the component being ported).
3. Re-read this `CLAUDE.md`.
4. State which docs were read before writing any code.

Do not carry assumptions from the previous slice. Treat each slice as
a fresh context.

---

## Completion requirements

Before declaring any slice complete:

1. `npm run typecheck` — zero errors
2. `npm run lint` — zero errors
3. `npm run build` — must succeed
4. Visual check: the rendered page matches
   `design-system/ui_kits/site/index.html` for the sections in scope
5. The summary block below

If any check fails, fix it before declaring complete. Do not declare
complete and note the failure.

### Completion commands

- Typecheck: `npm run typecheck` (script: `"typecheck": "tsc --noEmit"`)
- Lint: `npm run lint`
- Build: `npm run build`
- Tests: not wired in v1. Add Vitest before any slice that introduces
  non-trivial logic (none planned).

---

## Summary block (required at the end of every slice)

- Docs read at start
- Implemented (plain-language description)
- Files modified
- Test results (typecheck, lint, build)
- Visual diff check (against the design-system reference)
- Known limitations
- Docs updated (or, if not updated, why)
- Any conflict between docs and implementation (flag, don't resolve)
- Any item that was out of scope and skipped

---

## Commit convention

```
feat:      new behavior or new section
fix:       bug correction
refactor:  structural change, no behavior change
content:   copy / data changes only (engagements, testimonials, etc.)
style:     visual or typographic changes only
docs:      changes to /docs, CLAUDE.md, or README.md
chore:     tooling, config, deps
```

Examples:

```
feat: port Hero and Nav from design system
content: write engagement descriptions
docs: log decision to skip MDX
chore: configure vercel deploy
```

---

## Final rule

When uncertain, stop and ask.

The project thesis:

> The site is a display case, not a product. Restraint is the signal.

Do not add features that weaken it.
