import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import GoToLink from "@components/GoToLink";
import React from "react";
import { Div, RowsContainer, Half } from "@components/Markup";
import { Caption, Heading } from "@components/Typography";
import Meta from "@components/Meta";

const Img = styled.div`
  padding-top: 66%;
  width: 100%;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center center;
`;

const TitleContainer = styled.div`
  padding: 16px 0 48px 25%;
`;

export const FeaturedThumbnail = ({ featuredImage, title, slug, postDate }) => {
  return (
    <RowsContainer mb="md">
      <Half>
        <Link to={`/blog/${slug}`}>
          <div
            css={css`
              position: relative;
            `}
          >
            <Img {...featuredImage.fluid} alt={title} />
          </div>
        </Link>
      </Half>
      <Half>
        <Div
          flex
          jc="space-between"
          css={css`
            flex-direction: column;
          `}
        >
          <Heading size="FOUR" tag="h3" bold mb="sm">
            {title}
          </Heading>
          <Meta postDate={postDate} author="Вяра" />
          <GoToLink text="прочети" url={`/blog/${slug}`} />
        </Div>
      </Half>
    </RowsContainer>
  );
};

const Thumbnail = ({ featuredImage, title, slug, postDate }) => {
  console.log(typeof postDate);

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
        <Meta postDate={postDate} author="Вяра" />
      </TitleContainer>
    </Link>
  );
};

export default Thumbnail;
