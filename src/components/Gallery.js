import React from "react";
import { useReducer } from "react";
import { css } from "@emotion/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { NextArrow, PrevArrow } from './_Arrows';
//import Cursor from './Cursor';
import Img from "gatsby-image";

const defaultSettings = {
  dots: false,
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
  console.log(JSON.stringify(items), null, 2);
  return (
    <div
      className="gallery"
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
          // console.log('after change');
          dispatch({ current: index });
          // setCurrent(index);
        }}
        css={css`
          .slick-dots {
            bottom: 12px;
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
          items.map((item, index) => (
            <div className="item" key={`image--${index}`}>
              <div
                css={css`
                  /* background-color: #ebebeb;     */
                  /* height: 360px; */
                  width: 90vw !important;
                  @media (min-width: 768px) {
                    /* height: 60vw; */
                    width: 60vw !important;
                  }
                  /* @media (min-width: 1200px) {
                    height: 600px;
                    width: 600px !important;
                  } */
                `}
              >
                <div
                  css={css`
                    /* display: flex !important;
                    align-items: center;
                    justify-content: center; */
                    width: 100%;
                    padding: 15px;
                  `}
                >
                  <Img fluid={item.fluid} />
                </div>
              </div>
            </div>
          ))}
      </Slider>

      <div
        css={css`
          width: 100%;
        `}
      >
        <div
          css={css`
            height: 5px;
            width: 100%;
            max-width: 600px;
            border: 1px solid black;
            position: relative;
            margin: 0 auto;
            margin: 30px auto 15px;

            @media (min-width: 768px) {
              margin: 30px auto;
            }
          `}
        >
          <span
            css={css`
              position: absolute;
              top: 0;
              left: ${state.current * (100 / items.length)}%;
              width: ${100 / items.length}%;
              height: 100%;
              transition: all 0.1s;
              background-color: black;
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
