import React from "react";
import { css } from "@emotion/react";
import Img from "gatsby-image";
import withAnimation from "../effects/withAnimation";

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
      border: 1px solid red;
    `}
  >
    <p>{text}</p>
  </div>
));

const Image = withAnimation(defaultAnimation)(({ image }) => (
  <Img fluid={image.fluid} />
));

const ImageText = ({ image, text, alignReverse }) => {
  return (
    <div
      css={css`
        max-width: 1200px;
        margin: 0 auto;

        &:nth-child(2) {
          background: red;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          width: 100%;
        `}
      >
        <div
          css={css`
            flex-basis: 0;
            flex-grow: 1;
            display: flex;
            border: 1px solid red;
            padding: 90px 60px;
            height: 100vh;
            @media (min-width: 768px) {
              order: ${alignReverse ? "1" : "0"};
            }
          `}
        >
          <div
            css={css`
              width: 100%;
              height: 100%;
              background: pink;
              overflow: hidden;
              position: relative;
              padding-top: ${image.fluid.aspectRatio * 100}%;
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
            padding: 90px 60px;
            display: flex;
            align-items: center;
            justify-content: center;

            @media (min-width: 768px) {
              order: ${alignReverse ? "0" : "1"};
            }
          `}
        >
          <Text text={text} />
        </div>
      </div>
    </div>
  );
};

export default ImageText;
