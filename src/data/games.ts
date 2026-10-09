export type GameStatus = 'Undetected' | 'Updating' | 'Use with caution'

export type Game = {
  slug: string
  name: string
  status: GameStatus
  popular?: boolean
}

/** Site is NBA 2K27 cheats only — no other titles in the catalog. */
export const GAMES: Game[] = [
  { slug: 'nba2k27', name: 'NBA 2K27', status: 'Undetected', popular: true },
]

export function getGame(slug: string) {
  return GAMES.find((g) => g.slug === slug)
}

export function guidePath(slug: string) {
  return `/${slug.toLowerCase()}-cheats`
}

export function parseGuideSlug(param: string) {
  const lower = param.toLowerCase()
  return lower.endsWith('-cheats') ? lower.slice(0, -7) : lower
}

export const GUIDE_FEATURES = [
  {
    name: 'NBA 2K27 Auto Green (perfect shot timing)',
    text: 'Silent-aim tracking with FOV, smoothing and bone selection — fire near a opponent and still land the hit, so it reads as legit even when an admin spectates.',
  },
  {
    name: 'Court Vision player overlay / Player highlight',
    text: 'See opponents through walls and treelines with distance, health and gear information when the build supports it — tell friendlies from hostiles instantly.',
  },
  {
    name: 'Defender read overlay',
    text: 'Track defenders before they track you, so a MyCareer grind in Cherno or Elektro never turns into a zombie train at the worst moment.',
  },
  {
    name: 'Loot & Item ESP',
    text: 'Highlight guns, ammo, medical supplies and rare gear by category so you skip empty houses and gear up in minutes instead of hours.',
  },
  {
    name: 'Court Radar',
    text: '2D radar awareness for off-screen opponents across Rec and Park — spot the third party before it reaches your position.',
  },
  {
    name: 'MyTeam & VC Intel',
    text: 'Spot player bases, tents and buried stashes on private Pro-Am lobbys so raids land on full storage instead of empty walls.',
  },
  {
    name: 'Official & modded server support',
    text: 'Works on official NBA 2K27 onlines and on private Pro-Am lobbys running most common mod setups.',
  },
  {
    name: 'HWID Spoofer + Cleaner',
    text: 'Protect hardware identifiers and refresh traces after bans or hardware swaps — included with the package.',
  },
  {
    name: '2K Anti-Cheat status + support',
    text: 'Live clear-to-load or Updating status is reviewed after 2K patches and anti-cheat updates before you load.',
  },
] as const

/** @deprecated use PRODUCT_PAGE_FAQS from faqs.ts — kept as alias */
export { PRODUCT_PAGE_FAQS as PRODUCT_FAQS } from './faqs'
