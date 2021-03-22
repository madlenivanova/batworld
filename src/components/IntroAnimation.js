import React, { forwardRef } from "react";
import { css } from "@emotion/react";

const IntroAnimation = () => {
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background: pink;
        z-index: 500;
      `}
    ></div>
  );
};

export default IntroAnimation;
