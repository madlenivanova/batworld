import React from "react";
import { Container, Div } from "@components/Markup";
import styled from "@emotion/styled";

const ImageBlockContainer = styled(Div)`
  padding-left: 33.33%;
`;

const ImageBlock = ({ items }) => {
  const images = items.map(item => item.fluid);

  return (
    <Container size="xl">
      <ImageBlockContainer mt="md">
        {images.map(img => (
          <img key={img.src} src={img.src} srcSet={img.srcSet} />
        ))}
      </ImageBlockContainer>
    </Container>
  );
};

export default ImageBlock;
