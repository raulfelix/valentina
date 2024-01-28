import styled from "styled-components";

import { grey10, highlight } from "../styles/colour.styles";
import { rem, standardFocusState } from "../styles/styles";

export const Contact = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${rem(80)} 0 ${rem(20)} 0;
  width: 100%;

  & > div {
    width: 100%;
  }
`;

export const ContactIcon = styled.a`
  background-color: ${grey10};
  border-radius: ${rem(48)};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(48)};
  height: ${rem(48)};

  &:hover {
    background-color: ${highlight};
  }

  ${standardFocusState}

  img {
    width: ${rem(24)};
  }

  img.facebook {
    width: 38px;
  }

  img.tweet {
    width: 18px;
  }
`;

export const ContactIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: ${rem(40)} 0;
  width: ${rem(180)};
`;

export const ContactHr = styled.div`
  background-color: ${grey10};
  height: 1px;
  max-width: ${rem(1000)};
  margin: auto;
  margin-bottom: 2px;
`;

export const ContactTiny = styled.div`
  font-size: 12px;
  text-align: center;
`;

export const ContactNav = styled.nav`
  display: flex;
  padding: 40px 0 0 0;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 0 ${rem(8)};

      @media (min-width: 480px) {
        padding: 0 ${rem(16)};
      }
    }
  }
`;
