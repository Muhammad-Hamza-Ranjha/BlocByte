import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Cross-Origin-Embedder-Policy",
    value: "require-corp",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
  {
    key: "X-Permitted-Cross-Domain-Policies",
    value: "none",
  },
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "browsing-topics=()",
      "payment=()",
      "usb=()",
    ].join(", "),
  },
];

const staticPageCacheHeader = {
  key: "Cache-Control",
  value: "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
};

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2_592_000,
  },
  async redirects() {
    return [
      {
        source: "/career",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/carrer",
        destination: "/careers",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/",
        headers: [staticPageCacheHeader],
      },
      {
        source: "/about",
        headers: [staticPageCacheHeader],
      },
      {
        source: "/blog",
        headers: [staticPageCacheHeader],
      },
      {
        source: "/careers",
        headers: [staticPageCacheHeader],
      },
      {
        source: "/contact",
        headers: [staticPageCacheHeader],
      },
      {
        source: "/trading-platform",
        headers: [staticPageCacheHeader],
      },
      {
        source: "/services/:path*",
        headers: [staticPageCacheHeader],
      },
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0",
          },
          ...securityHeaders,
        ],
      },
    ];
  },
};

export default nextConfig;
