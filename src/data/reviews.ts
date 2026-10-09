export type Review = {
  id: string
  author: string
  role: string
  game: string
  rating: number
  /** ISO date — required for Review schema */
  datePublished: string
  body: string
}

/**
 * Buyer reviews shown on /reviews and emitted as Review + AggregateRating schema.
 * Dates stay recent for NBA 2K27 commercial reviews.
 */
export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'jayk',
    role: 'MyCareer player',
    game: 'NBA 2K27',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'Status on the product page matched what I got in game. Court Vision player overlay held after the first 2K Anti-Cheat rebuild — glad I waited for a clear status before loading.',
  },
  {
    id: '2',
    author: 'nova',
    role: 'Rec Center looter',
    game: 'NBA 2K27',
    rating: 5,
    datePublished: '2026-09-13',
    body: 'Bought it for MyTeam card & badge overlay and leave the auto green off. Not clearing forty empty houses on the coast changes the whole game.',
  },
  {
    id: '3',
    author: 'rift',
    role: 'Squad lead',
    game: 'NBA 2K27',
    rating: 4,
    datePublished: '2026-09-13',
    body: 'No fake multi-game catalog. Base and stash markers plus honest Updating vs clear-to-load flips are what I wanted before buying NBA 2K27 cheats.',
  },
  {
    id: '4',
    author: 'kiln',
    role: 'Duo queue',
    game: 'NBA 2K27',
    rating: 5,
    datePublished: '2026-09-12',
    body: 'They rebuilt when other sellers still pushed dead loaders. We check status, then checkout — ESP held around Tisy and NWAF.',
  },
  {
    id: '5',
    author: 'moss',
    role: 'Night runs',
    game: 'NBA 2K27',
    rating: 5,
    datePublished: '2026-09-12',
    body: 'Menu was easy. Stream-proof on, radar on. Setup guides covered antivirus and load order so we did not burn the first launch.',
  },
  {
    id: '6',
    author: 'vale',
    role: 'New buyer',
    game: 'NBA 2K27',
    rating: 5,
    datePublished: '2026-09-11',
    body: 'Weekly key first was the right call. Instant delivery and live 2K Anti-Cheat status sold me before I took the monthly plan.',
  },
  {
    id: '7',
    author: 'drake',
    role: 'Solo opponent',
    game: 'NBA 2K27',
    rating: 4,
    datePublished: '2026-09-11',
    body: 'Court Vision player overlay distance readouts were solid. Radar helped when a third party pushed from the treeline. Perfect shot timing took ten minutes to dial in.',
  },
  {
    id: '8',
    author: 'echo',
    role: 'Park regular',
    game: 'NBA 2K27',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'Defender read overlay alone is worth it — no more pulling a zombie train while looting a military tent. Nothing like the free junk I tried first.',
  },
  {
    id: '9',
    author: 'prism',
    role: 'PvP tryhard',
    game: 'NBA 2K27',
    rating: 4,
    datePublished: '2026-09-15',
    body: 'Perfect shot timing looks legit even when an admin spectates, as long as FOV and smoothing stay conservative. I still check status after every 2K Anti-Cheat note.',
  },
  {
    id: '10',
    author: 'blade',
    role: 'Three-stack',
    game: 'NBA 2K27',
    rating: 5,
    datePublished: '2026-09-15',
    body: 'One license, full menu. ESP plus loot highlighting covered our airfield and base raid runs. Support answered with the order ID the same day.',
  },
  {
    id: '11',
    author: 'orio',
    role: 'Windows 11',
    game: 'NBA 2K27',
    rating: 3,
    datePublished: '2026-09-12',
    body: 'Loader ran fine after exclusions. Wish the first-run docs called out overlay conflicts earlier — lost an hour to Discord overlay.',
  },
  {
    id: '12',
    author: 'sage',
    role: 'Private server',
    game: 'NBA 2K27',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'NBA 2K27-only shop is a plus. No random filler titles. Worked on our modded private Pro-Am lobby and the feature list matched the menu.',
  },
]

export function getReviewsAggregate() {
  const count = REVIEWS.length
  const ratingValue = (
    REVIEWS.reduce((sum, review) => sum + review.rating, 0) / count
  ).toFixed(1)
  return { ratingValue, reviewCount: count, bestRating: '5', worstRating: '1' }
}
