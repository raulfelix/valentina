import styled from "styled-components";

import { rem } from "../styles/styles";
import {
  fontFamilyMerriweather,
  fontSize24,
  fontSize40,
} from "../styles/typography.styles";
import { blogBaseCss } from "./blog/blog.styles";

export const AboutPage = styled.div`
  padding: ${rem(80)} 0;
  max-width: ${rem(800)};
  margin: auto;

  ${blogBaseCss}
`;

export const AboutHeading = styled.div`
  font-size: ${fontSize40};
  ${fontFamilyMerriweather}
  font-weight: bold;
  margin-bottom: ${rem(40)};
`;

export const AboutImage = styled.div`
  margin-bottom: ${rem(40)};
  text-align: center;
`;

export const AboutText = styled.div`
  font-size: ${fontSize24};
  ${fontFamilyMerriweather}
`;
