import React, { createContext, useState } from "react";
import ImagesLoaded from "react-images-loaded";

// Global Load Context providing info to components
// on whether images and fonts are loaded
// so they can do what they do accordingly

export const LoadContext = createContext({ images: false, fonts: false });

const LoadProvider = ({ children }) => {
  const [images, setImages] = useState(false);
  const [fonts, setFonts] = useState(false);

  const onImagesLoaded = () => {
    setImages(true);
  };

  const loadFonts = ({ families }) => {
    if (typeof window === "object") {
      const WebFont = require("webfontloader");
      let counter = 0;
      WebFont.load({
        custom: {
          families: families,
        },
        fontactive: (familyName, fvd) => {
          counter += 1;
          if (counter === families.length) {
            setFonts(true);
          }
        },
      });
    }
  };

  const ctx = { images, fonts, loadFonts };

  return (
    <LoadContext.Provider value={ctx}>
      <ImagesLoaded done={onImagesLoaded}>{children}</ImagesLoaded>
    </LoadContext.Provider>
  );
};

export default LoadProvider;
