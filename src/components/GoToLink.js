import React from "react";
import { Label } from "@components/Typography";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ACCENT } from "../styles/colors";
import { Link } from "gatsby";
import { UilArrowUpRight } from "@iconscout/react-unicons";

const FlexLink = styled(Link)`
  display: flex;
`;

const GoToLink = ({ text, url, dir }) => {
  return (
    <FlexLink
      to={url}
      css={css`
        * {
          transition: 0.1s all;
        }
        &:hover {
          color: ${ACCENT};
          p {
            color: ${ACCENT};
          }
          svg,
          path {
            fill: ${ACCENT};
          }
        }
      `}
    >
      <Label>{text}</Label>
      <UilArrowUpRight />
    </FlexLink>
  );
};

export default GoToLink;
