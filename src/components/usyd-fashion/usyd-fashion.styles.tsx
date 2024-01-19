import styled from "styled-components";

import { mediaUp, rem } from "../../styles/styles";
import { grey10, grey2, grey6 } from "../../styles/colour.styles";
import {
  fontSize20,
  fontSizeLineHeight20,
  headlineFont,
  secondaryFont,
} from "../../styles/typography.styles";

export const UsydBlade = styled.div`
  background-color: ${grey2};
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
`;

export const UsydBladeHashTag = styled.a`
  background-color: ${grey6};
  color: ${grey10};
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
