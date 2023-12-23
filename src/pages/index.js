import React from "react";
import { Heading, Label, Text } from "@components/Typography";
import { graphql } from "gatsby";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Container, Div } from "@components/Markup";
import { ACCENT, LIGHT, DARK } from "../styles/colors";
import { TextRightAligned, SectionLabel } from "../components/Layout";
import GoToLink from "@components/GoToLink";
import HomepageLinks from "@components/HomepageLinks";

const CtaButton = styled.a`
  background: ${ACCENT};
  color: ${LIGHT};
  padding: 16px;
  display: inline-block;
  cursor: pointer;
  &: hover {
    background: ${DARK};
  }
`;

const HeroBackgroundImage = styled.div`
  height: 60vh;
  width: 100%;
  background-image: url("${props => props.featuredImage.fluid.src}");
  background-size: cover;
  background-position: top center;
  position: relative;

  @media (min-width: 768px) {
    height: 66.67vh;
  }

  @media (min-width: 1200px) {
    height: 66.67vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${props =>
    props.dark ? "rgba(34, 31, 25, 1)" : "rgba(247, 244, 239, 1)"};
  background: linear-gradient(
    180deg,
    ${props => (props.dark ? "rgba(34, 31, 25, 0)" : "rgba(247, 244, 239, 0)")}
      0%,
    ${props => (props.dark ? "rgba(34, 31, 25, 1)" : "rgba(247, 244, 239, 1)")}
      100%
  );
  opacity: 0.25;
`;

const HomepageBanner = ({ headline, text, cta, ctaUrl, backgroundImage }) => {
  return (
    <Div
      flex
      pb="md"
      pt="lg"
      ai="flex-end"
      css={css`
        min-height: 60vh;
        width: 100%;
        background-image: url("${backgroundImage.fluid.src}");
        background-size: cover;
        background-position: top center;
        position: relative;

        span {
          color: ${ACCENT};
        }

        h3 {
          max-width: 100%;
          letter-spacing: -0.02em;
          line-height: 0.9em;
          color: ${LIGHT};

          span {
            color: ${ACCENT};
          }

          @media (min-width: 768px) {
            max-width: 66.67%;
          }

          @media (min-width: 1200px) {
            max-width: 50%;
          }
        }

        p {
          color: ${LIGHT};
          @media (min-width: 768px) {
            max-width: 66.67%;
          }
          @media (min-width: 1200px) {
            max-width: 50%;
          }
        }
      `}
    >
      <Overlay dark={true} />
      <Container
        size="xl"
        css={css`
          position: relative;
          z-index: 2;
        `}
      >
        <Heading
          tag="h3"
          size="THREE"
          bold
          dangerouslySetInnerHTML={{ __html: headline }}
          mb="sm"
        />
        <Text mb="md">{text}</Text>
        <CtaButton target="_blank" url={ctaUrl}>
          <Label>{cta}</Label>
        </CtaButton>
      </Container>
    </Div>
  );
};

const HomepageIntro = ({ text }) => {
  return (
    <Div pt="lg" pb="lg">
      <TextRightAligned text={text}>
        <Div
          flex
          jc="space-between"
          css={css`
            height: 100%;
            flex-direction: column;
          `}
        >
          <SectionLabel text={"за нас"} />
          <GoToLink text="прочети още" url={`/za-nas`} />
        </Div>
      </TextRightAligned>
    </Div>
  );
};

const HomepageHero = ({ featuredImage, headline }) => {
  return (
    <HeroBackgroundImage featuredImage={featuredImage}>
      <Overlay />
      <Div
        flex
        pb="md"
        ai="flex-end"
        css={css`
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
    </HeroBackgroundImage>
  );
};

const hplinks = [
  {
    heading: "Подкрепи ни",
    text:
      "Batworld Bulgaria е неправителствена организация, която разчита на помощта на доброволци и дарители. Включи се!",
    icon: "heart",
    url: "#",
  },
  {
    heading: "Участвай като доброволец",
    text:
      "Batworld Bulgaria е неправителствена организация, която разчита на помощта на доброволци и дарители. Включи се!",
    icon: "hands",
    url: "#",
  },
  {
    heading: "Научи повече и сподели",
    text:
      "Batworld Bulgaria е неправителствена организация, която разчита на помощта на доброволци и дарители. Включи се!",
    icon: "info",
    url: "#",
  },
];

const IndexPage = ({ data }) => {
  const {
    headline,
    featuredImage,
    introParagraph,
    bannerBackgroundImage,
    bannerHeadline,
    bannerText,
    bannerCta,
    bannerCtaUrl,
  } = data.datoCmsHomepage;

  return (
    <>
      <HomepageHero headline={headline} featuredImage={featuredImage} />
      <HomepageIntro text={introParagraph} />
      <HomepageBanner
        backgroundImage={bannerBackgroundImage}
        headline={bannerHeadline}
        text={bannerText}
        cta={bannerCta}
        url={bannerCtaUrl}
      />
      {/* <HomepageLinks hplinks={hplinks} /> */}
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
      introParagraph
      bannerBackgroundImage {
        fluid {
          src
          srcSet
        }
      }
      bannerHeadline
      bannerText
      bannerCta
      bannerCtaUrl
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
