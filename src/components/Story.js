import React from "react";
import Layout from "./Layout";
import Stickers from "./Stickers";

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
  return (
    <Layout>
      {content.map(section => {
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
          </Section>
        );
      })}
    </Layout>
  );
};

export default Story;
