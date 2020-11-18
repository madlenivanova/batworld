import React, { useContext, useEffect } from "react";
import { Global, css } from "@emotion/react";
import RecklessWoff2 from "./reckless-thin.woff2";
import UniversExtendedWoff2 from "./univers-extended.woff2";
import { LoadContext } from "../providers/LoadProvider";

const GlobalFonts = () => {
  const { loadFonts } = useContext(LoadContext);

  // load fonts listener
  useEffect(() => {
    if (typeof loadFonts === "function") {
      loadFonts({ families: ["reckless-thin", "univers-extended"] });
    }
  }, [loadFonts]);

  return (
    <Global
      styles={css`
        @font-face {
          font-family: "reckless-thin";
          src: local("reckless-thin"), url(${RecklessWoff2}) format("woff2");
        }

        @font-face {
          font-family: "univers-extended";
          src: local("univers-extended"),
            url(${UniversExtendedWoff2}) format("woff2");
        }
      `}
    />
  );
};

export default GlobalFonts;
