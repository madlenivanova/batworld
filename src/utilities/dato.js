import React from "react";
import { forEach, omit, includes } from "lodash";
import styled from "styled-components";
import Paragraph from "../components/Paragraph";
import Highlight from "../components/Highlight";
import Video from "../components/Video";
import Images from "../components/Images";
import SectionArtist from "../components/SectionArtist";

const IntroSection = styled("section")`
  background-color: red;
  padding: 120px 0px;
`;

const ArtistSection = styled("section")`
  background: ${props => props.color};
  padding: 90px 0px;
`;

const ImageText = () => {
  return <div>Image Text</div>;
};

const Elements = { Paragraph, Highlight, Video, Images, ImageText };

const mapDatoKeysToISF = {
  DatoCmsParagraph: "Paragraph",
  DatoCmsQuote: "Quote",
  DatoCmsImage: "Images",
  DatoCmsHighlight: "Highlight",
  DatoCmsGallery: "Gallery",
  DatoCmsVideo: "Video",
  DatoCmsKvMediaType: "KvMedia",
  DatoCmsKvTextType: "KvText",
  DatoCmsImagetext: "ImageText",
};

export const datoToBF = ({ content }) => {
  let storyContent = [];
  let currentLayout = null;

  forEach(content, (item, index) => {
    // check if first layout, and if so, init

    const t = item.__typename;
    console.log("type is ", t);
    if (includes(t, "Section")) {
      if (currentLayout === null) {
        currentLayout = 0;
      } else {
        currentLayout = currentLayout + 1;
      }
      let layout = {};
      layout.id = item.sectionId;
      layout.c = SectionArtist;
      layout.data = omit(item, ["id", "__typename"]);
      layout.elements = [];
      console.log(layout);
      storyContent.push(layout);
    } else {
      if (index === 0) {
        currentLayout = 0;
        let layout = {};
        layout.id = "section-0-default";
        layout.c = IntroSection;
        layout.data = {
          sectionTitle: "Intro section",
          sectionId: "intro-section",
        };
        layout.elements = [];
        storyContent.push(layout);
      }
      let elType = mapDatoKeysToISF[t];
      let element = {};
      element.type = elType;
      element.c = Elements[elType];
      element.data = omit(item, ["id", "__typename"]);

      if (item.items) {
        let elItems = [];
        forEach(item.items, imageItem => {
          let newImageItem = imageItem.fluid;
          elItems.push(newImageItem);
        });
        element.data.items = elItems;
      }
      storyContent[currentLayout].elements.push(element);
    }
  });
  return storyContent;
};

export default datoToBF;
