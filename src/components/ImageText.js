import React from "react";
import { css } from "@emotion/react";
import { setPadding } from "../styles/utilities";
import Img from "gatsby-image";

const ImageText = ({ image, text, alignReverse }) => {
  console.log(image.fluid.aspectRatio, alignReverse);
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
            max-height: 100vh;
            border: 1px solid red;
            padding: 90px 60px;
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
            `}
          >
            <Img
              fluid={image.fluid}
              css={css`
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate3d(-50%, -50%, 0);
              `}
            />
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
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageText;
