import React from "react";
import { css } from "@emotion/react";
import { Container } from "@components/Markup";
import { Heading } from "@components/Typography";
import { Div } from "@components/Markup";
import ImgBackground from "@components/ImgBackground";
import Share from "@components/Share";
import Meta from "@components/Meta";
import { TextRightAligned } from "../components/Layout";

export const PageHero = ({ title, intro, featuredImage }) => {
  return (
    <>
      <Div
        mb="md"
        css={css`
          height: 80vh;
          background-image: url("${featuredImage?.fluid.src}");
          background-size: cover;
          background-position: center center;
          display: flex;
          align-items: flex-end;
          position: relative;

          &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.13) 0%,
              rgba(255, 255, 255, 0.35) 100%
            );
          }
        `}
      >
        <Div
          pt="md"
          pb="lg"
          css={css`
            position: relative;
            z-index: 2;
          `}
        >
          <Container>
            <Heading
              size="TWO"
              bold
              css={css`
                max-width: 800px;
              `}
            >
              {title}
            </Heading>
          </Container>
        </Div>
      </Div>
      <TextRightAligned text={intro}>
        <Share />
      </TextRightAligned>
      ;
    </>
  );
};

export const BlogPostHero = ({
  title,
  intro,
  postDate,
  author,
  featuredImage,
}) => {
  return (
    <>
      <Container>
        {featuredImage && (
          <div
            css={css`
              @media (min-width: 768px) {
                max-width: 66%;
              }
            `}
          >
            <ImgBackground fluid={featuredImage?.fluid} alt={title} />
          </div>
        )}
        <Div pt="md" pb="lg">
          <Heading size="TWO" bold>
            {title}
          </Heading>
        </Div>
      </Container>
      <TextRightAligned text={intro}>
        <Share />
        <Meta postDate={postDate} author={author} />
      </TextRightAligned>
    </>
  );
};
