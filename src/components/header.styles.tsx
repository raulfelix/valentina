import styled from "styled-components";
import { Link } from "gatsby";

import { black } from "../styles/colour.styles";
import {
  fontSize16,
  fontSizeLineHeight16,
  headlineFont,
  secondaryFont,
} from "../styles/typography";
import { rem } from "../styles/styles";

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: ${rem(100)};
  position: relative;
  justify-content: center;
`;

export const HeaderLogo = styled.div`
  font-size: ${rem(72)};
  font-family: ${headlineFont};
  text-align: center;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;

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
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
