import { Link } from "gatsby";
import styled from "styled-components";

import { grey10 } from "../../styles/colour.styles";
import { baseFocusState, rem } from "../../styles/styles";
import {
  fontSize14,
  fontSize16,
  fontSize40,
  fontSizeLineHeight16,
  headlineFont,
  secondaryFont,
  secondaryFontMedium,
} from "../../styles/typography.styles";

export const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${rem(8)};
  justify-content: center;
  margin-bottom: ${rem(80)};
`;

export const Category = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 ${rem(16)};
  position: relative;
  text-decoration: none !important;
`;

export const CategoryImageLabel = styled.div`
  color: ${grey10};
  font-family: ${headlineFont};
  font-size: ${fontSize40};
  text-decoration: none;
`;

export const CategoryLabel = styled.div`
  color: ${grey10};
  font-family: ${secondaryFont};
  font-size: ${fontSize16};
  line-height: ${fontSizeLineHeight16};
  text-decoration: none;
`;

type CategoryPillProps = {
  $colour: {
    bg: string;
    text: string;
  };
};

export const CategoryLink = styled(Link)<CategoryPillProps>`
  color: ${({ $colour }) => $colour?.text};
  display: inline-block;
  font-family: ${secondaryFontMedium};
  font-size: ${fontSize16};
  line-height: ${fontSizeLineHeight16};
  text-decoration: underline;
`;

export const CategoryPill = styled(Link)<CategoryPillProps>`
  background-color: ${({ $colour }) => $colour?.bg2};
  border-radius: ${rem(30)};
  border: 1px solid ${({ $colour }) => $colour?.bg2};
  color: ${({ $colour }) => $colour?.text};
  font-size: ${fontSize14};
  font-family: ${secondaryFontMedium};
  display: inline-block;
  padding: ${rem(6)} ${rem(8)};
  text-decoration: none !important;

  &:hover {
    background-color: ${({ $colour }) => $colour?.bg};
  }

  &:focus {
    ${baseFocusState}
  }
`;
