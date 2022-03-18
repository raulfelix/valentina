import styled from "styled-components";
import { grey10 } from "../../styles/colour.styles";

import { rem } from "../../styles/styles";
import {
  fontSize16,
  fontSize20,
  fontSizeLineHeight16,
  fontSizeLineHeight20,
  readingFont,
  secondaryFont,
  secondaryFontMedium,
} from "../../styles/typography.styles";

export const PublicationCardImageWrapper = styled.div`
  border-radius: ${rem(16)};
  height: ${({ $width = 86 }) => rem($width)};
  width: ${({ $width = 86 }) => rem($width)};
  flex-shrink: 0;
  overflow: hidden;
  transform: translateZ(0);
`;

type PublicationCardImageProps = {
  imageUrl: string;
};
export const PublicationCardImage = styled.div.attrs<PublicationCardImageProps>(
  ({ imageUrl }) => ({
    style: {
      backgroundImage: imageUrl ? `url(${imageUrl})` : "",
    },
  })
)<PublicationCardImageProps>`
  background-color: #eee;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${rem(6)};
  display: block;
  height: 100%;
  flex-shrink: 0;
`;

export const PublicationCard = styled.div`
  display: flex;
  margin-bottom: ${rem(20)};
`;

export const PublicationCardContent = styled.div`
  padding-left: ${rem(16)};
`;

export const PublicationCardTitle = styled.a`
  color: ${grey10};
  display: block;
  font-family: ${readingFont};
  font-weight: 700;
  font-size: ${fontSize20};
  line-height: ${fontSizeLineHeight20};
  margin: 0 0 ${rem(4)} 0;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const PublicationCardDescription = styled.p`
  font-family: ${secondaryFont};
  font-size: ${fontSize16};
  line-height: ${fontSizeLineHeight16};
`;

export const PublicationCardCategory = styled.a`
  color: ${grey10};
  font-family: ${secondaryFontMedium};
  font-size: ${fontSize16};
  line-height: ${fontSizeLineHeight16};
  margin-bottom: ${rem(8)};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
