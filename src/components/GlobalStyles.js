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

      @font-face {
        font-family: "NexaBold";
        src: url("../fonts/NexaBold/font.woff2") format("woff2"),
          url("../fonts/NexaBold/font.woff") format("woff");
      }
      @font-face {
        font-family: "NexaTextRegularItalic";
        src: url("../fonts/NexaTextRegularItalic/font.woff2") format("woff2"),
          url("../fonts/NexaTextRegularItalic/font.woff") format("woff");
      }
      @font-face {
        font-family: "NexaTextRegular";
        src: url("../fonts/NexaTextRegular/font.woff2") format("woff2"),
          url("../fonts/NexaTextRegular/font.woff") format("woff");
      }
      @font-face {
        font-family: "NexaRegularItalic";
        src: url("../fonts/NexaRegularItalic/font.woff2") format("woff2"),
          url("../fonts/NexaRegularItalic/font.woff") format("woff");
      }
      @font-face {
        font-family: "NexaRegular";
        src: url("../fonts/NexaRegular/font.woff2") format("woff2"),
          url("../fonts/NexaRegular/font.woff") format("woff");
      }
      @font-face {
        font-family: "NexaLight";
        src: url("../fonts/NexaLight/font.woff2") format("woff2"),
          url("../fonts/NexaLight/font.woff") format("woff");
      }

      #___gatsby {
        margin: 0;
        font-size: 18px;
        font-family: "NexaTextRegular", sans-serif;
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
