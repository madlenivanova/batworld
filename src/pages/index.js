import React from "react";
import { Heading, Text, Label } from "@components/Typography";
import { graphql } from "gatsby";
import Hero from "@components/Hero";
import { css } from "@emotion/react";
import SectionIntro from "@components/SectionIntro";
import { Container, Div } from "@components/Markup";
import { ACCENT, LIGHT, DARK } from "../styles/colors";
import ImgBackground from "../components/ImgBackground";
import { random } from "lodash";
import { TextRightAligned, SectionLabel } from "../components/Layout";
import GoToLink from "@components/GoToLink";

const HomepageIntro = ({ featuredImage, text }) => {
  // const renderStackImage = ({ fluid }) => {

  return (
    <Div pt="lg" pb="lg">
      <TextRightAligned
        text={`Прилепите са изключително чисти, интелигентни, емоционални и чувствителни създания. Те са безкрайно важни за здравето на екосистемата, за нашето здраве, за здравето на селското стопанство и индустрията ни.`}
      >
        <Div
          flex
          jc="space-between"
          css={css`
            height: 100%;
            flex-direction: column;
          `}
        >
          <SectionLabel text={"за нас"} />
          <GoToLink text="прочети още" url={``} />
        </Div>
      </TextRightAligned>
    </Div>
  );
};

const HomepageHero = ({ featuredImage, headline }) => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100%;
        background-image: url("${featuredImage.fluid.src}");
        background-size: cover;
        background-position: top center;
        position: relative;
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: rgb(247, 244, 239);
          background: linear-gradient(
            180deg,
            rgba(247, 244, 239, 0) 0%,
            rgba(247, 244, 239, 1) 100%
          );
          opacity: 0.25;
        `}
      ></div>
      <Div
        flex
        pb="md"
        ai="flex-end"
        css={css`
          border: 1px solid red;
          height: 100%;
          position: relative;
          z-index: 1;

          span {
            color: ${ACCENT};
          }

          h2 {
            max-width: 66.66%;
            letter-spacing: -0.02em;
            line-height: 0.9em;
          }
        `}
      >
        <Container size="xl">
          <Heading
            tag="h2"
            size="TWO"
            bold
            dangerouslySetInnerHTML={{ __html: headline }}
          />
        </Container>
      </Div>
    </div>
  );
};

const IndexPage = ({ data }) => {
  const { headline, featuredImage } = data.datoCmsHomepage;
  const src = featuredImage?.fluid?.src;
  return (
    <>
      <HomepageHero headline={headline} featuredImage={featuredImage} />
      <HomepageIntro
        featuredImage={featuredImage}
        text={`Bat World Sanctuary is on the front line to end the mistreatment of bats.
              Each year we rescue hundreds of bats who might otherwise die. 
              Lifetime sanctuary is given to non-releasable bats, including those that are orphaned, 
              injured, and rescued from the exotic pet trade, zoos and research facilities.<br /><br />
              Bat World was founded in 1994 and is a 501c3 non-profit, accredited organization with the 
              Global Federation of Animal Sanctuaries.`}
      />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query StoryQuery {
    allDatoCmsPage(filter: { id: { eq: "DatoCmsPage-36166633-en" } }) {
      edges {
        node {
          id
          title
          featuredImage {
            fluid {
              src
              srcSet
            }
          }
        }
      }
    }
    datoCmsHomepage {
      headline
      featuredImage {
        fluid {
          src
          srcSet
        }
      }
    }
    allDatoCmsQAndA {
      edges {
        node {
          id
          title
          featuredImage {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
          content {
            ... on DatoCmsTextBlock {
              copy
              headline
              __typename
            }
            ... on DatoCmsImagesBlock {
              __typename
              items {
                fluid {
                  src
                  srcSet
                  aspectRatio
                }
              }
            }
          }
        }
      }
    }
  }
`;
