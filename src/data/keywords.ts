/**
 * Target SERP phrases for NBA 2K27 Cheats (worldwide English).
 * Used in meta keywords, schema knowsAbout, and page-level SEO.
 */
export const GLOBAL_KEYWORDS = [
  'nba 2k27 cheats',
  'nba 2k27 cheat',
  'nba 2k27 hacks',
  'nba 2k27 hack',
  'nba 2k27 mod menu',
  'nba 2k27 auto green',
  'nba 2k27 perfect shot',
  'nba 2k27 shot meter cheat',
  'nba 2k27 green window',
  'nba 2k27 court vision',
  'nba 2k27 esp',
  'nba 2k27 player highlight',
  'nba 2k27 court radar',
  'nba 2k27 myteam cheats',
  'nba 2k27 mycareer cheats',
  'nba 2k27 vc glitch',
  'nba 2k27 vc hack',
  'nba 2k27 badge boost',
  'nba 2k27 park cheats',
  'nba 2k27 rec cheats',
  'nba 2k27 pro am cheats',
  'nba 2k27 infinite stamina',
  'nba 2k27 dribble cheats',
  'nba 2k27 build cheats',
  'undetected nba 2k27 cheats',
  'nba 2k27 anti cheat bypass',
  'nba 2k27 2k anti cheat',
  'buy nba 2k27 cheats',
  'nba 2k27 cheats pc',
  'nba 2k27 cheats steam',
  'nba 2k27 cheats windows',
  'nba 2k27 spoofer',
  'nba 2k27 hwid spoofer',
  'nba 2k27 loader',
  'nba 2k27 cheat status',
] as const

export const PAGE_KEYWORDS: Record<string, readonly string[]> = {
  '/': [
    'nba 2k27 cheats',
    'nba 2k27 hacks',
    'nba 2k27 auto green',
    'undetected nba 2k27 cheats',
    'nba 2k27 myteam cheats',
    'nba 2k27 mycareer cheats',
    'nba 2k27 court vision',
    'nba 2k27 vc glitch',
    'buy nba 2k27 cheats',
    'nba 2k27 cheats pc',
  ],
  '/nba2k27-cheats': [
    'nba 2k27 cheats price',
    'nba 2k27 cheat checkout',
    'nba 2k27 auto green buy',
    'nba 2k27 esp buy',
    'nba 2k27 court radar',
    'nba 2k27 cheat features',
    'nba 2k27 mod menu',
    'nba 2k27 spoofer',
    'nba 2k27 cheat status',
    'nba 2k27 hacks pc',
  ],
  '/forums': [
    'nba 2k27 cheat guides',
    'nba 2k27 setup guide',
    'nba 2k27 auto green settings',
    'nba 2k27 court vision guide',
    'nba 2k27 anti cheat status',
    'nba 2k27 loader setup',
    'nba 2k27 cheat tutorials',
  ],
  '/reviews': [
    'nba 2k27 cheats reviews',
    'nba 2k27 hacks reviews',
    'nba 2k27 cheat ratings',
    'nba 2k27 auto green review',
    'nba 2k27 esp review',
  ],
  '/faq': [
    'nba 2k27 cheats faq',
    'nba 2k27 cheat price',
    'nba 2k27 anti cheat safe',
    'nba 2k27 refund policy',
    'nba 2k27 loader help',
  ],
  '/support': [
    'nba 2k27 cheats support',
    'nba 2k27 loader error',
    'nba 2k27 cheat delivery',
    'nba 2k27 setup help',
  ],
  '/privacy': ['nba 2k27 cheats privacy', 'nba 2k27 cheat data policy'],
  '/terms': ['nba 2k27 cheats terms', 'nba 2k27 cheat license'],
  '/refunds': ['nba 2k27 cheats refund', 'nba 2k27 digital license refund'],
  '/cheats': ['nba 2k27 cheats', 'nba 2k27 hacks', 'working 2k27 cheats'],
  '/vc-glitches': ['vc glitch 2k27', 'nba 2k27 vc glitch', 'nba 2k27 free vc'],
  '/best-builds': ['nba 2k27 builds', 'best 2k27 build', 'meta build 2k27'],
  '/badges': ['nba 2k27 badges', '2k27 badge guide', 'best badges 2k27'],
  '/shooting-tips': ['nba 2k27 shooting tips', 'green window 2k27', 'nba 2k27 tips'],
  '/dribbling': ['nba 2k27 dribbling', '2k27 dribble moves', 'ankle breaker 2k27'],
  '/myteam': ['nba 2k27 myteam', '2k27 myteam tips', 'mt farm 2k27'],
  '/mycareer': ['nba 2k27 mycareer', '2k27 mycareer guide', 'fast vc 2k27'],
  '/patch-notes': ['nba 2k27 patch notes', '2k27 update', 'nba 2k27 hacks'],
  '/blog': ['nba 2k27 blog', '2k27 news', 'nba 2k27 glitches'],
  '/about': ['nba hacks 2k27', 'about nba 2k27 cheats'],
  '/contact': ['contact nba 2k27', 'nba 2k27 support'],
}

const MAX_META_KEYWORDS = 28

/** Comma-separated meta keywords tag (deduped, capped). */
export function metaKeywordsForPath(path: string, extra?: string): string {
  const forumGuideKey =
    path.startsWith('/forums/') && path !== '/forums' ? '/forums' : path
  const base = PAGE_KEYWORDS[path] ?? PAGE_KEYWORDS[forumGuideKey] ?? GLOBAL_KEYWORDS
  const merged = new Set<string>([...base])
  if (extra) {
    for (const term of extra.split(/[\s,]+/).filter(Boolean)) {
      merged.add(term.toLowerCase())
    }
  }
  return [...merged].slice(0, MAX_META_KEYWORDS).join(', ')
}
