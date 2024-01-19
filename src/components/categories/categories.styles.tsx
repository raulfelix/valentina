import { Link } from "gatsby";
import styled from "styled-components";

import { grey1, grey10, highlight } from "../../styles/colour.styles";
import { baseFocusState, rem } from "../../styles/styles";
import {
  fontFamilyElderkin,
  fontSize16,
  fontSize30,
  fontSize40,
  fontSizeLineHeight16,
  headlineFont,
  secondaryFont,
  secondaryFontMedium,
} from "../../styles/typography.styles";

export const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${rem(48)};
`;

export const CategoryListInner = styled.div`
  border-top: 2px solid ${grey10};
  border-bottom: 1px dashed ${grey10};
  display: flex;
  flex-wrap: wrap;
  gap: ${rem(48)};
  padding: ${rem(16)} 0;
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

export const CategoryPill = styled(Link)`
  ${fontFamilyElderkin};
  color: ${grey10};
  font-size: ${fontSize30};
  line-height: ${rem(32)};
  font-weight: normal;
  display: inline-block;
  padding: 2px 2px 0 2px;
  text-decoration: none !important;
  text-transform: uppercase;

  &:hover {
    background-color: ${grey10};
    color: ${grey1};
  }

  &:focus {
    ${baseFocusState}
  }
`;
