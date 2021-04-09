import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { Title } from "@components/Typography";

const Header = ({ title, backgroundImage }) => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100%;
        background-image: url("${backgroundImage.fluid &&
        backgroundImage.fluid.src}");
        background-size: cover;
        background-position: center center;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: rgba(0, 0, 0, 0.45);
        }
      `}
    >
      <div
        css={css`
          padding: 0px 16px;
          max-width: 680px;
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;

          h1 {
            line-height: 1.1em !important;
          }
        `}
      >
        <Title tag="h1" size="lg" uppercase condensed>
          {title}
        </Title>
      </div>
    </div>
  );
};

Header.propTypes = {
  backgroundImage: PropTypes.shape({
    fluid: PropTypes.shape({
      src: PropTypes.string,
    }),
  }),
  title: PropTypes.string,
};

Header.defaultProps = {
  backgroundImage: {
    fluid: {
      src:
        "https://firebasestorage.googleapis.com/v0/b/isf-web-app.appspot.com/o/v4AtQXOg81mjyO7ANqzx%2F5a877277-d92d-4234-9ba1-f0b6143bb883.jpg?alt=media&token=b896f77e-c6bd-4b14-ad15-aa4fdf0cd3b2",
    },
  },
  title: "The sorrows of pain and regret are left to the dead and the dying",
};

export default Header;
