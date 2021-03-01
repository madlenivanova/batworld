import React, { useState, useEffect, useRef, useContext } from "react";
import { css } from "@emotion/react";
import Stickers from "./Stickers";
import ImagesLoaded from "react-images-loaded";
import { LoadContext } from "../providers/LoadProvider";
import s from "../data/stickers";

const ElementWrapper = ({ id, children }) => {
  const elRef = useRef(null);
  const [useStickers, setUseStickers] = useState(false);

  const { images } = useContext(LoadContext);

  const stickers = s[id] || null;

  useEffect(() => {
    //console.log("images are loaded ", images);
    images && setUseStickers(true);
  }, [images]);

  return (
    <div
      ref={elRef}
      css={css`
        position: relative;
      `}
    >
      {children}
      {stickers && useStickers && (
        <Stickers stickers={stickers} container={elRef.current} />
      )}
    </div>
  );
};

export default ElementWrapper;
