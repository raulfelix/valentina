import React from "react";

import { HeaderNav, HeaderNavLink } from "./header.styles";
import * as Styled from "./contact.styles";

import twitter from "./social/twitter.svg";
import insta from "./social/instagram.svg";
import linked from "./social/linkedin.svg";

export const Contact = () => (
  <Styled.Contact>
    <div>
      <Styled.ContactHr />
      <Styled.ContactHr />
      <Styled.ContactNav>
        <ul>
          <li>
            <HeaderNavLink to="/">Home</HeaderNavLink>
          </li>
          <li>
            <HeaderNavLink to="/about">About</HeaderNavLink>
          </li>
          <li>
            <HeaderNavLink to="/blog">Blog</HeaderNavLink>
          </li>
          <li>
            <HeaderNavLink to="/publications">Publications</HeaderNavLink>
          </li>
        </ul>
      </Styled.ContactNav>

      <Styled.ContactIcons>
        <Styled.ContactIcon
          id="twitter"
          href="https://twitter.com/Valentina4Pres"
          target="_blank"
        >
          <img className="tweet" src={twitter} alt="Twitter" width={100} />
        </Styled.ContactIcon>
        <Styled.ContactIcon
          href="https://www.linkedin.com/in/valentinacarrizo/"
          target="_blank"
        >
          <img src={linked} alt="Instagram" width={28} />
        </Styled.ContactIcon>
        <Styled.ContactIcon
          href="https://www.instagram.com/valentina_carrizo/"
          target="_blank"
        >
          <img src={insta} alt="Instagram" width={28} />
        </Styled.ContactIcon>
      </Styled.ContactIcons>
      <Styled.ContactTiny>© 2024 V.</Styled.ContactTiny>
    </div>
  </Styled.Contact>
);
