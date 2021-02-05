import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { setPadding } from "../styles/utilities";
import Container from "../styles/Container";
import Player from "@vimeo/player";
import Stickers from "./Stickers";
import blm from "../assets/blm.png";
import shook from "../assets/shook.png";
import grls from "../assets/grls.png";
import shark from "../assets/shark.png";
import skull from "../assets/skull.png";
import bandaid from "../assets/bandaid.png";

const getRelativeCoords = () => {
  var parentPos = document.getElementById("parent-id").getBoundingClientRect(),
    childPos = document.getElementById("child-id").getBoundingClientRect(),
    relativePos = {};

  relativePos.top = childPos.top - parentPos.top;
  relativePos.right = childPos.right - parentPos.right;
  relativePos.bottom = childPos.bottom - parentPos.bottom;
  relativePos.left = childPos.left - parentPos.left;

  console.log(relativePos);
  return relativePos;
};

const Video = ({ providerUid }) => {
  const [stickers, setStickers] = useState([]);
  const videoContainer = useRef(null);
  let player = useRef(null);

  useEffect(() => {
    const {
      x,
      y,
      width,
      height,
    } = videoContainer.current.getBoundingClientRect();

    const { top, left } = getRelativeCoords();

    // 20% of video width
    let stickerBLM = { url: blm, x: left + 0.2 * width };
    console.log(width, y, x, videoContainer.current.getBoundingClientRect());
    let _stickers = [
      { url: blm, x: x + 0.2 * width, y: top },
      { url: shook, x: x + 0.6 * width, y: top },
    ];
    setStickers(_stickers);

    if (!player.current) {
      player.current = new Player(videoContainer.current, {
        id: providerUid,
        title: false,
        controls: true,
        byline: false,
        autoplay: true,
        muted: true,
        loop: true,
      });
    }
  }, [providerUid]);

  return (
    <div
      id="parent-id"
      css={css`
        ${setPadding(["top", "bottom"], "md")}
        position: relative;
        border: 2px solid green;
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
            id="child-id"
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
