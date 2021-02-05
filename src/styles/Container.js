import React from "react";
import { css } from "@emotion/react";

const widths = {
  sm: 620,
  md: 700,
  lg: 1000,
  xl: 2400,
};

const Container = ({ size, children }) => (
  <div
    css={css`
      width: 100%;
      max-width: ${widths[size] || widths["xl"]}px;
      margin: 0 auto;
      padding: 0px {(size === 'xl') ? 0 : 15}px;
    `}
  >
    {children}
  </div>
);

export default Container;
