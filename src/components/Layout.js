import React from "react";
import { css } from "@emotion/react";
import { Heading, Label } from "@components/Typography";
import { Div } from "@components/Markup";
import { Container } from "@components/Markup";
import { DARK } from "../styles/colors";

export const ArcImage = ({ fluid }) => {
  return (
    <Div
      css={css`
        img {
          border-radius: 50% 50% 0 0;
        }
      `}
    >
      <img src={fluid.src} srcSet={fluid.srcSet} />
    </Div>
  );
};

export const SectionLabel = ({ text }) => {
  return (
    <Div
      pt="sm"
      css={css`
        position: relative;

        &:before {
          content: "";
          width: 120px;
          height: 2px;
          background-color: ${DARK};
          top: 0;
          left: 0;
          position: absolute;
        }
      `}
    >
      <Label>За нас</Label>
    </Div>
  );
};

export const TextRightAligned = ({ text, children }) => {
  return (
    <Container size="xl">
      <Div
        flex
        mb="lg"
        css={css`
          @media (max-width: 767px) {
            flex-direction: column;
          }
        `}
      >
        <Div
          mt="sm"
          css={css`
            @media (min-width: 768px) {
              min-width: 33.33%;
            }

            @media (max-width: 767px) {
              margin-bottom: 30px;
            }
          `}
        >
          {children}
        </Div>
        <Div
          mt="sm"
          css={css`
            @media (min-width: 768px) {
              min-width: 33.33%;
            }
          `}
        >
          <Heading size="FOUR" dangerouslySetInnerHTML={{ __html: text }} />
        </Div>
      </Div>
    </Container>
  );
};
