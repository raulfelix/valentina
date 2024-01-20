import styled from "styled-components";

import { grey1, grey10, grey3, highlight } from "../../styles/colour.styles";
import { baseFocusState, rem, standardFocusState } from "../../styles/styles";
import {
  fontFamilyElderkin,
  fontSize14,
  fontSize20,
  secondaryFontMedium,
} from "../../styles/typography.styles";

export const List = styled.div`
  margin: auto;
  max-width: ${rem(600)};
`;

export const PublicationGroup = styled.div`
  margin-bottom: ${rem(100)};
`;

export const PublicationCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(24)} 0;
`;

export const PublicationIcon = styled.div`
  margin-bottom: ${rem(32)};
  text-align: center;
  img {
    display: inline-block;
    height: ${rem(60)};
  }
`;

export const PublicationHeader = styled.div`
  background-color: ${grey3};
  padding: ${rem(20)};
  margin-top: -40px;
  margin-bottom: ${rem(80)};
  text-align: center;
`;

export const PublicationFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${rem(24)};
  margin-bottom: ${rem(80)};

  a {
    background-color: ${grey1};
    border: 1px solid ${grey10};
    box-shadow: 4px 4px 0 ${highlight};
    color: ${grey10};
    font-size: ${fontSize20};
    ${fontFamilyElderkin}
    letter-spacing: 1px;
    display: inline-block;
    border-radius: 4px;
    padding: ${rem(6)} ${rem(8)};
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      background-color: ${grey10};
      color: ${grey1};
      cursor: pointer;
    }

    &:focus {
      ${baseFocusState}
    }
  }
`;

type FilterProps = {
  $isActive: boolean;
};
export const Filter = styled.button<FilterProps>`
  background-color: ${grey1};
  border: 1px solid ${grey10};
  box-shadow: 4px 4px 0 ${highlight};
  color: ${grey10};
  font-size: ${fontSize20};
  ${fontFamilyElderkin}
  letter-spacing: 1px;
  display: inline-block;
  border-radius: 4px;
  padding: ${rem(6)} ${rem(8)};
  position: relative;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background-color: ${grey10};
    color: ${grey1};
    cursor: pointer;
  }

  ${standardFocusState}

  ${({ $isActive }) =>
    $isActive &&
    `
    background-color: ${grey10} !important;
    color: ${grey1} !important;

    &:before {
      content: '';
      width: 0; 
      height: 0; 
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      
      border-top: 10px solid ${grey10};
      position: absolute;
      bottom: -10px;
    }
  `}
`;
