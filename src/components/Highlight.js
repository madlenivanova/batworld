import React from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { setPadding, setMargin } from "../styles/utilities";
import { Container } from "@components/Markup";
import { Title } from "@components/Typography";

const HighlightBlock = ({ text }) => (
  <div
    css={css`
      ${setMargin(["top", "bottom"], "md")}
      text-align: center;
    `}
  >
    <Container size="md">
      <Title tag="h4" size="md" dangerouslySetInnerHTML={{ __html: text }} />
    </Container>
  </div>
);

HighlightBlock.defaultProps = {
  text: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
          excepturi sint occaecati cupiditate non provident, similique sunt in culpa
          qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`,
};

HighlightBlock.propTypes = {
  text: PropTypes.string,
};

export default HighlightBlock;

// пиши на ленко, говори с мотко
