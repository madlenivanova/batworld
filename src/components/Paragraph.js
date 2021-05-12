import React from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { setMargin } from "@utilities/styles";
import { Text } from "@components/Typography";
import { forEach } from "lodash";

import { Container } from "@components/Markup";

const Paragraph = ({ text }) => {
  const formatText = () => {
    let _text = "";
    let _counter = 0;
    forEach(text, lt => {
      if (lt === "*") {
        _text += _counter % 2 ? "</span><span>" : "<span>";
        _counter += 1;
      } else {
        _text += lt;
      }
    });

    _text += "</span>";
    return _text;
  };

  return (
    <div
      css={css`
        ${setMargin(["top", "bottom"], "md")}

        a {
          border-bottom: 1px solid black;
        }

        span.italic {
          font-style: italic;
        }

        p {
          white-space: pre-wrap;
        }

        span.hs-titleee {
          font-family: "univers-bold-cond";
          margin-bottom: 0px;
          font-size: 24px;

          @media (min-width: 768px) {
            font-size: 32px;
          }
        }
      `}
    >
      <Container
        size="sm"
        css={css`
          max-width: 640px;
          margin: 0 auto;
        `}
      >
        <Text tag="p" dangerouslySetInnerHTML={{ __html: text }} />
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
