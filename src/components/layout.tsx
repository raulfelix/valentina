import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import { GlobalStyle } from "../styles/global.styles";
import { Header } from "./header";
import { Contact } from "./contact";
import { BackToTop } from "./back-to-top";
import * as Styled from "./layout.styles";

type Props = {
  children: React.ReactNode;
  meta?: React.ReactNode;
};

const Layout = ({ children, meta }: Props) => {
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
    <>
      <GlobalStyle />
      {/* <Helmet>{meta && meta}</Helmet> */}
      <Header />
      <Styled.Layout>{children}</Styled.Layout>
      <Contact />
      <BackToTop />
    </>
  );
};

export default Layout;
