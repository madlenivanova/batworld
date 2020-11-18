import React, { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import VisibilitySensor from "react-visibility-sensor";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const withAnimation = ({ from, to, duration }) => WrappedComponent => {
  const WithWrapper = props => {
    const wrapperRef = useRef();
    let hasSetInitialValues = useRef(null);
    let hasAnimated = false; // do only once

    useEffect(() => {
      if (!hasSetInitialValues.current && wrapperRef.current) {
        hasSetInitialValues.current = true;
        gsap.set(wrapperRef.current, {
          ...from,
        });
      }
    });

    const onPageEnter = isVisible => {
      if (!hasAnimated && isVisible) {
        gsap.to(wrapperRef.current, {
          ...to,
          duration: duration,
          ease: "power3.inOut",
        });
      }
    };

    return (
      <VisibilitySensor
        partialVisibility={true}
        minTopValue={100}
        onChange={onPageEnter}
      >
        <div
          ref={wrapperRef}
          css={css`
            height: 100%;
          `}
        >
          <WrappedComponent {...props} />
        </div>
      </VisibilitySensor>
    );
  };

  WithWrapper.displayName = `WithWrapper(${WrappedComponent.name})`;
  return WithWrapper;
};

export default withAnimation;
