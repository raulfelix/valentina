import styled from "styled-components";

import { rem } from "../styles/styles";
import { grey1, grey10, grey2, grey3, grey4, grey5, grey6 } from "../styles/colour.styles";
import { fontSize20, headlineFont } from "../styles/typography.styles";

export const BackToTop = styled.div`
  background-color: ${grey2};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${rem(40)} 0;
`;

export const BackToTopButton = styled.button`
  background-color: ${grey1};
  border: 1px solid ${grey5};
  border-radius: ${rem(40)};
  color: ${grey6};
  font-size: ${fontSize20};
  font-family: ${headlineFont};
  padding: ${rem(12)} ${rem(32)};

  &:hover {
    background-color: ${grey10};
    border-color: ${grey10};
    color: ${grey1};
    cursor: pointer;
  }
`;
