import React from "react";
import { css } from "@emotion/react";
import { Div, Container } from "@components/Markup";

const CTA = ({ text, url }) => {
  return (
    <Container>
      <Div pt="md" pb="md" flex ai="center" jc="center">
        <a
          href={url}
          target="_blank"
          css={css`
            height: 64px;
            padding: 0px 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid black;
            font-family: "univers-bold";
            text-transform: uppercase;
          `}
        >
          {text}
        </a>
      </Div>
    </Container>
  );
};

export default CTA;
