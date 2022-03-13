import styled from 'styled-components';

import { rem } from '../../styles/styles';
import { fontSize16, fontSizeLineHeight16 } from "../../styles/typography";

export const TagLine = styled.div`
  font-size: ${fontSize16};
  line-height: ${fontSizeLineHeight16};
  max-width: ${rem(500)};
  margin: auto auto ${rem(24)} auto;
  text-align: center;
  
`