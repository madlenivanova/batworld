import React from "react";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
  console.log(data);
  return <h1>blog post</h1>;
};

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($slug: String!, $nextSlug: String!, $prevSlug: String!) {
    nextPost: datoCmsBlogPost(pageSlug: { eq: $nextSlug }) {
      pageSlug
      title
      featuredImage {
        fluid {
          src
          srcSet
          aspectRatio
        }
      }
    }
    prevPost: datoCmsBlogPost(pageSlug: { eq: $prevSlug }) {
      pageSlug
      title
      featuredImage {
        fluid {
          src
          srcSet
          aspectRatio
        }
      }
    }
    post: datoCmsBlogPost(pageSlug: { eq: $slug }) {
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
