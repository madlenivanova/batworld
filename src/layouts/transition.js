import React from "react";

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

const Transition = ({ children, location }) => {
  return (
    <TransitionGroup>
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
