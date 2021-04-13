import React from "react";
import { forEach } from "lodash";
import { css } from "@emotion/react";
import { Text, Title } from "@components/Typography";
import { Div, Container } from "@components/Markup";

const ListItem = ({ items }) => {
  console.log("items ", items);
  const formatText = text => {
    let _text = "";
    let _counter = 0;
    forEach(text, lt => {
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
      flex
      css={css`
        flex-wrap: wrap;
      `}
    >
      {items.map((item, index) => (
        <Div
          pl="sm"
          pr="sm"
          flex
          jc="center"
          css={css`
            max-width: 50%;
            width: 50%;

            margin-top: 32px;
            box-sizing: border-box;
          `}
        >
          <Div
            css={css`
              max-width: 450px;
              border-top: 1px solid black;
            `}
          >
            <Title tag="h3" bold uppercase condensed size="md">
              {item.data.listTitle}
            </Title>
            <Text
              dangerouslySetInnerHTML={{
                __html: formatText(item.data.listItems),
              }}
            />
          </Div>
        </Div>
      ))}
    </Div>
  );
};

export default ListItem;
