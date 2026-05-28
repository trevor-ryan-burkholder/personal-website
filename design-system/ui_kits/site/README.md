# Trevor Burkholder — Site UI Kit

A React/JSX recreation of the freelance portfolio site, factored into small reusable components. Source: `reference/portfolio-v3.html`.

Open `index.html` in a browser. No build step — Babel transpiles in the browser.

## Components

- `Nav.jsx` — top nav with logo lockup + link row + primary CTA
- `Hero.jsx` — hero section with availability pill, serif headline (italic accent), lede, CTA pair
- `Background.jsx` — quiet paper-2 band with serif lede + NDA caveat
- `Services.jsx` — `01 — BUILD` four-up grid of service blocks
- `Work.jsx` — anonymized "Recent engagements" table-as-rows
- `Testimonials.jsx` — two quote cards + LinkedIn count link
- `Process.jsx` — numbered four-step process with timing chips
- `CtaBand.jsx` — full-bleed crimson closer
- `Footer.jsx` — paper footer with metadata + links
- `Logo.jsx` — SVG brand mark (from `assets/logo-mark.svg`)

## Notes

- The form button in the lead-capture variant was deleted in v3 (per the source). Not included here.
- Anchors (`#services`, `#work`, etc.) work via standard CSS smooth scroll.
- All copy is the canonical v3 copy from the source mockup.
- Quotes and engagement rows still contain the bracketed placeholder copy from the source — they are the canonical "fill these in" template the site is shipped with.
