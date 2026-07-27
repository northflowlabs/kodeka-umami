'use client';
import type { SVGProps } from 'react';
import { useBrand } from '@/lib/brand-context';

// Per-brand mark for dark surfaces (same colored badge; reads on dark).
const SvgLogoWhite = (props: SVGProps<SVGSVGElement>) => {
  const BRAND = useBrand();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" {...props}>
      <rect width="24" height="24" rx="7" fill={BRAND.markBg} />
      <text
        x="12"
        y="17.5"
        textAnchor="middle"
        fontSize="15"
        fontWeight="800"
        fontFamily="sans-serif"
        fill={BRAND.markFg}
      >
        {BRAND.mark}
      </text>
    </svg>
  );
};
export default SvgLogoWhite;
