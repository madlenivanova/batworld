import React from "react";
import story from "../data/story";
import { SECTIONS, ELEMENTS } from "../data/app";
import { DrawShape } from '@titelmedia/hs-specials'
import Layout from "../components/Layout";

const renderStory = () => {
  // render sections
  return story.sections.map((section, index) => {
    const Section = SECTIONS[section.type] || null;

    if (Section) {
      return (
        <Section key={`section--${index}`} {...section.data}>
          {section.elements.map((element, elementIndex) => {
            const Element = ELEMENTS[element.type] || null;

            if (Element) {
              return (
                <Element
                  key={`section--${index}--element--${elementIndex}`}
                  {...element.data}
                />
              );
            } else {
              console.log("No element found for " + element.type);
            }
          })}
          <DrawShape shape="Circular" />
        </Section>
      );
    } else {
      console.log("No section found for " + section.type);
    }
  });
};

const IndexPage = () => <Layout>{renderStory()}</Layout>;

export default IndexPage;
