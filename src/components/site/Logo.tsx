import Image from "next/image";

type LogoVariant = "badge" | "crimson" | "paper" | "ink";

// Canonical SVG variants live in /public (copied from design-system/assets).
const SRC: Record<LogoVariant, string> = {
  badge: "/logo-mark.svg",
  crimson: "/logo.svg",
  paper: "/logo-paper.svg",
  ink: "/logo-mono-ink.svg",
};

export function Logo({
  size = 32,
  variant = "badge",
  priority = false,
}: {
  size?: number;
  variant?: LogoVariant;
  priority?: boolean;
}) {
  // badge is 3:2 (480×320); wide variants are ~1.9:1 (398×210).
  const aspect = variant === "badge" ? 480 / 320 : 398 / 210.14;
  return (
    <Image
      src={SRC[variant]}
      width={Math.round(size * aspect)}
      height={size}
      alt="Trevor Burkholder"
      priority={priority}
      style={{ display: "block" }}
    />
  );
}
