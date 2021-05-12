import React from "react";
import { Div, Container } from "@components/Markup";

const CTA = ({ text, url }) => {
  return (
    <Div pt="md" pb="md">
      <Container>
        <a href={url} target="_blank">
          {text}
        </a>
      </Container>
    </Div>
  );
};

export default CTA;
