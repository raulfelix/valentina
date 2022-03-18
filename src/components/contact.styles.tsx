import styled from "styled-components";

import { grey2, grey3 } from "../styles/colour.styles";
import { baseFocusState, rem } from "../styles/styles";

export const Contact = styled.footer`
  background-color: ${grey2};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${rem(80)} 0;
`;

export const ContactIcon = styled.a`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: ${rem(48)};
  height: ${rem(48)};
  padding: ${rem(8)};
  border-radius: ${rem(48)};

  &:hover {
    background-color: ${grey3};
  }

  &:focus {
    ${baseFocusState}
  }

  img {
    height: 100%;
    width: auto !important;
  }
`;

export const ContactIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: ${rem(200)};
`;
