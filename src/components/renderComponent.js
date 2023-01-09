import React from "react";
import TextBlock from "@components/TextBlock";
import ImageBlock from "@components/ImageBlock";
import { find } from "lodash";

const ITEMS = [
  {
    datoKey: "DatoCmsImagesBlock",
    c: ImageBlock,
  },
  {
    datoKey: "DatoCmsTextBlock",
    c: TextBlock,
  },
];

export const renderComponent = ({ item, index }) => {
  const C = find(ITEMS, { datoKey: item.__typename }).c;

  return <C key={`item--${index}`} {...item} />;
};
