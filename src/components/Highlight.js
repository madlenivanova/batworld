import React from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { setPadding, setMargin } from "../styles/utilities";
import Container from "../styles/Container";
import { H4 } from "../styles/Typography";

const HighlightBlock = ({ text }) => (
  <div
    css={css`
      ${setPadding(["left", "right"], "sm")}
      ${setMargin(["top", "bottom"], "md")}
    `}
  >
    <Container size="md">
      <H4
        css={css`
          color: rgba(254, 228, 64, 1);
          font-family: "univers-roman", sans-serif;
          text-transform: uppercase;
          line-height: 1.3em;
          font-size: 36px;

          @media (min-width: 768px) {
            font-size: 72px;
          }
        `}
        dangerouslySetInnerHTML={{ __html: text }}
      />
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
