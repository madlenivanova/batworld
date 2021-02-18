import React from "react";
import { graphql } from "gatsby";
import datoToBF from "../utilities/dato";
import Story from "../components/Story";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  const storyContent = data.allDatoCmsBespokeStory.edges[0].node.content;
  const content = datoToBF({
    content: storyContent,
  });
  //{JSON.stringify(content, null, 2)}
  return (
    <Layout>
      <Story content={content} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query StoryQuery {
    allDatoCmsBespokeStory {
      edges {
        node {
          id
          title
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
            }
            ... on DatoCmsParagraph {
              id
              text
            }
            ... on DatoCmsHighlight {
              id
              text
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
          }
        }
      }
    }
  }
`;
