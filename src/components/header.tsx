import * as React from "react";

import * as Styled from "./header.styles";

import logo from "../images/v.svg";

export const Header = ({
  isSmall,
  bannerText,
}: {
  isSmall?: boolean;
  bannerText?: string;
}) => {
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
        <Styled.HeaderLogo to="/" aria-label="home" $isSmall={isSmall}>
          <img src={logo} alt="valentina" />
          {!isSmall && (
            <Styled.HeaderBanner>
              {bannerText || "JOURNALIST . WRITER . RANTER"}
            </Styled.HeaderBanner>
          )}
        </Styled.HeaderLogo>
      </Styled.Header>
    </>
  );
};
