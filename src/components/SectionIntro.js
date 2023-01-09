import React, { useState, useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { Div } from "@components/Markup";
import { Heading } from "@components/Typography";
import { ACCENT, LIGHT, DARK } from "../styles/colors";
import GallerySections from "./GallerySections";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    text: `Прилепите са изключително чисти, интелигентни и чувствителни създания. 
      Те са важни за здравето на екосистемата, за нашето здраве, 
      за здравето на селското стопанство и индустрията ни.`,
  },
  {
    text: `Всяко, дори малко, прилепче изяжда хиляди насекоми вечер, 
    и така те всъщност са една малка армия, 
    която защитава нас, децата ни и качеството ни на живот.`,
  },
  {
    text: `Обикновено не се срещаме с тях, защото те почти невидимо летят в сумрака и тъмното, 
    а през деня се крият, Така независимо, че може да са само на няколко метра от кухнята 
    или офиса ни, ние не ги виждаме.`,
  },
  {
    text: `Всяка година N прилепа умират в резултат на човешкото незнание, небрежност
    и жестокост, въпреки че сички видове са защитени и у нас, и в Европа.
    Без тях инвазията от насекоми ще бъде непоносима за нас, 
    ще започнем да използваме повече отрови за борба с насекомите, 
    а чистата храна ще стане още по-трудно достъпна.`,
  },
  {
    text: `Ако искаме добър живот за нас и децата ни, трябва да пазим и тези малки съкровища на Природата.`,
  },
];

const Hero = () => {
  return (
    <div
      css={css`
        height: calc(100vh - 0px);
        width: 100%;
        background-size: cover;
        position: relative;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        padding: 60px 20px;
      `}
    >
      <div
        css={css`
          position: relative;
          z-index: 1;
          color: ${LIGHT};

          span {
            color: ${ACCENT};
          }
        `}
      >
        <Heading
          size="TWO"
          uppercase
          dangerouslySetInnerHTML={{
            __html: `
            Lorem Ipsum
            Dolor <span>Sit Amet</span>
            Auditus
          `,
          }}
        />
      </div>
    </div>
  );
};

const Img = props => {
  const { src } = props;
  const [darken, setDarken] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: imgRef.current,
        pin: true,
        start: "top 0px",
        endTrigger: "#next",
        end: "top bottom",
        pinSpacing: false,
        scrub: 1,
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#sections",
        start: "top center",
        end: "+=200000",
        scrub: 1,
        onToggle: props => {
          setDarken(props.isActive);
        },
      },
    });
  }, []);

  return (
    <div
      ref={imgRef}
      css={css`
        height: calc(100vh - 0px);
        width: 100%;
        background-image: url("${src}");
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        padding: 60px 20px;
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          background: ${DARK};
          height: 100%;
          width: 100%;
          transition: 0.25s all;
          opacity: ${darken ? 1 : 0.35};
        `}
      ></div>
    </div>
  );
};

const Intro = ({ sections }) => {
  return <GallerySections sections={sections} />;
};

const SectionIntro = ({ src }) => {
  const [darken, setDarken] = useState(false);

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <Div
        css={css`
          position: relative;
        `}
      >
        <Img src={src} />
        <Hero />
        <Intro sections={sections} />
      </Div>
      <Div id="next">
        <Heading size="TWO">Next section</Heading>
      </Div>
    </React.Fragment>
  );
};

export default SectionIntro;
