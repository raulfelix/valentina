import * as React from "react";

import * as Styled from './header.styles';

const Header = () => {
  return (
    <Styled.Header>
      <Styled.HeaderLogo to="/">Valentina</Styled.HeaderLogo>
      <Styled.HeaderNav>
        <ul>
          <li>
            <Styled.HeaderNavLink to="/">Home</Styled.HeaderNavLink>
          </li>
          <li>
            <Styled.HeaderNavLink to="/blog">Blog</Styled.HeaderNavLink>
          </li>
          <li>
            <Styled.HeaderNavLink to="/publications">Publications</Styled.HeaderNavLink>
          </li>
        </ul>
      </Styled.HeaderNav>
    </Styled.Header>
  );
};

export default Header;
