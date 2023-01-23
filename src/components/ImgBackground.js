import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import GoToLink from "@components/GoToLink";
import React from "react";
import { ACCENT } from "../styles/colors";
import { Div, RowsContainer, Half } from "@components/Markup";
import { Heading } from "@components/Typography";
import Meta from "@components/Meta";

const Img = styled.div`
  padding-top: 66%;
  width: 100%;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center center;

  border-radius: 0 30px 0 0;
`;

const ImgBackground = ({ fluid, alt }) => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <Img {...fluid} alt={alt} />
    </div>
  );
};

export default ImgBackground;
