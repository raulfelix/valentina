import { Link } from "gatsby";
import styled from "styled-components";
import { black, grey1 } from "../../styles/colour.styles";
import { rem } from "../../styles/styles";

import {
  fontSize14,
  fontSize16,
  fontSize40,
  fontSizeLineHeight16,
  secondaryFont,
  secondaryFontMedium,
} from "../../styles/typography.styles";

export const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${rem(80)};

  & > a {
    margin: 0 ${rem(8)};
  }
`;

export const Category = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 ${rem(16)};
  position: relative;
  text-decoration: none !important;
`;

type CategoryImageProps = {
  imageSrc: string;
}
export const CategoryImage = styled.div<CategoryImageProps>`
  border-radius: ${rem(66)};
  border: 4px solid ${grey1};
  box-shadow: 0px 3px 6px rgb(0 0 0 / 20%);
  background-color: #f5f5f5;
  background-image: url(${({ imageSrc }) => imageSrc });
  background-size: 100%;
  background-position: center;
  margin-bottom: ${rem(8)};
  width: ${rem(100)};
  height: ${rem(100)};
`;

export const CategoryImageLabel = styled.div`
  color: ${black};
  font-family: ${secondaryFontMedium};
  font-size: ${fontSize40};
  text-decoration: none;
`;

export const CategoryLabel = styled.div`
  color: ${black};
  font-family: ${secondaryFont};
  font-size: ${fontSize16};
  line-height: ${fontSizeLineHeight16};
  text-decoration: none;
`;

export const CategoryLink = styled(Link)`
  background-color: #eee;
  border-radius: 2px;
  display: inline-block;
  padding: 0 ${rem(4)};
  text-decoration: none !important;
`

type CategoryPillProps = {
  $colour: {
    bg: string;
    text: string;
  }
}
export const CategoryPill = styled(Link)<CategoryPillProps>`
  background-color: ${({ $colour }) => $colour?.bg};
  border-radius: ${rem(30)};
  color: ${({ $colour }) => $colour?.text};
  font-size: ${fontSize14};
  font-family: ${secondaryFontMedium};
  display: inline-block;
  padding: ${rem(6)} ${rem(8)};
  text-decoration: none !important;
`