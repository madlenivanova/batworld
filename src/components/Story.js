import React, { useState, useEffect, useRef } from "react";
import Layout from "./Layout";
import { css } from "@emotion/react";
import Stickers from "./Stickers";
import { cloneDeep, findIndex } from "lodash";
import Clouds from "./Clouds";
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
    let _story = cloneDeep(story).push(content[index]);
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
  }, [story]);

  return (
    <Layout>
      {story.map(section => {
        const { c, id, data, elements } = section;
        const Section = c;
        addProps({ id });

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
            <button
              onClick={() => {
                addSection(1);
              }}
            >
              set active
            </button>
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
