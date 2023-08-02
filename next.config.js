// next.config.js
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true }

module.exports = withContentlayer(nextConfig)

module.exports = {
    images: {
      domains: ["images.pexels.com","miro.medium.com", "www.cnet.com"],
    },
  }

  
