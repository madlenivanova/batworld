import React from "react";
import Transition from "./transition";
import GlobalFonts from "@components/GlobalFonts";
import GlobalStyles from "@components/GlobalStyles";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Global, css } from "@emotion/react";
import NavProvider from "@providers/NavProvider";

const Layout = ({ children, location }) => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <NavProvider>
        <main
          css={css`
            overflow: hidden;
          `}
        >
          <Header />
          <Transition location={location}>{children}</Transition>
        </main>
      </NavProvider>
      <Footer />
    </>
  );
};

export default Layout;
