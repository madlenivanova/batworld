import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { css } from "@emotion/react";

const Header = ({ siteTitle }) => (
  <header
    css={css`
      height: 60px;
      border-bottom: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    <div>
      <h1>page header</h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
