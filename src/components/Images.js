import React from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";

import { setPadding } from "../styles/utilities";

const Images = ({ items }) => {
  return (
    <div
      css={css`
        ${setPadding(["top", "bottom"], "md")}
        max-width: 1200px;
        margin: 0 auto;
      `}
    >
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
                  max-height: 130vh;
                  object-fit: contain;
                }
              `}
            >
              <img srcSet={item.srcSet} src={item.src} />
            </div>
          ))}
      </div>
    </div>
  );
};

Images.defaultProps = {
  items: [
    {
      src: "https://interactive-development.hsnb.io/hsnbisf/assets/bowie4.jpg",
    },
    {
      src: "https://interactive-development.hsnb.io/hsnbisf/assets/bowie8.jpg",
    },
  ],
};

Images.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default Images;
