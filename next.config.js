/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    minimumCacheTTL: 60,
    deviceSizes: [
      256,
      320,
      492,
      512,
      640,
      768,
      896,
      1024,
      1152,
      1280,
      1408,
      1536,
      1664,
      1792,
      1920,
      2048,
      2176,
      2304,
      2432,
      2560,
      2688,
      2944,
    ],
    imageSizes: [32, 64, 96, 112, 128, 144, 160, 176, 192, 240],
    formats: ["image/webp"],
    // domains: [
    //   "souq.deltawy.com",
    //   "apps.mohamed-ibrahiem.com",
    //   "192.168.0.201",
    //   "deltawy.com",
    // ],
  },
};

module.exports = nextConfig;
