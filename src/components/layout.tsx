import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import { GlobalStyle } from '../styles/global.styles';


type Props = {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <GlobalStyle />
      <title>{data.site.siteMetadata.title}</title>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}
export default Layout