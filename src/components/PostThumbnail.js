import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";
import { Caption, Heading } from "@components/Typography";

const Img = styled.div`
  padding-top: 52%;
  border: 1px solid blue;
  width: 100%;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center center;
`;

const TitleContainer = styled.div`
  padding: 16px 0 48px 25%;
  border: 1px solid red;
`;

const Thumbnail = ({ featuredImage, title, slug }) => {
  return (
    <Link to={`/blog/${slug}`}>
      <div
        css={css`
          position: relative;
        `}
      >
        <Img {...featuredImage.fluid} alt={title} />
      </div>
      <TitleContainer>
        <Heading size="FIVE" tag="h3" bold mb="sm">
          {title}
        </Heading>
        <Caption>от Вяра, 22.Септември 2022</Caption>
      </TitleContainer>
    </Link>
  );
};

export default Thumbnail;
