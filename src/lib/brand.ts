/**
 * Per-deployment analytics branding.
 *
 * One Umami fork, several Vercel projects. The brand is resolved from the
 * request host (see resolveBrand) — no brand is hardcoded and no env is read.
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
    favicon: '/brand/kodeka.png',
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

/**
 * Resolve the brand from the request host. Robust against the shared Vercel
 * team suffix: every deployment is `*-northflow.vercel.app`, so we match the
 * unique tokens first (kampform, kodeka) and only then the umami/northflow host.
 *
 * A spoofed/foreign Host header (e.g. `kodeka.evil.com`) must NOT select a brand:
 * we only trust our own domains + the Vercel preview suffix, else DEFAULT_BRAND.
 */
export function resolveBrand(host?: string | null): Brand {
  const h = (host || '').toLowerCase().split(':')[0];
  const trusted =
    /(^|\.)(kodeka\.no|northflow\.no|kampform\.no)$/.test(h) || h.endsWith('.vercel.app');
  if (!trusted) return DEFAULT_BRAND;
  if (h.includes('kampform')) return BRANDS.kampform;
  if (h.includes('kodeka')) return BRANDS.kodeka;
  if (h === 'analytics.northflow.no' || h.startsWith('umami-') || h.startsWith('umami.'))
    return BRANDS.northflow;
  return BRANDS.kodeka;
}

export const DEFAULT_BRAND: Brand = BRANDS.kodeka;
