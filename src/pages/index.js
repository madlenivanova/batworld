import React from "react";
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

  return (
    <Layout>
      <HeroPlaceholder title={title} heroImage={heroImage} />
      {/* <div
        css={css`
          white-space: pre;
        `}
      >
        {JSON.stringify(content, null, 2)}
      </div> */}
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
          __typename
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
              __typename
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
              __typename
              text
            }
            ... on DatoCmsHighlight {
              id
              __typename
              text
            }
            ... on DatoCmsQuote {
              id
              __typename
              text
              source
            }
            ... on DatoCmsVideo {
              id
              __typename
              providerUid
            }
            ... on DatoCmsImage {
              id
              __typename
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
              __typename
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
              __typename
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
              __typename
              url
              text
            }
          }
        }
      }
    }
  }
`;
