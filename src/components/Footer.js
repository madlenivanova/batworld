import { graphql } from "gatsby";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { Div, Container } from "@components/Markup";
import { DARK, ACCENT, LIGHT } from "../styles/colors";
import React from "react";
import Logo from "./Logo";
import { Text, Heading } from "@components/Typography";
import { UilHeart } from "@iconscout/react-unicons";
import { UilMedicalSquare } from "@iconscout/react-unicons";
import { UilFacebookF } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";

const StickyItem = ({ text, icon, url }) => (
  <Link to={url}>
    <Div
      css={css`
        cursor: pointer;
        background-color: ${DARK};
        display: flex;
        padding: 16px 16px;
        color: ${LIGHT};
        align-items: center;
        width: 240px;
        border-radius: 16px 0 0 16px;
        margin: 8px 0;
        transition: 0.16s all;

        &:hover {
          background-color: ${ACCENT};
        }
      `}
    >
      {icon === "heart" ? (
        <UilHeart color={LIGHT} size="24" />
      ) : (
        <UilMedicalSquare color={LIGHT} size="24" />
      )}
      <Div
        css={css`
          margin-left: 16px;
        `}
      >
        <Heading tag="h6" size="COPY" uppercase mr="xs">
          {text}
        </Heading>
      </Div>
    </Div>
  </Link>
);

const Sticky = () => {
  return (
    <div
      css={css`
        position: fixed;
        right: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);
      `}
    >
      <StickyItem text="намерих прилеп" icon={"medical"} />
      <StickyItem text="подкрепи ни" icon={"heart"} />
    </div>
  );
};

const FooterLink = ({ text, url }) => {
  return (
    <Link
      to={url}
      css={css`
        margin-bottom: 8px;
      `}
    >
      <Text>{text}</Text>
    </Link>
  );
};

const Social = ({ icon, url }) => {
  const icons = {
    fb: UilFacebookF,
    insta: UilInstagram,
    in: UilLinkedin,
  };
  const Ic = icons[icon];

  return (
    <Link
      to={url}
      css={css`
        margin-right: 16px;
      `}
    >
      <Ic color={LIGHT} size={24} />
    </Link>
  );
};

const socials = [
  {
    icon: "fb",
    url: "#",
  },
  {
    icon: "insta",
    url: "#",
  },
  {
    icon: "in",
    url: "#",
  },
];

const Footer = () => {
  return (
    <>
      <Sticky />
      <footer
        css={css`
          background-color: ${DARK};
        `}
      >
        <Container>
          <Div pt="lg" pb="md" flex>
            <Div
              css={css`
                color: white;
                @media (min-width: 768px) {
                  width: 33.33%;
                  min-width: 33.33%;
                }
              `}
            >
              <Text>+359 888 123456</Text>
              <Text>hello@batworld.bg</Text>
              <Text>София, ул. Георги Бенковски 20</Text>

              <Div flex mt="md">
                {socials.map((social, index) => (
                  <Social key={`social--${index}`} {...social}></Social>
                ))}
              </Div>
            </Div>
            <Div
              css={css`
                border: 1px solid red;
                @media (min-width: 768px) {
                  width: 33.33%;
                }

                svg.batworld-logo {
                  height: 100%;
                  fill: ${LIGHT};
                }
              `}
            >
              <Logo />
            </Div>
            <Heading></Heading>
          </Div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
