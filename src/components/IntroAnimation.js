import React, { useEffect, useRef, forwardRef } from "react";
import { css } from "@emotion/react";
import { gsap } from "gsap/all";
import { H4 } from "@styles/Typography";
import open from "@assets/02_open.png";
import crocs from "@assets/crocs.png";
import MotionPathPlugin from "@plugins/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

const Hand = forwardRef((props, ref) => <img src={open} ref={ref} />);
const Jibbitz = forwardRef((props, ref) => <img src={crocs} ref={ref} />);

const IntroAnimation = () => {
  const handRef = useRef(null);
  const jibbitzRef = useRef(null);

  console.log(MorphSVGPlugin);

  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background: #00bbf9;
        z-index: 500;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        css={css`
          max-width: 800px;
          padding: 0px 16px;
        `}
      >
        <H4>Click and drag the Jibbitz to move them around!</H4>
      </div>
    </div>
  );
};

export default IntroAnimation;
