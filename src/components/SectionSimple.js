import React from "react";
import { css } from "@emotion/react";
import { Div } from "@components/Markup";

const SectionSimple = ({ sectionTitle, color, children }) => {
  return (
    <React.Fragment>
      <Div
        pt="md"
        pb="md"
        css={css`
          background-color: ${color};
          ${sectionTitle === "Methodology" && "color: white;"}
        `}
      >
        {children}
      </Div>
    </React.Fragment>
  );
};

export default SectionSimple;
