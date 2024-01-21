import styled from "styled-components";
import { Link } from "gatsby";

import { baseFocusState, rem } from "../styles/styles";
import { grey10, grey1, highlight } from "../styles/colour.styles";
import {
  fontFamilyElderkin,
  fontSizeLineHeight16,
} from "../styles/typography.styles";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${rem(16)};
  position: relative;
  flex-direction: row;
`;

type HeaderLogoProps = {
  $isSmall?: boolean;
};
export const HeaderLogo = styled(Link)<HeaderLogoProps>`
  color: ${grey1};
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
  max-width: ${({ $isSmall }) => ($isSmall ? rem(280) : rem(1000))};

  &:focus {
    ${baseFocusState}
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${rem(24)} 0;

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
  color: ${grey10};
  ${fontFamilyElderkin}
  font-size: ${rem(20)};
  line-height: ${fontSizeLineHeight16};
  padding: ${rem(2)};
  text-decoration: underline;

  &:hover {
    background-color: ${grey10};
    color: ${grey1};
    text-decoration: none;
  }

  &:focus {
    ${baseFocusState}
  }
`;

export const HeaderBanner = styled.div`
  ${fontFamilyElderkin}
  background-color: ${highlight};
  box-shadow: 4px 4px 0 ${grey10};
  color: ${grey10};
  font-size: ${rem(12)};
  line-height: ${rem(22)};
  padding: ${rem(4)};
  padding-bottom: ${rem(0)};
  position: absolute;
  bottom: ${rem(-2)};
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 438px) {
    font-size: ${rem(16)};
    line-height: ${rem(22)};
    padding: ${rem(12)};
    padding-bottom: ${rem(8)};
  }

  @media (min-width: 610px) {
    font-size: ${rem(24)};
    line-height: ${rem(26)};
    bottom: ${rem(4)};
  }

  @media (min-width: 840px) {
    font-size: ${rem(30)};
    line-height: ${rem(32)};
  }
`;

export const HeaderMobileNav = styled.div`
  position: absolute;
  left: ${rem(16)};
  top: ${rem(16)};
`;
