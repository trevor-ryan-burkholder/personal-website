import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // A sibling package.json in ~/dev makes Next infer the wrong workspace root,
  // which breaks output file tracing. Pin it to this project.
  outputFileTracingRoot: path.join(__dirname),
  images: {
    // The brand logos are first-party SVGs served via next/image. Allow the
    // optimizer to pass them through, sandboxed so they can't execute script.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
