import styled from 'styled-components';

import { rem } from "./styles";

export const secondaryFont = 'calibre';
export const secondaryFontMedium = 'calibre-medium';
export const readingFont = 'merriweather';
export const headlineFont = 'Major Mono Display';

export const fontSize16 = rem(16);
export const fontSizeLineHeight16 = rem(24);
export const fontSize20 = rem(20);
export const fontSizeLineHeight20 = rem(28);

export const Heading46 = styled.h1`
  font-size: ${rem(46)};
  font-family: ${headlineFont};
  margin: 0 0 ${rem(32)} 0;
`