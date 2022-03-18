import styled from "styled-components";
import { Link } from "gatsby";

import { black, white, yellow } from "../styles/colour.styles";
import {
  fontSize16,
  fontSizeLineHeight16,
  headlineFont,
  secondaryFont,
} from "../styles/typography.styles";
import { mediaUp, rem } from "../styles/styles";

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${rem(24)};
  position: relative;
  justify-content: space-between;

  ${mediaUp.md`
    flex-direction: row;
    height: ${rem(100)};
    padding-left: ${rem(40)};
  `}
`;

export const HeaderLogo = styled(Link)`
  background-color: ${black};
  color: ${white};
  font-size: ${rem(30)};
  font-family: ${headlineFont};
  padding: 0 2px 0 2px;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: ${yellow};
    color: ${black};
  }

  ${mediaUp.md`
    font-size: ${rem(46)};
  `}
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  margin-top: ${rem(16)};

  ${mediaUp.md`
    position: absolute;
    right: ${rem(40)};
    top: 0;
    margin-top: 0;
  `}

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 0 ${rem(16)};
    }
  }
`;

export const HeaderNavLink = styled(Link)`
  color: ${black};
  font-family: ${secondaryFont};
  font-size: ${fontSize16};
  line-height: ${fontSizeLineHeight16};
  padding: ${rem(2)};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
    background-color: ${black};
    color: #fff;
  }
`;

export const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  left: ${rem(40)};
  top: 0;
`;
