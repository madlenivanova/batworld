import React from "react";
import { Label } from "@components/Typography";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ACCENT, DARK } from "../styles/colors";
import { Link } from "gatsby";
import { Div, Container } from "@components/Markup";

import { UilFacebookF } from "@iconscout/react-unicons";
import { FacebookShareButton } from "react-share";

const ShareButton = () => {
  return (
    <FacebookShareButton url={"#"}>
      <Div
        flex
        jc="center"
        ai="center"
        mr="sm"
        css={css`
          border: 1px solid ${DARK};
          height: 60px;
          width: 60px;
          border-radius: 50%;
          background: transparent;

          transition: 0.1s all;

          &:hover {
            background-color: ${DARK};

            svg {
              fill: white;
            }
          }
        `}
      >
        <UilFacebookF size={24} />
      </Div>
    </FacebookShareButton>
  );
};

const Share = () => {
  return (
    <Div flex>
      <ShareButton />
    </Div>
  );
};

export default Share;
