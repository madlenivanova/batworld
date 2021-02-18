import React, { createContext, useState } from "react";
import ImagesLoaded from "react-images-loaded";

import peace from "../assets/01_peace.png";
import close from "../assets/02_close.png";
import open from "../assets/02_open.png";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [icon, setIcon] = useState(peace);
  const [use, setUse] = useState(false);

  const icons = { peace, close, open };

  const switchIcon = iconName => {
    setIcon(icons[iconName]);
  };

  const onImagesLoaded = () => {
    setUse(true);
  };

  const ctx = { use, icon, switchIcon };

  return (
    <CursorContext.Provider value={ctx}>
      <ImagesLoaded done={onImagesLoaded}>{children}</ImagesLoaded>
    </CursorContext.Provider>
  );
};

export default CursorProvider;
