/** Visible recency signal for game-guide SEO (update when content changes). */
export const HUB_LAST_UPDATED = '2026-10-09'
export const HUB_LAST_UPDATED_LABEL = 'October 9, 2026'

export type HubSection = {
  slug: string
  path: `/${string}`
  title: string
  description: string
  keywords: string[]
  h1: string
  intro: string
  bullets: string[]
  relatedSlugs: string[]
}

export const HUB_SECTIONS: HubSection[] = [
  {
    slug: 'cheats',
    path: '/cheats',
    title: 'NBA 2K27 Cheats – All Working Codes & Hacks',
    description:
      'Every working NBA 2K27 cheat and hack, tested after the latest patch. Unlock rewards, free VC, and hidden gameplay exploits fast.',
    keywords: ['nba 2k27 cheats', 'nba 2k27 hacks', 'working 2k27 cheats', '2k27 cheat codes'],
    h1: 'NBA 2K27 Cheats – Working Hacks After the Latest Patch',
    intro:
      'We test NBA 2K27 cheats after every patch so you are not running dead loaders or recycled 2K26 copy-paste. This hub covers PC tools, status checks, and what still works on the current build.',
    bullets: [
      'Confirm live 2K Anti-Cheat status before you load any NBA 2K27 cheat.',
      'Auto Green, Court Vision ESP, and Park/Rec radar are the most searched modules — see our product breakdown.',
      'Avoid third-party mirrors; use only the checkout link tied to your license.',
    ],
    relatedSlugs: ['vc-glitches', 'patch-notes', 'mycareer'],
  },
  {
    slug: 'vc-glitches',
    path: '/vc-glitches',
    title: 'NBA 2K27 VC Glitch – Fast VC Farming Methods',
    description:
      'Farm VC fast in NBA 2K27. Step-by-step VC glitches, MyCareer methods and MyTeam flips that actually work on current patch.',
    keywords: ['vc glitch 2k27', 'nba 2k27 vc glitch', 'nba 2k27 free vc', '2k27 vc farm'],
    h1: 'NBA 2K27 VC Glitch & Fast Farming Methods',
    intro:
      'VC glitches go stale fast when 2K patches daily quests, game lengths, or badge costs. These methods are written for the latest patch and flagged when a hotfix breaks them.',
    bullets: [
      'MyCareer game-length and badge grind routes that still pay VC per hour.',
      'MyTeam auction flips and budget-beast snipes — not guaranteed profit, but tested workflows.',
      'When a VC method stops working, check patch notes before forcing the same steps.',
    ],
    relatedSlugs: ['mycareer', 'myteam', 'patch-notes'],
  },
  {
    slug: 'best-builds',
    path: '/best-builds',
    title: 'Best NBA 2K27 Builds – Meta Builds for Every Position',
    description:
      'Dominate the park and rec with the best NBA 2K27 builds. Meta point guard, wing and big man builds with badges, attributes and animations.',
    keywords: ['nba 2k27 builds', 'best 2k27 build', 'meta build 2k27', '2k27 rec build'],
    h1: 'Best NBA 2K27 Builds for Park, Rec & Pro-Am',
    intro:
      'Meta shifts every patch when 2K tweaks badge weights, blow-bys, and contest penalties. These build frameworks front-load the keywords you search — PG, lock, stretch, and paint beast — with badge priorities that still green in the current meta.',
    bullets: [
      'Point guard: high ball handle, Unpluckable, and a release that matches your latency.',
      'Wing: two-way builds with enough speed to clamp and enough shooting to space.',
      'Big: rebound badges plus standing dunk thresholds for lobs and putbacks.',
    ],
    relatedSlugs: ['badges', 'shooting-tips', 'dribbling'],
  },
  {
    slug: 'badges',
    path: '/badges',
    title: 'NBA 2K27 Badges Guide – Unlock & Upgrade Fast',
    description:
      'Full NBA 2K27 badges list and how to unlock them fast. Best badge loadouts for every build, plus quick upgrade methods.',
    keywords: ['nba 2k27 badges', '2k27 badge guide', 'best badges 2k27', 'badge grind 2k27'],
    h1: 'NBA 2K27 Badges – Unlock & Upgrade Fast',
    intro:
      'Badge XP is the slowest gate in MyCareer. This guide groups must-have badges by position and lists the fastest legitimate grind spots — updated when 2K changes rep or badge costs.',
    bullets: [
      'Core shooting badges: Limitless Range, Deadeye, and your chosen release synergy.',
      'Defense: Chasedown, Intimidator, and Rebound Chaser for rec lobbies.',
      'Grind badges in shorter game lengths until core HOFs are online-ready.',
    ],
    relatedSlugs: ['best-builds', 'mycareer', 'shooting-tips'],
  },
  {
    slug: 'shooting-tips',
    path: '/shooting-tips',
    title: 'NBA 2K27 Shooting Tips – Green Every Jumpshot',
    description:
      'Learn to green your jumpshot in NBA 2K27. Best releases, meter settings, badges and controller tips for consistent shooting.',
    keywords: ['nba 2k27 shooting tips', 'green window 2k27', '2k27 jumpshot', 'nba 2k27 tips'],
    h1: 'NBA 2K27 Shooting Tips – Green Windows & Releases',
    intro:
      'Shooting is timing plus latency plus badge math. We cover meter vs no-meter, best releases for current-gen PC, and how patch notes change contest severity.',
    bullets: [
      'Pick one release and stick with it for 50+ games before swapping.',
      'Use practice mode to map your green window, then test in Park latency.',
      'Stack shooting badges before you chase dribble god animations.',
    ],
    relatedSlugs: ['badges', 'dribbling', 'best-builds'],
  },
  {
    slug: 'dribbling',
    path: '/dribbling',
    title: 'NBA 2K27 Dribble Moves & Ankle Breaker Tips',
    description:
      'Master NBA 2K27 dribbling. Best dribble moves, sig animations and combos to break ankles and create open shots.',
    keywords: ['nba 2k27 dribbling', '2k27 dribble moves', 'ankle breaker 2k27', 'nba 2k27 tips'],
    h1: 'NBA 2K27 Dribbling – Moves, Combos & Ankle Breakers',
    intro:
      'Dribble chains that worked in 2K26 often get stamina-nerfed. These combos focus on creating space for the meta shot, not infinite spam — tuned for the latest patch.',
    bullets: [
      'Unlock essential size-ups and escape packages before flashy Park moves.',
      'Combine hesitations with burst releases once your ball handle threshold is met.',
      'Stamina management matters more after patch changes to blow-by frequency.',
    ],
    relatedSlugs: ['shooting-tips', 'best-builds', 'cheats'],
  },
  {
    slug: 'myteam',
    path: '/myteam',
    title: 'NBA 2K27 MyTeam Tips – Build a God Squad on a Budget',
    description:
      'NBA 2K27 MyTeam guide. Cheap budget beasts, best cards, MT farming and auction house flips to build an elite lineup.',
    keywords: ['nba 2k27 myteam', '2k27 myteam tips', 'mt farm 2k27', 'budget beasts 2k27'],
    h1: 'NBA 2K27 MyTeam – Budget Beasts & MT Tips',
    intro:
      'MyTeam is an economy game. We track budget cards that survive patch buffs, safe auction flips, and when to sell before Friday drops.',
    bullets: [
      'Start with two-way budget wings before you chase dark matter at launch prices.',
      'Run single-player modes for steady MT when auction tax eats margins.',
      'Bookmark patch notes — card rebalances move prices overnight.',
    ],
    relatedSlugs: ['vc-glitches', 'patch-notes', 'blog'],
  },
  {
    slug: 'mycareer',
    path: '/mycareer',
    title: 'NBA 2K27 MyCareer Guide – Fast Leveling & VC Tips',
    description:
      'Level up your NBA 2K27 MyCareer player fast. Best badges, attribute priorities, VC methods and quest tips for max overall.',
    keywords: ['nba 2k27 mycareer', '2k27 mycareer guide', 'fast vc 2k27', 'nba 2k27 tips'],
    h1: 'NBA 2K27 MyCareer – Level Fast & Stack VC',
    intro:
      'MyCareer pacing changes every season with quest rewrites and Gatorade boosts. This route list prioritizes overall grind, badge unlock order, and VC per hour on the current patch.',
    bullets: [
      'Finish core story quests before you optimize badge grind — some gates overall.',
      'Attribute caps: plan height and wingspan before you spend VC.',
      'Pair this page with VC glitches when 2K has not patched daily rewards.',
    ],
    relatedSlugs: ['vc-glitches', 'badges', 'cheats'],
  },
  {
    slug: 'patch-notes',
    path: '/patch-notes',
    title: 'NBA 2K27 Patch Notes – What Changed & Best Hacks',
    description:
      'Latest NBA 2K27 patch notes in plain English. What got nerfed, what still works, and the best hacks after each update.',
    keywords: ['nba 2k27 patch notes', '2k27 update', '2k27 patch', 'nba 2k27 hacks'],
    h1: 'NBA 2K27 Patch Notes – Plain English & Cheat Status',
    intro:
      'Official patch notes are vague. We summarize shooting, badge, and anti-cheat changes, then map what that means for cheats, VC methods, and meta builds.',
    bullets: [
      'After each patch: re-check cheat status before you load online.',
      'Shooting and stamina tweaks usually hit Park before MyCareer.',
      'We update this hub the same week 2K ships a major build.',
    ],
    relatedSlugs: ['cheats', 'vc-glitches', 'blog'],
  },
  {
    slug: 'blog',
    path: '/blog',
    title: 'NBA 2K27 Blog – News, Tips & Glitch Updates',
    description:
      'NBA 2K27 news, gameplay tips and glitch updates. Fresh guides and hacks posted after every patch and season.',
    keywords: ['nba 2k27 blog', '2k27 news', 'nba 2k27 glitches', 'nba 2k27 tips'],
    h1: 'NBA 2K27 Blog – Tips, Glitches & Patch Updates',
    intro:
      'Long-form setup threads and feature guides live in our forums index. This blog hub links fresh posts, patch reactions, and glitch status roundups.',
    bullets: [
      'Browse step-by-step loader and Auto Green guides in the forums.',
      'Subscribe to patch-week updates on the patch notes hub.',
      'Report broken glitches via contact so we can mark methods as patched.',
    ],
    relatedSlugs: ['patch-notes', 'forums', 'cheats'],
  },
  {
    slug: 'about',
    path: '/about',
    title: 'About NBA Hacks 2K27 – Who We Are',
    description:
      'Learn about NBA Hacks 2K27. We test every cheat, glitch and build so you get working 2K27 tips, not recycled copy-paste.',
    keywords: ['nba hacks 2k27', 'about nba 2k27 cheats', '2k27 tips site'],
    h1: 'About NBA Hacks 2K27',
    intro:
      'NBA Hacks 2K27 is a player-first guide and cheats hub for PC. We publish status-checked tools, VC routes, and meta builds — updated after patches, not copied from old 2K games.',
    bullets: [
      'We are not affiliated with 2K Sports or the official NBA 2K27 game.',
      'Commercial PC cheat licenses are sold through our partner checkout.',
      'Every guide shows a last-updated date for recency.',
    ],
    relatedSlugs: ['contact', 'cheats', 'blog'],
  },
  {
    slug: 'contact',
    path: '/contact',
    title: 'Contact NBA Hacks 2K27 – Tips, Fixes & Feedback',
    description:
      'Get in touch with NBA Hacks 2K27. Report a broken glitch, suggest a guide, or ask a question about NBA 2K27.',
    keywords: ['contact nba 2k27', 'nba 2k27 support', 'report glitch 2k27'],
    h1: 'Contact NBA Hacks 2K27',
    intro:
      'For loader, delivery, or license help after purchase, use the support desk. Use this page for guide requests, broken glitch reports, and SEO feedback.',
    bullets: [
      'Buyers: open Support with your order ID and current cheat status screenshot.',
      'Glitch reports: include platform, patch number, and steps to reproduce.',
      'We read every suggestion — popular topics become new hub pages.',
    ],
    relatedSlugs: ['support', 'about', 'patch-notes'],
  },
]

export function getHubSection(slug: string) {
  return HUB_SECTIONS.find((s) => s.slug === slug)
}

export function getHubSectionByPath(path: string) {
  return HUB_SECTIONS.find((s) => s.path === path)
}
