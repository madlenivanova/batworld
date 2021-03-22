import React, { forwardRef } from "react";
import { css } from "@emotion/react";

const Clouds = forwardRef((props, ref) => (
  <div
    ref={ref}
    css={css`
      height: 300px;
    `}
  >
    <h1>clouds</h1>
  </div>
));

export default Clouds;
