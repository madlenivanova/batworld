import React from "react";
import { forEach } from "lodash";
import { css } from "@emotion/react";
import { Text, Title } from "@components/Typography";
import { Div, Container } from "@components/Markup";

const ListItem = ({ items }) => {
  console.log("ITEMS ", items);
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
            margin-top: 32px;
            box-sizing: border-box;

            @media (min-width: 768px) {
              max-width: 50%;
              width: 50%;
            }
          `}
        >
          <Div
            pt="xs"
            css={css`
              max-width: 450px;
              border-top: 1px solid black;
              white-space: pre-wrap;
            `}
          >
            <Title tag="h3" bold uppercase condensed size="md">
              {item.data.listTitle}
            </Title>
            <Text
              dangerouslySetInnerHTML={{
                __html: item.data.listItems,
              }}
            />
          </Div>
        </Div>
      ))}
    </Div>
  );
};

export default ListItem;
