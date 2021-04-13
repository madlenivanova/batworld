import React from "react";
import { css } from "@emotion/react";
import { Div, Container } from "@components/Markup";
import { Title } from "@components/Typography";

const SectionSimple = ({ sectionTitle, color, children }) => {
  return (
    <React.Fragment>
      <Div
        pt="md"
        pb="md"
        css={css`
          background-color: ${color};
        `}
      >
        <Container
          size="sm"
          css={css`
            max-width: 640px;
            margin: 0 auto;
          `}
        >
          <Title tag="h3" bold uppercase condensed>
            {sectionTitle}...
          </Title>
        </Container>
        {children}
      </Div>
    </React.Fragment>
  );
};

export default SectionSimple;
