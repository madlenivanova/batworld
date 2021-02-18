import React, { useState, useEffect, useRef } from "react";
import Layout from "./Layout";
import { css } from "@emotion/react";
import Stickers from "./Stickers";
import { cloneDeep, findIndex, forEach, pull, slice, remove } from "lodash";
import Clouds from "./Clouds";
import Nav from "./Nav";
import { gsap, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);

const addProps = ({ id }) => {
  let props = {};
  if (id === "artist-one") {
    props.color = "#D9F56A";
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

  const addSection = index => {
    setStory([...story, content[index]]);
  };

  useEffect(() => {
    if (story.length > 1) {
      const lastSection = story[story.length - 1].id;

      gsap.to(cloudsRef.current, {
        height: "100vh",
        duration: 1,
        delay: 0.5, //wait for nav to complete
        onComplete: () => {},
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
    <Layout>
      <div
        css={css`
          padding-bottom: 150px;
        `}
      >
        {story.map(section => {
          const { c, id, data, elements } = section;
          const Section = c;
          addProps({ id });

          const props = { ...data, ...addProps({ id }) };

          return (
            <Section {...props}>
              {elements.map((element, index) => {
                const Element = element.c;
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
        <div
          ref={cloudsRef}
          css={css`
            height: 300px;
            border: 3px solid blue;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            pointer-events: none;
          `}
        >
          <div
            css={css`
              height: 150px;
              width: 100%;
              background: blue;
              position: absolute;
              bottom: 0;
              left: 0;
            `}
          ></div>
        </div>
      </div>
    </Layout>
  );
};

//<Clouds />

export default Story;
/* 
<div
        ref={cloudsRef}
        css={css`
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 150px;
          overflow: hidden;
          border: 3px solid green;
          display: flex;
          align-items: flex-end;
          display: none;

          svg {
            width: 100%;
          }
        `}
      >
        <h1>clouds</h1>
      </div>*/
