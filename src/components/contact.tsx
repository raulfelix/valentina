import React from "react";
import { StaticImage } from "gatsby-plugin-image"

import { Heading46 } from "../styles/typography.styles";
import * as Styled from "./contact.styles";

export const Contact = () => (
  <Styled.Contact>
    <div>
      <Heading46>CONTACT ME</Heading46>
      <Styled.ContactIcons>
        <Styled.ContactIcon href="https://twitter.com/Valentina4Pres" target="_blank">
          <StaticImage src="./social/twitter.png" alt="Twitter" width={28} />
        </Styled.ContactIcon>
        <Styled.ContactIcon
          href="https://www.linkedin.com/in/valentinacarrizo/"
          target="_blank"
        >
          <StaticImage src="./social/linkedin.png" alt="LinkedIn" width={28} />
        </Styled.ContactIcon>
        <Styled.ContactIcon
          href="https://www.instagram.com/valentina_carrizo/"
          target="_blank"
        >
          <StaticImage src="./social/instagram.png" alt="Instagram" width={28}/>
        </Styled.ContactIcon>
      </Styled.ContactIcons>
    </div>
  </Styled.Contact>
);
