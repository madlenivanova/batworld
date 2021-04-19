import React from "react";
import { css } from "@emotion/react";
import { Div } from "@components/Markup";
import Header from "@components/Header";

const SectionIntro = ({
  sectionTitle,
  headerImage,
  headerImageMobile,
  color,
  children,
}) => {
  return (
    <React.Fragment>
      <Header
        title={sectionTitle}
        backgroundImage={headerImage}
        backgroundImageMobile={headerImageMobile}
      />
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
