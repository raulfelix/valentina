import styled from "styled-components";
import { black } from "../../styles/colour.styles";

import { rem } from "../../styles/styles";
import { fontSize20, fontSizeLineHeight20, headlineFont, secondaryFont } from "../../styles/typography";

export const UsydBlade = styled.div`
  background-color: #FFE3E3;
  padding: ${rem(80)} 0;
`;

export const UsydBladeContent = styled.div`
  text-align: center;
`;

export const UsydBladeText = styled.p`
  font-size: ${fontSize20};
  font-family: ${secondaryFont};
  line-height: ${fontSizeLineHeight20};
  margin: 0 auto ${rem(40)} auto;
  max-width: ${rem(700)};
`

export const UsydBladeHashTag = styled.a`
  background-color: #FF89C9;
  color: ${black};
  display: inline-block;
  font-size: ${rem(30)};
  font-family: ${secondaryFont};
  line-height: ${rem(38)};
  margin-bottom: ${rem(60)};
  padding: 0 ${rem(2)};
  text-decoration: none;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`

export const UsydBladeTitle = styled.h2`
  font-size: ${rem(60)};
  font-family: ${headlineFont};
  line-height: ${rem(68)};
  margin: 0 0 ${rem(20)} 0;
`

export const UsydBladeImages = styled.div`
  display: flex;
  max-width: ${rem(1000)};
  margin: auto;
  div {
    flex: 1;
  }
  img {
    display: block;
    padding: 0 4px;
    width: 100%;
  }
`