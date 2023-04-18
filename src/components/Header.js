import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import { Container, Div } from "@components/Markup";
import { Heading } from "./Typography";
import { Squeeze as Hamburger } from "hamburger-react";
import { DARK, ACCENT, LIGHT } from "../styles/colors";
import { NavContext } from "@providers/NavProvider";
import Logo from "./Logo";
import { MenuDesktop, Menu } from "./Menu";
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
  const { mobileNavOpen, setMobileNavOpen } = useContext(NavContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      start: 100,
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
          color: ${mobileNavOpen || isScrolled ? LIGHT : DARK};

          svg.batworld-logo {
            height: 100%;
            fill: ${mobileNavOpen || isScrolled ? LIGHT : DARK};

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

            @media (max-width: 767px) {
              height: ${isScrolled ? "60px" : "90px"};
            }
          `}
        >
          <Link to={"/"}>
            <Logo w={isScrolled ? "60px" : "90px"} />
          </Link>
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
            <div
              css={css`
                @media (min-width: 768px) {
                  display: none;
                }
              `}
            >
              <Hamburger
                toggled={mobileNavOpen}
                toggle={setMobileNavOpen}
                distance="sm"
                size="36"
                color={mobileNavOpen || isScrolled ? LIGHT : DARK}
              />
            </div>
            <MenuDesktop isScrolled={isScrolled} />
          </Div>
        </Div>
      </Container>
      <Menu />
    </div>
  );
};

export default Header;
