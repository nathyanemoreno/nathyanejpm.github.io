import * as React from "react";
import type { SVGProps } from "react";
const SvgTravel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <path
      fill="#FFD147"
      stroke="#700099"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.481}
      d="M13.444 7.42a.24.24 0 0 0 .24-.24v-.924a.24.24 0 0 0-.24-.24h-2.8a.24.24 0 0 0-.24.24v.924c0 .133.107.24.24.24h2.8ZM15.552 16.883a.24.24 0 0 0-.24-.24h-.935a.24.24 0 0 0-.24.24v.924c0 .133.107.241.24.241h.934a.24.24 0 0 0 .241-.24v-.925ZM8.777 16.642a.24.24 0 0 0-.24.24v.925c0 .133.107.241.24.241h.934a.24.24 0 0 0 .24-.24v-.925a.24.24 0 0 0-.24-.24h-.934Z"
    />
    <path
      stroke="#FFD147"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.481}
      d="M6.677 7.41v9.238M17.41 7.41v9.238"
    />
    <path
      fill="#700099"
      d="M5.977 7.18h12.134c.773 0 1.4.62 1.4 1.385v1.848c0 .127-.105.23-.234.23a.232.232 0 0 1-.233-.23V8.564a.928.928 0 0 0-.933-.923H5.977a.929.929 0 0 0-.933.923v1.848c0 .127-.105.23-.234.23a.232.232 0 0 1-.233-.23V8.564c0-.765.627-1.385 1.4-1.385ZM19.277 13.414a.232.232 0 0 0-.233.231v1.847c0 .51-.418.924-.933.924H5.977a.929.929 0 0 1-.933-.924v-1.847a.232.232 0 0 0-.234-.23.232.232 0 0 0-.233.23v1.847c0 .766.627 1.386 1.4 1.386h12.134c.773 0 1.4-.62 1.4-1.386v-1.847a.232.232 0 0 0-.234-.23Z"
    />
    <ellipse cx={19.278} cy={12.029} fill="#FFD147" rx={0.467} ry={0.462} />
    <ellipse cx={4.811} cy={12.029} fill="#FFD147" rx={0.467} ry={0.462} />
  </svg>
);
export default SvgTravel;
