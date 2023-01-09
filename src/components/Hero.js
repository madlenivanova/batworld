import React from "react";
import { Heading } from "@components/Typography";
import { Container, Div } from "@components/Markup";
import styled from "@emotion/styled";
import { DARK } from "../styles/colors";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { UilShareAlt as UilShare } from "@iconscout/react-unicons";

const Spacer = styled.div`
  padding-top: 20vh;
`;

const Nav = styled(Div)`
  border-bottom: 1px solid ${DARK};
  height: 60px;
`;

const ShareContainer = styled.button`
  height: 45px;
  width: 45px;
  border: 1px solid ${DARK};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Share = () => {
  return (
    <ShareContainer>
      <UilShare />
    </ShareContainer>
  );
};

const Hero = ({ title, featuredImage, share, nav }) => {
  return (
    <Container size="xl">
      <Spacer />
      {nav && (
        <Nav flex ai="center" mb="md">
          <UilArrowLeft color={DARK} />
          <Heading tag="h6" size="COPY" uppercase ml="xs">
            обратно към въпроси и отговори
          </Heading>
        </Nav>
      )}

      <Heading tag="h1" size="ONE" uppercase>
        {title}
      </Heading>

      <Div mt="lg" mb="md">
        {share && <Share />}
      </Div>
    </Container>
  );
};

export default Hero;
