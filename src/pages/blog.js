import { graphql } from "gatsby";
import { Div, Container, Row, RowsContainer } from "@components/Markup";
import React from "react";
import Thumbnail, { FeaturedThumbnail } from "@components/PostThumbnail";
import { Text, Heading } from "@components/Typography";

const PageHeader = ({ title }) => {
  return (
    <Div pt="xl" pb="lg">
      <Container>
        <Heading tag="h1" size="THREE" uppercase bold>
          {title}
        </Heading>
      </Container>
    </Div>
  );
};

const Blog = ({ data }) => {
  const posts = data.allDatoCmsBlogPost.edges.map(edge => edge.node);

  return (
    <Div pt="lg">
      <Container size="xl">
        <RowsContainer>
          {posts.map((post, i) =>
            i === 0 ? (
              <FeaturedThumbnail
                key={post.pageSlug}
                slug={post.pageSlug}
                {...post}
              />
            ) : (
              <Row key={post.pageSlug}>
                <Thumbnail slug={post.pageSlug} {...post} />
              </Row>
            )
          )}
        </RowsContainer>
      </Container>
    </Div>
  );
};

export default Blog;

export const query = graphql`
  query PostsQuery {
    allDatoCmsBlogPost {
      edges {
        __typename
        node {
          id
          title
          pageSlug
          postDate
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
