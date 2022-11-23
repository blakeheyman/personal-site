/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    reactStrictMode = true;
    swcMinify = true;
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
