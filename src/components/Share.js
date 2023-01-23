import React from "react";
import { Label } from "@components/Typography";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ACCENT } from "../styles/colors";
import { Link } from "gatsby";
import { Div, Container } from "@components/Markup";

import { UilFacebookF } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
} from "react-share";

const ShareButton = () => {
  return <></>;
};

const Share = ({ text, url, dir }) => {
  return (
    <Div flex>
      <FacebookShareButton>
        <UilFacebookF size={24} />
      </FacebookShareButton>
      <FacebookShareButton>
        <UilFacebookF size={24} />
      </FacebookShareButton>
      <FacebookShareButton>
        <UilFacebookF size={24} />
      </FacebookShareButton>
    </Div>
  );
};

export default Share;
