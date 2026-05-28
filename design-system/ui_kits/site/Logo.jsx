// Brand mark — references the canonical SVG variants in /assets.
// variant: "badge"  → self-contained crimson rounded badge with mark inside (default)
//          "crimson"→ wide mark designed for placement on a crimson surface
//          "paper"  → wide mark in crimson/ink for paper / light surfaces
//          "ink"    → mono-ink wide mark
function Logo({ size = 32, variant = "badge", style }) {
  const src = {
    badge:   "../../assets/logo-mark.svg",
    crimson: "../../assets/logo.svg",
    paper:   "../../assets/logo-paper.svg",
    ink:     "../../assets/logo-mono-ink.svg",
  }[variant];
  // badge is 3:2 (480×320); wide variants are ~1.9:1 (398×210)
  const aspect = variant === "badge" ? 480 / 320 : 398 / 210.14;
  return (
    <img
      src={src}
      width={Math.round(size * aspect)}
      height={size}
      alt="Trevor Burkholder"
      style={{ display: "block", ...style }}
    />
  );
}

window.Logo = Logo;
