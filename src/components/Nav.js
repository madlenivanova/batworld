import React, { useState, useEffect, useRef } from "react";
import Layout from "./Layout";
import { css } from "@emotion/react";

const artists = [
  { name: "Rico Nasty" },
  { name: "Beebadoobee" },
  { name: "Kemio" },
  { name: "MLMA" },
  { name: "Victorma" },
];

const Nav = ({ onArtistClick }) => {
  return (
    <div
      css={css`
        display: flex;
        border: 2px solid green;
      `}
    >
      {artists.map((artist, index) => (
        <button
          onClick={() => {
            onArtistClick(index + 1);
          }}
        >
          {artist.name}
        </button>
      ))}
    </div>
  );
};

export default Nav;
