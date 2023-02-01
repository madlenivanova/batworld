import React from "react";
import { Heading, Text, Label } from "@components/Typography";
import { graphql } from "gatsby";
import Hero from "@components/Hero";
import { css } from "@emotion/react";
import SectionIntro from "@components/SectionIntro";
import { Container, Div } from "@components/Markup";
import GoToLink from "@components/GoToLink";
import hands from "../images/hands.svg";
import info from "../images/info.svg";
import heart from "../images/heart.svg";
import { ACCENT, LIGHT, DARK } from "../styles/colors";

const icons = { heart, info, hands };
const colors = { heart: "#EDB096", info: "#b6b7f2", hands: "#f2f1b6" };

const HomepageLink = ({ heading, text, icon, url }) => {
  return (
    <Div
      flex
      ai="flex-start"
      css={css`
        width: 33.33%;
        max-width: 33.33%;
        flex-direction: column;
        padding: 0px 20px;
        position: relative;

        img {
          max-width: 50%;
          width: 50%;
          z-index: 2;
          position: relative;
        }

        img.info {
          width: 33%;
        }

        h3,
        a {
          z-index: 2;
          position: relative;
        }

        .img-container {
          height: 240px;
          width: 100%;

          &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 70%;
            padding-top: 70%;
            border-radius: 50%;
            background: ${colors[icon]};
            filter: blur(10px);
            opacity: 0.35;
          }
        }

        h3 {
          max-width: 66.66%;
        }
      `}
    >
      <Div className="img-container">
        <img className={icon} src={icons[icon]} />
      </Div>
      <Heading size="FIVE" bold tag="h3" mt="sm" mb="md">
        {heading}
      </Heading>
      <GoToLink to={url} text="към страницата" />
    </Div>
  );
};

const HomepageBanner = () => {
  return (
    <Div
      pt="lg"
      pb="lg"
      css={css`
        background: ${DARK};
        color: ${LIGHT};
      `}
    >
      <Container>
        <Heading
          size="TWO"
          tag="h2"
          bold
          mb="lg"
          dangerouslySetInnerHTML={{
            __html: `Временен плейсхолдър<br />за банер относно текущи неща, чиято визия и съдържание се управлява от дашборда.`,
          }}
        />
      </Container>
    </Div>
  );
};

const HomepageLinks = ({ hplinks }) => {
  return (
    <>
      <HomepageBanner />
      <Div pt="lg" pb="lg" css={css``}>
        <Container>
          <Heading
            size="TWO"
            tag="h2"
            bold
            mb="lg"
            dangerouslySetInnerHTML={{ __html: `Помогни<br />да ги опазим` }}
          />
          <Div flex>
            {hplinks.map(hplink => (
              <HomepageLink key={hplink.heading} {...hplink} />
            ))}
          </Div>
        </Container>
      </Div>
    </>
  );
};

export default HomepageLinks;
