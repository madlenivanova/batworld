import React, { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { setPadding } from "@utilities/styles";
import { Container } from "@components/Markup";
import Player from "@vimeo/player";

const Video = ({ providerUid }) => {
  const videoContainer = useRef(null);
  const player = useRef(null);

  useEffect(() => {
    if (!player.current) {
      player.current = new Player(videoContainer.current, {
        id: providerUid,
        controls: true,
        autoplay: false,
      });
    }
  }, [providerUid]);

  return (
    <div
      css={css`
        ${setPadding(["top", "bottom"], "md")}
        position: relative;
      `}
    >
      <Container size="lg">
        <div
          css={css`
            position: relative;
            width: 100%;

            margin-bottom: 16px;
            @media (min-width: 768px) {
              margin-bottom: 32px;
            }
          `}
        >
          <div
            ref={videoContainer}
            css={css`
              position: relative;
              padding-bottom: 56.25%; /* 16:9 */
              height: 0;
              background: #000000;
              pointer-events: none;
              iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: all !important;
              }
            `}
          ></div>
        </div>
      </Container>
    </div>
  );
};

Video.defaultProps = {
  providerUid: "415876874",
};

Video.propTypes = {
  providerUid: PropTypes.string,
};

export default Video;
