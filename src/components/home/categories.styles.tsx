import styled from "styled-components";

import { rem } from "../../styles/styles";
import { fontSize20, fontSizeLineHeight20, secondaryFont } from "../../styles/typography.styles";

export const CategoriesBlade = styled.div`
  background-color: white;
  padding: ${rem(80)} 0 0 0;
`;

export const CategoriesBladeContent = styled.div`
  text-align: center;
`;

export const UsydBladeText = styled.p`
  font-size: ${fontSize20};
  font-family: ${secondaryFont};
  line-height: ${fontSizeLineHeight20};
  margin: 0 auto ${rem(40)} auto;
  max-width: ${rem(700)};
`
