import React, { createContext, useState } from "react";
export const LoadContext = createContext({ images: false, fonts: false });

import stickers from "../data/stickers";

const StickersProvider = ({ children }) => {
  const [useStickers, setUseStickers] = useState(false);

  const onImagesLoaded = () => {
    setUseStickers(true);
  };

  const ctx = { useStickers };

  return (
    <StickersContext.Provider value={ctx}>
      {<ImagesLoaded done={onImagesLoaded}>{children}</ImagesLoaded>}
    </StickersContext.Provider>
  );
};

export default StickersProvider;
