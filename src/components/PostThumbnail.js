import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import GoToLink from "@components/GoToLink";
import React from "react";
import { ACCENT } from "../styles/colors";
import { Div, RowsContainer, Half } from "@components/Markup";
import { Heading } from "@components/Typography";
import Meta from "@components/Meta";
import ImgBackground from "./ImgBackground";

const TitleContainer = styled.div`
  padding: 16px 0 48px 16%;

  h3 {
    transition: 0.1s all;
  }

  &: hover {
    h3 {
      color: ${ACCENT};
    }
  }
`;

export const FeaturedThumbnail = ({ featuredImage, title, slug, postDate }) => {
  return (
    <RowsContainer mb="md">
      <Half>
        <Link to={`/blog/${slug}`}>
          <ImgBackground fluid={featuredImage.fluid} alt={title} />
        </Link>
      </Half>
      <Half>
        <Div
          flex
          jc="space-between"
          css={css`
            flex-direction: column;

            h3 {
              transition: 0.1s all;

              @media (min-width: 768px) {
                // max-width: 75%;
                // margin-left: 25%;
              }
            }

            &: hover {
              h3 {
                color: ${ACCENT};
              }
            }

            height: 100%;
            padding-left: 16%;
          `}
        >
          <Div css={css``}>
            <Heading size="FOUR" tag="h3" bold mb="sm">
              {title}
            </Heading>
            <Meta postDate={postDate} author="Вяра" />
          </Div>
          <GoToLink text="прочети" url={`/blog/${slug}`} />
        </Div>
      </Half>
    </RowsContainer>
  );
};

const Thumbnail = ({ featuredImage, title, slug, postDate }) => {
  return (
    <Link to={`/blog/${slug}`}>
      <div
        css={css`
          position: relative;
        `}
      >
        <ImgBackground fluid={featuredImage.fluid} alt={title} />
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
