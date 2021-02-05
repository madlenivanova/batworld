import React, { useRef, useEffect, useState } from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { setPadding } from "../styles/utilities";
import Img from "gatsby-image";
import { gsap } from "gsap/all";
import Clouds from "./Clouds";

const SectionHeader = ({ headerImage }) => {
  return <Img fluid={headerImage.fluid} />;
};

const SectionArtist = ({ color, headerImage, children }) => {
  const cloudsRef = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  // useEffect(() => {
  //   console.log("is it active", isActive);
  // }, [isActive]);

  useEffect(() => {
    playTlOnLoad();
  }, []);

  const playTlOnLoad = () => {
    // gsap.set(sectionRef.current, { maxHeight: 150 });
    let tl = gsap.timeline({ paused: true }).to(sectionRef.current, {
      maxHeight: "100vh",
      duration: 0.25,
    });
    tl.play();
  };

  return (
    <section
      id="artist-one"
      ref={sectionRef}
      css={css`
        position: relative;
        max-height: 0px;
        margin-top: 0;
        background: green;
      `}
    >
      <div
        ref={headerRef}
        css={css`
          height: 100vh;
          background: red;
        `}
      >
        <div
          ref={cloudsRef}
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 150px;
            overflow: hidden;
            border: 1px solid blue;

            svg {
              width: 100%;
            }
          `}
        >
          <Clouds />
        </div>
      </div>
      <div
        css={css`
          background-color: ${color};
          z-index: 5;
          position: relative;
          max-height: 0px;
          overflow: hidden;
        `}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionArtist;
