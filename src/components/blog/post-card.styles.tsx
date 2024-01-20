import { Link } from "gatsby";
import styled from "styled-components";

import { grey1, grey10 } from "../../styles/colour.styles";
import { baseFocusState, rem } from "../../styles/styles";
import {
  fontFamilyElderkin,
  fontFamilyMerriweather,
  fontSize16,
  fontSize24,
  fontSizeLineHeight14,
  fontSizeLineHeight16,
} from "../../styles/typography.styles";

export const PostCardTitle = styled.h2`
  ${fontFamilyElderkin}
  font-size: ${rem(22)};
  line-height: ${rem(28)};
  margin: 0 0 ${rem(8)} 0;
  font-weight: normal;
`;

export const PostCardTitleLarge = styled.h2`
  ${fontFamilyElderkin}

  display: block;
  color: ${grey10};
  font-size: ${rem(24)};
  font-weight: normal;
  line-height: ${rem(30)};
  margin: 0 0 ${rem(8)} 0;
  text-decoration: none;
`;

export const PostCardImageWrapper = styled.div`
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

export const PostCardCategory = styled(Link)`
  ${fontFamilyElderkin}
  background-color: ${grey1};
  border: 1px solid ${grey10};
  color: ${grey10};
  display: block;
  font-size: ${fontSize16};
  line-height: ${fontSizeLineHeight16};
  margin-bottom: 0;
  letter-spacing: 0.32px;
  position: absolute;
  padding: 0 ${rem(8)};
  bottom: -${rem(12)};
  z-index: 2;
  text-transform: uppercase;
  text-decoration: none;
  left: 50%;
  transform: translateX(-50%);
`;

export const PostCardExcerpt = styled.p`
  ${fontFamilyMerriweather}
  font-size: ${rem(14)};
  line-height: ${fontSizeLineHeight14};
  margin-bottom: 0;
`;

export const PostCard = styled.div`
  display: block;
  position: relative;
  text-align: center;

  &:hover {
    ${PostCardTitle} {
      text-decoration: underline;
    }
  }
`;

export const PostCardHeader = styled.div`
  position: relative;
  padding-top: 60%;
`;

export const PostCardLink = styled(Link)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;

  &:hover {
  }
  &:focus {
    ${baseFocusState}
  }
`;

export const PostCardLarge = styled.div`
  display: block;
  position: relative;
  text-align: center;
  &:hover {
    ${PostCardTitleLarge} {
      text-decoration: underline;
    }
  }
`;

export const PostCardLargeContent = styled.div`
  display: flex;
  font-size: ${fontSize24};
  align-items: center;
  flex-direction: column;
  margin: auto;
  padding: ${rem(16)} 0 0 0;
`;
