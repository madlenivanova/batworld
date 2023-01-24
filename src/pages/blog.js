import { graphql } from "gatsby";
import { css } from "@emotion/react";
import { Div, Container, Row, RowsContainer } from "@components/Markup";
import React from "react";
import { ACCENT } from "../styles/colors";
import Thumbnail, { FeaturedThumbnail } from "@components/PostThumbnail";
import { Heading } from "@components/Typography";

const PageHeader = ({ title }) => {
  return (
    <Div
      pt="lg"
      pb="lg"
      css={css`
        span {
          color: ${ACCENT};
        }
      `}
    >
      <Container>
        <Heading
          tag="h1"
          size="TWO"
          bold
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Container>
    </Div>
  );
};

const Blog = ({ data }) => {
  const posts = data.allDatoCmsBlogPost.edges.map(edge => edge.node);

  return (
    <Div>
      <PageHeader title={"<span>Batworld</span><br />Блог"} />
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
