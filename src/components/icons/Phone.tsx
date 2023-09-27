import * as React from "react";
import type { SVGProps } from "react";
const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.715 4.331h4.636c.747 0 1.306.675 1.306 1.444v2.42a.226.226 0 0 1-.453 0v-2.42c0-.532-.382-.962-.853-.962H9.715c-.47 0-.852.43-.852.962v7.233a.226.226 0 1 1-.453 0V5.775c0-.77.559-1.444 1.305-1.444ZM8.636 16.603a.226.226 0 0 0-.226.227v1.458c0 .77.559 1.444 1.305 1.444h4.636c.747 0 1.306-.675 1.306-1.444v-6.27a.226.226 0 1 0-.453 0v6.27c0 .531-.382.962-.853.962H9.715c-.47 0-.852-.43-.852-.962V16.83a.226.226 0 0 0-.227-.227Z"
    />
    <ellipse cx={15.431} cy={10.107} fill="#FFD147" rx={0.453} ry={0.482} />
    <ellipse cx={8.636} cy={14.92} fill="#FFD147" rx={0.453} ry={0.482} />
    <path
      fill="#FFD147"
      stroke="#700099"
      strokeLinecap="round"
      strokeWidth={0.481}
      d="m13.582 4.961.305-.389H10.18l.305.39.422.537a.722.722 0 0 0 .568.276h1.117a.722.722 0 0 0 .568-.276l.422-.538Z"
    />
    <path
      stroke="#FFD147"
      strokeLinecap="round"
      strokeWidth={0.481}
      d="M9.769 18.288h1.585M12.26 18.288h.565"
    />
  </svg>
);
export default SvgPhone;
