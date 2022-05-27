const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx"],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/nlphub",
  assetPrefix: "/nlphub"

};

module.exports = withMDX(nextConfig);
