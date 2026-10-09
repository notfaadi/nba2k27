import { blogPath } from './blog-paths'

/** Official NBA 2K27 destinations for factual game context. */
export const OFFICIAL_NBA2K27_LINKS = [
  {
    label: 'NBA 2K27',
    href: 'https://nba.2k.com/',
    description: 'Official NBA 2K27 game site',
  },
  {
    label: 'NBA 2K27 on Steam',
    href: 'https://store.steampowered.com/app/2338770/NBA_2K25/',
    description: 'Official PC store page and client download',
  },
  {
    label: '2K Sports Support',
    href: 'https://support.2k.com/',
    description: 'Publisher support and account help',
  },
] as const

/** Primary internal routes for crawl equity. */
export const SITE_PAGE_LINKS = [
  { label: 'Home', to: '/', description: 'Live status, price and checkout' },
  {
    label: 'Product page',
    to: '/nba2k27-cheats',
    description: 'Auto Green, ESP, MyTeam card & badge overlay, court radar and compatibility details',
  },
  {
    label: 'Forums index',
    to: '/forums',
    description: 'Setup forums — Auto Green, ESP, load, status',
  },
  {
    label: 'Player reviews',
    to: '/reviews',
    description: 'Player reviews and ratings',
  },
  {
    label: 'FAQ answers',
    to: '/faq',
    description: 'Frequently asked questions',
  },
  {
    label: 'Support desk',
    to: '/support',
    description: 'Delivery, loader and setup help',
  },
  {
    label: 'Privacy policy',
    to: '/privacy',
    description: 'Order data and site privacy',
  },
  {
    label: 'Terms of use',
    to: '/terms',
    description: 'License rules and risk disclaimer',
  },
  {
    label: 'Refund policy',
    to: '/refunds',
    description: 'When digital license refunds apply',
  },
] as const

/** SEO hub pages (tips, glitches, builds). */
export const SITE_HUB_LINKS = [
  { label: 'Cheats', to: '/cheats' },
  { label: 'VC glitches', to: '/vc-glitches' },
  { label: 'Best builds', to: '/best-builds' },
  { label: 'Badges', to: '/badges' },
  { label: 'Shooting tips', to: '/shooting-tips' },
  { label: 'Dribbling', to: '/dribbling' },
  { label: 'MyTeam', to: '/myteam' },
  { label: 'MyCareer', to: '/mycareer' },
  { label: 'Patch notes', to: '/patch-notes' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export const SITE_GUIDE_LINKS = [
  { label: 'Features checklist', to: blogPath('features-list') },
  { label: 'Auto Green settings', to: blogPath('auto-green-settings') },
  { label: 'Court Vision guide', to: blogPath('court-vision-guide') },
  { label: 'Court radar', to: blogPath('court-radar-guide') },
  { label: 'Hotkeys', to: blogPath('hotkeys') },
  { label: 'Complete setup', to: blogPath('complete-setup') },
  { label: 'Windows setup', to: blogPath('windows-setup') },
  { label: 'Antivirus exclusions', to: blogPath('disable-antivirus') },
  { label: 'Stream-proof setup', to: blogPath('stream-proof-setup') },
  { label: '2K Anti-Cheat status', to: blogPath('anti-cheat-status') },
  { label: 'MyCareer & Park', to: blogPath('mycareer-play-guide') },
  { label: 'Loader errors', to: blogPath('loader-errors') },
  { label: 'Status checklist', to: blogPath('undetected-status') },
] as const

/** Zadeyo affiliate checkout — slug must be `nba-2k27` (see zadeyo.com/api/products). */
export const CHECKOUT_URL =
  'https://zadeyo.com/go/FDI?to=%2Fproducts%2Fnba-2k27'

export function getCheckoutUrl(_productSlug?: string): string {
  return CHECKOUT_URL
}

export const CHECKOUT_REL = 'nofollow noopener noreferrer'
