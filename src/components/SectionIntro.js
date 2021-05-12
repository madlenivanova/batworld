import React from "react";
import { css } from "@emotion/react";
import { Div } from "@components/Markup";

const SectionIntro = ({
  sectionTitle,
  headerImage,
  headerImageMobile,
  color,
  children,
}) => {
  return (
    <React.Fragment>
      <Div
        pt="md"
        pb="md"
        css={css`
          background-color: ${color};
        `}
      >
        {children}
      </Div>
    </React.Fragment>
  );
};

export default SectionIntro;
