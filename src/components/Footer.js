import { css } from "@emotion/react";
import { Link } from "gatsby";
import { Div, Container } from "@components/Markup";
import { DARK, ACCENT, LIGHT } from "../styles/colors";
import React from "react";
import fulllogo from "../images/bw-bulgaria-logo-02.png";
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
        width: 220px;
        border-radius: 16px 0 0 16px;
        margin: 8px 0;
        transition: 0.16s all;

        &:hover {
          background-color: ${ACCENT};
        }
      `}
    >
      {icon === "heart" ? (
        <UilHeart color={LIGHT} size="32" />
      ) : (
        <UilMedicalSquare color={LIGHT} size="32" />
      )}
      <Div
        css={css`
          margin-left: 16px;
        `}
      >
        <Heading tag="h6" size="COPY" uppercase>
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
        z-index: 2;

        @media (max-width: 767px) {
          display: none;
        }
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
    url: "https://www.facebook.com/batworld.bg/",
  },
  {
    icon: "insta",
    url: "https://www.instagram.com/bat.world.bulgaria/",
  },
  {
    icon: "in",
    url: "https://www.linkedin.com/company/batworld-bg/",
  },
];

const Footer = () => {
  return (
    <>
      <Sticky />
      <footer
        css={css`
          background-color: ${DARK};

          color: white;
          p {
            line-height: 1.35em;
          }
        `}
      >
        <Container>
          <Div
            pt="lg"
            pb="md"
            flex
            css={css`
              @media (max-width: 767px) {
                flex-direction: column;
              }
            `}
          >
            <Div
              flex
              jc="space-between"
              css={css`
                flex-direction: column;

                width: 100%;
                min-width: 100%;

                @media (min-width: 768px) {
                  width: 33.33%;
                  min-width: 33.33%;
                  max-width: 33.33%;
                }
              `}
            >
              <Div>
                <Text>+359 887 750525</Text>
                <Text>+359 883 090388</Text>
                <Text>bats@batworld.bg</Text>
              </Div>
              <Div flex mt="md">
                {socials.map((social, index) => (
                  <Social key={`social--${index}`} {...social}></Social>
                ))}
              </Div>
            </Div>
            <Div
              css={css`
                width: 100%;
                min-width: 100%;

                @media (min-width: 768px) {
                  width: 33.33%;
                  max-width: 33.33%;
                  min-width: 33.33%;
                }

                svg.batworld-logo {
                  height: 100%;
                  fill: ${LIGHT};
                }

                @media (max-width: 767px) {
                  margin: 32px 0px 0px;
                }
              `}
            >
              <img src={fulllogo} alt="batworld bulgaria logo" />
            </Div>
            <Heading></Heading>
          </Div>
          <Div pt="md" pb="md">
            <Text
              css={css`
                opacity: 0.5;
                max-width: 500px;
              `}
            >
              Bat World Bulgaria е неправителствена организация, основана през
              2019г. Всички права запазени.
            </Text>
          </Div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
