import React from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { setPadding, setMargin } from "../styles/utilities";
import Container from "../styles/Container";

const Highlight = ({ text }) => (
  <div
    css={css`
      ${setPadding(["left", "right"], "sm")}
      ${setMargin(["top", "bottom"], "md")}
    `}
  >
    <Container size="md">
      <h3 dangerouslySetInnerHTML={{ __html: text }} />
    </Container>
  </div>
);

Highlight.defaultProps = {
  text: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
          excepturi sint occaecati cupiditate non provident, similique sunt in culpa
          qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`,
};

Highlight.propTypes = {
  text: PropTypes.string,
};

export default Highlight;
