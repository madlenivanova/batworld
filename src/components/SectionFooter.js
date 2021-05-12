import React from "react";
import { css } from "@emotion/react";
import { Div, Container } from "@components/Markup";

const SectionFooter = ({ children }) => {
  return (
    <React.Fragment>
      <Div pt="md" pb="md">
        <Container
          size="sm"
          css={css`
            max-width: 640px;
            margin: 0 auto;
          `}
        >
          {children}
        </Container>
      </Div>
    </React.Fragment>
  );
};

export default SectionFooter;
