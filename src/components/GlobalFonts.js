import React, { useContext, useEffect } from "react";
import { Global, css } from "@emotion/react";
import { LoadContext } from "@providers/LoadProvider";
import UniversLightWoff from "@fonts/univers-light.woff";
import UniversLightWoff2 from "@fonts/univers-light.woff2";
import UniversRomanWoff from "@fonts/univers-roman.woff";
import UniversRomanWoff2 from "@fonts/univers-roman.woff2";
import UniversBoldWoff from "@fonts/univers-bold.woff";
import UniversBoldWoff2 from "@fonts/univers-bold.woff2";
import UniversBoldCondWoff from "@fonts/univers-bold-cond.woff";
import UniversBoldCondWoff2 from "@fonts/univers-bold-cond.woff2";

const GlobalFonts = () => {
  const { loadFonts } = useContext(LoadContext);

  // load fonts listener
  useEffect(() => {
    if (typeof loadFonts === "function") {
      loadFonts({
        families: [
          "univers-light",
          "univers-roman",
          "univers-bold",
          "univers-bold-cond",
        ],
      });
    }
  }, [loadFonts]);

  return (
    <Global
      styles={css`
        @font-face {
          font-family: "univers-light";
          src: local("univers-light"), url(${UniversLightWoff2}) format("woff2"),
            url(${UniversLightWoff}) format("woff");
        }

        @font-face {
          font-family: "univers-roman";
          src: local("univers-roman"), url(${UniversRomanWoff2}) format("woff2"),
            url(${UniversRomanWoff}) format("woff");
        }

        @font-face {
          font-family: "univers-bold";
          src: local("univers-bold"), url(${UniversBoldWoff2}) format("woff2"),
            url(${UniversBoldWoff}) format("woff");
        }

        @font-face {
          font-family: "univers-bold-cond";
          src: local("univers-bold-cond"),
            url(${UniversBoldCondWoff2}) format("woff2"),
            url(${UniversBoldCondWoff}) format("woff");
        }
      `}
    />
  );
};

export default GlobalFonts;
