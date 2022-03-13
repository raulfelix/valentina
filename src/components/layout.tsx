import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { container } from './layout.module.css'


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
    <div className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout