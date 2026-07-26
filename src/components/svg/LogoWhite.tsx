import type { SVGProps } from 'react';

// kodeka-merket, for mørke flater. Grønn form leser fint på mørkt.
const SvgLogoWhite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    {...props}
  >
    <image href="/kodeka-logo.png" x="0" y="0" width="24" height="24" />
  </svg>
);
export default SvgLogoWhite;
