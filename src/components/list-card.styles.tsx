import { Link } from "gatsby";
import styled from "styled-components";

import { grey1, grey10, grey6 } from "../styles/colour.styles";
import { rem, standardFocusState } from "../styles/styles";
import {
  fontFamilyElderkin,
  fontFamilyMerriweather,
  fontSize14,
  fontSize16,
  fontSizeLineHeight16,
  secondaryFont,
} from "../styles/typography.styles";

export const ListCardImageWrapper = styled.div`
  height: ${({ $width = 140 }) => rem($width)};
  width: ${({ $width = 140 }) => rem($width)};
  flex-shrink: 0;
  position: relative;
`;

type ListCardImageProps = {
  imageUrl: string;
};
export const ListCardImage = styled.div.attrs<ListCardImageProps>(
  ({ imageUrl }) => ({
    style: {
      backgroundImage: imageUrl ? `url(${imageUrl})` : "",
    },
  })
)<ListCardImageProps>`
  background-color: #eee;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  height: 100%;
  flex-shrink: 0;
`;

export const ListCardTitle = styled.h2`
  ${fontFamilyElderkin}
  margin: 0 0 ${rem(4)} 0;
`;

export const ListCard = styled(Link)`
  color: ${grey10};
  display: flex;
  margin-bottom: ${rem(16)};
  padding: ${rem(16)} 0;
  text-decoration: none;

  &:hover {
    ${ListCardTitle} {
      text-decoration: underline;
    }
  }

  ${standardFocusState}
`;

export const ListCardAnchor = styled.a`
  color: ${grey10};
  display: flex;
  margin-bottom: ${rem(16)};
  padding: ${rem(16)} 0;
  text-decoration: none;

  ${standardFocusState}

  &:hover {
    ${ListCardTitle} {
      text-decoration: underline;
    }
  }
`;

export const ListCardCategory = styled.div`
  ${fontFamilyElderkin}
  background-color: ${grey1};
  border: 1px solid ${grey10};
  color: ${grey10};
  display: block;
  font-size: ${fontSize16};
  line-height: ${fontSizeLineHeight16};
  margin-bottom: 0;
  position: absolute;
  padding: 0 ${rem(8)};
  top: -12px;
  right: 0;
`;

export const ListCardContent = styled.div`
  padding-left: ${rem(16)};
`;

export const ListCardDescription = styled.p`
  ${fontFamilyMerriweather}
  font-size: ${fontSize14};
  line-height: ${fontSizeLineHeight16};
  margin-bottom: ${rem(8)};
`;

export const ListCardDetails = styled.div`
  color: ${grey6};
  font-family: ${secondaryFont};
  font-size: ${rem(14)};
`;
