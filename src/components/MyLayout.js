import React from "react";
import { css } from "@emotion/react";

import LoadProvider from "@providers/LoadProvider";
import ResizeProvider from "@providers/ResizeProvider";
import GlobalStyles from "@components/GlobalStyles";
import GlobalFonts from "@components/GlobalFonts";

//  <HSHeader />;
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

              /* @media (min-width: 768px) {
                padding-top: 72px;
              }

              @media (min-width: 992px) {
                padding-top: 97px;
              } */
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
