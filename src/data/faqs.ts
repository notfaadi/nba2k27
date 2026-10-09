export type FaqItem = {
  q: string
  a: string
}

/** Master FAQ — visible on /faq and reused in sections. */
export const SITE_FAQS: FaqItem[] = [
  {
    q: 'What are NBA 2K27 Cheats?',
    a: 'NBA 2K27 Cheats are NBA 2K27 tools on localhost:5174 — Auto Green & perfect shot timing, Court Vision player overlay, player highlight, defenders and MyTeam card & badge overlay, and a 2D court radar — with live 2K Anti-Cheat status after game patches.',
  },
  {
    q: 'How much do NBA 2K27 cheats cost?',
    a: `NBA 2K27 cheats start from $35 for short access. Longer licenses cost more. Always confirm live 2K Anti-Cheat status and the price on localhost:5174 before checkout.`,
  },
  {
    q: 'Do you sell NBA 2K27 hacks for other games?',
    a: 'No. localhost:5174 sells NBA 2K27 cheats / NBA 2K27 hacks only — one product, no multi-game catalog.',
  },
  {
    q: 'Is Auto Green the main feature?',
    a: 'Auto Green is optional. Most buyers lead with NBA 2K27 Court Vision, loot highlighting and radar awareness, then enable perfect shot timing only if they want it.',
  },
  {
    q: 'How do you handle 2K Anti-Cheat updates?',
    a: 'We publish live clear-to-load or Updating labels after NBA 2K27 and 2K Anti-Cheat patches. Always check status on localhost:5174 before you load.',
  },
  {
    q: 'What is NBA 2K27 Court Vision / player highlight?',
    a: 'NBA 2K27 Court Vision and player highlight show opponents, defenders and loot through walls with distance and health when supported. MyTeam card & badge overlay highlights guns, ammo and medical gear so empty houses stop wasting your time.',
  },
  {
    q: 'What is a NBA 2K27 court radar?',
    a: 'The court radar is a 2D overlay for off-screen opponents and third parties — useful for military loot approaches and avoiding ambushes on Rec Center or Park.',
  },
  {
    q: 'What features are included?',
    a: 'NBA 2K27 Auto Green with perfect shot timing, Court Vision player overlay, defender read overlay, loot and item ESP, court radar, MyTeam and VC intel, spoofer and stream-proof options — NBA 2K27 on Windows PC only. See the Features Checklist guide for the full list.',
  },
  {
    q: 'Do NBA 2K27 Cheats work on official and private Pro-Am lobbys?',
    a: 'Yes. The cheats run on official NBA 2K27 onlines and on private Pro-Am lobbys using most common mod setups. Heavily modded servers with custom anti-cheat scripts can behave differently — ask support before you buy.',
  },
  {
    q: 'How do I buy NBA 2K27 cheats?',
    a: 'Start on the homepage, confirm live 2K Anti-Cheat status and review the price from $35. Open Product details for compatibility and features, then continue to checkout for digital delivery.',
  },
  {
    q: 'How do I load NBA 2K27 Cheats?',
    a: 'After checkout, follow the Complete Setup forum thread for the current load order. If status is Updating, wait rather than forcing an outdated build.',
  },
  {
    q: 'Where do I get NBA 2K27 Cheats support?',
    a: 'Use the Support page and your checkout order channel. Include current 2K Anti-Cheat status and whether you need load, menu or delivery help.',
  },
  {
    q: 'Where can I read NBA 2K27 Cheats reviews?',
    a: 'Player reviews with ratings are on the Reviews page. They cover ESP usefulness, status honesty and patch survival before you buy.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Digital licenses follow the Refunds page — delivery failures and extended Updating windows can qualify; change of mind after a working key does not.',
  },
  {
    q: 'Is this the official NBA 2K27 site?',
    a: 'No. We sell NBA 2K27 Cheats only. Buy and play the game from nba.2k.com. We are not affiliated with 2K Sports or NBA 2K27.',
  },
]

/** Commercial questions shown on the homepage; FAQ schema lives on /faq only. */
export const HOME_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[9],
]

export const PRODUCT_PAGE_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[6],
  SITE_FAQS[9],
  SITE_FAQS[11],
]
