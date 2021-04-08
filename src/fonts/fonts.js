import React, { useContext, useEffect } from "react";
import { Global, css } from "@emotion/react";
import UniversLightWoff from "./univers-light.woff";
import UniversLightWoff2 from "./univers-light.woff2";
import UniversRomanWoff from "./univers-roman.woff";
import UniversRomanWoff2 from "./univers-roman.woff2";
import { LoadContext } from "../providers/LoadProvider";

const GlobalFonts = () => {
  const { loadFonts } = useContext(LoadContext);

  // load fonts listener
  useEffect(() => {
    if (typeof loadFonts === "function") {
      loadFonts({ families: ["univers-light", "univers-roman", "monument"] });
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

      `}
    />
  );
};

export default GlobalFonts;
