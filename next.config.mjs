/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "portfolio-image-store.s3.ap-south-1.amazonaws.com",
      },
      {
        hostname: "image.prntscr.com",
      },
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "iili.io",
      },
    ],
  },
};

export default nextConfig;
