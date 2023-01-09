import React from "react";
import { Container, Div } from "@components/Markup";
import { Heading, Text } from "@components/Typography";
import styled from "@emotion/styled";

const TextBlockContainer = styled(Div)`
  padding-left: 33.33%;
  padding-right: 16.66%;
`;

const TextBlock = ({ copy, headline }) => (
  <Container size="xl">
    <TextBlockContainer mt="md">
      <Heading size="FOUR" tag="p" bold>
        {headline}
      </Heading>
      <Text>{copy}</Text>
    </TextBlockContainer>
  </Container>
);

export default TextBlock;
