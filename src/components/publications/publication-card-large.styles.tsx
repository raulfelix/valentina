import styled from "styled-components";
import { grey1, grey10, highlight } from "../../styles/colour.styles";

import { rem, standardFocusState } from "../../styles/styles";
import {
  fontFamilyElderkin,
  fontFamilyMerriweather,
  fontSize14,
  fontSize16,
  fontSizeLineHeight14,
  fontSizeLineHeight16,
} from "../../styles/typography.styles";
import {
  PublicationCard,
  PublicationCardImage,
} from "./publication-card.styles";

export { PublicationCardImage };

export const PublicationCardImageWrapper = styled.div`
  height: 200px;
  width: 100%;
  flex-shrink: 0;
  position: relative;
`;

export const PublicationCardLarge = styled(PublicationCard)`
  display: flex;
`;

export const PublicationCardContent = styled.div`
  padding: ${rem(16)} 0;
`;

export const PublicationCardTitle = styled.a`
  ${fontFamilyElderkin}
  color: ${grey10};
  display: block;
  font-size: ${rem(22)};
  line-height: ${rem(24)};
  margin: 0 0 ${rem(4)} 0;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  ${standardFocusState}
`;

export const PublicationCardDescription = styled.p`
  ${fontFamilyMerriweather}
  font-size: ${fontSize14};
  line-height: ${fontSizeLineHeight14};
`;

export const PublicationCardCategory = styled.a`
  ${fontFamilyElderkin}
  background-color: ${grey1};
  border: 1px solid ${grey10};
  color: ${grey10};
  display: inline-block;
  font-size: ${fontSize16};
  line-height: ${fontSizeLineHeight16};
  letter-spacing: 0.32px;
  padding: ${rem(1)} ${rem(8)};
  margin-bottom: ${rem(8)};
  text-transform: uppercase;
  text-decoration: none;
  position: absolute;
  right: 0;
  top: -${rem(12)};

  ${standardFocusState}

  &:hover {
    background-color: ${highlight};
    color: ${grey10};
  }
`;

export const PublicationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${rem(40)} 0;

  ${PublicationCardLarge} {
    flex-direction: column;
  }

  & > div {
    width: 100%;
  }

  @media (min-width: 480px) {
    & > div {
      padding: 0 20px;
      width: 50%;
    }
  }

  @media (min-width: 768px) {
    ${PublicationCardImageWrapper} {
      height: 200px;
    }
    & > div {
      width: 33.333%;
    }
  }

  @media (min-width: 1200px) {
    ${PublicationCardImageWrapper} {
      width: 160px;
      height: 160px;
    }
    ${PublicationCardContent} {
      padding: 0 ${rem(40)} 0 ${rem(16)};
    }

    ${PublicationCardLarge} {
      flex-direction: row;
    }

    & > div {
      padding: 0;
    }
  }
`;
