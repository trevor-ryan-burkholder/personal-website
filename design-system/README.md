# Trevor Burkholder — Design System

A small, opinionated brand system for **Trevor Burkholder**, a Cleveland-based freelance senior fullstack engineer. The brand is a personal practice, not a company; the system has to read as **the personal site of an experienced senior IC**, not a SaaS landing page.

The tone target is **editorial restraint** — closer to a serious magazine column or a New Yorker contributor page than a Stripe-y product site. Crimson + warm paper + Fraunces serif do most of the work; everything else is one-pixel hairlines and mono labels.

## Source materials

- `uploads/index.html` — a v3.1 freelance/LinkedIn-recs portfolio mockup (single-page site) that defined the working palette, type stack, component patterns, and copy voice. Preserved at `reference/portfolio-v3.html`.
- `uploads/Trevor_Burkholder_logo-linkedin.png` — a 1585×803 LinkedIn banner crop of the brand mark on crimson. Preserved at `assets/logo-linkedin.png`.
- LinkedIn: https://www.linkedin.com/in/trevorburkholder/
- Email: tburk83@gmail.com
- No codebase or Figma was provided; the system was derived **from the mockup HTML** (which itself contains the canonical color, type, and component patterns) and the logo PNG.

## Products represented

There is **one** product surface: the personal portfolio / freelance site at `Trevor Burkholder` (single homepage). A UI kit recreates it at `ui_kits/site/`.

---

## Content fundamentals

The voice is the most distinctive thing about this brand. It is **plain, slightly dry, full sentences, no marketing language**. The site reads like a senior consultant explaining the work to another senior person who knows the trade. Specifics over adjectives. Numbers over claims.

**Person & address.** First-person singular **I**, second-person **you**. Never "we" — there is no "we." Never "Trevor" in third person on the site itself.

**Casing.**
- **Sentence case everywhere** for titles, headings, button labels: "Book a 15-min intro", "What I do", "How an engagement works."
- **UPPERCASE for mono eyebrows only**: `WHAT I DO`, `BACKGROUND`, `01 — BUILD`. Eyebrows use the mono font with positive letter-spacing.
- Numbered list markers are mono and prefixed with two-digit zero-padding + em-dash: `01 — BUILD`, `02 — RESCUE`.

**Sentence shape.** Short declaratives, then a longer clarifying one. Em-dashes — used freely — for asides. Frequent fragments where it improves rhythm ("Four steps. No surprises."). Avoid semicolons unless the alternative is genuinely awkward.

**Examples (copy directly from the site):**

> Senior fullstack engineer. **Ships the thing.**

> I build production web apps for founders and product teams who need a senior engineer who can scope, ship, and explain the tradeoffs.

> Four kinds of project, scoped tight, shipped fast.

> Almost all of my recent work is under NDA. The engagements below are anonymized but specific. Happy to walk through particulars on a call.

> 15 minutes. No pitch. Either I'm a fit or I can recommend someone who is.

**What we don't do:**
- No emoji. Anywhere. Ever.
- No exclamation marks in marketing copy. The closing dot does the work.
- No "powered by AI" / "transform your business" / "10x" / "synergy" / "unlock" / "elevate."
- No hype superlatives ("world-class," "best-in-class"). Specifics replace them: "ten years in React," "25 recommendations on LinkedIn," "two weeks of free post-launch support."
- No "✨ vibes." If a sentence sounds like a startup deck, rewrite it.

**Reassurance lines** are a recurring shape — small mute-gray captions under a CTA that reduce friction:

> Typical response within one business day. Free consult, no pitch.

> 15 minutes. No pitch. Either I'm a fit or I can recommend someone who is.

**Placeholders** in working mockups are wrapped in bracketed instructions: `[ Replace with one specific sentence — what was the problem, what did you build, what changed. ]`. This is part of the working voice — when content isn't real yet, we say so explicitly rather than fake it.

---

## Visual foundations

### Palette

A two-temperature warm system: **paper** (off-white canvas) against **ink** (warm near-black), with **crimson** as the single saturated accent. No blues. No purples. No gradients.

- `--crimson #B22230` — every CTA, every accent, italic display word, hover state on links. Used confidently and sparingly — never as a wash, only as a punctuation color.
- `--paper #FBF8F4` — primary canvas; the page background inside content frames.
- `--paper-2 #F1ECE3` — secondary band background, used for the "Background" section and other quiet rest stops between white sections.
- `--paper-3 #ECE7DC` — the page-shell background **outside** the content frame (lets the mock frame float on warmer paper).
- `--ink #14110F` — near-black with a warm cast; default text and the inverse "capture" band background.
- `--ink-2 #2A2520`, `--mute #6A625A`, `--rule #D9D2C7` — secondary text, tertiary/mono labels, hairline rule color.
- `--green #2F6E4E` — the only other accent, used exclusively for the "Available for new projects" availability pill (with an 8% green-soft background tint).

### Type

- **Fraunces** — display + headlines + serif lede. Weight **500** for almost everything; **400** for the occasional larger paragraph-as-statement. Negative letter-spacing on big sizes (`-0.025em` on hero h1). Optical sizing enabled (`opsz` axis). The italic crimson display word ("*Ships the thing.*") is the brand's signature type move. (Self-hosted via `fonts/Fraunces-VariableFont_SOFT_WONK_opsz_wght.ttf` + `-Italic`.) Three additional opt-in static cuts are wired as separate families for designers who want a fixed-softness sibling: `Fraunces 72pt`, `Fraunces 72pt Soft`, and `Fraunces 72pt SuperSoft` (Thin → Black, roman + italic). Default brand use stays on the variable.
- **Inter** — sans body. Weights 400/500/600. Used for everything that isn't display or mono. (Self-hosted via `fonts/InterVariable.woff2` — the variable file covers all weights in one ~340 KB asset.)
- **Inter Display** — optical-size sibling of Inter, available as an extra family if a design ever wants tight Inter at headline sizes. Not used by the brand by default.
- **JetBrains Mono** — labels, eyebrows, meta, numerals, code. Weights 400/500. Always at small sizes (11–14px), almost always uppercase with positive letter-spacing. (Self-hosted as individual weight files in `fonts/`.)

All three families are **self-hosted** from `fonts/` — no Google Fonts call. The system stack fallbacks (Georgia for serif, system-ui for sans, ui-monospace for mono) are declared in `colors_and_type.css` for the brief FOIT window before the variable files load.

### Layout

- **Max content width 1080px**, gutters 48px on a 32px outer wrap. The "mock frame" outer pattern (an 1180px wrapper around an 1080px content column) is part of the personal-site presentation, not a UI convention.
- **Long generous vertical rhythm** — sections breathe at 64–88px top padding. Never cramp.
- **Heavy reliance on hairline rules** (`1px solid var(--rule)`) instead of cards. Lists of engagements and process steps use top/bottom borders, not shadows.
- **Grids are explicit** — `1fr 1fr` for services and quotes; `60px 1fr 1.4fr auto` for the engagement table-row pattern. No magic.

### Backgrounds

- Solid colors only. **No gradients. No background images. No textures. No noise.** Section backgrounds alternate `paper → paper-2 → white → ink → crimson` for rhythm.
- The dark `--ink` capture band and the crimson CTA band are the only times white text appears.
- Imagery, when used, is single editorial photographs (placeholder slots in this system — no fake stock imagery has been added).

### Cards

Used sparingly. Two patterns:

1. **Quote card** — `padding: 32px; border: 1px solid var(--rule); border-radius: 6px; background: white;`. Hairline, no shadow.
2. **Mock frame** — `border-radius: 8px; overflow: hidden; box-shadow: 0 1px 0 rgba(0,0,0,0.04), 0 20px 60px -20px rgba(20,17,15,0.35);` — the only place a real drop-shadow appears. Used for presenting a screen-within-a-page (e.g. the mockup wrapper).

### Borders & radii

- `--r-md 4px` — buttons, inputs, small chips. The default.
- `--r-lg 6px` — cards.
- `--r-xl 8px` — full mock-frame.
- `--r-pill 100px` — the availability pill (only).
- Hairline `1px solid var(--rule)` is the workhorse divider. Heavier rules are usually a sign you're doing something wrong.

### Buttons & interactive states

- **Primary** (crimson fill, paper text). Includes an optional mono micro-badge inside the button (`CALENDLY`, `→`) on a 18%-tint background. Hover → `--crimson-deep`. No transform on press.
- **Secondary** (text + 1px underline of `--ink-2`). Hover swaps color and underline to crimson — both at once.
- **Inverse** (paper fill on the dark capture band).
- **Hover state** across the system is **color shift only** — text from ink to crimson, button background from crimson to crimson-deep. No opacity changes, no shadow lifts, no scale transforms. The exception: link rows in the engagement table swap their title color to crimson on row hover.
- **Press / active state** = no movement. The brand reads as still and confident.

### Motion

- Minimal. `transition: color 120ms` on link hovers. That's most of it.
- No bouncy easing, no entrance animations, no scroll reveals. If an animation does appear, it should be a 180–280ms ease (`cubic-bezier(.2,.7,.2,1)` for anything that needs character).

### Transparency & blur

- Almost never used. The available pill uses an 8%-tint background. The capture band uses 6%/16% rgba whites for inputs. No backdrop-filter, no glassmorphism.

### Shadow system

- One shadow: the **mock-frame** drop-shadow defined above. Everything else uses borders. If you find yourself reaching for a shadow on a button, card, or input — don't.

---

## Iconography

The brand uses **almost no icons**. Inspect the source mockup: the only "iconography" present is:

1. The **logo mark** — a custom illustrative symbol of curly-brace `{ }` containing sunglasses with `</>` in each lens and a quiff of hair on top. The full PNG (`assets/logo-linkedin.png`) is the canonical asset. A clean SVG recreation lives at `assets/logo-mark.svg` for use in the page header at 32px.
2. **A 6px dot** indicating availability (CSS-drawn, green).
3. **Arrow glyphs as text** — `→`, `←` inline in copy and buttons. Never an icon component.
4. **The `CALENDLY` mono micro-label** inside the CTA button — a typographic device, not an icon.

There is **no icon font, no icon library, no SVG sprite, no emoji** in this brand. When a UI feature would conventionally lean on an icon (e.g. a checkmark in a step list, a chevron in a nav link), this brand replaces it with **typography**: a mono `01 — BUILD` numeral, an em-dash, or a `→` glyph.

**If an icon is genuinely required** (e.g. for a feature this brand hasn't built yet), use **Lucide** at `stroke-width: 1.5`, `size: 16–20px`, `color: currentColor` — its restrained 1.5px stroke geometry is the closest match to the mono-label visual weight already in the system. Flag the addition; it's a system extension, not a default.

Unicode characters used as visual elements: `→` (footer/CTA link arrow), `·` (middot, used as a separator in mono meta lines like "Cleveland-based · remote-first"), em-dash `—` (used heavily in copy and as the connector in numbered service titles `01 — BUILD`).

---

## Index

```
README.md                  — this file
SKILL.md                   — Claude Code-compatible skill entrypoint
colors_and_type.css        — design tokens (CSS variables) + semantic classes
                             + @font-face rules for the self-hosted brand fonts

fonts/                     — self-hosted brand font files (woff2 + ttf)
  Fraunces-VariableFont_SOFT_WONK_opsz_wght.ttf
  Fraunces-Italic-VariableFont_SOFT_WONK_opsz_wght.ttf
  Fraunces_72pt-*.ttf      — static 72pt cut, 6 weights × roman + italic
  Fraunces_72pt_Soft-*.ttf — softer static 72pt cut
  Fraunces_72pt_SuperSoft-*.ttf — softest static 72pt cut
  InterVariable.woff2      — Inter, all weights in one variable file
  InterVariable-Italic.woff2
  InterDisplay-*.woff2     — Inter Display optical-size sibling (15 weights)
  JetBrainsMono-*.woff2    — JetBrains Mono individual weights

assets/
  logo.svg                 — canonical wide mark, colored for placement on crimson
  logo-paper.svg           — wide mark in crimson + ink, for paper / light surfaces
  logo-mono-ink.svg        — single-color (ink) wide mark, for monochrome treatments
  logo-mark.svg            — self-contained square badge (crimson bg + mark) for favicons / avatars
  logo-linkedin.png        — original LinkedIn banner (full crop, 1585×803)
  headshot.jpg             — portrait photo, 512×683, used in About + avatars

preview/                   — design-system card files (small specimens)
  *.html                   — individual cards registered into the project's
                             Design System review pane

reference/
  portfolio-v3.html        — the source mockup that defined the system

ui_kits/
  site/                    — the freelance portfolio (recreation)
    README.md
    index.html             — interactive single-page recreation
    *.jsx                  — reusable React components
```
