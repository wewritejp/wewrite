// @ts-check
const { withBlitz } = require("@blitzjs/next")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  reactStrictMode: true,
  images: {
    domains: ["i.ytimg.com"]
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = withBlitz(config)
