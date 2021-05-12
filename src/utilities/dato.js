import { forEach, omit, includes } from "lodash";
import { SECTIONS, ELEMENTS } from "./story";

/* A LIST OF AVAILABLE BLOCKS IN DATO FOR THIS PARTICULAR STORY */
/* MAPS THEM TO EXISTING COMPONENTS OUTLINED IN STORY.JS */
const mapDatoKeysToISF = {
  DatoCmsParagraph: "Paragraph",
  DatoCmsQuote: "Quote",
  DatoCmsImage: "Images",
  DatoCmsHighlight: "Highlight",
  DatoCmsGallery: "Gallery",
  DatoCmsVideo: "Video",
  DatoCmsImagetext: "ImageText",
  DatoCmsListItem: "ListItem",
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

      /* Map section divider to existing sections - is there a more elegant way? */
      if (includes(item.sectionId, "feature")) {
        layout.c = SECTIONS.SectionFeature;
      } else if (includes(item.sectionId, "intro")) {
        layout.c = SECTIONS.SectionIntro;
      } else {
        console.log(
          `No available section type for ${item.sectionId}. Have a look in utilities/dato.js`
        );
        return;
      }

      layout.data = omit(item, ["id", "__typename", "sectionId"]);
      layout.elements = [];
      storyContent.push(layout);
    } else {
      if (index === 0) {
        console.log("Add an intro section divider bitte!");
      }

      if (!ELEMENTS[mapDatoKeysToISF[t]]) {
        console.log(
          `No available element type for ${element.type}. Have a look in utilities/dato.js`
        );
        return;
      }

      let element = {};
      element.type = mapDatoKeysToISF[t];
      element.c = ELEMENTS[element.type];
      element.data = omit(item, ["id", "__typename"]);

      storyContent[currentLayout].elements.push(element);
    }
  });

  return storyContent;
};

export default datoToBF;
