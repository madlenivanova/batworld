import React from "react";
import { css } from "@emotion/react";
import LoadProvider from "@providers/LoadProvider";
import ResizeProvider from "@providers/ResizeProvider";
import GlobalStyles from "@components/GlobalStyles";
import GlobalFonts from "@components/GlobalFonts";

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalFonts />
      <GlobalStyles />
      <LoadProvider>
        <ResizeProvider>
          <main
            css={css`
              position: relative;
              overflow: hidden;
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
