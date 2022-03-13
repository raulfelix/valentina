import { Link } from "gatsby";
import styled from 'styled-components';

import { rem } from "../../styles/styles";
import { fontSize16, fontSizeLineHeight16, readingFont, secondaryFont, secondaryFontMedium } from "../../styles/typography";

export const PostCardImage = styled.div`
  border-radius: ${rem(16)};
  display: block;
  overflow: hidden;

  .gatsby-image-wrapper, img {
    width: 100%;
  }
`

export const PostCardContent = styled.div`
  padding-top: ${rem(16)};
`

export const PostCardTitle = styled.h2`
  font-family: ${readingFont};
  font-weight: 700;
  font-size: ${rem(30)};
  line-height: ${rem(38)};
  margin: 0;
  margin-bottom: ${rem(4)};
`

export const PostCardCategory = styled(Link)`
  display: block;
  font-size: ${fontSize16};
  font-family: ${secondaryFontMedium};
  margin-bottom: ${rem(16)};
  position: relative;
  z-index: 2;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const PostCardExcerpt = styled.p`
  font-family: ${secondaryFont};
  font-size: ${fontSize16};
  line-height: ${fontSizeLineHeight16};
`


export const PostCard = styled.div`
  display: block;
  position: relative;
  padding: 0 ${rem(12)};
`

export const PostCardLink = styled(Link)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`

export const PostCardLarge = styled.div`
  border-radius: ${rem(16)};
  display: block;
  position: relative;
  overflow: hidden;
  padding: 15% 0;
  width: 100%;

  &:before {
    content: '';
    background-color: rgba(0,0,0,0.4);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 2;
  }

  ${PostCardImage} {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`

export const PostCardLargeContent = styled.div`
  color: white;
  margin: auto;
  max-width: ${rem(430)};
  position: relative;
  text-align: center;
  z-index: 3;
`

export const PostCardTitleLarge = styled(Link)`
  color: white;
  display: block;
  font-family: ${readingFont};
  font-weight: 700;
  font-size: ${rem(42)};
  line-height: ${rem(50)};
  margin: 0;
  margin-bottom: ${rem(16)};
  text-decoration: none;

  &:hover {
    text-decoration: underline;

  }
`