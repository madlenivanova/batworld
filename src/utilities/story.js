import styled from "styled-components";

import Paragraph from "../components/Paragraph";
import Highlight from "../components/Highlight";
import Video from "../components/Video";
import Images from "../components/Images";
import ImageText from "../components/ImageText";
import SectionArtist from "../components/SectionArtist";
import Gallery from "../components/Gallery";

const IntroSection = styled("section")`
  background-color: red;
  padding: 120px 0px;
`;

export const SECTIONS = { IntroSection, SectionArtist };
export const ELEMENTS = {
  Paragraph,
  Highlight,
  Video,
  Images,
  ImageText,
  Gallery,
};
