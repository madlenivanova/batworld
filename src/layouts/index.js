/** @jsx jsx */
import { Global, css, jsx } from "@emotion/react";
import Header from "../components/Header";
import GlobalFonts from "../fonts/fonts";
import LoadProvider from "../providers/LoadProvider";
import ResizeProvider from "../providers/ResizeProvider";
import { useEffect } from "react";

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        margin: 0;
      }
      html,
      body {
        margin: 0;
        font-size: 16px;
        font-family: "lunch-22-regular", sans-serif;
        line-height: 1.4em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
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

const Layout = ({ children, location }) => {
  return (
    <div>
      <GlobalFonts />
      <GlobalStyles />
      <LoadProvider>
        <ResizeProvider>
          <Header />
          <main
            css={css`
              padding-top: 50px;
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
