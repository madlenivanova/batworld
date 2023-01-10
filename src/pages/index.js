import React from "react";
import { graphql } from "gatsby";
import Hero from "@components/Hero";
import SectionIntro from "@components/SectionIntro";

const IndexPage = ({ data }) => {
  const { content, title, featuredImage } = data.allDatoCmsQAndA.edges[1].node;
  const { src } = featuredImage?.fluid;

  return (
    <>
      <SectionIntro src={src} />
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
