import { Link } from "gatsby";
import styled from "styled-components";

import { grey10, grey4, grey6 } from "../styles/colour.styles";
import { baseFocusState, rem } from "../styles/styles";
import {
  font20,
  fontSize16,
  fontSizeLineHeight16,
  readingFont,
  secondaryFont,
} from "../styles/typography.styles";

export const ListCardImageWrapper = styled.div`
  border-radius: ${rem(16)};
  height: ${({ $width = 100 }) => rem($width)};
  width: ${({ $width = 100 }) => rem($width)};
  flex-shrink: 0;
  overflow: hidden;
  transform: translateZ(0);
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
  border-radius: ${rem(6)};
  display: block;
  height: 100%;
  flex-shrink: 0;
`;

export const ListCard = styled(Link)`
  border: 1px solid ${grey4};
  border-radius: ${rem(16)};
  color: ${grey10};
  display: flex;
  margin-bottom: ${rem(16)};
  padding: ${rem(16)};
  text-decoration: none;

  &:focus {
    ${baseFocusState}
  }
`;

export const ListCardAnchor = styled.a`
  border: 1px solid ${grey4};
  border-radius: ${rem(16)};
  color: ${grey10};
  display: flex;
  margin-bottom: ${rem(16)};
  padding: ${rem(16)};
  text-decoration: none;

  &:focus {
    ${baseFocusState}
  }
`;

export const ListCardContent = styled.div`
  padding-left: ${rem(16)};
`;

export const ListCardTitle = styled.h2`
  ${font20}
  font-family: ${readingFont};
  margin: 0 0 ${rem(4)} 0;
`;

export const ListCardDescription = styled.p`
  font-family: ${secondaryFont};
  font-size: ${fontSize16};
  line-height: ${fontSizeLineHeight16};
  margin-bottom: ${rem(8)};
`;

export const ListCardDetails = styled.div`
  color: ${grey6};
  font-family: ${secondaryFont};
  font-size: ${rem(14)};
`;

export const ListCardCategory = styled.span`
  color: ${grey10};
  background-color: #eee;
  border-radius: 4px;
  display: inline-block;
  font-family: ${secondaryFont};
  font-size: ${rem(14)};
  margin-top: ${rem(8)};
  padding: ${rem(2)} ${rem(4)};
`;
