import React, { useState, useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { gsap } from "gsap/all";

const NavItem = ({ name, image, onClick, onMouseover, onMouseout }) => {
  const elRef = useRef(null);

  useEffect(() => {
    elRef.current.addEventListener("mouseover", onMouseover);
    elRef.current.addEventListener("mouseout", onMouseout);
  }, []);
  return (
    <button
      ref={elRef}
      css={css`
        height: 180px;
        width: 180px;
        border-radius: 50%;
        background: url("${image.fluid.src}");
        background-size: cover;
        background-position: center center;
        border: none;
        box-shadow: none;
      `}
      onClick={onClick}
    >
      <h2
        css={css`
          font-family: "monument";
          text-transform: uppercase;
          font-size: 16px;
          color: rgba(252, 213, 54, 1);
        `}
      >
        {name}
      </h2>
    </button>
  );
};

const Nav = ({ items, onArtistClick, bgColor }) => {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);
  const cloudsRef = useRef(null);

  const onArtistHover = ({ color }) => {
    gsap.to(cloudsRef.current, { fill: color, duration: 1 });
  };

  return (
    <div
      ref={wrapperRef}
      css={css`
        overflow: hidden;
        background-color: ${bgColor || "#00bbf9"};
      `}
    >
      <div
        ref={innerRef}
        css={css`
          display: flex;
          opacity: 1;
          align-items: center;
          justify-content: space-between;
          padding: 32px 0px;
          position: relative;
          z-index: 5;
        `}
      >
        <div
          css={css`
            padding: 0px 16px;
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            height: 300px;
            width: 100%;
          `}
        >
          {items.map((artist, index) => {
            return (
              <div
                key={`artist--${artist.name}`}
                css={css`
                  position: absolute;
                  top: ${index % 2 ? "0px" : "auto"};
                  bottom: ${index % 2 ? "auto" : "0px"};
                  left: ${index * 20}%;
                  transform-origin: center center;
                  width: 20%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <NavItem
                  name={artist.name}
                  image={artist.image}
                  onClick={() => {
                    onArtistClick(index + 1);
                  }}
                  onMouseover={() => {
                    onArtistHover({ color: artist.color });
                  }}
                  onMouseout={() => {
                    onArtistHover({ color: "rgba(252,213,54,1)" });
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        css={css`
          svg {
            fill: rgba(252, 213, 54, 1);
            position: absolute;
            bottom: 0;
            width: 100%;
            left: 0;
          }
        `}
      >
        <svg
          ref={cloudsRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 704 116.09"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="cls-1"
                d="M0,2.09s62-18,99,54c46-20,66-14,97,0,20-28,66-40,100-10,12-9,30-9,35,1,26-10,54-12,77,0,0-32,24-46,40-47s48,6,52,41c30-8,50-2,66,11,31-30,90-46,138-10v74H0Z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Nav;
