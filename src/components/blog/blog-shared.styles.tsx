import styled from "styled-components";

import { rem } from "../../styles/styles";
import { Text, headlineFont } from "../../styles/typography.styles";
import { ContactIcon } from "../contact.styles";

export const BlogShare = styled.div`
  margin-bottom: ${rem(12)};
  padding-bottom: ${rem(12)};
  text-align: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  ${Text} {
    font-weight: normal;
    font-family: ${headlineFont};
    margin-bottom: ${rem(8)};
  }
`;

export const BlogShareIcon = styled(ContactIcon)`
  margin: 0 0 ${rem(24)} 0;
`