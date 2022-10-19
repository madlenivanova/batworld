import React from "react";
import { css } from "@emotion/react";
import { setMargin } from "@utilities/styles";
import { Text } from "@components/Typography";
import { Container } from "@components/Markup";

const Quote = ({ text }) => {
  return (
    <div
      css={css`
        ${setMargin(["top", "bottom"], "md")}
      `}
    >
      <Container size="md">
        <Text dangerouslySetInnerHTML={{ __html: text }} />
      </Container>
    </div>
  );
};

export default Quote;
