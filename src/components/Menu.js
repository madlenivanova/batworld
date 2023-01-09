import React from "react";
import { css } from "@emotion/react";
import { Container, Div } from "@components/Markup";
import { Heading, Text } from "./Typography";
import { DARK, ACCENT, LIGHT } from "../styles/colors";
import { UilArrowUpRight } from "@iconscout/react-unicons";
import { MenuContainer } from "./headerStyles";
import Logo from "./Logo";
import LinkInternal from "./LinkInternal";
import Scrollbars from "react-custom-scrollbars";

const menuItems = [
  {
    keyTitle: "За нас",
    subItems: [
      {
        keyTitle: "Задруга",
      },
      {
        keyTitle: "Bat World Sanctuary",
      },
    ],
  },
  {
    keyTitle: "Въпроси и отговори",
    seeAll: true,
    subItems: [
      {
        keyTitle: "Намерих прилеп, какво да направя?",
      },
      {
        keyTitle: "Кои прилепи се срещат в България?",
      },
      {
        keyTitle: "Може ли да ме ухапе?",
      },
      {
        keyTitle: "Още някакъв често задаван въпрос?",
      },
    ],
  },
  {
    keyTitle: "Включи се",
    subItems: [
      {
        keyTitle: "Доброволци",
      },
      {
        keyTitle: "Дарения",
      },
      {
        keyTitle: "Магазин",
      },
      {
        keyTitle: "Как да помогна?",
      },
    ],
  },
  {
    keyTitle: "Последно от блога",
    seeAll: true,
    subItems: [
      {
        keyTitle: "Заглавие на блог пост",
        visual: true,
      },
    ],
  },
];

const MenuItem = ({ keyTitle, subItems, seeAll }) => {
  return (
    <Div
      pt="xs"
      pb="md"
      css={css`
        border-top: 1px solid ${LIGHT};
        color: ${LIGHT};

        svg {
          fill: ${LIGHT};
        }
      `}
    >
      <Div flex>
        <Div
          css={css`
            min-width: 50%;
          `}
        >
          <Heading size="FOUR" tag="h4" uppercase>
            {keyTitle}
          </Heading>
          {seeAll && <LinkInternal to={"/"} text="виж всички" />}
        </Div>
        <Div
          css={css`
            min-width: 50%;

            h5 {
              margin-bottom: 8px;
            }
          `}
        >
          {subItems.map(subItem => (
            <Heading size="FIVE" tag="h5">
              {subItem.keyTitle}
            </Heading>
          ))}
        </Div>
      </Div>
    </Div>
  );
};

const Menu = ({ isOpen }) => {
  return (
    <MenuContainer isOpen={isOpen}>
      <Scrollbars
        universal={true}
        autoHide={true}
        style={{
          height: "100vh",
        }}
      >
        <Container
          css={css`
            padding-top: 20vh !important;
          `}
        >
          <Div flex>
            <Div
              css={css`
                width: 33.33%;
              `}
            >
              <Text>+359 888 123456</Text>
              <Text>hello@batworld.bg</Text>
              <Text>София, ул. Георги Бенковски 20</Text>
            </Div>
            <Div
              css={css`
                width: 66.67%;
              `}
            >
              {menuItems.map(item => (
                <MenuItem {...item} />
              ))}
            </Div>
          </Div>
        </Container>
      </Scrollbars>
    </MenuContainer>
  );
};

export default Menu;
