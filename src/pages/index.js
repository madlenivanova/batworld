import React from "react";
import story from "../data/story";
import { css } from "@emotion/react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import datoToBF from "../utilities/dato";

const addProps = ({ id }) => {
  console.log(id);
  let props = {};
  if (id === "artist-one") {
    props.color = "cyan";
  }
  return props;
};

const renderSection = ({ id, c, data, title, elements, children }) => {
  const Section = c;
  addProps({ id });
  return (
    <Section {...data} {...addProps({ id })}>
      {elements.map(element => {
        const Element = element.c;
        return <Element {...element.data} />;
      })}
    </Section>
  );
};

const IndexPage = ({ data }) => {
  const storyContent = data.allDatoCmsBespokeStory.edges[0].node.content;
  const content = datoToBF({
    content: data.allDatoCmsBespokeStory.edges[0].node.content,
  });

  return (
    <Layout>
      <div
        css={css`
          white-space: pre-wrap;
        `}
      >
        {JSON.stringify(content, null, 2)}
        {content.map(section => renderSection({ ...section }))}
        {JSON.stringify(storyContent, null, 2)}
      </div>
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
