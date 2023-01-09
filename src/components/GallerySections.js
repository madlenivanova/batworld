import { css } from "@emotion/react";
import React, {
  useState,
  useEffect,
  useRef,
  createRef,
  forwardRef,
} from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { Div, Container } from "@components/Markup";
import { ACCENT, LIGHT, DARK } from "../styles/colors";
import { forEach } from "lodash";
import { Text, Heading } from "@components/Typography";
gsap.registerPlugin(ScrollTrigger);

const Section = ({ text, isActive }) => {
  return (
    <Div
      flex
      ai="center"
      jc="center"
      css={css`
        height: 100vh;
        width: 100%;

        text-align: center;
      `}
    >
      <Container>
        <Heading size={"FOUR"}>{text}</Heading>
      </Container>
    </Div>
  );
};

const Placeholder = forwardRef((props, ref) => (
  <div
    ref={ref}
    css={css`
      height: 100vh;
      width: 100%;
    `}
  />
));

const Counter = ({ num, sections }) => (
  <div
    css={css`
      position: absolute;
      transform: rotate(90deg);
      top: calc(100vh - 160px);
      right: -40px;
      color: ${LIGHT};
      span {
        color: ${ACCENT};
      }
    `}
  >
    <Heading size="THREE" uppercase>
      <span>0{num + 1}</span>/0{sections.length}
    </Heading>
  </div>
);

const GallerySections = ({ sections }) => {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  sectionRefs.current = Array(sections.length)
    .fill()
    .map((_, i) => sectionRefs[i] || createRef());

  const makeTl = ({ trigger, i }) => {
    let options = {
      trigger: trigger,
      start: "top 50%",
      end: `center center`,
      scrub: true,
      onEnter: () => {
        setActive(i);
      },
      onEnterBack: () => {
        setActive(i);
      },
    };

    return gsap.timeline({
      scrollTrigger: options,
    });
  };

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        pin: true,
        start: "top top",
        endTrigger: "#next",
        end: "top bottom",
        pinSpacing: false,
        scrub: 1,
      },
    });
    forEach(sections, (s, index) => {
      makeTl({ trigger: sectionRefs.current[index].current, i: index });
    });
  }, []);

  //   useEffect(() => {
  //     console.log("active", active);
  //   }, [active]);

  return (
    <Div
      id="sections"
      css={css`
        position: relative;
      `}
    >
      <Div
        ref={headingRef}
        flex
        ai="center"
        jc="center"
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100%;
          z-index: 20;
        `}
      >
        <Counter num={active} sections={sections} />
        <Container>
          <Heading
            size={"FOUR"}
            css={css`
              max-width: 1000px;
              color: ${LIGHT};
              text-align: center;
            `}
          >
            {sections[active]?.text}
          </Heading>
        </Container>
      </Div>
      {sections.map((s, i) => {
        return <Placeholder ref={sectionRefs.current[i]} key={`intro--${i}`} />;
      })}
    </Div>
  );
};

export default GallerySections;
