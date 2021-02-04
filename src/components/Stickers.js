import React, { useState, useEffect, useRef } from "react";
import { css } from "@emotion/react";
import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time
import blm from "../assets/blm.png";
import shook from "../assets/shook.png";

const items = [{ url: blm, x: 20, y: 30 }];

const Stickers = ({ stickers }) => {
  const handleStart = e => {
    console.log("start ", e);
  };
  const handleDrag = e => {
    console.log("drag ", e);
  };
  const handleStop = e => {
    console.log("stop ", e);
  };
  console.log(stickers);

  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        pointer-events: none;
        z-index: 20;
      `}
    >
      {stickers.map(item => (
        <Draggable
          key={item.url}
          defaultPosition={{ x: item.x, y: item.y }}
          onStart={handleStart}
          onStop={handleStop}
        >
          <div
            className="handle"
            css={css`
              max-width: 60px;
              height: 60px;
              border: 3px solid red;
              position: absolute;
              /* top: ${item.y}px;
              left: ${item.x}px; */
              pointer-events: all !important;
            `}
          >
            <div
              css={css`
                pointer-events: none;
              `}
            >
              <img src={item.url} />
            </div>
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Stickers;
