import React from "react";
import { css } from "@emotion/react";
import { graphql } from "gatsby";
import datoToBF from "@utilities/dato";
import Story from "@components/Story";
import Layout from "@components/MyLayout";
import HeroPlaceholder from "@components/Hero";

const IndexPage = ({ data }) => {
  const storyContent = data.allDatoCmsBespokeStory.edges[0].node.content;
  const content = datoToBF({
    content: storyContent,
  });

  const { heroImage, title } = data.allDatoCmsBespokeStory.edges[0].node;
  console.log("content");
  return (
    <Layout>
      <HeroPlaceholder title={title} heroImage={heroImage} />
      <div
        css={css`
          white-space: pre;
        `}
      >
        {JSON.stringify(content, null, 2)}
      </div>
      <Story content={content} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query StoryQuery {
    allDatoCmsBespokeStory(
      filter: { id: { eq: "DatoCmsBespokeStory-38786796-en" } }
    ) {
      edges {
        node {
          id
          title
          heroImage {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
          content {
            ... on DatoCmsSectionDivider {
              id
              sectionId
              sectionTitle
              headerImage {
                fluid {
                  src
                  srcSet
                  aspectRatio
                }
              }
              headerImageMobile {
                fluid {
                  src
                  srcSet
                  aspectRatio
                }
              }
            }
            ... on DatoCmsParagraph {
              id
              text
            }
            ... on DatoCmsHighlight {
              id
              text
            }
            ... on DatoCmsQuote {
              id
              text
              source
            }
            ... on DatoCmsVideo {
              id
              providerUid
            }
            ... on DatoCmsImage {
              id
              items {
                alt
                fluid {
                  src
                  srcSet
                  aspectRatio
                }
              }
            }
            ... on DatoCmsGallery {
              id
              items {
                alt
                fluid {
                  src
                  srcSet
                  aspectRatio
                }
              }
            }
            ... on DatoCmsImagetext {
              id
              image {
                alt
                fluid {
                  src
                  srcSet
                  aspectRatio
                }
              }
              text
            }
            ... on DatoCmsCta {
              id
              url
              text
            }
          }
        }
      }
    }
  }
`;
