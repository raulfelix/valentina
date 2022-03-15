import { Link } from "gatsby";
import styled from "styled-components";
import { black } from "../../styles/colour.styles";
import { rem } from "../../styles/styles";

import {
  fontSize16,
  fontSizeLineHeight16,
  secondaryFont,
} from "../../styles/typography";

export const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${rem(80)}
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
  background-color: #f5f5f5;
  background-image: url(${({ imageSrc }) => imageSrc });
  background-size: 100%;
  background-position: center;
  margin-bottom: ${rem(8)};
  width: ${rem(66)};
  height: ${rem(66)};
`;

export const CategoryLabel = styled.div`
  color: ${black};
  font-family: ${secondaryFont};
  font-size: ${fontSize16};
  line-height: ${fontSizeLineHeight16};
  text-decoration: none;
`;
