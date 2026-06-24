import type { SVGProps } from 'react';

// Northflow-merke: navy avrundet firkant med hvit bowtie.
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width="24" height="24" rx="5" fill="#37425C" />
    <path fill="#fff" d="M4.6 6 12 12 4.6 18Z" />
    <path fill="#fff" d="M19.4 6 12 12 19.4 18Z" />
  </svg>
);
export default SvgLogo;
