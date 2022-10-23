import React, { useState } from "react";
import styled from "@emotion/styled";
import { Container, Div } from "@components/Markup";
import logo from "../images/logo.svg";
import { Squeeze as Hamburger } from "hamburger-react";
import { DARK } from "../styles/colors";

const Logo = styled.img`
  max-width: 120px;

  @media (min-width: 768px) {
    max-width: 180px;
  }
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container>
      <Div flex jc="space-between" ai="center">
        <Logo src={logo} />
        <Div>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            distance="sm"
            size="36"
            color={DARK}
          />
        </Div>
      </Div>
    </Container>
  );
};

export default Header;
