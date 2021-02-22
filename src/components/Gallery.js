import React, { useReducer, useContext, useEffect } from "react";
import { css } from "@emotion/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CursorContext } from "../providers/CursorProvider";
import { ResizeContext } from "../providers/ResizeProvider";
import { forEach } from "lodash";

import stickers from "../data/stickers";

const defaultSettings = {
  dots: true,
  centerMode: true,
  variableWidth: true,
  slidesToScroll: 1,
  arrows: false,
  touchThreshold: 13,
};

const initialState = { current: 0, isTransitioning: false };

function reducer(state, action) {
  if (action.transition) {
    return {
      ...state,
      isTransitioning: true,
    };
  } else {
    return {
      current: action.current,
      isTransitioning: false,
    };
  }
}

const Gallery = ({ items }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { switchIcon } = useContext(CursorContext);
  const { images } = useContext(ResizeContext);

  useEffect(() => {
    console.log("images", stickers);
  }, [images]);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".item"));
    forEach(items, item => {
      item.addEventListener("mouseover", () => {
        switchIcon("open");
      });
      item.addEventListener("mouseout", () => {
        switchIcon("peace");
      });
      item.addEventListener("mousedown", () => {
        switchIcon("close");
      });
      item.addEventListener("mouseup", () => {
        switchIcon("open");
      });
    });
  }, []);

  return (
    <div
      css={css`
        padding: 30px 0px 90px;
        position: relative;

        @media (min-width: 768px) {
          padding: 150px 0px;
          margin-left: -24px;
          margin-right: -24px;
        }
      `}
    >
      <Slider
        {...defaultSettings}
        onSwipe={e => {
          dispatch({ transition: true });
        }}
        afterChange={index => {
          dispatch({ current: index });
        }}
        css={css`
          .slick-dots {
            //bottom: 12px;

            li {
              padding: 0px;
              height: 30px;
              width: 30px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              margin: 0px;
              button {
                height: 20px;
                width: 20px;
                border-radius: 10px;
                transition: 0.1s all;
                background: black;
                &:before {
                  display: none;
                }
              }

              &.slick-active {
                button {
                  height: 30px;
                  width: 30px;
                  background: #fee440;
                  border-radius: 15px;
                }
              }
            }
          }

          .slick-track {
            display: flex;
          }

          .slick-slide {
            opacity: 1;
            transition: opacity 0.1s;
            outline: none !important;
          }
        `}
      >
        {items &&
          items.map((item, index) => {
            return (
              <div
                key={`image--${index}`}
                css={css`
                  padding: 8px 16px;
                `}
              >
                <div
                  className="item"
                  css={css`
                    height: 50vw;
                    width: ${item.fluid.aspectRatio * 50}vw;

                    @media (min-width: 768px) {
                      /* height: 60vw; */
                      // width: 60vw !important;
                    }
                  `}
                >
                  <img src={item.fluid.src} srcSet={item.fluid.srcSet} />
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Gallery;
