import React, { useRef, useEffect, useContext } from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { LoadContext } from "@providers/LoadProvider";
import { Title } from "@components/Typography";
const { gsap } = require("gsap");
const ScrollTrigger = require("gsap/dist/ScrollTrigger");
gsap.registerPlugin(ScrollTrigger);

const CHAPTER_STYLES = {
  ralph: {
    mask: {
      off: {
        height: "80vh",
        width: "70vw",
      },
      on: {
        height: "100vh",
        width: "100vw",
      },
    },
    image: {
      off: { scale: 1.2 },
      on: { scale: 1 },
    },
  },
  ellie: {
    image: {
      off: { opacity: 0.75 },
      on: { opacity: 0.45 },
    },
    mask: { off: {}, on: {} },
  },
  blur: {},
};

const ChapterTitle = ({ title }) => {
  return (
    <div
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <Title
        tag="h2"
        size="lg"
        uppercase
        condensed
        css={css`
          z-index: 5;
          max-width: 800px;
          text-align: center;
        `}
      >
        {title}
      </Title>
    </div>
  );
};

const Chapter = ({
  id,
  sectionTitle,
  chapterStyle,
  headerImage,
  headerImageMobile,
  children,
  color,
}) => {
  const triggerRef = useRef(null);
  const pinRef = useRef(null);
  const maskRef = useRef(null);
  const imgRef = useRef(null);

  const { images } = useContext(LoadContext);

  useEffect(() => {
    if (images) {
      setTimeline();
    }
  }, [images]);

  const setTimeline = () => {
    // console.log(pinRef.current, triggerRef.current);
    const styles_mask = CHAPTER_STYLES[chapterStyle].mask["off"];
    const styles_img = CHAPTER_STYLES[chapterStyle].image["off"];
    gsap.set(imgRef.current, { ...styles_img });
    gsap.set(maskRef.current, { ...styles_mask });
    gsap.to(pinRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: pinRef.current,
        onToggle: self => {
          toggleStyles(self.isActive);
        },
      },
    });
  };

  const toggleStyles = trueOrFalse => {
    const styles_mask =
      CHAPTER_STYLES[chapterStyle].mask[trueOrFalse ? "on" : "off"];
    const styles_img =
      CHAPTER_STYLES[chapterStyle].image[trueOrFalse ? "on" : "off"];
    gsap.to(imgRef.current, {
      ...styles_img,
      duration: 0.25,
      ease: "power2.easeOut",
    });
    gsap.to(maskRef.current, {
      ...styles_mask,
      duration: 0.25,
      ease: "power2.easeOut",
    });
    //console.log(Object.keys(styles), Object.values(styles));
  };

  return (
    <div
      id={id}
      ref={triggerRef}
      css={css`
        position: relative;
        background-color: ${color};
      `}
    >
      <div
        css={css`
          height: 100vh;
          width: 100%;
          position: relative;
        `}
      >
        <div
          ref={pinRef}
          css={css`
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: relative;

            &:before {
              content: "";
              position: absolute;
              transition: all 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
              width: 100%;
              height: 100%;
              background-color: ${color};
              opacity: 0.45;
              z-index: 2;
            }
          `}
        >
          <div // mask
            ref={maskRef}
            css={css`
              position: absolute;
              left: 50vw;
              top: 50vh;
              height: 100vh;
              width: 100%;
              overflow: hidden;
              transform: translate3d(-50%, -50%, 0);
              transition: all 0.6s cubic-bezier(0.39, 0.575, 0.565, 1),
                width 0.6s cubic-bezier(0.39, 0.575, 0.565, 1);
            `}
          >
            <div // background img wrapper
              css={css`
                width: 100%;
                height: 100%;
                position: absolute;
                left: 50%;
                top: 50%;
                -webkit-transform: translate3d(-50%, -50%, 0);
                transform: translate3d(-50%, -50%, 0);
              `}
            >
              <div // background img
                ref={imgRef}
                css={css`
                  height: 100%;
                  width: 100%;
                  position: absolute;
                  background-image: url("${headerImageMobile.fluid &&
                  headerImageMobile.fluid.src}");
                  background-size: cover;
                  background-position: center center;
                  transition: transform 0.6s;
                  top: 0;
                  left: 0;

                  @media (min-width: 768px) {
                    background-image: url("${headerImage &&
                    headerImage.fluid &&
                    headerImage.fluid.src}");
                  }
                `}
              />
            </div>
          </div>
        </div>
        {sectionTitle && <ChapterTitle title={sectionTitle} />}
      </div>
      <div
        css={css`
          position: relative;
          z-index: 5;
          ${!headerImage && "color: white!important;"}
          margin-top: ${sectionTitle ? "0" : "-100vh"};
        `}
      >
        {children}
      </div>
    </div>
  );
};

Chapter.propTypes = {
  backgroundImage: PropTypes.shape({
    fluid: PropTypes.shape({
      src: PropTypes.string,
    }),
  }),
  title: PropTypes.string,
  chapterStyle: PropTypes.string,
};

Chapter.defaultProps = {
  backgroundImage: {
    fluid: {
      src:
        "https://firebasestorage.googleapis.com/v0/b/isf-web-app.appspot.com/o/v4AtQXOg81mjyO7ANqzx%2F5a877277-d92d-4234-9ba1-f0b6143bb883.jpg?alt=media&token=b896f77e-c6bd-4b14-ad15-aa4fdf0cd3b2",
    },
  },
  title: null,
  chapterStyle: "ellie",
};

export default Chapter;
