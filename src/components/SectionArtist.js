import React, { useRef, useEffect, useState } from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { setPadding } from "../styles/utilities";
import Img from "gatsby-image";
import { gsap } from "gsap/all";
import Clouds from "./Clouds";
import { H2 } from "../styles/Typography";
import { forEach } from "lodash";
import SplitText from "../plugins/SplitText";
import ImagesLoaded from "react-images-loaded";
gsap.registerPlugin(SplitText);

const SectionHeader = ({ headerImage }) => {
  return <Img fluid={headerImage.fluid} />;
};

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

const SectionArtist = ({
  sectionId,
  sectionTitle,
  color,
  headerImage,
  children,
}) => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const curatedRef = useRef(null);
  const curatedSplitRef = useRef(null);
  const headlineRef = useRef(null);
  const headlineSplitRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    playTlOnLoad();
  }, []);

  useEffect(() => {
    curatedSplitRef.current = new SplitText(curatedRef.current, {
      type: ["chars"],
    });
    // headlineSplitRef.current = new SplitText(headlineRef.current, {
    //   type: ["words", "chars"],
    // });

    forEach(curatedSplitRef.current.chars, ch => {
      gsap.set(ch, {
        rotate: getRandomArbitrary(-15, 15),
        y: getRandomArbitrary(-20, 20),
      });
    });
  }, []);

  const onImagesLoaded = () => {
    console.log("loaded");
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 1,
    });
  };

  const playTlOnLoad = () => {
    let tl = gsap.timeline({ paused: true }).to(sectionRef.current, {
      maxHeight: 20000,
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
      <ImagesLoaded done={onImagesLoaded}>
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
            position: relative;
          `}
        >
          <Img
            fluid={headerImage.fluid}
            css={css`
              min-width: 100%;
              border: 10px solid red;
            `}
          />
          <div
            ref={overlayRef}
            css={css`
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: ${color};
              opacity: 0.5;
            `}
          />
          <div
            css={css`
              position: relative;
              z-index: 5;
            `}
          >
            <H2
              ref={curatedRef}
              mb="sm"
              css={css`
                font-size: 7vw;
                color: #fee440;
                letter-spacing: 4%;
                margin-bottom: 15px;
              `}
            >
              curated by
            </H2>
            <H2
              ref={headlineRef}
              css={css`
                font-size: 9vw;
                color: #fee440;
              `}
            >
              {sectionTitle}
            </H2>
          </div>
        </div>
      </ImagesLoaded>
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
