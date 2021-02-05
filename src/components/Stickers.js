import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import Draggable from "react-draggable"; // Both at the same time
import blm from "../assets/blm.png";
import shook from "../assets/shook.png";
import grls from "../assets/grls.png";
import shark from "../assets/shark.png";
import skull from "../assets/skull.png";
import bandaid from "../assets/bandaid.png";
import five from "../assets/5.png";
import seven from "../assets/7.png";
import alien from "../assets/alien.png";
import bee from "../assets/bee.png";
import cherry from "../assets/cherry.png";
import crocs from "../assets/crocs.png";
import donut from "../assets/donut.png";
import flag from "../assets/flag.png";
import headphones from "../assets/headphones.png";
import iheart from "../assets/iheart.png";
import jelly from "../assets/jelly.png";
import lock from "../assets/lock.png";
import lol from "../assets/lol.png";
import moon from "../assets/moon.png";
import note from "../assets/note.png";
import rocket from "../assets/rocket.png";
import scafander from "../assets/scafander.png";
import star from "../assets/star.png";
import w from "../assets/w.png";
import yinyang from "../assets/yinyang.png";

const STICKERS = {
  blm,
  shook,
  grls,
  shark,
  skull,
  bandaid,
  five,
  seven,
  alien,
  bee,
  cherry,
  crocs,
  donut,
  flag,
  headphones,
  iheart,
  jelly,
  lock,
  lol,
  moon,
  note,
  rocket,
  scafander,
  star,
  w,
  yinyang,
};

const getRelativeCoords = () => {
  const parentPos = document
      .getElementById("parent-id")
      .getBoundingClientRect(),
    childPos = document.getElementById("child-id").getBoundingClientRect(),
    relativePos = {};

  relativePos.top = childPos.top - parentPos.top;
  relativePos.right = childPos.right - parentPos.right;
  relativePos.bottom = childPos.bottom - parentPos.bottom;
  relativePos.left = childPos.left - parentPos.left;

  console.log(relativePos);
  return relativePos;
};

const StickersMachine = ({ stickers, container }) => {
  const [s, setS] = useState([]);
  const handleStart = e => {
    console.log("start ", e);
  };
  const handleDrag = e => {
    console.log("drag ", e);
  };
  const handleStop = e => {
    console.log("stop ", e);
  };

  useEffect(() => {
    if (container) {
      const { width, height } = container.getBoundingClientRect();
      const _s = stickers.map(sticker => {
        return {
          name: sticker.name,
          x: (sticker.x * width) / 100,
          y: (sticker.y * height) / 100,
        };
      });
      setS(_s);
    }
  }, [container]);

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
      {s.length > 0 &&
        s.map(item => {
          const url = STICKERS[item.name];
          return (
            <Draggable
              key={item.url}
              defaultPosition={{ x: item.x, y: item.y }}
              onStart={handleStart}
              onStop={handleStop}
            >
              <div
                className="handle"
                css={css`
                  max-width: 120px;
                  height: 120px;
                  border: 3px solid red;
                  position: absolute;
                  pointer-events: all !important;
                `}
              >
                <div
                  css={css`
                    pointer-events: none;
                  `}
                >
                  <img src={url} />
                </div>
              </div>
            </Draggable>
          );
        })}
    </div>
  );
};

export default StickersMachine;
