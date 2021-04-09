import React from "react";
import { gsap, ScrollToPlugin } from "gsap/all";
import Header from "@components/Header";
gsap.registerPlugin(ScrollToPlugin);

const addProps = index => {
  let props = {};
  switch (index) {
    case 0:
      props.color = "#F5F0DA";
      break;
    case 1:
      props.color = "#E0DAF4";
      break;
    case 2:
      props.color = "#F5C2AB";
      break;
    case 3:
      props.color = "#000000";
      break;
  }

  return props;
};

const Story = ({ content }) => {
  return (
    <React.Fragment>
      {content.map((section, index) => {
        const { c, data, elements } = section;
        const Section = c;
        const props = { ...data, ...addProps(index) };

        return (
          <Section key={`section--${index}`} {...props} initTimeline={true}>
            {elements.map((element, elementIndex) => {
              const Element = element.c;
              return (
                <Element
                  key={`section--${index}--element--${elementIndex}`}
                  {...element.data}
                />
              );
            })}
          </Section>
        );
      })}
    </React.Fragment>
  );
};

export default Story;
