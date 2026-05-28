import type { Config } from "tailwindcss";

// Tokens bind to the CSS variables defined in src/app/globals.css
// (sourced from design-system/colors_and_type.css). Components mostly use
// inline styles + the chrome classes in globals.css; these maps exist so any
// Tailwind utility used (e.g. group-hover) resolves to the same brand tokens.
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: "var(--crimson)",
        "crimson-deep": "var(--crimson-deep)",
        "crimson-soft": "var(--crimson-soft)",
        paper: "var(--paper)",
        "paper-2": "var(--paper-2)",
        "paper-3": "var(--paper-3)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        mute: "var(--mute)",
        rule: "var(--rule)",
        green: "var(--green)",
      },
      fontFamily: {
        serif: "var(--serif)",
        sans: "var(--sans)",
        mono: "var(--mono)",
      },
    },
  },
  plugins: [],
} satisfies Config;
