import styled from "styled-components";

import { mediaUp, rem } from "../../styles/styles";
import {
  font20,
  font40,
  readingFont,
  secondaryFontMedium,
} from "../../styles/typography.styles";
import { Category, CategoryPill } from "../categories/categories.styles";

export const BlogHeader = styled.div`
  margin: auto;
  max-width: ${rem(800)};
  text-align: center;

  ${CategoryPill} {
    margin-bottom: ${rem(16)};
  }
`;

export const BlogTitle = styled.h1`
  font-size: ${rem(42)};
  font-family: ${readingFont};
  line-height: ${rem(50)};
  margin: 0 0 ${rem(12)} 0;
`;

export const BlogHeroImage = styled.div`
  margin-bottom: ${rem(80)};
  padding-top: ${rem(24)};
  & > div {
    overflow: hidden;
    height: ${rem(390)};
    width: 100%;
  }
`;

export const BlogSideText = styled.div`
  flex-shrink: 0;
  padding-right: ${rem(24)};
  width: ${rem(280)};
  display: none;
  ${mediaUp.md`
    display: block;
  `};

  ${Category} {
    margin-bottom: ${rem(32)};
  }
`;

export const BlogContentText = styled.div``;

export const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${rem(1080)};
  margin: auto;

  ${mediaUp.md`
    flex-direction: row;
  `};

  p, li {
    color: #2d2b29;
    ${font20}
    font-family: ${readingFont};
    margin-bottom: ${rem(32)};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${secondaryFontMedium};
    margin: 0 0 ${rem(32)}; 0;
  }

  h1 {
    ${font40}
  }

  h2 {
    font-size: ${rem(34)};
    line-height: ${rem(43)};
  }

  h3 {
    font-size: ${rem(30)};
    line-height: ${rem(40)};
  }

  a {
    color: #2c84f1;
    text-decoration: underline;

    &:hover {
      color: #005ac9;
    }
  }

  blockquote {
    color: #FF89C9;
    margin: 0 0 ${rem(32)} 0;
    padding: 0 ${rem(24)};
    p {
      color: #FF89C9;
    }
  }

  ol, ul {
    margin: 0 0 ${rem(32)} 0;
    padding-left: ${rem(32)};

    li, p {
      margin-bottom: ${rem(8)};
    }
  }

  // caption an image
  .gatsby-resp-image-wrapper + em {
    display: block;
    font-size: ${rem(14)};
    font-style: italic;
    text-align: right;
  }
`;

export const BlogList = styled.div`
  margin: auto;
  max-width: ${rem(800)};
`