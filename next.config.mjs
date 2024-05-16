/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@mui/x-charts"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
