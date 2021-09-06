import React, { useEffect, forwardRef, useRef } from "react";
//import VisibilitySensor from "react-visibility-sensor";
import { gsap, ScrollTrigger } from "gsap/all";
import SplitText from "../plugins/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

/* USE WITH STYLED COMPONENTS 

	export const Title = styled('h2')`
		letter-spacing: 0.2px;
		line-height: 1.5em;
		font-weight: 400;
		font-family: 'univers-extended';
	`;

	export const TitleWithLettersAnimation = withLettersAnimation({
		from: {
			opacity: 0,
			y: '30px',
		},
		to: {
			opacity: 1,
			y: '0px',
		},
		duration: 1,
	})(Title);
*/

const SubWrapper = forwardRef((props, ref) => {
  const { C } = props;
  return (
    <div ref={ref}>
      <C {...props} />
    </div>
  );
});

const withLettersAnimation = ({ from, to, duration }) => WrappedComponent => {
  const WithWrapper = props => {
    const headingRef = useRef(null);
    const split = useRef(null);
    let hasSetInitialValues = useRef(null);
    let hasAnimated = false; // do only once

    useEffect(() => {
      if (!hasSetInitialValues.current && headingRef.current) {
        hasSetInitialValues.current = true;
        split.current = new SplitText(headingRef.current, {
          type: ["words", "chars"],
        });
        gsap.set(split.current.chars, {
          ...from,
        });
        gsap.set(split.current.words, {
          overflowY: "hidden",
        });
      }
    });

    const animate = () => {
      hasAnimated = true;
      gsap.to(split.current.chars, {
        duration: duration,
        ...to,
        ease: "power3.inOut",
        stagger: {
          amount: 0.45,
        },
      });
    };

    const onPageEnter = isVisible => {
      if (!hasAnimated && split.current && isVisible) {
        animate();
      }
    };

    return (
      <div>
        {({ isVisible }) => {
          if (isVisible && split.current) {
            animate();
          }
          return (
            <SubWrapper ref={headingRef} C={WrappedComponent} {...props} />
          );
        }}
      </div>
    );
  };

  WithWrapper.displayName = `WithWrapper(${WrappedComponent.name})`;
  return WithWrapper;
};

export default withLettersAnimation;
