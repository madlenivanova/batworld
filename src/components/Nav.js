import React, { useState, useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { gsap } from "gsap/all";

const Nav = ({ items, onArtistClick }) => {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);
  useEffect(() => {
    console.log("items ", items.length);
    if (items.length < 5) {
      // means do animation?
      console.log("ANIMATE ITEMS!!!");
      let tl = gsap
        .timeline({ paused: true })
        .to(wrapperRef.current, { maxHeight: "0px", duration: 0.5 })
        .to(innerRef.current, { opacity: 0, duration: 0.1 }, "-=0.5")
        .to(wrapperRef.current, { maxHeight: 300, duration: 0.5, delay: 4 })
        .to(innerRef.current, { opacity: 1, duration: 0.1 }, "-=0.5");
      tl.play();
    }
  }, [items.length]);
  return (
    <div
      ref={wrapperRef}
      css={css`
        height: 300px;
        overflow: hidden;
        border: 3px solid orange;
        max-height: 300px;
      `}
    >
      <div
        ref={innerRef}
        css={css`
          display: flex;
          opacity: 1;
          align-items: center;
          justify-content: space-between;
        `}
      >
        {items.map((artist, index) => (
          <button
            css={css`
              height: 60px;
              width: 150px;
              margin: 0px 30px;
            `}
            onClick={() => {
              onArtistClick(index + 1);
            }}
          >
            {artist.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Nav;
