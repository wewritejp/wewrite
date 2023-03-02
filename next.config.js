// @ts-check
const { withBlitz } = require("@blitzjs/next")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = withBlitz(config)
