import React, { useContext, useEffect } from "react";
import { Global, css } from "@emotion/react";
import MonumentExtendedWoff from "./monumentextended-bold-webfont.woff";
import MonumentExtendedWoff2 from "./monumentextended-bold-webfont.woff2";
import UniversLightWoff from "./univers-light.woff";
import UniversLightWoff2 from "./univers-light.woff2";
import { LoadContext } from "../providers/LoadProvider";

const GlobalFonts = () => {
  const { loadFonts } = useContext(LoadContext);

  // load fonts listener
  useEffect(() => {
    if (typeof loadFonts === "function") {
      loadFonts({ families: ["univers-light", "monument"] });
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
          font-family: "monument";
          src: local("monument"), url(${MonumentExtendedWoff2}) format("woff2"),
            url(${MonumentExtendedWoff}) format("woff");
        }
      `}
    />
  );
};

export default GlobalFonts;
