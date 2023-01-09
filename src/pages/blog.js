import { graphql } from "gatsby";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import { Div, Container } from "@components/Markup";
import React from "react";
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

const ThumbnailImg = ({ src, srcSet }) => {
  return (
    <div
      css={css`
        padding-top: 52%;
        border: 1px solid blue;
        width: 100%;
        background-image: url("${src}");
        background-size: cover;
        background-position: center center;
      `}
    ></div>
  );
};

const Thumbnail = ({ featuredImage, title, url }) => {
  return (
    <div
      css={css`
        width: 33.33%;
        position: relative;
        border: 1px solid blue;
        padding: 0px 20px;
      `}
    >
      <Link to={`/blog/${url}`}>
        <ThumbnailImg {...featuredImage.fluid}></ThumbnailImg>
        <Heading size="FIVE" tag="h3" bold mt="sm">
          {title}
        </Heading>
      </Link>
    </div>
  );
};

const Blog = ({ data }) => {
  const posts = data.allDatoCmsBlogPost.edges.map(edge => edge.node);

  return (
    <>
      <PageHeader title={"блог"}></PageHeader>
      <Container
        css={css`
          min-height: 1900px;
        `}
      >
        {posts.map(post => (
          <Thumbnail url={post.pageSlug} key={post.pageSlug} {...post} />
        ))}
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
