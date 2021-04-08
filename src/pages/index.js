import React from "react";
import { css } from "@emotion/react";
import { graphql } from "gatsby";
import datoToBF from "../utilities/dato";
import Story from "@components/Story";
import Layout from "@components/MyLayout";

const IndexPage = ({ data }) => {
  const storyContent = data.allDatoCmsBespokeStory.edges[0].node.content;
  const content = datoToBF({
    content: storyContent,
  });
  console.log('content', content);
  return (
    <Layout>
      <h1>test</h1>
      <div css={css`white-space: pre;`}>{JSON.stringify(content, null, 2)}</div>
    </Layout>
  );
};
//<Story content={content} />
export default IndexPage;

export const query = graphql`
  query StoryQuery {
    allDatoCmsBespokeStory(
      filter: { id: { eq: "DatoCmsBespokeStory-29571818-en" } }
    ) {
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
          }
        }
      }
    }
  }
`;
