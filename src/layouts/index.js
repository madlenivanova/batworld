import React, { useState, useEffect } from "react";
import Transition from "./transition";
import GlobalFonts from "@components/GlobalFonts";
import GlobalStyles from "@components/GlobalStyles";
import Header from "@components/Header";

const Layout = ({ children, location }) => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <main>
        <Header />
        <Transition location={location}>{children}</Transition>
      </main>
    </>
  );
};

export default Layout;
