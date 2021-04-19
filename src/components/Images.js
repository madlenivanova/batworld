import React from "react";
import { css } from "@emotion/react";
import { Div } from "@components/Markup";
import { Title } from "@components/Typography";

const Images = ({ items }) => {
  return (
    <Div
      pt="md"
      pb="md"
      css={css`
        max-width: 1200px;
        margin: 0 auto;
        padding-left: 16px;
        padding-right: 16px;

        h3 {
          text-align: center;
        }
      `}
    >
      <Title tag="h3" size="md" uppercase bold condensed mb="sm">
        On the rise
      </Title>
      <div
        css={css`
          display: flex;
          margin: 0px -5px;
          justify-content: center;
          align-items: center;
          width: 100%;
        `}
      >
        {items &&
          items.map((item, index) => (
            <div
              key={`item--${index}`}
              css={css`
                display: block;
                overflow: hidden;
                padding: 5px;
                flex-basis: 0;
                flex-grow: 1;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                  max-width: 100%;
                  max-height: 80vh;
                  object-fit: contain;
                }
              `}
            >
              <img srcSet={item.fluid.srcSet} src={item.fluid.src} />
            </div>
          ))}
      </div>
    </Div>
  );
};

export default Images;
