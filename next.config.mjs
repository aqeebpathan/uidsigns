/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dribbble.com",
      },
      {
        protocol: "https",
        hostname: "www.behance.net",
      },
      {
        protocol: "https",
        hostname: "gyiktpapyfjjwgcfuhik.supabase.co",
      },
    ],
  },
};

export default nextConfig;
