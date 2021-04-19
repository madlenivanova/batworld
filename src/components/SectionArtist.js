import React, { useRef, useEffect } from "react";
import { css } from "@emotion/react";
import Img from "gatsby-image";
import { gsap } from "gsap/all";
import { H2 } from "../styles/Typography";
import SplitText from "../plugins/SplitText";
import ImagesLoaded from "react-images-loaded";
import { curatedBy } from "./SectionIntro";
gsap.registerPlugin(SplitText);

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
  const headlineRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    playTlOnLoad();
  }, []);

  const onImagesLoaded = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.easeInOut",
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
            background-color: ${color};
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
              min-height: 100%;
              position: absolute !important;
              bottom: 0;
              left: 0;
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
              opacity: 1;
            `}
          />
          <div
            css={css`
              position: relative;
              z-index: 5;
            `}
          >
            <div
              ref={curatedRef}
              dangerouslySetInnerHTML={{ __html: curatedBy }}
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;

                svg {
                  max-width: 80vw;

                  @media (min-width: 768px) {
                  }
                }
              `}
            ></div>

            <H2
              ref={headlineRef}
              css={css`
                font-size: 10vw;
                color: #fee440;
                margin-top: -30px;
                @media (min-width: 768px) {
                  font-size: 9vw;
                  margin-top: 0px;
                }
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
          overflow: hidden;
        `}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionArtist;
