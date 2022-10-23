import React, {
  useEffect,
  forwardRef,
  useRef,
  createRef,
  useContext,
} from "react";
import { gsap } from "gsap/all";
import styled from "@emotion/styled";
import { reverse } from "lodash";
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
  transform: translate3d(0, 100%, 0);
  opacity: 0.2;
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
    const panels = reverse(panelRefs.current.map(panelRef => panelRef.current));
    console.log(panels);
    const tl = gsap.timeline({ paused: true }).to(panels, {
      y: 0,
      duration: 0.6,
      stagger: {
        amount: 0.45,
        ease: "power3.easeInOut",
      },
      onComplete: () => {
        console.log("ok");
      },
    });

    return tl;
  };

  const renderPanels = () =>
    Array(PANELS_COUNT)
      .fill()
      .map((_, i) => (
        <Panel ref={panelRefs.current[i]} color={PANELS_COLORS[i]}>
          panel
        </Panel>
      ));

  // useEffect(() => {
  //   createTimeline().play();
  // }, [location.pathname]);

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
