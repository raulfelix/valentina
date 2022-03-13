import React from "react";

import { Heading30 } from "../../styles/typography";
import * as Styled from "./blog-shared.styles";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import linkedin from "../../images/linkedin.png";

export const BlogShare = () => (
  <Styled.BlogShare>
    <Heading30>shAre</Heading30>
    <Styled.BlogShareIcon href="" target="_blank">
      <img src={twitter} alt="Twitter" />
    </Styled.BlogShareIcon>
    <Styled.BlogShareIcon
      href="https://www.linkedin.com/in/valentinacarrizo/"
      target="_blank"
    >
      <img src={linkedin} alt="LinkedIn" />
    </Styled.BlogShareIcon>
    <Styled.BlogShareIcon
      href="https://www.instagram.com/valentina_carrizo/"
      target="_blank"
    >
      <img src={instagram} alt="Instagram" />
    </Styled.BlogShareIcon>
  </Styled.BlogShare>
);
