import * as React from "react";

import * as Styled from "./header.styles";

import logo from "../images/v.svg";

export const Header = () => {
  return (
    <>
      <Styled.HeaderNav>
        <ul>
          <li>
            <Styled.HeaderNavLink to="/">Home</Styled.HeaderNavLink>
          </li>
          <li>
            <Styled.HeaderNavLink to="/blog">Blog</Styled.HeaderNavLink>
          </li>
          <li>
            <Styled.HeaderNavLink to="/publications">
              Publications
            </Styled.HeaderNavLink>
          </li>
        </ul>
      </Styled.HeaderNav>
      <Styled.Header id="header">
        <Styled.HeaderLogo to="/" aria-label="home">
          <img src={logo} alt="valentina" />
          <Styled.HeaderBanner>
            {"JOURNALIST . WRITER . RANTER"}
          </Styled.HeaderBanner>
        </Styled.HeaderLogo>
      </Styled.Header>
    </>
  );
};
