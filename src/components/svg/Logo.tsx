import type { SVGProps } from 'react';
import { BRAND } from '@/lib/brand';

// Per-brand mark, generated from the active brand (no hardcoded logo).
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
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
export default SvgLogo;
