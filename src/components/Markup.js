import styled from "styled-components";
import { enableMarginAndPadding } from "../styles/spacing";

const enableFlex = props => {
  let styles = ``;
  styles += props.flex ? "display: flex; " : "";
  styles += props.flexInline ? "display: inline-flex; " : "";
  styles += props.jc ? `justify-content: ${props.jc};` : "";
  styles += props.ai ? `align-items: ${props.ai};` : "";

  return styles;
};

export const Container = styled("div")`
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
  padding: 0px 15px;

  @media (min-width: 768px) {
    padding: 0px 30px;
  }
`;

export const Div = styled("div")`
  ${props => enableMarginAndPadding(props)};
  ${props => enableFlex(props)};
`;

export const Section = styled("section")`
  ${props => enableMarginAndPadding(props)};
`;
