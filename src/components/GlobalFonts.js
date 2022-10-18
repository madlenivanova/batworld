import React, { useContext, useEffect } from "react";
import { Global, css } from "@emotion/react";
import { LoadContext } from "@providers/LoadProvider";
import NexaRegularWoff from "@fonts/nexa-regular.woff";
import NexaRegularWoff2 from "@fonts/nexa-regular.woff2";
import NexaRegularTextWoff from "@fonts/nexatext-regular.woff";
import NexaRegularTextWoff2 from "@fonts/nexatext-regular.woff2";
import NexaBoldWoff from "@fonts/nexa-bold.woff";
import NexaBoldWoff2 from "@fonts/nexa-bold.woff2";

const GlobalFonts = () => {
  const { loadFonts } = useContext(LoadContext);

  // load fonts listener
  useEffect(() => {
    if (typeof loadFonts === "function") {
      loadFonts({
        families: ["nexa-regular", "nexatext-regular", "nexa-bold"],
      });
    }
  }, [loadFonts]);

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
