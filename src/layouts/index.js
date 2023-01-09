import React from "react";
import Transition from "./transition";
import GlobalFonts from "@components/GlobalFonts";
import GlobalStyles from "@components/GlobalStyles";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Global, css } from "@emotion/react";

const Layout = ({ children, location }) => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <main
        css={css`
          overflow: hidden;
          padding-top: 150px;
        `}
      >
        <Header />
        <Transition location={location}>{children}</Transition>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
