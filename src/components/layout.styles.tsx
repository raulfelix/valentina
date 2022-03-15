import styled from 'styled-components';

import { mediaUp, rem } from '../styles/styles';

export const Layout = styled.main`
  padding: ${rem(40)} 0 0 0;
`

export const LayoutContent = styled.div`
  padding-bottom: ${rem(40)};
`

export const HomePostContent = styled.div`
  margin-bottom: ${rem(80)};
  ${mediaUp.lg`
    margin-bottom: 0;
  `}
`