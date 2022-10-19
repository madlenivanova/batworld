import React, { useState, useEffect } from "react";
import Transition from "./transition";
import { css } from "@emotion/react";
import GlobalFonts from "@components/GlobalFonts";
import GlobalStyles from "@components/GlobalStyles";

const Layout = ({ children, location }) => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <main
        css={css`
          border: 1px solid red;
        `}
      >
        <Transition location={location}>{children}</Transition>
      </main>
    </>
  );
};

export default Layout;
