import React, { forwardRef } from "react";
import { css } from "@emotion/react";

const Clouds = forwardRef((props, ref) => (
  <div
    ref={ref}
    css={css`
      width: 100%;
    `}
  >
    <svg
      width="1280"
      height="430"
      viewBox="0 0 1280 430"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="1166.99"
        cy="235.272"
        r="191.5"
        transform="rotate(179.163 1166.99 235.272)"
        fill="#D9F56A"
      />
      <circle
        cx="675.752"
        cy="222.45"
        r="149.5"
        transform="rotate(179.163 675.752 222.45)"
        fill="#D9F56A"
      />
      <circle
        cx="457.348"
        cy="162.135"
        r="114"
        transform="rotate(179.163 457.348 162.135)"
        fill="#D9F56A"
      />
      <circle
        cx="270.61"
        cy="249.875"
        r="169"
        transform="rotate(179.163 270.61 249.875)"
        fill="#D9F56A"
      />
      <circle
        cx="26.452"
        cy="172.434"
        r="169"
        transform="rotate(179.163 26.452 172.434)"
        fill="#D9F56A"
      />
      <circle
        cx="950.88"
        cy="194.926"
        r="126"
        transform="rotate(179.163 950.88 194.926)"
        fill="#D9F56A"
      />
      <circle
        cx="573.707"
        cy="117.43"
        r="43"
        transform="rotate(179.163 573.707 117.43)"
        fill="#D9F56A"
      />
      <circle
        cx="828.299"
        cy="87.7063"
        r="84"
        transform="rotate(179.163 828.299 87.7063)"
        fill="#D9F56A"
      />
    </svg>
  </div>
));

export default Clouds;
