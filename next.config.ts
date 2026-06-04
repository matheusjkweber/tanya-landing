import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // ESLint is intentionally skipped during the production build: this is a
  // single-purpose marketing site and stylistic lint should not gate deploys.
  eslint: { ignoreDuringBuilds: true },
  images: {
    // Demo GIFs are served by the CosmoHQ media proxy under /v1/landing-media/*.
    // They are animated, so we render them with plain <img> tags (next/image
    // would strip the animation). No remote optimization config is needed.
    remotePatterns: [],
  },
};

export default nextConfig;
