/**
 * Ensure proxied CNAME www → apex so HTTPS www hits the Worker and 301s to apex.
 * Runs in Cloudflare CI when CLOUDFLARE_API_TOKEN is set; no-op locally.
 */
import { CANONICAL_HOST } from './canonical-site.mjs'

const token = process.env.CLOUDFLARE_API_TOKEN
const zoneIdEnv = process.env.CLOUDFLARE_ZONE_ID

if (!token) {
  console.log('ensure-www-dns: skipped (CLOUDFLARE_API_TOKEN not set)')
  process.exit(0)
}

const api = (path, init = {}) =>
  fetch(`https://api.cloudflare.com/client/v4${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
  })

async function getZoneId() {
  if (zoneIdEnv) return zoneIdEnv
  const res = await api(`/zones?name=${encodeURIComponent(CANONICAL_HOST)}`)
  const data = await res.json()
  if (!data.success || !data.result?.[0]?.id) {
    throw new Error(`Could not find Cloudflare zone for ${CANONICAL_HOST}`)
  }
  return data.result[0].id
}

async function main() {
  const zoneId = await getZoneId()
  const wwwName = `www.${CANONICAL_HOST}`
  const list = await api(
    `/zones/${zoneId}/dns_records?name=${encodeURIComponent(wwwName)}&per_page=50`,
  )
  const listed = await list.json()
  if (!listed.success) {
    throw new Error(`DNS list failed: ${JSON.stringify(listed.errors)}`)
  }

  const existing = listed.result?.find(
    (r) => r.name === wwwName || r.name === 'www',
  )
  if (existing) {
    if (existing.proxied !== true) {
      const patch = await api(`/zones/${zoneId}/dns_records/${existing.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ proxied: true }),
      })
      const patched = await patch.json()
      if (!patched.success) {
        throw new Error(`Could not enable proxy on www: ${JSON.stringify(patched.errors)}`)
      }
      console.log('ensure-www-dns: enabled Cloudflare proxy on existing www record')
    } else {
      console.log('ensure-www-dns: www record already exists (proxied)')
    }
    return
  }

  const create = await api(`/zones/${zoneId}/dns_records`, {
    method: 'POST',
    body: JSON.stringify({
      type: 'CNAME',
      name: 'www',
      content: CANONICAL_HOST,
      proxied: true,
      comment: 'SEO: www → apex via Worker 301',
    }),
  })
  const created = await create.json()
  if (!created.success) {
    throw new Error(`Could not create www CNAME: ${JSON.stringify(created.errors)}`)
  }
  console.log(`ensure-www-dns: created proxied CNAME www → ${CANONICAL_HOST}`)
}

main().catch((err) => {
  console.error(`ensure-www-dns: ${err.message}`)
  process.exit(1)
})
