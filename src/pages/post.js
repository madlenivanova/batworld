import React from "react";
import { graphql } from "gatsby";
import Hero from "@components/Hero";
import { renderComponent } from "../components/renderComponent";

const IndexPage = ({ data }) => {
  const { content, title, featuredImage } = data.allDatoCmsQAndA.edges[0].node;

  return (
    <>
      <Hero
        title={title}
        featuredImage={featuredImage}
        share={true}
        nav={true}
      />
      {content.map((item, index) => {
        return renderComponent({ item, index });
      })}
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query PostQuery {
    allDatoCmsPage(filter: { id: { eq: "DatoCmsPage-36166633-en" } }) {
      edges {
        node {
          id
          title
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
