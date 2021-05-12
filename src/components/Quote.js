import React from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { setMargin } from "@utilities/styles";
import { Text } from "@components/Typography";
import { Container } from "@components/Markup";

const Quote = ({ text, source }) => {
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

Quote.defaultProps = {
  text: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti.`,
  source: null,
};

Quote.propTypes = {
  text: PropTypes.string,
  source: PropTypes.string,
};

export default Quote;
