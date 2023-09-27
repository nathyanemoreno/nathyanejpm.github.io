import * as React from "react";
import type { SVGProps } from "react";
const SvgEmail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <path
      fill="#700099"
      d="M4.568 6.728c0-.26.213-.472.474-.472h14.216c.262 0 .474.211.474.472v10.371c0 .26-.212.472-.474.472h-5.212a.236.236 0 1 1 0-.472h5.212V6.728H5.042v3.771c0 .13-.106.236-.237.236a.236.236 0 0 1-.237-.236V6.728ZM4.805 14.035a.236.236 0 0 0-.237.236v2.828c0 .26.213.472.474.472h5.213a.236.236 0 1 0 0-.471H5.042v-2.83a.236.236 0 0 0-.237-.235Z"
    />
    <path
      fill="#FFD147"
      stroke="#700099"
      strokeLinejoin="round"
      strokeWidth={0.481}
      d="M11.996 12.57a.24.24 0 0 0 .306 0l6.872-5.657a.24.24 0 0 0-.153-.426H5.278a.24.24 0 0 0-.153.426l6.871 5.658Z"
    />
    <ellipse cx={12.15} cy={17.335} fill="#FFD147" rx={0.474} ry={0.472} />
    <ellipse cx={4.806} cy={12.385} fill="#FFD147" rx={0.474} ry={0.472} />
    <path
      stroke="#700099"
      strokeLinecap="round"
      strokeWidth={0.481}
      d="m19.377 17.218-5.805-5.54M10.73 11.678l-5.806 5.54"
    />
  </svg>
);
export default SvgEmail;
