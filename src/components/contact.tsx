import React from "react";
import { StaticImage } from "gatsby-plugin-image"

import { Heading46 } from "../styles/typography";
import * as Styled from "./contact.styles";

export const Contact = () => (
  <Styled.Contact>
    <div>
      <Heading46>contAct me</Heading46>
      <Styled.ContactIcons>
        <Styled.ContactIcon href="" target="_blank">
          <StaticImage src="./social/twitter.png" alt="Twitter" />
        </Styled.ContactIcon>
        <Styled.ContactIcon
          href="https://www.linkedin.com/in/valentinacarrizo/"
          target="_blank"
        >
          <StaticImage src="./social/li.png" alt="LinkedIn" />
        </Styled.ContactIcon>
        <Styled.ContactIcon
          href="https://www.instagram.com/valentina_carrizo/"
          target="_blank"
        >
          <StaticImage src="./social/instagram.png" alt="Instagram" />
        </Styled.ContactIcon>
      </Styled.ContactIcons>
    </div>
  </Styled.Contact>
);
