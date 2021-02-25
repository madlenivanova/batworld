import React, { useEffect, useState, useContext, useRef } from "react";
import { gsap } from "gsap/all";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { forEach } from "lodash";
import { LoadContext } from "../providers/LoadProvider";
import { CursorContext } from "../providers/CursorProvider";

const Cursor = ({ containerClass, clickableClass }) => {
  const containerRef = useRef(null);
  const cursorInner = useRef(null);

  const { images } = useContext(LoadContext);
  const { icon } = useContext(CursorContext);

  const onMousemove = e => {
    gsap.to(cursorInner.current, {
      duration: 0.25,
      ease: "power2.easeIn",
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    if (images) {
      containerRef.current = document.querySelector(`.${containerClass}`);
      containerRef.current.addEventListener("mousemove", onMousemove);
    }

    const cleanup = () => {
      containerRef.current.removeEventListener("mousemove", onMousemove);
    };

    return cleanup;
  }, [images]);

  return (
    <div
      css={css`
        pointer-events: none;
        z-index: 90;
      `}
    >
      <div
        ref={cursorInner}
        css={css`
          position: fixed;
          z-index: 91;
          top: 0;
          left: 0;
          transform: translate3d(-50%, -50%, 0);
          pointer-events: none;
        `}
      >
        <img src={icon} />
      </div>
    </div>
  );
};

Cursor.propTypes = {
  containerClass: PropTypes.string.isRequired,
};

export default Cursor;
