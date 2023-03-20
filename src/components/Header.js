import React, { useState, useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { Container, Div } from "@components/Markup";
import { Heading } from "./Typography";
import { Squeeze as Hamburger } from "hamburger-react";
import { DARK, ACCENT, LIGHT } from "../styles/colors";

import Logo from "./Logo";
import { MenuDesktop } from "./Menu";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Dms = () => (
  <Heading
    tag="h6"
    size="COPY"
    uppercase
    ml="md"
    css={css`
      @media (max-width: 767px) {
        display: none;
      }
    `}
  >
    DMS BAT
  </Heading>
);

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      start: 200,
      onToggle: self => {
        const isit = self.isActive || self.progress === 1 ? true : false;
        setIsScrolled(isit);
      },
    });
  }, []);

  return (
    <div
      ref={headerRef}
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 20;
        transition: 0.15s all;
        background-color: ${isScrolled ? DARK : "transparent"};
      `}
    >
      <Container
        css={css`
          position: relative;
          z-index: 2;
          color: ${isOpen || isScrolled ? LIGHT : DARK};

          svg.batworld-logo {
            height: 100%;
            fill: ${isOpen || isScrolled ? LIGHT : DARK};

            .cls-1 {
              fill: ${ACCENT};
            }
          }
        `}
      >
        <Div
          flex
          jc="space-between"
          ai="center"
          css={css`
            height: ${isScrolled ? "90px" : "120px"};
            transition: 0.15s all;
          `}
        >
          <Logo w={isScrolled ? "60px" : "90px"} />
          <Div
            flex
            jc="space-between"
            css={css`
              min-width: 20%;
            `}
          >
            {/* <Div flex ai="center">
              <Dms />
            </Div> */}
            {/* <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              distance="sm"
              size="36"
              color={isOpen || isScrolled ? LIGHT : DARK}
            /> */}
            <MenuDesktop isScrolled={isScrolled} />
          </Div>
        </Div>
      </Container>
      {/* <Menu isOpen={isOpen} /> */}
    </div>
  );
};

export default Header;
