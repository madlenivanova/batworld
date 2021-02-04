import React from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { setPadding } from "../styles/utilities";
import Img from "gatsby-image";

const SectionHeader = ({ headerImage }) => {
  return <Img fluid={headerImage.fluid} />;
};

const SectionArtist = ({ color, headerImage, children }) => {
  console.log(color);
  return (
    <section
      css={css`
        background-color: ${color};
      `}
    >
      <SectionHeader headerImage={headerImage} />
      <div>{children}</div>
    </section>
  );
};

export default SectionArtist;
