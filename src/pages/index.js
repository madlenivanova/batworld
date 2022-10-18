import React from "react";
import { graphql } from "gatsby";
import datoToBF from "@utilities/dato";
import Story from "@components/Story";
import Layout from "@components/MyLayout";
import HeroPlaceholder from "@components/Hero";

const IndexPage = ({ data }) => {
  console.log(data);
  // const storyContent = data.allDatoCmsBespokeStory.edges[0].node.content;
  // const content = datoToBF({
  //   content: storyContent,
  // });
  // const { heroImage, title } = data.allDatoCmsBespokeStory.edges[0].node;

  return (
    <Layout>
      <h1>hi</h1>
    </Layout>
  );
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
