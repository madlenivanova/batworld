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
      gsap.to(cloudsRef.current, {
        height: "100vh",
        duration: 1,
        onComplete: () => {
          gsap.to(window, { scrollTo: "max", duration: 1 });
        },
      });
    }
    console.log("story", story);
    filterContent();
  }, [story]);

  const filterContent = () => {
    let _content = cloneDeep(content);
    forEach(story, (section, index) => {
      remove(_content, { id: section.id });
      //console.log("oj i", _content, section.id);
    });
    return _content;
  };

  return (
    <Layout>
      {story.map(section => {
        const { c, id, data, elements } = section;
        const Section = c;
        addProps({ id });
        // const navElements = story.map((section, index) => {
        //   if (index > 0) return { name: section.sectionTitle };
        // });
        // console.log("nav elements", navElements);
        console.log("filtered", filterContent());
        const nnn = slice(story, 1).map((section, index) => {
          //console.log("section? ", section);
          return { name: section.data.sectionTitle };
        });
        return (
          <Section {...data} {...addProps({ id })}>
            {elements.map((element, index) => {
              const Element = element.c;
              return (
                <Element
                  {...element.data}
                  {...addPropsElement({ element, index })}
                />
              );
            })}
            <Nav onArtistClick={addSection} />
          </Section>
        );
      })}
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

          svg {
            width: 100%;
          }
        `}
      >
        <h1>clouds</h1>
      </div>
    </Layout>
  );
};

//<Clouds />

export default Story;
