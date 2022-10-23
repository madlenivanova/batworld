import React from "react";
import { Global, css } from "@emotion/react";
import NexaRegularWoff from "@fonts/NexaRegular/font.woff";
import NexaRegularWoff2 from "@fonts/NexaRegular/font.woff2";
import NexaRegularTextWoff from "@fonts/NexaTextRegular/font.woff";
import NexaRegularTextWoff2 from "@fonts/NexaTextRegular/font.woff2";
import NexaBoldWoff from "@fonts/NexaBold/font.woff";
import NexaBoldWoff2 from "@fonts/NexaBold/font.woff2";

const GlobalFonts = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "nexa-regular";
          src: local("nexa-regular"), url(${NexaRegularWoff2}) format("woff2"),
            url(${NexaRegularWoff}) format("woff");
        }

        @font-face {
          font-family: "nexa-text-regular";
          src: local("nexa-text-regular"),
            url(${NexaRegularTextWoff2}) format("woff2"),
            url(${NexaRegularTextWoff}) format("woff");
        }

        @font-face {
          font-family: "nexa-bold";
          src: local("nexa-bold"), url(${NexaBoldWoff2}) format("woff2"),
            url(${NexaBoldWoff}) format("woff");
        }
      `}
    />
  );
};

export default GlobalFonts;
