/** Single canonical origin for production builds, sitemaps, and SEO verify. */
export const CANONICAL_SITE = (process.env.SITE_URL || 'https://nba2k27hack.org').replace(
  /\/$/,
  '',
)
export const CANONICAL_HOST = new URL(CANONICAL_SITE).hostname
