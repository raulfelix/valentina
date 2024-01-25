import styled from "styled-components";

import { grey1, grey10, highlight } from "../../styles/colour.styles";
import { rem } from "../../styles/styles";
import {
  fontFamilyElderkin,
  fontSize14,
  fontSize16,
  fontSize20,
} from "../../styles/typography.styles";

export const SubStack = styled.a`
  background-color: ${grey10};
  box-shadow: 4px 4px 0 ${highlight};
  display: block;
  max-width: ${rem(369)};
  padding: ${rem(8)};
  text-decoration: none;

  &:focus {
    outline: 2px solid ${grey1};
    box-shadow: 0 0 0px 6px ${grey10}, 4px 4px 0 ${highlight};
  }
`;

export const SubStackInner = styled.div`
  border: 1px solid ${grey1};
  padding: ${rem(12)};
`;

export const SubStackTitle = styled.div`
  color: ${grey1};
  ${fontFamilyElderkin}
  font-size: ${fontSize20};
  margin-bottom: ${rem(8)};
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
`;

export const SubStackText = styled.div`
  color: ${grey1};
  font-family: Arial;
  font-size: ${fontSize14};
  margin-bottom: ${rem(16)};
  text-align: center;
`;

export const SubStackInputWrapper = styled.div`
  display: flex;
`;

export const SubStackInput = styled.div`
  color: ${grey10};
  background-color: ${grey1};
  border-radius: 3px;
  border: 1px solid ${grey1};
  font-family: Arial;
  font-size: ${fontSize16};
  margin-right: ${rem(8)};
  padding: ${rem(8)};
  width: 100%;

  &:hover {
    border-color: ${highlight};
  }
  &:focus {
    outline: 0;
  }

  &:focus:not(:focus-visible) {
    outline: 0;
  }

  &:focus-visible {
    border-color: ${highlight};
    outline: 2px solid ${grey10};
    outline-offset: -3px;
  }
`;

export const SubStackJoin = styled.div`
  background-color: ${highlight};
  border: none;
  border-radius: 3px;
  ${fontFamilyElderkin}
  font-size: ${fontSize16};
  padding: ${rem(8)} ${rem(16)};

  &:hover {
    background-color: ${grey1};
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }

  &:focus:not(:focus-visible) {
    outline: 0;
  }

  &:focus-visible {
    outline: 2px solid ${grey10};
    outline-offset: -3px;
  }
`;
