/**
 * Per-deployment analytics branding.
 *
 * One Umami fork, several Vercel projects. Each sets NEXT_PUBLIC_ANALYTICS_BRAND
 * so it shows its own brand (name, palette, favicon) — no brand is hardcoded.
 * Colours are applied via `<html data-brand={slug}>` + blocks in global.css.
 */
export type BrandSlug = 'kodeka' | 'northflow' | 'kampform';

export interface Brand {
  slug: BrandSlug;
  /** Full product name, e.g. "kodeka analytics". */
  name: string;
  /** Short possessive-friendly label, e.g. "kodeka", "Northflow". */
  short: string;
  homepage: string;
  themeColor: string;
  /** first-letter mark shown in nav + login + favicon. */
  mark: string;
  markBg: string;
  markFg: string;
  favicon: string;
}

export const BRANDS: Record<BrandSlug, Brand> = {
  kodeka: {
    slug: 'kodeka',
    name: 'kodeka analytics',
    short: 'kodeka',
    homepage: 'https://kodeka.no',
    themeColor: '#4b1e3d',
    mark: 'k',
    markBg: '#c9e09b',
    markFg: '#4b1e3d',
    favicon: '/brand/kodeka.svg',
  },
  northflow: {
    slug: 'northflow',
    name: 'Northflow analytics',
    short: 'Northflow',
    homepage: 'https://northflow.no',
    themeColor: '#04120c',
    mark: 'N',
    markBg: '#5fe0b0',
    markFg: '#04120c',
    favicon: '/brand/northflow.svg',
  },
  kampform: {
    slug: 'kampform',
    name: 'Kampform analytics',
    short: 'Kampform',
    homepage: 'https://kampform.no',
    themeColor: '#14110c',
    mark: 'K',
    markBg: '#0f7a4a',
    markFg: '#f3f0e8',
    favicon: '/brand/kampform.svg',
  },
};

export const BRAND_SLUG: BrandSlug =
  (process.env.NEXT_PUBLIC_ANALYTICS_BRAND as BrandSlug) in BRANDS
    ? (process.env.NEXT_PUBLIC_ANALYTICS_BRAND as BrandSlug)
    : 'kodeka';

export const BRAND: Brand = BRANDS[BRAND_SLUG];
