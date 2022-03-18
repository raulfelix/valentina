import styled from "styled-components";

import { rem } from "../styles/styles";
import { grey1, grey10, grey2, grey3 } from "../styles/colour.styles";
import { secondaryFontMedium } from "../styles/typography.styles";

export const BackToTop = styled.div`
  background-color: ${grey2};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${rem(40)} 0;
`;

export const BackToTopButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${grey10};
  font-size: ${rem(14)};
  font-family: ${secondaryFontMedium};
  padding: ${rem(3)};
  text-decoration: underline;
  &:hover {
    background-color: ${grey10};
    color: ${grey1};
    cursor: pointer;
  }
`;
