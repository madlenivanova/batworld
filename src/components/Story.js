import React from "react";
import { nanoid } from "nanoid";
import { cloneDeep, findIndex } from "lodash";
import Nav from "./Nav";
import { gsap, ScrollToPlugin } from "gsap/all";

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
  const goToSection = id => {
    if (typeof window === "object") {
      gsap.to(window, { duration: 2, scrollTo: `#${id}` });
    }
  };

  const filterContent = () => {
    let _content = cloneDeep(content);
    _content.splice(0, 1);
    return _content;
  };

  const navItems = filterContent().map(section => {
    const { color } = addProps({ id: section.id });

    return {
      sectionId: section.id,
      originalIndex: findIndex(content, { id: section.id }),
      name: section.data.sectionTitle,
      image: section.data.headerImage,
      color: color,
    };
  });

  return (
    <div className="bf-story">
      {content.map((section, index) => {
        const { c, id, data, elements } = section;
        const Section = c;
        addProps({ id });
        const props = { ...data, ...addProps({ id }) };

        return (
          <Section key={nanoid()} {...props}>
            {elements.map((element, index) => {
              const Element = element.c;
              const id = `${section.id}--${index}`;
              return (
                <ElementWrapper id={id} key={nanoid()}>
                  <Element
                    {...element.data}
                    {...addPropsElement({ element, index })}
                  />
                </ElementWrapper>
              );
            })}
            {index !== 0 && (
              <Nav
                items={navItems}
                onArtistClick={goToSection}
                bgColor={addProps({ id: content[index].id }).color}
              />
            )}
          </Section>
        );
      })}
    </div>
  );
};

//<Clouds />

export default Story;
