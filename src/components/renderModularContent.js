import React from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/react";
import { Container } from "@components/Markup";
import { Heading } from "@components/Typography";
import { ACCENT, DARK } from "../styles/colors";
import { Div } from "@components/Markup";
import PageNav from "@components/PageNav";
import ImgBackground from "@components/ImgBackground";
import { Text } from "@components/Typography";
import { includes } from "lodash";

const Paragraph = ({ headline, copy }) => {
  return (
    <Div
      mt="sm"
      css={css`
        @media (min-width: 992px) {
          padding-left: 33.33%;
        }
      `}
    >
      <Heading size={"FOUR"}>{headline}</Heading>
      <Text>{copy}</Text>
    </Div>
  );
};

const Images = () => <h1>images</h1>;

const renderModularContent = ({ content }) => {
  const getComponent = ({ typename }) => {
    if (includes(typename, "Text")) {
      return Paragraph;
    } else {
      return Images;
    }
  };
  return (
    <Container>
      {content.map((item, index) => {
        const C = getComponent({ typename: item.__typename });
        return <C {...item} />;
      })}
    </Container>
  );
};

export default renderModularContent;
