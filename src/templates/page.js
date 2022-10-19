import React from "react";
import { graphql } from "gatsby";

const Page = ({ data }) => {
  console.log(data);
  return <h1>page</h1>;
};

export default Page;

export const query = graphql`
  query PageQuery($slug: String!) {
    page: datoCmsPage(pageSlug: { eq: $slug }) {
      title
      metaTags {
        description
        image {
          fluid {
            src
            srcSet
          }
        }
      }
      featuredImage {
        fluid {
          src
          srcSet
          aspectRatio
        }
      }
      content {
        ... on DatoCmsImagesBlock {
          id
          __typename
          items {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
        }
        ... on DatoCmsTextBlock {
          id
          copy
          __typename
        }
      }
    }
  }
`;
