import React from "react";
import { css } from "@emotion/react";
import { graphql, Link } from "gatsby";
import { Container, Div } from "@components/Markup";
import { Heading, Text } from "@components/Typography";
import { DARK, ACCENT } from "../styles/colors";
import styled from "@emotion/styled";
import { PageHeader } from "./blog";

const ItemContainer = styled(Div)`
  border-top: 2px solid ${DARK};
`;

const ItemLink = styled(Link)`
  display: block;
  padding-left: 33.33%;

  h2 {
    transition: 0.15s all;
  }

  &:hover {
    h2 {
      color: ${ACCENT};
    }
  }
`;

const QandAPage = ({ data }) => {
  const items = data.allDatoCmsQAndA.edges.map(edge => edge.node);

  return (
    <Div>
      <PageHeader title={"<span>Въпроси</span><br />& отговори"} />;
      <Container>
        {items.map(item => {
          return (
            <ItemLink to="#" key={item.title}>
              <ItemContainer pt="xs" mb="md">
                <Heading size="THREE" tag="h2" uppercase>
                  {item.title}
                </Heading>
              </ItemContainer>
            </ItemLink>
          );
        })}
      </Container>
    </Div>
  );
};

export default QandAPage;

export const query = graphql`
  query QandAQuery {
    allDatoCmsQAndA {
      edges {
        node {
          id
          title
          featuredImage {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
          content {
            ... on DatoCmsTextBlock {
              copy
              headline
              __typename
            }
            ... on DatoCmsImagesBlock {
              __typename
              items {
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
    }
  }
`;
