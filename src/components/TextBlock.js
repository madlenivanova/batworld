import React from "react";
import { jsx, css } from "@emotion/react";
import PropTypes from "prop-types";
import { Paragraph } from "./Typography";
import { Div } from "./Markup";
import withAnimation from "../effects/withAnimation";

const TextBlock = ({ text }) => (
  <Div mt="md" mb="md">
    <Paragraph>{text}</Paragraph>
  </Div>
);

TextBlock.propTypes = {
  text: PropTypes.string,
};

TextBlock.defaultProps = {
  text:
    "The sorrows of pain and regret are left to the dead and the dying. The folk that not know me as yet.",
};

export const TextBlockWithAnimation = withAnimation({
  from: {
    opacity: 0,
    y: "20px",
  },
  to: {
    opacity: 0.5,
    y: "0px",
  },
  duration: 2,
})(TextBlock);

export default TextBlock;
