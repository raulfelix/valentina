import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { GlobalStyle } from "../styles/global.styles";
import Header from "./header";
import * as Styled from './layout.styles';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <GlobalStyle />
      <title>{data.site.siteMetadata.title}</title>
      <Header />
      <Styled.Layout>{children}</Styled.Layout>
    </div>
  );
};
export default Layout;
