# Positioning

## What this site is for

To generate freelance inbound for Trevor Burkholder — senior fullstack
engineer, Cleveland-based, available remote. Specifically: the site is
the destination an Upwork prospect or LinkedIn visitor hits after seeing
his profile, to decide in roughly 60 seconds whether to book a call.

This is the primary job. Everything else is secondary.

The site is also itself a small portfolio piece. Its architecture,
voice, and restraint should reflect the same judgment a senior client
wants in the engineer they hire. A hiring manager who lands here from
LinkedIn looking at Trevor as a potential FTE candidate (the
secondary audience) gets the same signal from the same site — the page
doesn't try to do that job differently.

## Who it's for

Three audiences, in priority order:

1. **Upwork prospects.** Already in evaluation mode, already know
   Trevor's rate and basic stack. Need to confirm credibility and find a
   one-click path to a conversation.
2. **LinkedIn visitors.** Recruiters and hiring managers who clicked
   from his profile. Need to see whether he ships work that resembles
   theirs.
3. **Direct referrals.** Someone forwarded the URL. Already pre-sold;
   site just needs to not screw it up.

Explicitly NOT designed for:

- Drive-by traffic from search, Hacker News, Twitter
- Other developers looking for code samples (that's what GitHub is for)
- SEO ranking on generic terms

## What the site must convey

In order:

1. **Trevor is senior and available.** The "Available for new projects"
   pill in the hero does the heaviest lifting on the page. Strip it the
   moment he books up.
2. **Trevor has shipped real production work.** Anonymized recent
   engagements with enough specificity to be credible without breaking
   NDA.
3. **People who've worked with Trevor recommend him.** 25 LinkedIn
   recommendations, two featured on the page, link to all.
4. **There's a clear, low-friction path to a conversation.** Calendly
   in three places (nav, hero, closing band). Email as fallback.

## What the site must NOT convey

- Junior energy. The crimson-glasses logo is fine at small sizes; never
  at hero scale. Lowercase nav, exclamation marks, and emoji are out.
- B2B-SaaS marketing voice. No "transform your business," no "10x," no
  hype superlatives, no "powered by AI."
- That AI is the headline. Trevor uses Claude and ChatGPT fluently;
  this gets one honest line in the hero. The trap is leading with "I
  use AI" — every third Upwork profile already does that and buyers
  read it as a downgrade signal.
- That this is a portfolio of nameable client work. It isn't; the
  recent engagements are NDA-protected and described anonymously.

## Scope ceiling

Single-page site at v1. About is a *section* on the homepage, not a
separate page. No `/work/[slug]` deep pages for individual engagements
— the engagements are anonymized table rows, not case studies.

Maximum three featured engagement rows. Two specific is stronger than
three vague; if there isn't a third real one Trevor can describe
without breaking NDA, ship two.

Maximum two LinkedIn recommendations featured on-page (currently Rex
Petersen and Keith O'Connel; both in `design-system/ui_kits/site/Testimonials.jsx`).

## What v1 looks like

The composition is already defined in
`design-system/ui_kits/site/index.html`:

```
Nav → Hero → Background → About → Services → Work → Testimonials → Process → CtaBand → Footer
```

That's the entire site. One scroll, one page. The implementation job
is porting these ten components from JSX (with inline styles) to TSX
inside a Next.js App Router project.

## What kills this site

- **Scope creep.** Building features instead of polishing the existing
  page. A blog. A CMS. A second page. An animation library. None of
  these belong here.
- **Delay.** Shipping nothing because copy isn't perfect. Two
  weekends. Rough and live beats perfect and unshipped.
- **Drifting from the design system.** The components in
  `design-system/ui_kits/site/` are the canonical look. Don't redesign
  them during the port; replicate them in TSX.

The hardest part of this project is not the build. The hardest part is
writing the three real engagement descriptions without breaking NDA.
Budget for that, not for the code.
