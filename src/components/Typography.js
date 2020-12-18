import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { enableMarginAndPadding } from "../styles/spacing";
import withAnimation from "../effects/withAnimation";
import withLettersAnimation from "../effects/withLettersAnimation";
import { FONT_SIZES } from "../data/app";

// TITLE

export const Title = styled("h2")`
  letter-spacing: 0.2px;
  line-height: 1.5em;
  font-weight: 400;
  font-family: "univers-extended";
  font-size: ${props => FONT_SIZES[props.size || "lg"].mobile}px;

  @media (min-width: 768px) {
    font-size: ${props => FONT_SIZES[props.size || "lg"].tablet}px;
  }

  @media (min-width: 1200px) {
    font-size: ${props => FONT_SIZES[props.size || "lg"].desktop}px;
  }

  ${props => enableMarginAndPadding(props)};
`;

Title.propTypes = {
  size: PropTypes.string,
};

Title.defaultProps = {
  size: "lg", // sm, md, lg, xl?
};

// to use elements with animation on scroll (react-visibility-sensor),
// export them additionally if you like?
export const TitleWithAnimation = withAnimation({
  from: {
    opacity: 0,
    y: "20px",
  },
  to: {
    opacity: 1,
    y: "0px",
  },
  duration: 0.5,
})(Title);

export const TitleWithLettersAnimation = withLettersAnimation({
  from: {
    opacity: 0,
    y: "30px",
  },
  to: {
    opacity: 1,
    y: "0px",
  },
  duration: 1,
})(Title);

// HEADING
export const Heading = styled("h3")`
  line-height: 1.5em;
  font-family: "univers-extended";
  font-size: ${props => FONT_SIZES[props.size || "md"].mobile}px;

  @media (min-width: 768px) {
    font-size: ${props => FONT_SIZES[props.size || "md"].tablet}px;
  }

  @media (min-width: 1200px) {
    font-size: ${props => FONT_SIZES[props.size || "md"].desktop}px;
  }

  ${props => enableMarginAndPadding(props)};
`;

Heading.propTypes = {
  size: PropTypes.string,
};

Heading.defaultProps = {
  size: "md", // sm, md, lg, xl?
};

// PARAGRAPH
export const Paragraph = styled("p")`
  line-height: 1.5em;
  font-family: "univers-extended";
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: ${props => FONT_SIZES[props.size || "md"].tablet}px;
  }

  @media (min-width: 1200px) {
    font-size: ${props => FONT_SIZES[props.size || "md"].desktop}px;
  }

  ${props => enableMarginAndPadding(props)};
`;

Paragraph.propTypes = {
  size: PropTypes.string,
};

Paragraph.defaultProps = {
  size: "md", // sm, md, lg, xl?
};
