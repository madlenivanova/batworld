import React from "react";
import { css } from "@emotion/react";
import { gsap } from "gsap/all";
import SplitText from "../plugins/SplitText";
gsap.registerPlugin(SplitText);

const SectionFeature = ({
  sectionId,
  sectionTitle,
  color,
  headerImage,
  children,
}) => {


  return (
    <section
      css={css`
        position: relative;
        max-height: 0px;
        margin-top: 0;
        overflow: hidden;
        background-color: ${color};
      `}
    >
     <h1>title</h1>
    </section>
  );
};

export default SectionFeature;
