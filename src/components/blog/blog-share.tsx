import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Heading30 } from "../../styles/typography";
import * as Styled from "./blog-shared.styles";

export const BlogShare = () => (
  <Styled.BlogShare>
    <Heading30>shAre</Heading30>
    <Styled.BlogShareIcon href="" target="_blank">
      <StaticImage src="../social/twitter.png" alt="Twitter" />
    </Styled.BlogShareIcon>
    <Styled.BlogShareIcon
      href="https://www.linkedin.com/in/valentinacarrizo/"
      target="_blank"
    >
      <StaticImage src="../social/li.png" alt="LinkedIn" />
    </Styled.BlogShareIcon>
    <Styled.BlogShareIcon
      href="https://www.instagram.com/valentina_carrizo/"
      target="_blank"
    >
      <StaticImage src="../social/instagram.png" alt="Instagram" />
    </Styled.BlogShareIcon>
  </Styled.BlogShare>
);
