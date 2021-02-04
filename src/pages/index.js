import React from "react";
import story from "../data/story";
import { css } from "@emotion/react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import datoToBF from "../utilities/dato";

const addProps = ({ id }) => {
  let props = {};
  if (id === "artist-one") {
    props.color = "cyan";
  }
  return props;
};

const addPropsElement = ({ element, index }) => {
  let props = {};
  if (element.type === "ImageText" && index % 2) {
    props.alignReverse = true;
  }
  return props;
};

const renderSection = ({ id, c, data, title, elements }) => {
  const Section = c;
  addProps({ id });
  return (
    <Section {...data} {...addProps({ id })}>
      {elements.map((element, index) => {
        const Element = element.c;
        return (
          <Element {...element.data} {...addPropsElement({ element, index })} />
        );
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
        {content.map(section => renderSection({ ...section }))}
        {JSON.stringify(content, null, 2)}
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
