import React, {
  createContext,
  useRef,
  useState,
  useEffect,
  forwardRef,
} from "react";
import ImagesLoaded from "react-images-loaded";
import { gsap } from "gsap/all";
import { css } from "@emotion/react";

import peace from "../assets/01_peace.png";
import close from "../assets/02_close.png";
import open from "../assets/02_open.png";

export const CursorContext = createContext();

const Cursor = forwardRef((props, ref) => {
  const { icon } = props;
  return (
    <div
      css={css`
        pointer-events: none;
        z-index: 90;
        display: none;
        opacity: 0;
      `}
    >
      <div
        ref={ref}
        css={css`
          position: fixed;
          z-index: 91;
          top: 0;
          left: 0;
          transform: translate3d(-50%, -50%, 0);
          pointer-events: none;
          border: 3px solid red;
        `}
      >
        <img src={icon} />
      </div>
    </div>
  );
});

const CursorProvider = ({ children }) => {
  const [icon, setIcon] = useState(peace);
  const [use, setUse] = useState(false);
  const cursorRef = useRef(null);
  const cursorImgRef = useRef(null);
  const containerRef = useRef(null);

  const icons = { peace, close, open };

  const switchIcon = iconName => {
    // console.log("switch!!!");
    // setIcon(icons[iconName]);
    cursorImgRef.current.src = icons[iconName];
  };

  const onMousemove = e => {
    gsap.to(cursorRef.current, {
      duration: 0.25,
      ease: "power2.easeIn",
      x: e.clientX,
      y: e.clientY,
    });
  };

  const onImagesLoaded = () => {
    containerRef.current = document.querySelector(`.bf-story`);
    containerRef.current.addEventListener("mousemove", onMousemove);

    const cleanup = () => {
      containerRef.current.removeEventListener("mousemove", onMousemove);
    };

    return cleanup;
  };

  const ctx = { use, icon, switchIcon };

  return (
    <CursorContext.Provider value={ctx}>
      <ImagesLoaded done={onImagesLoaded}>
        {children}
        <div
          css={css`
            pointer-events: none;
            z-index: 90;
            display: none;
            opacity: 0;
          `}
        >
          <div
            ref={cursorRef}
            css={css`
              position: fixed;
              z-index: 91;
              top: 0;
              left: 0;
              transform: translate3d(-50%, -50%, 0);
              pointer-events: none;
            `}
          >
            <img ref={cursorImgRef} src={icon} />
          </div>
        </div>
      </ImagesLoaded>
    </CursorContext.Provider>
  );
};

export default CursorProvider;
