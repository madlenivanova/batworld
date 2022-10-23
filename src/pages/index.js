import React from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return <h1>hi</h1>;
};

export default IndexPage;

export const query = graphql`
  query StoryQuery {
    allDatoCmsPage(filter: { id: { eq: "DatoCmsPage-36166633-en" } }) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;
