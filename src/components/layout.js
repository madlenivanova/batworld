import React from "react";
import { Global, css } from "@emotion/react";
import GlobalFonts from "../fonts/fonts";
import LoadProvider from "../providers/LoadProvider";
import ResizeProvider from "../providers/ResizeProvider";

const Layout = ({ children }) => {
  return (
    <LoadProvider>
      <ResizeProvider>
        <div>
          <GlobalFonts />
          <Global
            styles={css`
              * {
                box-sizing: border-box;
                margin: 0;
              }
              html,
              body {
                overflow-x: hidden;
              }
              #my-story {
                margin: 0;
                font-size: 16px;
                line-height: 1.5em;
                font-family: "univers-extended";
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              h1,
              h2,
              h3,
              h4,
              h5,
              h6 {
                margin: 0px;
              }

              button {
                &:hover,
                &:focus {
                  outline: none;
                }
              }

              img {
                max-width: 100%;
                width: 100%;
              }

              // WP ADJUSTMENTS
              article {
                padding: 0px;
                margin: 0px;
              }

              .header,
              .header--sticky {
                background: transparent !important;
              }
              .post,
              .post--story {
                padding-top: 30px;

                @media (min-width: 768px) {
                  padding-top: 60px;
                }
              }

              .post__tags,
              .author-credits,
              footer,
              .section__headline,
              .section__content,
              .parallax-leaderboard-ad,
              .post__sharing-header,
              .fullscreen-header,
              .section.section-latest-posts,
              .section.section-related-posts {
                display: none;
              }
            `}
          />

          <main
            css={css`
              border: 2px solid red;
            `}
          >
            {children}
          </main>
        </div>
      </ResizeProvider>
    </LoadProvider>
  );
};

export default Layout;
