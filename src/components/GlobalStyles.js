import React from "react";
import { Global, css } from "@emotion/react";
import { DARK, LIGHT } from "../styles/colors";

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        background-color: ${LIGHT};
      }

      #___gatsby {
        margin: 0;
        font-size: 18px;
        font-family: "nexa-text-regular", sans-serif;
        line-height: 1.4em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        color: ${DARK};
        box-sizing: border-box;
        margin: 0;
      }

      a,
      a:visited {
        color: black;
        text-decoration: none;
      }

      button {
        padding: 0px;

        &:hover,
        &:focus {
          outline: none;
        }
      }

      img {
        max-width: 100%;
      }
    `}
  />
);

export default GlobalStyles;
