/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey:
      //  "https://news.etihaad-eg.com/api",
      "https://api.icdc-temp.com",
    webDomain: "https://icdc-temp.com",
    // "http://localhost:3000",
  },
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
    domains: [
      "news.etihaad-eg.com",
      "mig-alb-api-1583704581.eu-central-1.elb.amazonaws.com",
      "api.migeneva-temp.com",
      "api.icdc-temp.com",
      "ec2-52-57-24-186.eu-central-1.compute.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
