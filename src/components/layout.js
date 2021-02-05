import React from "react";
import { Global, css } from "@emotion/react";
import GlobalFonts from "../fonts/fonts";
import LoadProvider from "../providers/LoadProvider";
import ResizeProvider from "../providers/ResizeProvider";

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
      z-index: 20;

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

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        margin: 0;
      }
      #___gatsby {
        margin: 0;
        font-size: 16px;
        font-family: "univers-light", sans-serif;
        line-height: 1.4em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        color: rgba(33, 23, 3, 1);
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

const Layout = ({ children }) => {
  return (
    <div>
      <HSHeader />
      <GlobalFonts />
      <GlobalStyles />
      <LoadProvider>
        <ResizeProvider>
          <main
            css={css`
              padding-top: 60px;
              position: relative;
              overflow: hidden;

              @media (min-width: 768px) {
                padding-top: 72px;
              }

              @media (min-width: 992px) {
                padding-top: 97px;
              }
            `}
          >
            {children}
          </main>
        </ResizeProvider>
      </LoadProvider>
    </div>
  );
};

export default Layout;
