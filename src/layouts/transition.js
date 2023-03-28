import React, { useEffect, useRef, createRef } from "react";
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

  useEffect(() => {
    console.log(location);
  }, [location]);

  panelRefs.current = Array(PANELS_COUNT)
    .fill()
    .map((_, i) => panelRefs.current[i] || createRef());

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
