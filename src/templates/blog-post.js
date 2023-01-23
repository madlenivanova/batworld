import React from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/react";
import { Container } from "@components/Markup";
import { Heading } from "@components/Typography";
import { ACCENT, DARK } from "../styles/colors";
import { Div } from "@components/Markup";
import PageNav from "@components/PageNav";
import ImgBackground from "@components/ImgBackground";
import renderModularContent from "@components/renderModularContent";
import Share from "@components/Share";
import Meta from "@components/Meta";

const BlogPostHero = ({ title, intro, postDate, featuredImage }) => {
  return (
    <Container>
      {featuredImage && (
        <ImgBackground fluid={featuredImage?.fluid} alt={title} />
      )}
      <Div pt="sm" pb="lg">
        <Heading size="TWO">{title}</Heading>
      </Div>
      <Div flex>
        <Div
          mt="sm"
          css={css`
            @media (min-width: 992px) {
              min-width: 33.33%;
            }
          `}
        >
          <Share />
          <Meta postDate={postDate} author={"batworld bg"} />
        </Div>
        <Div
          mt="sm"
          css={css`
            @media (min-width: 992px) {
              min-width: 33.33%;
            }
          `}
        >
          <Heading size="FOUR">{intro}</Heading>
        </Div>
      </Div>
    </Container>
  );
};

const BlogPost = ({ data }) => {
  const { post, nextPost, prevPost } = data;
  const { title, featuredImage, intro, content, postDate } = post;
  console.log(post);
  return (
    <React.Fragment>
      <PageNav text={"обратно към блога"} url={"#"} />
      <BlogPostHero
        title={title}
        intro={intro}
        postDate={postDate}
        featuredImage={featuredImage}
      />
      {renderModularContent({ content: content })}
    </React.Fragment>
  );
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
      intro
      postDate
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
          headline
          __typename
        }
      }
    }
  }
`;
