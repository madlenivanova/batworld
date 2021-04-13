import { css } from "@emotion/react";
import React, { useState } from "react";
import SwiperCore, { A11y, EffectCoverflow, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Div } from "@components/Markup";
import { Text } from "@components/Typography";

import "swiper/swiper.min.css";

SwiperCore.use([A11y, EffectCoverflow, Mousewheel]);

const visibilityThreshold = 5;

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
        (swipe to explore gallery)
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
        <Swiper
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 600,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2,
            },
            1048: {
              slidesPerView: 3,
            },
          }}
          centeredSlides
          freeMode
          freeModeSticky
          freeModeMomentumRatio={0.25}
          onActiveIndexChange={({ activeIndex }) => setActiveIndex(activeIndex)}
          spaceBetween={10}
          pagination={{ clickable: true }}
        >
          {items.map((item, i) => (
            <SwiperSlide key={`image--${i}`}>
              <img
                src={item.fluid.src}
                srcSet={item.fluid.srcSet}
                css={css`
                  /* width: 100%;
                
                height: 100%; */
                  opacity: ${i >= activeIndex - visibilityThreshold &&
                  i < activeIndex + visibilityThreshold
                    ? 1
                    : 0};
                  transition: opacity 0.2s ease;
                `}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Div>
    </Div>
  );
};

export default GallerySwiper;
