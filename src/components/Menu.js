import React, { useContext } from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import { Container, Div } from "@components/Markup";
import { Text, Label } from "./Typography";
import { DARK, LIGHT } from "../styles/colors";
import { UilCaretRight } from "@iconscout/react-unicons";
import { MenuContainer } from "./headerStyles";
import Scrollbars from "react-custom-scrollbars";
import styled from "@emotion/styled";
import { menuItems } from "./menuItems";
import { NavContext } from "@providers/NavProvider";

const MenuItem = ({ keyTitle, subItems, url }) => {
  console.log(url);
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
          {url ? (
            <Link to={url}>
              <Label>{keyTitle}</Label>
            </Link>
          ) : (
            <Label>{keyTitle}</Label>
          )}
        </Div>
        <Div
          css={css`
            min-width: 50%;

            h5 {
              margin-bottom: 8px;
            }
          `}
        >
          {subItems?.map(subItem => {
            return (
              <Link to={subItem.url}>
                <Text>{subItem.keyTitle}</Text>
              </Link>
            );
          })}
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
  const styles = `color: white!important; border: none; box-shadow: none; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 16px; height: 30px;`;
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
          color: white;

          &:visited {
            color: white;
          }
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
  const { navOpen, setNavOpen } = useContext(NavContext);

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
        @media (max-width: 767px) {
          display: none;
        }
      `}
    >
      {menuItems.map((item, index) => (
        <MenuDesktopItem
          open={index === navOpen}
          toggleOpen={() => {
            index === navOpen ? setNavOpen(null) : setNavOpen(index);
          }}
          {...item}
        />
      ))}
    </nav>
  );
};

export const Menu = () => {
  const { mobileNavOpen } = useContext(NavContext);
  return (
    <MenuContainer isOpen={mobileNavOpen}>
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
          <Div>
            <Div css={css``}>
              {menuItems.map(item => (
                <MenuItem {...item} />
              ))}
            </Div>
            <Div
              css={css`
                border-bottom: 1px solid white;
              `}
            >
              <Text>+359 888 123456</Text>
              <Text>hello@batworld.bg</Text>
              <Text>София, ул. Георги Бенковски 20</Text>
            </Div>
          </Div>
        </Container>
      </Scrollbars>
    </MenuContainer>
  );
};

export default MenuDesktop;
