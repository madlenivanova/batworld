import React from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/react";
import { Container } from "@components/Markup";
import { Heading } from "@components/Typography";
import { Div } from "@components/Markup";
import { ACCENT, DARK } from "../styles/colors";
import PageNav from "@components/PageNav";
import ImgBackground from "@components/ImgBackground";
import renderModularContent from "@components/renderModularContent";
import Share from "@components/Share";
import Meta from "@components/Meta";
import { TextRightAligned } from "../components/Layout";

const BlogPostHero = ({ title, intro, postDate, author, featuredImage }) => {
  return (
    <>
      <Container>
        {featuredImage && (
          <div
            css={css`
              @media (min-width: 768px) {
                max-width: 66%;
              }
            `}
          >
            <ImgBackground fluid={featuredImage?.fluid} alt={title} />
          </div>
        )}
        <Div pt="md" pb="lg">
          <Heading size="TWO" bold>
            {title}
          </Heading>
        </Div>
      </Container>
      <TextRightAligned text={intro}>
        <Share />
        <Meta postDate={postDate} author={author} />
      </TextRightAligned>
    </>
  );
};

const Thumb = ({ featuredImage, title, url, align }) => {
  return (
    <Div
      css={css`
        max-width: 50%;
        width: 50%;

        @media (min-width: 768px) {
          max-width: 33.33%;
          width: 33.33%;
        }

        @media (min-width: 992px) {
          max-width: 25%;
          width: 25%;
        }

        text-align: ${align || "left"};

        &:hover {
          h5 {
            color: ${ACCENT};
          }
        }
      `}
    >
      <Link to={`/blog/${url}`}>
        <ImgBackground fluid={featuredImage?.fluid} alt={title} />
        <Heading tag="h5" size="FIVE" bold mt="sm">
          {title}
        </Heading>
      </Link>
    </Div>
  );
};

const PrevNextNav = ({ next, prev }) => {
  return (
    <Div pb="lg">
      <Container>
        <Div
          pt="sm"
          flex
          jc="space-between"
          css={css`
            border-top: 1px solid ${DARK};
          `}
        >
          <Thumb {...prev} />
          <Thumb {...next} align={"right"} />
        </Div>
      </Container>
    </Div>
  );
};

const BlogPost = ({ data }) => {
  const { post, nextPost, prevPost } = data;
  const {
    title,
    author,
    featuredImage,
    intro,
    content,
    postDate,
    disableFeaturedImageInTemplate,
  } = post;

  return (
    <React.Fragment>
      <PageNav text={"обратно към блога"} url={"/blog"} />
      <BlogPostHero
        author={author}
        title={title}
        intro={intro}
        postDate={postDate}
        featuredImage={disableFeaturedImageInTemplate ? null : featuredImage}
      />
      {renderModularContent({ content: content })}
      <PrevNextNav prev={prevPost} next={nextPost} />
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
      disableFeaturedImageInTemplate
      author
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
