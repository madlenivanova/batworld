import { createElement as h } from "react";
import styled from "@emotion/styled";

import PropTypes from "prop-types";
import { enableMarginAndPadding } from "@utilities/styles";
import { ONE, TWO, THREE, FOUR, FIVE, COPY } from "../styles/fontsizes";

const SIZES = {
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  COPY,
};

export const Caption = styled.p`
  opacity: 0.75;
  font-size: 13px;
  ${props => enableMarginAndPadding(props)};
`;

export const Label = styled.p`
  text-transform: uppercase;
  font-weight: "nexa-bold", sans-serif;
  font-size: 16px;
  letter-spacing: 0.01em;
  font-weight: bold;
  ${props => enableMarginAndPadding(props)};
`;

export const withDynamicTag = Component => {
  const bucket = Object.create(null);

  const DynamicTag = props => {
    const { tag } = props;

    if (bucket[tag] === undefined) {
      bucket[tag] = Component.withComponent(tag);
    }

    return h(bucket[tag], props);
  };

  const name = Component.displayName || Component.constructor.name;

  if (name) {
    DynamicTag.displayName = `DynamicTag(${name})`;
  }

  return DynamicTag;
};

/* The title supports individual properties */
/* tag, bold, size. additionally, you can add css */

export const HeadingBase = styled.h1`
  font-weight: normal;
  line-height: ${props =>
    props.uppercase || props.size === "TWO" ? "0.88em" : "1em"};
  margin: 0px;
  font-family: ${props => (props.bold ? "nexa-bold" : "nexa-regular")},
    sans-serif;
  letter-spacing: -0.025em;
  text-transform: ${props => (props.uppercase ? "uppercase" : "none")};
  font-size: ${props => SIZES[props.size || "COPY"].MOBILE}px;
  @media (min-width: 768px) {
    font-size: ${props => SIZES[props.size || "COPY"].TABLET}px;
  }
  @media (min-width: 1200px) {
    font-size: ${props => SIZES[props.size || "COPY"].DESKTOP}px;
  }

  ${props => enableMarginAndPadding(props)};
`;

export const Heading = withDynamicTag(HeadingBase);

Heading.propTypes = {
  tag: PropTypes.string,
};

Heading.defaultProps = {
  tag: "p",
};

const TextBase = styled.p`
  line-height: 1.35em;
  font-weight: normal;
  font-family: "nexa-text-regular", sans-serif;
  letter-spacing: 0;

  font-size: ${SIZES.COPY.MOBILE}px;
  @media (min-width: 768px) {
    font-size: ${SIZES.COPY.TABLET}px;
  }
  @media (min-width: 1200px) {
    font-size: ${SIZES.COPY.DESKTOP}px;
  }

  ${props => enableMarginAndPadding(props)};

  a {
    &:hover {
      opacity: 0.75;
    }
  }
`;

export const Text = withDynamicTag(TextBase);

Text.propTypes = {
  tag: PropTypes.string,
};

Text.defaultProps = {
  tag: "p",
};
