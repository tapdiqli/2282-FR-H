import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/marques/:path*",
        destination:
          "https://qokbynptuwcxxogg.public.blob.vercel-storage.com/partners/:path*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/jouer-serein",
        destination: "/usage-responsable",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
