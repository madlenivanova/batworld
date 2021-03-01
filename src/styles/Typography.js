import React from "react";
import styled from "styled-components";

export const H2 = styled("h2")`
  text-align: center;
  font-family: "monument";
  font-size: 10vw;
  text-transform: uppercase;
  line-height: 1em;
`;

export const H4 = styled("h4")`
  font-size: 36px;
  text-align: center;
  font-family: "monument";
  font-weight: normal;
  text-transform: none;
  line-height: 1em;
`;

export const P = styled("p")`
  font-family: "univers-roman";
  font-size: 16px;
  line-height: 1.3em;
  white-space: pre-wrap;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const QUOTE = styled("h5")`
  font-size: 24px;
  text-align: center;
  font-family: "monument";
  font-weight: normal;
  text-transform: none;
  line-height: 1.2em;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;
