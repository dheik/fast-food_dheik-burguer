import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "u9a6wmr3as.ufs.sh" },
      { hostname: "t4.ftcdn.net" }, // Added hostname
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dheik-burguer",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
