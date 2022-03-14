import { Link } from "gatsby";
import styled from "styled-components";
import { black } from "../styles/colour.styles";

import { rem } from "../styles/styles";
import {
  font20,
  fontSize16,
  fontSizeLineHeight16,
  readingFont,
  secondaryFont,
  secondaryFontMedium,
} from "../styles/typography";

export const ListCardImageWrapper = styled.div`
  border-radius: ${rem(6)};
  height: ${({ $width = 86 }) => rem($width)};
  width: ${({ $width = 86 }) => rem($width)};
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
  border: 1px solid #eee;
  border-radius: ${rem(16)};
  color: ${black};
  display: flex;
  margin-bottom: ${rem(16)};
  padding: ${rem(16)};
  text-decoration: none;
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
  margin-bottom: 0;
`;

export const ListCardCategory = styled.div`
  color: ${black};
  font-family: ${secondaryFontMedium};
  font-size: ${fontSize16};
  line-height: ${fontSizeLineHeight16};
`;
