/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
