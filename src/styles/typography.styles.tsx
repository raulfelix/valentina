import { Link } from "gatsby";
import styled, { css } from "styled-components";

import { baseFocusState, rem } from "./styles";
import { grey1, grey10 } from "./colour.styles";

export const secondaryFont = "calibre";
export const secondaryFontMedium = "calibre-medium";
export const readingFont = "merriweather";
export const headlineFont = "Luckiest Guy";

export const fontFamilyLuckiestGuy =
  "font-family: Luckiest Guy, Arial, sans-serif;";
export const fontFamilyElderkin = css`
  font-family: Elderkin, Arial, sans-serif;
  letter-spacing: 0.3px;
`;
export const fontFamilyMerriweather =
  "font-family: merriweather, Arial, sans-serif;";

export const fontSize14 = rem(14);
export const fontSizeLineHeight14 = rem(20);
export const fontSize16 = rem(16);
export const fontSizeLineHeight16 = rem(24);
export const fontSize20 = rem(20);
export const fontSizeLineHeight20 = rem(28);
export const fontSize24 = rem(24);
export const fontSizeLineHeight24 = rem(38);
export const fontSize30 = rem(30);
export const fontSizeLineHeight30 = rem(40);
export const fontSize40 = rem(40);
export const fontSizeLineHeight40 = rem(54);

export const Heading30 = styled.h1`
  font-size: ${rem(30)};
  font-family: ${headlineFont};
  font-weight: normal;
  margin: 0 0 ${rem(24)} 0;
`;

export const Heading46 = styled.h1`
  font-size: ${rem(46)};
  font-family: ${headlineFont};
  font-weight: normal;
  margin: 0 0 ${rem(32)} 0;
`;

export const Heading20 = styled.h1`
  font-size: ${rem(20)};
  font-family: ${headlineFont};
  font-weight: normal;
  margin: 0 0 ${rem(32)} 0;
`;

export const font20 = css`
  font-size: ${fontSize20};
  line-height: ${fontSizeLineHeight20};
  margin-bottom: ${rem(20)};
`;

export const font24 = css`
  font-size: ${fontSize24};
  line-height: ${fontSizeLineHeight24};
  margin-bottom: ${rem(24)};
`;
export const font30 = css`
  font-size: ${fontSize30};
  line-height: ${fontSizeLineHeight30};
  margin-bottom: ${rem(24)};
`;

export const font40 = css`
  font-size: ${fontSize40};
  line-height: ${fontSizeLineHeight40};
  margin-bottom: ${rem(24)};
`;

export const Text = styled.p`
  ${font20}
`;

export const StrongLink = styled(Link)`
  ${font20}
  color: ${grey10};
  padding: ${rem(2)};
  text-decoration: underline;

  &:hover {
    background-color: ${grey10};
    color: ${grey1};
  }

  &:focus {
    ${baseFocusState}
  }
`;
