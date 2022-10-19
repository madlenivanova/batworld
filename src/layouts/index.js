import React, { useState, useEffect } from "react";
import Transition from "./transition";
import GlobalFonts from "@components/GlobalFonts";
import GlobalStyles from "@components/GlobalStyles";

const Layout = ({ children, location }) => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <main>
        <Transition location={location}>{children}</Transition>
      </main>
    </>
  );
};

export default Layout;
