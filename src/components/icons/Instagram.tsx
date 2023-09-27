import * as React from "react";
import type { SVGProps } from "react";
const SvgInstagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <circle
      cx={12.037}
      cy={11.763}
      r={2.255}
      fill="#FFD147"
      stroke="#700099"
      strokeWidth={0.481}
    />
    <circle cx={14.589} cy={9.211} r={0.538} fill="#700099" />
    <path
      fill="#700099"
      d="M16.738 6.793H7.605a.537.537 0 0 0-.537.537v2.418c-.064.287-.474.287-.538 0V7.33c0-.593.481-1.074 1.075-1.074h9.133c.593 0 1.074.481 1.074 1.074v9.133c0 .593-.481 1.075-1.075 1.075h-2.686c-.287-.064-.287-.474 0-.538h2.687c.296 0 .537-.24.537-.537V7.33a.537.537 0 0 0-.537-.537ZM10.29 17H7.606a.537.537 0 0 1-.537-.537v-2.955c-.064-.287-.474-.287-.538 0v2.955c0 .593.481 1.075 1.075 1.075h2.686c.307-.048.307-.49 0-.538Z"
    />
    <circle cx={12.172} cy={17.27} r={0.538} fill="#FFD147" />
    <circle cx={6.799} cy={11.629} r={0.538} fill="#FFD147" />
  </svg>
);
export default SvgInstagram;
