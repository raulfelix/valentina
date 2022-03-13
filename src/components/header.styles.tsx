import styled from "styled-components";
import { Link } from "gatsby";

import { black } from "../styles/colour.styles";
import { secondaryFont } from "../styles/typography";

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  position: relative;
  justify-content: center;
`;

export const HeaderLogo = styled.div`
  font-size: 72px;
  font-family: "Major Mono Display";
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
      padding: 0 8px;
    }
  }
`;

export const HeaderNavLink = styled(Link)`
  color: ${black};
  font-family: ${secondaryFont};
  line-height: 20px;
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
