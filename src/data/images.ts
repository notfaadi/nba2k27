import { NBA2K27_HERO, NBA2K27_SOLDIER, NBA2K27_COVER, NBA2K27_MENU, NBA2K27_ESP } from './media'
import { NBA2K27_OG, getOgImageForPath, PAGE_OG } from './og'

export { NBA2K27_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const NBA2K27_PRODUCT_HERO = NBA2K27_HERO
export const NBA2K27_PRODUCT_COVER = NBA2K27_COVER

export type ImageSeoFields = {
  alt: string
  title: string
  caption: string
}

export const IMAGE_SEO: Record<
  string,
  ImageSeoFields & {
    heroAlt: string
    heroTitle: string
    heroCaption: string
  }
> = {
  nba2k27: {
    alt: 'NBA 2K27 cheats product artwork for NBA 2K27 on PC',
    title: 'NBA 2K27 Cheats Product Details',
    caption: 'NBA 2K27 Auto Green, ESP, player highlight, MyTeam card & badge overlay, court radar and 2K Anti-Cheat compatibility',
    heroAlt: 'NBA 2K27 cheats Auto Green & perfect shot timing and ESP features',
    heroTitle: 'NBA 2K27 Cheats Features',
    heroCaption: 'Review NBA 2K27 Auto Green, ESP, court radar and current 2K Anti-Cheat status',
  },
}

type PageImage = ImageSeoFields & { src: string; og: string }

/** On-page media + dedicated OG JPEG for Google SERP thumbnails. */
export const PAGE_IMAGES: Record<
  'home' | 'forums' | 'reviews' | 'faq' | 'support' | 'product',
  PageImage
> = {
  home: {
    src: NBA2K27_SOLDIER,
    og: PAGE_OG.home,
    alt: 'NBA 2K27 cheats Auto Green and ESP artwork for NBA 2K27 on PC',
    title: 'NBA 2K27 Cheats',
    caption: 'NBA 2K27 Auto Green, ESP, player highlight and court radar overview.',
  },
  forums: {
    src: NBA2K27_HERO,
    og: PAGE_OG.forums,
    alt: 'NBA 2K27 cheats product artwork',
    title: 'NBA 2K27 Cheats Guides',
    caption: 'Setup, Auto Green and ESP guides for NBA 2K27.',
  },
  reviews: {
    src: NBA2K27_ESP,
    og: PAGE_OG.reviews,
    alt: 'NBA 2K27 cheats review artwork',
    title: 'NBA 2K27 Cheats Reviews',
    caption: 'Feature and compatibility feedback for NBA 2K27.',
  },
  faq: {
    src: NBA2K27_MENU,
    og: PAGE_OG.faq,
    alt: 'NBA 2K27 cheats FAQ artwork',
    title: 'NBA 2K27 Cheats FAQ',
    caption: 'Compatibility, feature and setup answers for NBA 2K27.',
  },
  support: {
    src: NBA2K27_HERO,
    og: PAGE_OG.support,
    alt: 'NBA 2K27 cheats support artwork',
    title: 'NBA 2K27 Cheats Support',
    caption: 'Delivery, loader and setup support for NBA 2K27 cheats.',
  },
  product: {
    src: NBA2K27_COVER,
    og: PAGE_OG.product,
    alt: 'NBA 2K27 Auto Green ESP and court radar product artwork',
    title: 'NBA 2K27 Cheats Features',
    caption: 'Product details for NBA 2K27 Auto Green and ESP.',
  },
}

export function getGameImage(_slug: string): string {
  return NBA2K27_PRODUCT_COVER
}

export function getProductHeroImage(_slug: string): string {
  return NBA2K27_PRODUCT_COVER
}

export function getOgImage(path?: string): string {
  return getOgImageForPath(path)
}

export function getPageImage(key: keyof typeof PAGE_IMAGES) {
  return PAGE_IMAGES[key]
}

export function getImageAlt(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroAlt : seo.alt
  return variant === 'product' ? `${name} product details` : `${name} product artwork`
}

export function getImageTitle(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroTitle : seo.title
  return `${name} product`
}
