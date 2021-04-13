import { forEach, omit, includes } from "lodash";
import { SECTIONS, ELEMENTS } from "./story";

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
    //console.log('typename ', t);
    if (includes(t, "Section")) {
      if (currentLayout === null) {
        currentLayout = 0;
      } else {
        currentLayout = currentLayout + 1;
      }
      let layout = {};

      if (includes(item.sectionId, "feature")) {
        layout.c = SECTIONS.SectionFeature;
      } else if (includes(item.sectionId, "intro")) {
        layout.c = SECTIONS.SectionIntro;
      } else if (includes(item.sectionId, "simple")) {
        layout.c = SECTIONS.SectionSimple;
      }

      layout.data = omit(item, ["id", "__typename", "sectionId"]);
      layout.elements = [];
      storyContent.push(layout);
    } else {
      if (index === 0) {
        console.log("add an intro section divider bitte!");
      }
      let elType = mapDatoKeysToISF[t];
      let element = {};
      element.type = elType;
      element.c = ELEMENTS[elType];
      element.data = omit(item, ["id", "__typename"]);

      const els = storyContent[currentLayout].elements;
      if (element.type === "ListItem") {
        if (els[els.length - 1].type !== "ListItems") {
          storyContent[currentLayout].elements.push({
            type: "ListItems",
            c: ELEMENTS.ListItem,
            data: { items: [element] },
          });
        } else {
          els[els.length - 1].data.items.push(element);
        }
      } else {
        storyContent[currentLayout].elements.push(element);
      }
    }
  });
  console.log(storyContent);
  return storyContent;
};

export default datoToBF;
