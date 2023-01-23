import React from "react";
import { css } from "@emotion/react";
import { Container } from "@components/Markup";
import { Heading } from "@components/Typography";
import { Div } from "@components/Markup";
import { Text } from "@components/Typography";
import { includes } from "lodash";

const Paragraph = ({ headline, copy }) => {
  return (
    <Div
      mt="sm"
      mb="md"
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

const Images = ({ items }) => {
  return (
    <Div
      flex
      mt="sm"
      mb="md"
      css={css`
        @media (min-width: 992px) {
          padding-left: 33.33%;
        }
      `}
    >
      {items?.map(item => {
        return (
          <img key={item.src} src={item.fluid.src} srcSet={item.fluid.srcSet} />
        );
      })}
    </Div>
  );
};

const renderModularContent = ({ content }) => {
  const getComponent = ({ typename }) => {
    if (includes(typename, "Text")) {
      return Paragraph;
    } else {
      return Images;
    }
  };

  return (
    <Div pb="lg">
      <Container>
        {content.map((item, index) => {
          const C = getComponent({ typename: item.__typename });
          return <C key={`content--${index}`} {...item} />;
        })}
      </Container>
    </Div>
  );
};

export default renderModularContent;
