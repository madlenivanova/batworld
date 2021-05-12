import React from "react";
import { gsap, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

const Story = ({ content }) => {
  return (
    <React.Fragment>
      {content.map((section, index) => {
        const { c, data, elements } = section;
        const Section = c;

        return (
          <Section key={`section--${index}`} {...data} initTimeline={true}>
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
