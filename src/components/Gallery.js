import { css } from "@emotion/react";
import React, { useState } from "react";

import { Div } from "@components/Markup";
import { Text } from "@components/Typography";

const GallerySwiper = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Div pt="sm" pb="sm">
      <Text
        size="sm"
        mb="sm"
        css={css`
          padding: 0px 16px;
          text-align: center;
          text-transform: uppercase;
        `}
      >
        (Click and swipe to explore The NEXT 20)
      </Text>
      <Div
        css={css`
          .swiper-wrapper {
            display: flex;
            align-items: center;
          }

          @media screen and (max-width: 640px) {
            .swiper-slide {
              //padding: 0 20px;
            }
          }
        `}
      >
        <h1>do your own gallery</h1>
      </Div>
    </Div>
  );
};

export default GallerySwiper;
