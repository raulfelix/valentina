import { Link } from "gatsby";
import styled, { css } from "styled-components";

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
import { Row } from "../../styles/grid.styles";

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
  width: 100%;
  margin-bottom: ${rem(32)};

  ${blogBreakpoint} {
    display: block;
    flex-shrink: 0;
    width: ${rem(360)};
    padding-right: ${rem(40)};
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

export const blogBaseCss = css`
p, li {
  color: #2d2b29;
  ${font20}
  font-family: ${readingFont};
  margin-bottom: ${rem(32)};
}

h1, h2, h3, h4, h5, h6 {
  ${fontFamilyElderkin}
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
  background-color: ${highlight};
  margin: 0 0 ${rem(32)} 0;
  padding: ${rem(24)};
  p:last-child {
    color: ${grey10};
    margin-bottom: 0;
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
.gatsby-resp-image-wrapper {
  margin-bottom: ${rem(32)};
}
.gatsby-resp-image-wrapper + em {
  display: block;
  font-size: ${rem(14)};
  font-style: italic;
  text-align: right;
}
`;
export const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${rem(1200)};
  margin: auto;
  padding-bottom: ${rem(60)};

  ${mediaUp.lg`
    flex-direction: row;
  `};

  ${blogBaseCss}
`;

export const BlogCategories = styled.div`
  display: none;
  ${blogBreakpoint} {
    display: block;
  }
`;

type BlogListProps = {
  $marginBottom?: boolean;
};
export const BlogList = styled.div<BlogListProps>`
  margin: auto;
  max-width: ${rem(1100)};
  ${({ $marginBottom = true }) =>
    $marginBottom &&
    `
    margin-bottom: ${rem(80)};
  `}

  ${Row} {
    gap: 24px;
  }
  ${mediaUp.sm`
    ${Row} {
      gap: 0;
    }
  `}
`;

export const StickyContent = styled.div`
  position: sticky;
  top: ${rem(40)};
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

export const BlogPageStickyContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;

  ${blogBreakpoint} {
    display: block;
    position: sticky;
    top: ${rem(40)};
  }
`;

export const BlogPageSubStack = styled.div`
  display: none;
  ${blogBreakpoint} {
    display: block;
  }
`;
