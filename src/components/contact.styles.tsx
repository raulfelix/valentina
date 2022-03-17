import styled from "styled-components";
import { grey2, grey3 } from "../styles/colour.styles";
import { rem } from "../styles/styles";

export const Contact = styled.footer`
  background-color: ${grey2};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${rem(80)} 0;
`;

export const ContactIcon = styled.a`
  display: block;
  width: ${rem(68)};
  img {
    width: 100%;
  }
`;

export const ContactIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: ${rem(300)};
`;
