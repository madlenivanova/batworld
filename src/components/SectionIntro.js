import React from "react";
import { css } from "@emotion/react";
import { Div } from "@components/Markup";
import Header from "@components/Header";

const SectionIntro = ({ sectionTitle, headerImage, color, children }) => {
  return (
    <React.Fragment>
      <Header title={sectionTitle} backgroundImage={headerImage} />
      <Div
        pt="md"
        pb="mb"
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
