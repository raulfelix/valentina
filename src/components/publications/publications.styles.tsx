import styled from "styled-components";
import { grey1, grey10, grey3 } from "../../styles/colour.styles";

import { baseFocusState, rem } from "../../styles/styles";
import {
  fontSize14,
  Heading40,
  secondaryFontMedium,
} from "../../styles/typography.styles";

export const List = styled.div`
  margin: auto;
  max-width: ${rem(600)};
`;

export const PublicationGroup = styled.div`
  margin-bottom: ${rem(100)};
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

  ${Heading40} {
    margin-bottom: 0;
  }
`;

export const PublicationFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${rem(8)};
  justify-content: center;
  margin-bottom: ${rem(80)};

  a {
    background-color: ${grey3};
    color: ${grey10};
    font-size: ${fontSize14};
    font-family: ${secondaryFontMedium};
    display: inline-block;
    border-radius: 30px;
    padding: ${rem(6)} ${rem(8)};
    text-decoration: none;

    &:hover {
      background-color: ${grey10};
      color: ${grey1};
    }

    &:focus {
      ${baseFocusState}
    }
  }
`;
