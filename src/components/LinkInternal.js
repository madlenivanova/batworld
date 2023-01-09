import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { Heading } from "./Typography";
import { DARK, ACCENT, LIGHT } from "../styles/colors";
import { UilArrowRight } from "@iconscout/react-unicons";

const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const LinkInternal = ({ text, to }) => {
  return (
    <LinkContainer to={to}>
      <Heading tag="h6" size="COPY" uppercase mt="">
        {text}
      </Heading>
      <UilArrowRight size="24" />
    </LinkContainer>
  );
};

export default LinkInternal;
