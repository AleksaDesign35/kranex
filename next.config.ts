import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/hr", destination: "/", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kranexprijevozi.hr" }],
        destination: "https://kranexprijevozi.hr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
