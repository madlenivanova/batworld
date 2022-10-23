import React from "react";
import PropTypes from "prop-types";
import { Heading } from "@components/Typography";
import { Container } from "@components/Markup";
import styled from "@emotion/styled";

const Spacer = styled.div`
  padding-top: 30vh;
`;

const Hero = ({ title, subtitle, heroImage }) => {
  return (
    <Container size="xl">
      <Spacer />
      <Heading tag="h1" size="TWO" uppercase>
        {title}
      </Heading>
      <Heading tag="h3" size="THREE">
        Прилепите могат да бъдат активни през зимата по нормални прилепски
        причини, да си свършат работата и да влязат обратно в хибернация без
        изобщо да са в опасност, камо ли да са бедстващи.
      </Heading>
    </Container>
  );
};

Hero.propTypes = {
  backgroundImage: PropTypes.shape({
    fluid: PropTypes.shape({
      src: PropTypes.string,
    }),
  }),
  title: PropTypes.string,
};

Hero.defaultProps = {
  backgroundImage: {
    fluid: {
      src:
        "https://firebasestorage.googleapis.com/v0/b/isf-web-app.appspot.com/o/v4AtQXOg81mjyO7ANqzx%2F5a877277-d92d-4234-9ba1-f0b6143bb883.jpg?alt=media&token=b896f77e-c6bd-4b14-ad15-aa4fdf0cd3b2",
    },
  },
  title: "The sorrows of pain and regret are left to the dead and the dying",
};

export default Hero;
