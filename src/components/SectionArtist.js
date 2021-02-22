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

const SectionArtist = ({
  sectionId,
  sectionTitle,
  color,
  headerImage,
  children,
}) => {
  const cloudsRef = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    playTlOnLoad();
  }, []);

  const playTlOnLoad = () => {
    let tl = gsap.timeline({ paused: true }).to(sectionRef.current, {
      maxHeight: 6000,
      duration: 1,
      delay: 0.25,
    });
    tl.play();
  };

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      css={css`
        position: relative;
        max-height: 0px;
        margin-top: 0;
        overflow: hidden;
        background-color: ${color};
      `}
    >
      <div
        ref={headerRef}
        css={css`
          height: 100vh;
          //max-height: 0px;
          background: url("${headerImage.fluid.src}");
          background-size: cover;
          background-position: center center;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <h1>{sectionTitle}</h1>
      </div>
      <div
        css={css`
          z-index: 5;
          position: relative;
          //max-height: 0px;
          overflow: hidden;
        `}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionArtist;
