import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { container } from './layout.module.css'
import Header from './header';


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
      <title>{data.site.siteMetadata.title}</title>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}
export default Layout