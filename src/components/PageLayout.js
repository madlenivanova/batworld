import { graphql } from "gatsby";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { Div, Container } from "@components/Markup";
import React from "react";
import { Text, Heading } from "@components/Typography";

export const Header = ({ title, featuredImage }) => {
  return (
    <Div pt="xl" pb="lg">
      <Container>
        <Heading tag="h1" size="THREE" uppercase bold>
          {title}
        </Heading>
      </Container>
    </Div>
  );
};

export const PageLayout = ({ title, featuredImage, children }) => {
  return (
    <Div>
      <Header title={title} featuredImage={featuredImage} />
      <Container>{children}</Container>
    </Div>
  );
};
