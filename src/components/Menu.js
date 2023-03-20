import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import { Container, Div } from "@components/Markup";
import { Heading, Text, Label } from "./Typography";
import { DARK, ACCENT, LIGHT } from "../styles/colors";
import { UilArrowUpRight, UilCaretRight } from "@iconscout/react-unicons";
import { MenuContainer } from "./headerStyles";
import LinkInternal from "./LinkInternal";
import Scrollbars from "react-custom-scrollbars";
import styled from "@emotion/styled";

const menuItems = [
  {
    desktopTitle: "За нас",
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
    desktopTitle: "За прилепите",
    keyTitle: "Въпроси и отговори",
    seeAll: true,
    subItems: [
      {
        keyTitle: "Въпроси и отговори",
      },
      {
        keyTitle: "Прилепите в България",
      },
    ],
  },
  {
    desktopTitle: "Включи се",
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
    desktopTitle: "Блог",
    keyTitle: "Последно от блога",
    seeAll: true,
    url: "/blog",
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

const MenuDesktopSubItem = ({ keyTitle, url }) => {
  return (
    <Link
      to={url}
      className="menu-link"
      css={css`
        height: 42px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        color: white;
        border-top: 1px solid rgba(255, 255, 255, 0.3);

        p {
          line-height: 1.2em;
        }
      `}
    >
      <Text textStyle="label">{keyTitle}</Text>
    </Link>
  );
};

const MenuDesktopItem = ({ desktopTitle, url, subItems, open, toggleOpen }) => {
  const styles = `color: white; border: none; box-shadow: none; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 16px; height: 30px;`;
  const C = styled(subItems ? "button" : Link)`
    ${styles}
  `;
  const props = subItems ? { onClick: toggleOpen } : { to: url };

  return (
    <div
      css={css`
        padding: 0 16px;
        position: relative;

        a {
          cursor: pointer;
        }

        p.nav-item {
          margin-right: 12px;
        }
      `}
    >
      <C {...props}>
        <Text className="nav-item">{desktopTitle}</Text>
        {subItems && (
          <UilCaretRight
            size={12}
            css={css`
              transform: rotate(90deg);
            `}
          />
        )}
      </C>
      {subItems && (
        <div
          css={css`
            background-color: ${DARK};
            position: absolute;
            left: 0;
            top: 100%;
            max-height: ${open ? "200px" : 0};
            transition: 0.15s all;

            .menu-link {
              opacity: ${open ? 1 : 0};
              transition: 0.15s all;
              transition-delay: ${open ? "0.15s" : "0s"};
            }
          `}
        >
          {subItems.map(subItem => (
            <MenuDesktopSubItem {...subItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export const MenuDesktop = ({ isScrolled }) => {
  const [open, setOpen] = useState(null);

  return (
    <nav
      css={css`
        display: flex;
        p.nav-item {
          color: ${isScrolled ? "white" : DARK};
        }
        svg {
          fill: ${isScrolled ? "white" : DARK};
        }
      `}
    >
      {menuItems.map((item, index) => (
        <MenuDesktopItem
          open={index === open}
          toggleOpen={() => {
            index === open ? setOpen(null) : setOpen(index);
          }}
          {...item}
        />
      ))}
    </nav>
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

export default MenuDesktop;
