import React from "react";
import { jsx, css } from "@emotion/react";
import { Section, Container, Div } from "./Markup";
import { TitleWithLettersAnimation } from "./Typography";

const SampleSection = ({ title, children }) => (
  <Section
    pt="lg"
    pb="lg"
    css={css`
      border-bottom: 1px solid grey;
    `}
  >
    <Container>
      <TitleWithLettersAnimation>{title}</TitleWithLettersAnimation>
      <Div pt="sm">{children}</Div>
    </Container>
  </Section>
);

export default SampleSection;
