import * as React from "react";

import * as Styled from './header.styles';

const Header = () => {
  return (
    <Styled.Header>
      <Styled.HeaderSearch>Search</Styled.HeaderSearch>
      <Styled.HeaderLogo>Valentina</Styled.HeaderLogo>
      <Styled.HeaderNav>
        <ul>
          <li>
            <Styled.HeaderNavLink to="/">Home</Styled.HeaderNavLink>
          </li>
          <li>
            <Styled.HeaderNavLink to="/blog">Blog</Styled.HeaderNavLink>
          </li>
        </ul>
      </Styled.HeaderNav>
    </Styled.Header>
  );
};

export default Header;
