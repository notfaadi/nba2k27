/**
 * Worker entry for Astro static output in ./dist.
 * IMPORTANT: Always fetch assets via https://assets.local — never the request
 * hostname — or Cloudflare returns HTTP 522 on custom domains.
 *
 * Canonical host is apex (no www). Always 301 www → apex so crawlers never
 * see duplicate content or mismatched canonical/hreflang on www.
 */
function assetsFetch(env, request, pathname) {
  return env.ASSETS.fetch(new Request(new URL(pathname, 'https://assets.local'), request))
}

function withHtmlCharset(response) {
  const contentType = response.headers.get('content-type') || ''
  const primary = contentType.split(',')[0].trim()
  if (!primary.toLowerCase().startsWith('text/html')) return response
  if (/charset=/i.test(primary)) {
    if (contentType.includes(',')) {
      const headers = new Headers(response.headers)
      headers.set('content-type', primary)
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      })
    }
    return response
  }
  const headers = new Headers(response.headers)
  headers.set('content-type', 'text/html; charset=utf-8')
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

/** 301 www → apex (preserve path + query). */
function toApexUrl(url, canonicalHost) {
  const host = url.hostname.toLowerCase()
  const apex = canonicalHost.toLowerCase()
  if (host === apex) return null
  if (host !== `www.${apex}`) return null
  const next = new URL(url.toString())
  next.hostname = apex
  next.protocol = 'https:'
  return next
}

function redirect301(location) {
  return new Response(null, {
    status: 301,
    headers: {
      Location: location,
      'Cache-Control': 'public, max-age=86400',
    },
  })
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const canonicalHost = env.CANONICAL_HOST || 'nba2k27hack.org'

    if (url.protocol === 'http:') {
      url.protocol = 'https:'
      const apex = toApexUrl(url, canonicalHost)
      return redirect301((apex || url).toString())
    }

    const apex = toApexUrl(url, canonicalHost)
    if (apex) {
      return redirect301(apex.toString())
    }

    const assetResponse = await assetsFetch(env, request, url.pathname + url.search)
    const response = withHtmlCharset(assetResponse)

    // Help crawlers + Seobility: advertise preferred host + self-canonical
    const headers = new Headers(response.headers)
    if (!headers.has('Strict-Transport-Security')) {
      headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
    }
    // Canonical + hreflang live only in HTML <head> — avoid duplicate Link headers.
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    })
  },
}
