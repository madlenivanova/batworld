import { graphql } from "gatsby";
import { Link } from "gatsby";
import React from "react";

const Blog = ({ data }) => {
  const posts = data.allDatoCmsBlogPost.edges.map(edge => edge.node);

  return (
    <div>
      {posts.map(post => (
        <Link to={`/blog/${post.pageSlug}`}>
          <h1>{post.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Blog;

export const query = graphql`
  query PostsQuery {
    allDatoCmsBlogPost {
      edges {
        node {
          id
          title
          pageSlug
          featuredImage {
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
`;
