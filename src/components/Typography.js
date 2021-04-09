import { createElement as h } from "react";
import styled from "@emotion/styled";

import PropTypes from "prop-types";
import {
  enableGrey,
  enableMarginAndPadding,
  TEXT_STYLES,
  TEXT_SIZES,
  TITLE_SIZES,
} from "@utilities/typography";

export const withDynamicTag = (Component) => {
  const bucket = Object.create(null);

  const DynamicTag = (props) => {
    const { tag } = props;

    if (typeof tag !== "string" || !styled.hasOwnProperty(tag)) {
      return h(Component, props);
    }

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

export const TitleBase = styled.h1`
  font-family: ${(props) =>
    props.bold ? "opensans-bold" : "opensans-regular"};
  font-weight: 400;
  line-height: 1.1em;
  font-size: ${(props) => TITLE_SIZES[props.size || "md"].mobile}px;

  @media (min-width: 768px) {
    font-size: ${(props) => TITLE_SIZES[props.size || "md"].tablet}px;
  }

  @media (min-width: 1200px) {
    font-size: ${(props) => TITLE_SIZES[props.size || "md"].desktop}px;
  }

  ${(props) => enableMarginAndPadding(props)};
`;

export const Title = withDynamicTag(TitleBase);

Title.propTypes = {
  tag: PropTypes.string,
  bold: PropTypes.bool,
  size: PropTypes.string,
};

Title.defaultProps = {
  tag: "h1",
  bold: true,
};

/* The text component has the option for predefined styles */
/* Available current styles are 'caption' and 'label' */
/* It also supports individual properties */

const TextBase = styled.p`
  line-height: 1.4em;
  letter-spacing: 0.2px;
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
  font-weight: normal;
  font-family: ${(props) =>
    props.bold ? "opensans-bold" : "opensans-regular"};
  font-size: ${(props) => TEXT_SIZES[props.size || "md"].mobile}px;

  @media (min-width: 768px) {
    font-size: ${(props) => TEXT_SIZES[props.size || "md"].tablet}px;
  }

  @media (min-width: 1200px) {
    font-size: ${(props) => TEXT_SIZES[props.size || "md"].desktop}px;
  }

  ${(props) => enableMarginAndPadding(props)};
  ${(props) => enableGrey(props)};

  ${(props) => {
    return props.textStyle && TEXT_STYLES[props.textStyle];
  }}

  a {
    &:hover {
      opacity: 0.75;
    }
  }
`;

export const Text = withDynamicTag(TextBase);

Text.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string,
  bold: PropTypes.bool,
  uppercase: PropTypes.bool,
  textStyle: PropTypes.string,
};

Text.defaultProps = {
  tag: "p",
  size: "sm",
  bold: false,
  uppercase: false,
};

export const HeadingBase = styled.h1`
  font-family: "opensans-extrabold";
  text-transform: uppercase;
  font-size: 40px;
  letter-spacing: -0.24px;
  line-height: 1em;
  opacity: ${(props) => {
    return props.opacity ? "0.45" : "1";
  }};

  @media (min-width: 768px) {
    font-size: 64px;
  }

  ${(props) => enableMarginAndPadding(props)};
`;

export const Heading = withDynamicTag(HeadingBase);
