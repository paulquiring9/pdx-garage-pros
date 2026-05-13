import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/garage-door-off-track-repair-portland",
        destination: "/garage-door-off-track-portland",
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
