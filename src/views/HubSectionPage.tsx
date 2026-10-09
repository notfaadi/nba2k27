import { ArrowRight } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { CheckoutLink } from '../components/CheckoutLink'
import {
  HUB_LAST_UPDATED_LABEL,
  getHubSection,
  HUB_SECTIONS,
  type HubSection,
} from '../data/hub-sections'

type HubSectionPageProps = {
  slug: string
}

function resolveRelated(section: HubSection) {
  return section.relatedSlugs
    .map((s) => {
      if (s === 'forums') return { label: 'Forums & guides', path: '/forums' }
      if (s === 'support') return { label: 'Support desk', path: '/support' }
      return getHubSection(s)
    })
    .filter(Boolean) as Array<HubSection | { label: string; path: string }>
}

export function HubSectionPage({ slug }: HubSectionPageProps) {
  const section = getHubSection(slug)
  if (!section) return null

  const related = resolveRelated(section)
  const showBuy = slug === 'cheats' || slug === 'vc-glitches' || slug === 'mycareer'

  return (
    <div className="content-surface min-h-screen overflow-x-hidden text-white">
      <div className="content-surface-nav">
        <Navbar />
      </div>
      <main className="page-x py-10 sm:py-14">
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-z-soft/80">
            Last updated: {HUB_LAST_UPDATED_LABEL}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{section.h1}</h1>
          <p className="mt-4 text-base leading-relaxed text-white/70">{section.intro}</p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/65 sm:text-base">
            {section.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {showBuy ? (
            <div className="mt-8 flex flex-wrap gap-3">
              <CheckoutLink className="cta-gradient inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-white">
                Buy NBA 2K27 Cheats
              </CheckoutLink>
              <a
                href="/nba2k27-cheats"
                className="inline-flex items-center justify-center rounded-full border border-z-soft/35 bg-z-elevated/80 px-5 py-2.5 text-sm font-semibold text-white hover:border-z-soft/50"
              >
                Product details
              </a>
            </div>
          ) : null}
          {slug === 'blog' ? (
            <a
              href="/forums"
              className="cta-gradient mt-8 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white"
            >
              Open forums & guides
              <ArrowRight className="h-4 w-4" />
            </a>
          ) : null}
          {slug === 'contact' ? (
            <a
              href="/support"
              className="cta-gradient mt-8 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white"
            >
              Go to support desk
              <ArrowRight className="h-4 w-4" />
            </a>
          ) : null}
          <section className="mt-12 border-t border-white/10 pt-8">
            <h2 className="text-lg font-semibold text-white">More NBA 2K27 hubs</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {related.map((item) => {
                const path = item.path
                const label = 'h1' in item ? item.h1 : item.label
                return (
                  <li key={path}>
                    <a
                      href={path}
                      className="text-sm text-z-soft transition-colors hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </section>
          <section className="mt-10 rounded-2xl border border-z-soft/15 bg-z-elevated/40 p-5 sm:p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/45">
              All sections
            </h2>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/60">
              {HUB_SECTIONS.filter((s) => s.slug !== slug).map((s) => (
                <li key={s.path}>
                  <a href={s.path} className="hover:text-white">
                    {s.slug.replace(/-/g, ' ')}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <SiteFooter currentPath={section.path} />
    </div>
  )
}
