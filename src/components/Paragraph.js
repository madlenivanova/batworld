import React from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { setPadding, setMargin } from "../styles/utilities";
import { P } from "../styles/Typography";

import Container from "../styles/Container";

const Paragraph = ({ text }) => {
  return (
    <div
      css={css`
        ${setPadding(["left", "right"], "sm")}
        ${setMargin(["top", "bottom"], "md")}
      `}
    >
      <Container size="sm">
        <P dangerouslySetInnerHTML={{ __html: text }} />
      </Container>
    </div>
  );
};

Paragraph.defaultProps = {
  text: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
          excepturi sint occaecati cupiditate non provident, similique sunt in culpa
          qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`,
};

Paragraph.propTypes = {
  text: PropTypes.string,
};

export default Paragraph;
