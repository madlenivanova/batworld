import React, { useRef, useEffect, useState } from "react";
import { css } from "@emotion/react";
import Img from "gatsby-image";
import { forEach } from "lodash";
import withAnimation from "../effects/withAnimation";
import { P } from "../styles/Typography";
const defaultAnimation = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
  duration: 1,
};

const Text = withAnimation(defaultAnimation)(({ text }) => (
  <div
    css={css`
      a {
        border-bottom: 1px solid black;
      }
      span {
        font-style: italic;
      }
    `}
  >
    <P dangerouslySetInnerHTML={{ __html: text }} />
  </div>
));

const Image = withAnimation(defaultAnimation)(({ image }) => (
  <img src={image.fluid.src} srcSet={image.fluid.srcSet} />
));

const ImageText = ({ id, image, text, alignReverse }) => {
  const myRef = useRef(null);

  const formatText = () => {
    let _text = "";
    let _counter = 0;
    forEach(text, lt => {
      if (lt === "*") {
        _text += _counter % 2 ? "</span>" : "<span>";
        _counter += 1;
      } else {
        _text += lt;
      }
    });
    return _text;
  };

  return (
    <div
      ref={myRef}
      css={css`
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
      `}
    >
      <div
        css={css`
          display: flex;
          width: 100%;
          flex-direction: column;

          @media (min-width: 768px) {
            flex-direction: row;
          }
        `}
      >
        <div
          css={css`
            flex-basis: 0;
            flex-grow: 1;
            display: flex;
            padding: 42px 16px;
            height: ${(1 / image.fluid.aspectRatio) * 100}vw;

            @media (min-width: 768px) {
              order: ${alignReverse ? "1" : "0"};
              padding: 90px 60px;
              height: 100vh;
            }
          `}
        >
          <div
            css={css`
              width: 100%;
              height: 100%;
              //background: pink;
              overflow: hidden;
              position: relative;
              //padding-top: ${image.fluid.aspectRatio * 100}%;
            `}
          >
            <div
              css={css`
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate3d(-50%, -50%, 0);
                min-width: 100%;
                min-height: 100%;
              `}
            >
              <Image image={image} />
            </div>
          </div>
        </div>
        <div
          css={css`
            flex-basis: 0;
            flex-grow: 1;
            padding: 30px 32px;
            display: flex;
            align-items: center;
            justify-content: center;

            @media (min-width: 768px) {
              order: ${alignReverse ? "0" : "1"};
              padding: 90px 60px;
            }
          `}
        >
          <Text text={formatText()} />
        </div>
      </div>
    </div>
  );
};

export default ImageText;
