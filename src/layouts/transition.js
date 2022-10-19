import React, {
  useEffect,
  forwardRef,
  useRef,
  createRef,
  useContext,
} from "react";
import { gsap } from "gsap/all";
import styled from "@emotion/styled";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";

const timeout = 1000;
const getTransitionStyles = {
  entering: {
    opacity: 0,
    position: "absolute",
  },
  entered: {
    transition: `opacity 350ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity 350ms ease-in-out`,
    opacity: 0,
  },
};

const Panel = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.color};
`;

const PanelContainer = styled.div`
  position: fixed;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const Transition = ({ children, location }) => {
  const panelRefs = useRef([]);
  const PANELS_COUNT = 3;
  const PANELS_COLORS = ["red", "blue", "orange"];

  panelRefs.current = Array(PANELS_COUNT)
    .fill()
    .map((_, i) => panelRefs.current[i] || createRef());

  const createTimeline = () => {
    const panels = panelRefs.current.map(panelRef => panelRef.current);
    console.log(panels);
    // const tl = gsap.timeline({ paused: true }).to(divs, 0.55, {
    //   // from: "center",
    //   x: index => {
    //     const CURRENT = findIndex(items, { key: pageKeyRef.current });
    //     const HAS_OFFSET = CURRENT < index;
    //     const INITIAL_POS = ITEM_WIDTH * index;
    //     const OFFSET = HAS_OFFSET ? maxWidthRef.current - ITEM_WIDTH : 0;
    //     return INITIAL_POS + OFFSET;
    //   },
    //   stagger: {
    //     amount: 0.45,
    //     ease: "power3.easeInOut",
    //     from: from,
    //   },
    //   ease: "power3.easeInOut",
    //   onComplete: () => {
    //     prevKeyRef.current = getPageKey({ pathname: location.pathname });
    //   },
    // });
  };

  useEffect(() => {
    createTimeline();
  }, [location.pathname]);

  const renderPanels = () =>
    Array(PANELS_COUNT)
      .fill()
      .map((_, i) => (
        <Panel ref={panelRefs.current[i]} color={PANELS_COLORS[i]}>
          panel
        </Panel>
      ));

  return (
    <TransitionGroup>
      <PanelContainer>{renderPanels()}</PanelContainer>
      <ReactTransition
        key={location.pathname}
        timeout={{
          enter: timeout,
          exit: timeout,
        }}
      >
        {status => {
          return (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          );
        }}
      </ReactTransition>
    </TransitionGroup>
  );
};

export default Transition;
