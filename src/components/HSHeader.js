import React from "react";
import { css } from "@emotion/react";

const HSHeader = () => (
  <div
    css={css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      background: white;
      border-bottom: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 500;

      @media (min-width: 768px) {
        height: 72px;
      }

      @media (min-width: 992px) {
        height: 97px;
      }
    `}
  >
    <h4
      css={css`
        font-family: "univers-light", sans-serif;
        text-transform: uppercase;
        font-size: 24px;
        display: inline;
        margin: 0px;
      `}
    >
      highsnobiety header
    </h4>
  </div>
);

export default HSHeader;
