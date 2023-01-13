import { graphql } from "gatsby";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import { Div, Container, Row, RowsContainer } from "@components/Markup";
import React from "react";
import Thumbnail from "@components/PostThumbnail";
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
    <>
      <PageHeader title={"блог"}></PageHeader>
      <Container size="xl">
        <RowsContainer>
          {posts.map(post => (
            <Row key={post.pageSlug}>
              <Thumbnail slug={post.pageSlug} {...post} />
            </Row>
          ))}
        </RowsContainer>
      </Container>
    </>
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
