import styled from "styled-components";

import { rem } from "../../styles/styles";
import { Heading30, headlineFont } from "../../styles/typography";
import { ContactIcon } from "../contact.styles";

export const BlogShare = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  ${Heading30} {
    font-weight: normal;
    font-family: ${headlineFont};
  }
`;

export const BlogShareIcon = styled(ContactIcon)`
  margin-bottom: ${rem(24)};
`