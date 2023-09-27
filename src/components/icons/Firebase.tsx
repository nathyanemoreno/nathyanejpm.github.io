import * as React from "react";
import type { SVGProps } from "react";
const SvgFirebase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <path
      stroke="#FFD147"
      strokeLinejoin="round"
      strokeWidth={0.481}
      d="m14.813 9.803-2.767-5.282L10.12 8.16"
    />
    <path
      fill="#700099"
      d="M4.586 2.643c0-.097.06-.184.153-.219a.245.245 0 0 1 .265.06l8.061 8.569-.354.317-7.644-8.124v7.144c0 .13-.107.235-.24.235a.238.238 0 0 1-.24-.235V2.643ZM4.827 13.911a.238.238 0 0 0-.24.235v3.756h.48v-3.756a.238.238 0 0 0-.24-.235Z"
    />
    <path
      fill="#700099"
      d="M19.505 6.868a.469.469 0 0 0-.274-.423.491.491 0 0 0-.51.059L4.764 17.537a.464.464 0 0 0 .094.788l6.978 3.287a.493.493 0 0 0 .419 0l6.978-3.287a.469.469 0 0 0 .272-.423v-2.347a.238.238 0 0 0-.24-.235.238.238 0 0 0-.241.235v2.347l-6.978 3.287-6.979-3.287L19.024 6.868v4.93c0 .13.108.235.24.235.134 0 .241-.105.241-.235v-4.93Z"
    />
    <ellipse cx={19.265} cy={13.677} fill="#FFD147" rx={0.482} ry={0.47} />
    <ellipse cx={4.827} cy={12.268} fill="#FFD147" rx={0.482} ry={0.47} />
  </svg>
);
export default SvgFirebase;
