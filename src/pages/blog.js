import { graphql } from "gatsby";
import { css } from "@emotion/react";
import { Div, Container, Row, RowsContainer } from "@components/Markup";
import React from "react";
import { ACCENT, DARK } from "../styles/colors";
import Thumbnail, { FeaturedThumbnail } from "@components/PostThumbnail";
import { Heading } from "@components/Typography";

export const PageHeader = ({ title }) => {
  return (
    <Div
      pb="lg"
      css={css`
        padding-top: 150px;
        span {
          color: ${ACCENT};
        }
      `}
    >
      <Container>
        <Div
          pt="sm"
          css={css`
            border-top: 1px solid ${DARK};
          `}
        >
          <Heading
            tag="h1"
            size="TWO"
            bold
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Div>
      </Container>
    </Div>
  );
};

const Blog = ({ data }) => {
  const posts = data.allDatoCmsBlogPost.edges.map(edge => edge.node);
  posts.sort((a, b) => new Date(b.postDate) - new Date(a.postDate));

  return (
    <Div>
      <PageHeader title={"<span>Bat World</span><br />Блог"} />
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
          author
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
