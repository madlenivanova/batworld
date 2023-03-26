import React from "react";
import renderModularContent from "@components/renderModularContent";
import { PageHero } from "../components/PageHero";
import { graphql } from "gatsby";

const Page = ({ data }) => {
  const { title, intro, featuredImage, content } = data.page;

  return (
    <>
      <PageHero title={title} intro={intro} featuredImage={featuredImage} />;
      {renderModularContent({ content: content })}
    </>
  );
};

export default Page;

export const query = graphql`
  query PageQuery($slug: String!) {
    page: datoCmsPage(pageSlug: { eq: $slug }) {
      title
      intro
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
