import type { Metadata } from "next";
import { inter, jetbrainsMono, fraunces } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trevor Burkholder — Senior fullstack engineer",
  description:
    "Freelance senior fullstack engineer. I build production web apps for founders and product teams who need someone who can scope, ship, and explain the tradeoffs. Ten years in React, day-to-day in TypeScript, Node, and Postgres. Cleveland-based, remote-first.",
  openGraph: {
    title: "Trevor Burkholder — Senior fullstack engineer",
    description:
      "Freelance senior fullstack engineer. I build production web apps for founders and product teams. Cleveland-based, remote-first.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
