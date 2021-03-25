import React, { useEffect, useRef, forwardRef } from "react";
import { css } from "@emotion/react";
import { gsap } from "gsap/all";
import { H4 } from "@styles/Typography";
import open from "@assets/02_open.png";
import crocs from "@assets/crocs.png";
import shark from "../assets/shark.png";
import skull from "../assets/skull.png";
import MotionPathPlugin from "@plugins/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

const bodyScrollLock = require("body-scroll-lock");
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const Hand = forwardRef((props, ref) => (
  <img
    css={css`
      position: absolute;
      transform: translate3d(-50%, -50%, 0);

      top: 36%;
      left: 92%;
      opacity: 0;
    `}
    src={open}
    ref={ref}
  />
));
const Jibbitz = forwardRef((props, ref) => (
  <img
    css={css`
      max-width: 120px;
      position: absolute;
      top: 7%;
      left: 45%;
      transform: translate3d(-50%, -50%, 0);
      opacity: 0;
    `}
    src={crocs}
    ref={ref}
  />
));

const IntroAnimation = () => {
  const loaderRef = useRef(null);
  const handRef = useRef(null);
  const jibbitzRef = useRef(null);
  const handPathRef = useRef(null);
  const dragPathRef = useRef(null);

  useEffect(() => {
    disableBodyScroll(document.querySelector("body"));
    const tl = gsap
      .timeline()
      .to([handRef.current, jibbitzRef.current], {
        opacity: 1,
        duration: 0.15,
      })
      .to(handRef.current, {
        motionPath: {
          path: handPathRef.current,
          align: handPathRef.current,
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
        },
        transformOrigin: "50% 50%",
        delay: 0.5,
        duration: 1,
        ease: "power1.inOut",
      })
      .to([handRef.current, jibbitzRef.current], {
        motionPath: {
          path: dragPathRef.current,
          align: dragPathRef.current,
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
        },
        transformOrigin: "50% 50%",
        duration: 2,
        delay: 0.5,
        ease: "power1.inOut",
      })
      .to(loaderRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 1,
        delay: 1,
        onComplete: () => {
          enableBodyScroll(document.querySelector("body"));
        },
      });
  }, []);

  return (
    <div
      ref={loaderRef}
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background: #fee440;
        z-index: 500;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (min-width: 992px) {
          display: none;
        }
      `}
    >
      <div
        css={css`
          max-width: 600px;
          padding: 0px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        `}
      >
        <h6
          css={css`
            @keyframes blink-animation {
              to {
                visibility: hidden;
              }
            }
            @-webkit-keyframes blink-animation {
              to {
                visibility: hidden;
              }
            }
            animation: blink-animation 1s steps(5, start) infinite;
            -webkit-animation: blink-animation 1s steps(5, start) infinite;
            font-family: "univers-pro", sans-serif;
            font-size: 24px;
            text-transform: uppercase;
            margin-bottom: 30px;
          `}
        >
          (loading)
        </h6>
        <H4
          css={css`
            font-family: "monument";
            text-transform: uppercase;
          `}
        >
          Click and drag the Jibbitz™ charms to move them around
        </H4>
      </div>
      <div
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;

          path {
            fill: none;
          }
        `}
      >
        <div
          css={css`
            position: relative;
            width: 100%;
            margin-top: -300px;
            padding: 16px;
          `}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 655.21 390.81">
            <path
              ref={handPathRef}
              d="M708,311S423.13,473.81,348.52,163.5"
              transform="translate(-53.04 -163)"
            />
            <path
              ref={dragPathRef}
              d="M348.52,163.5S73.82,177.07,55.17,304.24C33.09,454.8,245.08,422.94,143.34,553.5"
              transform="translate(-53.04 -163)"
            />
          </svg>
          <Jibbitz ref={jibbitzRef} />
          <Hand ref={handRef} />
        </div>
        <img
          css={css`
            position: absolute;
            transform: translate3d(-50%, -50%, 0);
            top: 86%;
            left: 52%;
            max-width: 100px;
          `}
          src={shark}
        />
        <img
          css={css`
            position: absolute;
            transform: translate3d(-50%, -50%, 0);
            top: 10%;
            left: 82%;
            max-width: 120px;
          `}
          src={skull}
        />
      </div>
    </div>
  );
};

export default IntroAnimation;
