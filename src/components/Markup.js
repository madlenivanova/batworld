import styled from "@emotion/styled";
import { enableMarginAndPadding } from "@utilities/styles";

const enableFlex = props => {
  let styles = ``;
  styles += props.flex ? "display: flex; " : "";
  styles += props.flexInline ? "display: inline-flex; " : "";
  styles += props.jc ? `justify-content: ${props.jc};` : "";
  styles += props.ai ? `align-items: ${props.ai};` : "";

  return styles;
};

const enableWidth = props => {
  let styles = ``;
  styles += props.flex ? "display: flex; " : "";
  styles += props.flexInline ? "display: inline-flex; " : "";
  styles += props.jc ? `justify-content: ${props.jc};` : "";
  styles += props.ai ? `align-items: ${props.ai};` : "";

  return styles;
};

export const Container = styled("div")`
  max-width: ${props => (props.size === "xl" ? "none" : "1400px")};
  margin: 0 auto;
  padding: 0px 20px;

  @media (min-width: 768px) {
    padding: 0px 32px;
    width: 100%;
  }
`;

export const Row = styled.div`
  margin-bottom: 16px;

  @media (min-width: 768px) {
    padding: 0px 8px;
    min-width: 33.33%;
    width: 33.33%;
  }
`;

export const Half = styled.div`
  margin-bottom: 16px;

  @media (min-width: 768px) {
    padding: 0px 8px;
    min-width: 50%;
    width: 50%;
  }
`;

export const TwoRows = styled.div`
  margin-bottom: 16px;

  @media (min-width: 768px) {
    padding: 0px 8px;
    min-width: 66.66%;
    width: 66.66%;
  }
`;

export const RowsContainer = styled.div`
  width: 100%;
  min-width: 100%;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0px -8px;
  }

  ${props => enableMarginAndPadding(props)};
`;

export const Div = styled("div")`
  ${props => enableMarginAndPadding(props)};
  ${props => enableFlex(props)};
`;

export const Section = styled("section")`
  ${props => enableMarginAndPadding(props)};
`;
