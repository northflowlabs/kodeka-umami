'use client';
import { createContext, useContext, type ReactNode } from 'react';
import { BRANDS, DEFAULT_BRAND, type Brand, type BrandSlug } from './brand';

const BrandContext = createContext<Brand>(DEFAULT_BRAND);

/** Fed by the server root layout (host-resolved). Client components read it. */
export function BrandProvider({ slug, children }: { slug: BrandSlug; children: ReactNode }) {
  return (
    <BrandContext.Provider value={BRANDS[slug] ?? DEFAULT_BRAND}>{children}</BrandContext.Provider>
  );
}

export function useBrand(): Brand {
  return useContext(BrandContext);
}
