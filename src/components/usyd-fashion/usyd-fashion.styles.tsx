import styled from "styled-components";

import { mediaUp, rem } from "../../styles/styles";
import {
  grey1,
  grey10,
  grey2,
  grey6,
  highlight,
} from "../../styles/colour.styles";
import {
  fontFamilyElderkin,
  fontFamilyMerriweather,
  fontSize20,
  fontSizeLineHeight20,
  headlineFont,
} from "../../styles/typography.styles";

export const UsydBlade = styled.div`
  background-color: #fff2c5;
  padding: ${rem(80)} 0;
`;

export const UsydBladeContent = styled.div`
  text-align: center;
`;

export const UsydBladeText = styled.p`
  font-size: ${fontSize20};
  ${fontFamilyMerriweather}
  line-height: ${fontSizeLineHeight20};
  margin: 0 auto ${rem(40)} auto;
  max-width: ${rem(700)};
`;

export const UsydBladeHashTag = styled.a`
  ${fontFamilyElderkin}
  background-color: ${grey1};
  border: 2px solid ${grey10};
  box-shadow: 4px 4px 0 ${highlight};
  color: ${grey10};
  display: inline-block;
  font-size: ${rem(50)};
  margin-bottom: ${rem(60)};
  padding: 0 ${rem(2)};
  text-decoration: none;

  &:hover {
    background-color: #000;
    box-shadow: 4px 4px 0 ${highlight};
    color: #fff;
  }
`;

export const UsydBladeTitle = styled.h2`
  font-size: ${rem(60)};
  font-family: ${headlineFont};
  line-height: ${rem(68)};
  margin: 0 0 ${rem(20)} 0;
`;

export const UsydBladeImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: ${rem(1000)};
  margin: auto;

  & > div {
    margin-bottom: ${rem(8)};
    width: 50%;
  }

  img {
    display: block;
    padding: 0 ${rem(4)};
    width: 100%;
  }

  ${mediaUp.md`
    & > div {
      width: 25%;
    }
  `}
`;
