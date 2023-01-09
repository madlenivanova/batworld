import styled from "@emotion/styled";
import { DARK, LIGHT } from "../styles/colors";

export const Logo = styled.img`
  max-width: 120px;

  @media (min-width: 768px) {
    max-width: 180px;
  }
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  background: ${DARK};
  color: ${LIGHT};
  left: 0;
  height: 100vh;
  width: 100%;
  transition: 0.2s all;

  opacity: ${props => (props.isOpen ? 1 : 0)};
  pointer-events: ${props => (props.isOpen ? "all" : "none")};
`;
