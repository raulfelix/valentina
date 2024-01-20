import styled from "styled-components";

import { rem } from "../../styles/styles";
import {
  fontFamilyElderkin,
  fontSizeLineHeight14,
} from "../../styles/typography.styles";
import { ContactIcon } from "../contact.styles";
import { blogBreakpoint } from "./blog.styles";
import { grey10, highlight } from "../../styles/colour.styles";

export const BlogShare = styled.div`
  & > div {
    display: flex;
    flex-direction: row;
    gap: 16px;

    ${blogBreakpoint} {
      flex-direction: column;
    }
  }
`;

export const BlogShareIcon = styled.div`
  margin: 0;
  background-color: ${grey10};
  border-radius: ${rem(48)};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(48)};
  height: ${rem(48)};
  width: ${rem(24)};
  height: ${rem(24)};

  img {
    width: ${rem(16)};
  }

  img.facebook {
    width: 24px;
  }

  img.tweet {
    width: 12px;
  }

  ${blogBreakpoint} {
    width: ${rem(48)};
    height: ${rem(48)};

    img {
      width: ${rem(24)};
    }

    img.facebook {
      width: 38px;
    }

    img.tweet {
      width: 18px;
    }
  }
`;

export const BlogShareGroup = styled.a`
  display: flex;
  align-items: center;
  gap: ${rem(8)};
  text-decoration: none;

  ${blogBreakpoint} {
    gap: ${rem(16)};
  }

  p {
    ${fontFamilyElderkin}
    color: ${grey10};
    font-size: ${fontSizeLineHeight14};
    margin: 0;
    text-decoration: none;
  }

  &:hover {
    p {
      color: ${highlight};
    }
    ${BlogShareIcon} {
      background-color: ${highlight};
    }
  }
`;
