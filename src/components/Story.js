import React, { useState, useEffect, useRef, useContext } from "react";
import Layout from "./Layout";
import { css } from "@emotion/react";
import Stickers from "./Stickers";
import { cloneDeep, findIndex, forEach, pull, slice, remove } from "lodash";
import Cursor from "./Cursor";
import Nav from "./Nav";
import { gsap, ScrollToPlugin } from "gsap/all";
import { LoadContext } from "../providers/LoadProvider";
import ImagesLoaded from "react-images-loaded";
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
  const [active, setActive] = useState(false);
  const [story, setStory] = useState([content[0]]);
  const [sections, setSections] = useState([0]);
  const cloudsRef = useRef(null);

  const { images } = useContext(LoadContext);

  useEffect(() => {
    console.log("images are?? ", images);
  }, [images]);

  const addSection = index => {
    setStory([...story, content[index]]);
  };

  useEffect(() => {
    if (story.length > 1) {
      const lastSection = story[story.length - 1].id;

      gsap.to(window, {
        scrollTo: `#${lastSection}`,
        duration: 0.5,
        delay: 1,
      });
    }
    console.log("story", story);
  }, [story]);

  const filterContent = () => {
    let _content = cloneDeep(content);
    forEach(story, (section, index) => {
      remove(_content, { id: section.id });
      //console.log("oj i", _content, section.id);
    });
    return _content;
  };

  const navItems = filterContent().map((section, index) => ({
    name: section.data.sectionTitle,
  }));

  return (
    <div className="bf-story">
      {story.map(section => {
        const { c, id, data, elements } = section;
        const Section = c;
        addProps({ id });
        const props = { ...data, ...addProps({ id }) };

        return (
          <Section {...props}>
            {elements.map((element, index) => {
              const Element = element.c;
              console.log(element);
              return (
                <Element
                  {...element.data}
                  {...addPropsElement({ element, index })}
                />
              );
            })}
          </Section>
        );
      })}
      <Nav items={navItems} onArtistClick={addSection} />
      {images && <Cursor containerClass="bf-story" clickableClass="handle" />}
    </div>
  );
};

//<Clouds />

export default Story;
