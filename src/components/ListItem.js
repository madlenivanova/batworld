import React from "react";
import { forEach } from "lodash";
import { css } from "@emotion/react";
import { Text } from "@components/Typography";
import { Div, Container } from "@components/Markup";

const ListItem = ({ listTitle, listItems }) => {
  const formatText = () => {
    let _text = "";
    let _counter = 0;
    forEach(listItems, lt => {
      if (lt === "*") {
        _text += _counter % 2 ? "</li><li>" : "<li>";
        _counter += 1;
      } else {
        _text += lt;
      }
    });

    _text += "</li>";
    return _text;
  };
  return (
    <Div
      css={css`
        width: 50%;
      `}
    >
      <Div
        pl="sm"
        pr="sm"
        css={css`
          max-width: 480px;
          margin: 0 auto;
        `}
      >
        <Text dangerouslySetInnerHTML={{ __html: formatText() }} />
      </Div>
    </Div>
  );
};

export default ListItem;
