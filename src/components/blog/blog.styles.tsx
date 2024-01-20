import styled from "styled-components";

import { mediaUp, rem } from "../../styles/styles";
import {
  font20,
  font40,
  fontFamilyElderkin,
  fontSize20,
  fontSize30,
  readingFont,
  secondaryFontMedium,
} from "../../styles/typography.styles";
import { grey1, grey10, highlight } from "../../styles/colour.styles";
import { Link } from "gatsby";

export const blogBreakpoint = "@media (min-width: 900px)";

export const BlogHeader = styled.div`
  margin-bottom: ${rem(48)};
`;

export const BlogTitle = styled.h1`
  ${fontFamilyElderkin}
  font-size: ${rem(42)};
  line-height: ${rem(50)};
  margin: 0;
`;

export const BlogHeroImage = styled.div`
  position: relative;
  margin: auto;
  margin-bottom: ${rem(32)};
  max-width: ${rem(1200)};

  & > div {
    overflow: hidden;
    height: ${rem(320)};
    width: 100%;
  }

  ${blogBreakpoint} {
    & > div {
      height: ${rem(480)};
    }
  }
`;

export const BlogCategory = styled(Link)`
  ${fontFamilyElderkin}
  background-color: ${grey1};
  border: 1px solid ${grey10};
  color: ${grey10};
  display: inline-block;
  font-size: ${fontSize20};
  line-height: 34px;
  padding: 0 ${rem(8)} 0 ${rem(8)};
  margin: 0;
  text-transform: uppercase;
  text-decoration: none;

  ${blogBreakpoint} {
    font-size: ${fontSize30};
    margin-bottom: ${rem(32)};
  }

  &:hover {
    background-color: ${highlight};
    color: ${grey10};
  }
`;

export const BlogSideText = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  width: 100%;
  margin-bottom: ${rem(32)};

  ${blogBreakpoint} {
    display: block;
    flex-shrink: 0;
    width: ${rem(320)};
    padding-right: ${rem(24)};
  }
`;

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${rem(1200)};
  margin: auto;

  ${blogBreakpoint} {
    flex-direction: row;
  }
`;
export const BlogContentText = styled.div``;

export const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${rem(1200)};
  margin: auto;
  padding-bottom: ${rem(60)};

  ${mediaUp.lg`
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
`;

export const EmbedWrapper = styled.div`
  margin-bottom: ${rem(32)};
  padding-top: 56%;
  position: relative;

  iframe {
    border: none;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;
