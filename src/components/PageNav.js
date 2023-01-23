import React from "react";
import { css } from "@emotion/react";
import { Container } from "@components/Markup";
import { DARK } from "../styles/colors";
import GoToLink from "../components/GoToLink";
import { Div } from "@components/Markup";

const PageNav = ({ url, text }) => {
  return (
    <Div mb="md">
      <Container>
        <Div
          pb="xs"
          css={css`
            border-bottom: 1px solid ${DARK};
          `}
        >
          <GoToLink text={text} url={url} dir="back" />
        </Div>
      </Container>
    </Div>
  );
};

export default PageNav;
