import { jsx, css } from "@emotion/react";
import PropTypes from "prop-types";
import { Div } from "./Markup";
import React from "react";

const Images = ({ items }) => (
  <Div
    pt="sm"
    pb="sm"
    flex
    css={css`
      margin: 0px -5px;
    `}
  >
    {items.map((item, index) => {
      const { imageUrl } = item;
      return (
        <Div
          key={`item--${index}`}
          css={css`
            flex-basis: 0;
            flex-grow: 1;
            padding: 0px 5px;
          `}
        >
          <img src={imageUrl} />
        </Div>
      );
    })}
  </Div>
);

Images.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      caption: PropTypes.string, // do we need this???
    })
  ).isRequired,
};

Images.defaultProps = {
  items: [
    {
      imageUrl:
        "https://interactive-development.hsnb.io/xpr/2020-10-beats/mcnzi.jpg",
    },
  ],
};

export default Images;
