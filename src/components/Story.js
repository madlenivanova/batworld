import React from "react";
import { gsap, ScrollToPlugin } from "gsap/all";
import {Title, Text} from "@components/Typography";
gsap.registerPlugin(ScrollToPlugin);

const Story = ({ content }) => {

  return (
    <React.Fragment>
      <Title tag='h1' size='lg'>proba</Title>
      {content.map((section, index) => {
        const { c, data, elements } = section;
        const Section = c;
        const props = { ...data};

        return (
          <Section key={`section--${index}`} {...props}>
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
