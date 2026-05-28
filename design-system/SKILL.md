---
name: trevor-burkholder-design
description: Use this skill to generate well-branded interfaces and assets for Trevor Burkholder (Cleveland-based freelance senior fullstack engineer), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

Key files:
- `README.md` — overview, content fundamentals, visual foundations, iconography stance.
- `colors_and_type.css` — design tokens (CSS variables) + semantic classes you can drop into any HTML file.
- `assets/` — `logo-mark.svg` (clean SVG for in-page use at 32px) and `logo-linkedin.png` (full LinkedIn banner).
- `ui_kits/site/` — JSX recreation of the freelance portfolio. Components are factored small (Nav, Hero, Background, Services, Work, Testimonials, Process, CtaBand, Footer, Logo) and reusable. Open `index.html` to see them composed.
- `reference/portfolio-v3.html` — the canonical source mockup the system was derived from.
- `preview/` — small specimen cards for individual tokens / components.

When you generate visual artifacts (slides, mocks, throwaway prototypes), copy assets out of `assets/` and produce static HTML files for the user to view. Link or inline `colors_and_type.css`; it provides the full token set and the `tb-*` semantic classes (`tb-h1`, `tb-eyebrow`, `tb-lede`, `tb-p`, `tb-meta`). For production code, lift the components in `ui_kits/site/` and the rules in `README.md` to become an expert designer for this brand.

The brand voice is **editorial restraint** — first-person singular, plain declarative sentences, mono UPPERCASE eyebrows, sentence-case everywhere else, no emoji, no exclamation marks, no hype superlatives. Specifics over claims. The italic crimson display accent on a Fraunces headline is the brand's signature type move. Hairlines and color shifts do almost all the work the rest of the web reaches for shadows and gradients for.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
