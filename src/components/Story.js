import React, { useState, useEffect, createRef, useContext } from "react";

import { css } from "@emotion/react";
import { cloneDeep, findIndex, forEach, pull, slice, remove } from "lodash";
import Cursor from "./Cursor";
import Nav from "./Nav";
import { gsap, ScrollToPlugin } from "gsap/all";
import { LoadContext } from "../providers/LoadProvider";

import ElementWrapper from "./ElementWrapper";
gsap.registerPlugin(ScrollToPlugin);

const addProps = ({ id }) => {
  let props = {};
  switch (id) {
    case "artist-one":
      props.color = "#D9F56A";
      break;
    case "artist-two":
      props.color = "#F15BB5";
      break;
    case "artist-three":
      props.color = "#F0B7B3";
      break;
    case "artist-four":
      props.color = "#9B5DE5";
      break;
    case "artist-five":
      props.color = "#4ECD67";
      break;
  }

  return props;
};

const addPropsElement = ({ element, index }) => {
  let props = {};
  if (element.type === "ImageText" && index % 2) {
    props.alignReverse = true;
  }
  return props;
};

const Story = ({ content }) => {
  const [story, setStory] = useState([content[0]]);

  const { images } = useContext(LoadContext);

  useEffect(() => {
    if (story.length > 1) {
      const lastSection = story[story.length - 1].id;
      console.log("last section ", lastSection, story, story.length);

      gsap.to(window, {
        scrollTo: `#${lastSection}`,
        duration: 0.5,
        delay: 1,
      });
    }
  }, [story]);

  const addSection = index => {
    setStory([...story, content[index]]);
  };

  const filterContent = () => {
    let _content = cloneDeep(content);
    forEach(story, (section, index) => {
      remove(_content, { id: section.id });
    });
    return _content;
  };

  const navItems = filterContent().map((section, index) => {
    const { color } = addProps({ id: section.id });
    return {
      originalIndex: findIndex(content, { id: section.id }),
      name: section.data.sectionTitle,
      image: section.data.headerImage,
      color: color,
    };
  });

  let rI = -1;

  return (
    <div className="bf-story">
      {story.map((section, index) => {
        const { c, id, data, elements } = section;
        const Section = c;
        addProps({ id });
        const props = { ...data, ...addProps({ id }) };

        return (
          <Section key={`${section.id}`} {...props}>
            {elements.map((element, index) => {
              const Element = element.c;
              const id = `${section.id}--${index}`;
              return (
                <ElementWrapper
                  id={`${section.id}--${index}`}
                  key={`${section.id}--${index}`}
                >
                  <Element
                    {...element.data}
                    {...addPropsElement({ element, index })}
                  />
                </ElementWrapper>
              );
            })}
          </Section>
        );
      })}
      <Nav
        items={navItems}
        onArtistClick={addSection}
        bgColor={addProps({ id: story[story.length - 1].id }).color}
      />
    </div>
  );
};

//<Clouds />

export default Story;
