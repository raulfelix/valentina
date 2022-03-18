import { Link } from "gatsby";
import styled from "styled-components";
import { grey1, grey10 } from "../../styles/colour.styles";

import { baseFocusState, mediaUp, rem } from "../../styles/styles";
import {
  fontSize14,
  fontSize16,
  fontSize20,
  fontSizeLineHeight14,
  fontSizeLineHeight16,
  fontSizeLineHeight20,
  readingFont,
  secondaryFont,
  secondaryFontMedium,
} from "../../styles/typography.styles";
import { CategoryPill } from "../categories/categories.styles";

export const PostCardImageWrapper = styled.div`
  border-radius: ${rem(16)};
  bottom: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`;

type PostCardImageProps = {
  imageUrl: string;
};
export const PostCardImage = styled.div.attrs<PostCardImageProps>(
  ({ imageUrl }) => ({
    style: {
      backgroundImage: imageUrl ? `url(${imageUrl})` : "",
    },
  })
)<PostCardImageProps>`
  background-color: #eee;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  height: 100%;
`;

export const PostCardContent = styled.div`
  padding-top: ${rem(16)};
`;

export const PostCardTitle = styled.h2`
  font-family: ${readingFont};
  font-weight: 700;
  font-size: ${fontSize16};
  line-height: ${fontSizeLineHeight16};
  margin: 0;

  ${mediaUp.md`
    font-size: ${fontSize20};
    line-height: ${fontSizeLineHeight20};
    margin-bottom: ${rem(4)};
  `}
`;

export const PostCardCategory = styled(Link)`
  color: ${grey10};
  display: block;
  font-size: ${fontSize14};
  line-height: ${fontSizeLineHeight14};
  font-family: ${secondaryFontMedium};
  margin-bottom: 0;
  position: relative;
  z-index: 2;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  ${mediaUp.md`
    font-size: ${fontSize16};
    line-height: ${fontSizeLineHeight16};
    margin-bottom: ${rem(16)};
  `}
`;

export const PostCardExcerpt = styled.p`
  font-family: ${secondaryFont};
  font-size: ${fontSize14};
  line-height: ${fontSizeLineHeight14};

  ${mediaUp.md`
    font-size: ${fontSize16};
    line-height: ${fontSizeLineHeight16};
  `}
`;

export const PostCard = styled.div`
  display: block;
  position: relative;
  margin: 0 ${rem(12)} ${rem(24)} ${rem(12)};

  &:hover {
    ${PostCardTitle} {
      text-decoration: underline;
    }
  }
`;

export const PostCardHeader = styled.div`
  position: relative;
  padding-top: 46%;

  ${CategoryPill} {
    position: absolute;
    top: ${rem(16)};
    left: ${rem(16)};
    z-index: 10;
  }
`;

export const PostCardLink = styled(Link)`
  border-radius: ${rem(16)};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;

  &:focus {
    ${baseFocusState}
  }
`;


export const PostCardTitleLarge = styled(Link)`
  color: white;
  display: block;
  font-family: ${readingFont};
  font-weight: 700;
  font-size: ${rem(24)};
  line-height: ${rem(32)};
  margin: 0;
  margin-bottom: ${rem(8)};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${mediaUp.md`
    font-size: ${rem(38)};
    line-height: ${rem(50)};
    margin-bottom: ${rem(16)};
  `}
`;

export const PostCardLarge = styled.div`
  border-radius: ${rem(16)};
  display: block;
  margin-bottom: ${rem(24)};
  position: relative;
  overflow: hidden;
  padding-top: 60%;
  width: 100%;
  transform: translateZ(0);

  ${mediaUp.sm`
    margin-bottom: 0;
  `}

  ${mediaUp.md`
    padding-top: 46%;
  `}

  ${PostCardImageWrapper}:before {
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }

  ${PostCardLink} {
    z-index: 5;
  }
  
  &:hover {
    ${PostCardTitleLarge} {
      text-decoration: underline;
    }
  }

  ${CategoryPill} {
    margin-bottom: ${rem(8)};
    z-index: 6;
  }
`;

export const PostCardLargeContent = styled.div`
  color: white;
  margin: auto;
  max-width: ${rem(600)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  padding: ${rem(16)};
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  text-align: center;
`;

