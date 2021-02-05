import { forEach, omit, includes } from "lodash";
import { SECTIONS, ELEMENTS } from "./story";

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
    if (includes(t, "Section")) {
      if (currentLayout === null) {
        currentLayout = 0;
      } else {
        currentLayout = currentLayout + 1;
      }
      let layout = {};
      layout.id = item.sectionId;
      layout.c = SECTIONS.SectionArtist;
      layout.data = omit(item, ["id", "__typename"]);
      layout.elements = [];
      storyContent.push(layout);
    } else {
      if (index === 0) {
        currentLayout = 0;
        let layout = {};
        layout.id = "section-0-default";
        layout.c = SECTIONS.SectionIntro;
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
      element.c = ELEMENTS[elType];
      element.data = omit(item, ["id", "__typename"]);

      storyContent[currentLayout].elements.push(element);
    }
  });
  return storyContent;
};

export default datoToBF;
