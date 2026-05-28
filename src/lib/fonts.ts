import localFont from "next/font/local";
import { Fraunces } from "next/font/google";

// Inter — body sans. Single variable file covers all weights.
export const inter = localFont({
  src: "../../design-system/fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

// JetBrains Mono — labels, eyebrows, meta. Brand uses 400/500.
export const jetbrainsMono = localFont({
  src: [
    {
      path: "../../design-system/fonts/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../design-system/fonts/JetBrainsMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Fraunces — display serif. Loaded via next/font/google (self-hosted at
// build time, no runtime Google call) per docs/stack.md, until a Fraunces
// .woff2 lands in design-system/fonts. Italic is required for the hero accent.
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});
