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

  &:first-child img {
    width: ${rem(18)};
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
  max-width: 1000px;
  margin: auto;
  margin-bottom: 2px;
`;

export const ContactTiny = styled.div`
  font-size: 12px;
  text-align: center;
`;
