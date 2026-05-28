import localFont from "next/font/local";

// Self-hosted brand fonts. All files live in src/fonts so the app build is
// self-contained — no design-system dependency, no runtime Google call.

// Inter — body sans. Single variable file covers all weights.
export const inter = localFont({
  src: "../fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

// JetBrains Mono — labels, eyebrows, meta. Brand uses 400/500.
export const jetbrainsMono = localFont({
  src: [
    {
      path: "../fonts/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/JetBrainsMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Fraunces — display serif. Variable font; italic powers the hero accent.
export const fraunces = localFont({
  src: [
    {
      path: "../fonts/Fraunces-VariableFont_SOFT_WONK_opsz_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/Fraunces-Italic-VariableFont_SOFT_WONK_opsz_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
});
