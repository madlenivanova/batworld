import React from "react";
import { Caption } from "@components/Typography";

const Meta = ({ postDate, author }) => {
  const date = new Date(postDate);
  const options = {
    day: "numeric",
    year: "numeric",
    month: "long",
  };

  const postAuthor = author || "Batworld Bulgaria";

  return (
    <Caption
      mt="sm"
      dangerouslySetInnerHTML={{
        __html: `от ${postAuthor},<br /> ${Intl.DateTimeFormat(
          "bg-BG",
          options
        ).format(date)}`,
      }}
    />
  );
};

export default Meta;
