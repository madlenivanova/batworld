import React from "react";
import { Caption } from "@components/Typography";

const Meta = ({ postDate, author }) => {
  const date = new Date(postDate);
  const options = {
    day: "numeric",
    year: "numeric",
    month: "long",
  };

  return (
    <Caption mt="sm">
      от {author}, {Intl.DateTimeFormat("bg-BG", options).format(date)}
    </Caption>
  );
};

export default Meta;
