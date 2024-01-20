import * as React from "react";

import { GlobalStyle } from "../styles/global.styles";
import { Header } from "./header";
import { Contact } from "./contact";
import { BackToTop } from "./back-to-top";
import * as Styled from "./layout.styles";

type Props = {
  children: React.ReactNode;
  withSmallHeader?: boolean;
};

const Layout = ({ children, withSmallHeader }: Props) => {
  return (
    <>
      <GlobalStyle />
      <Header isSmall={withSmallHeader} />
      <Styled.Layout>{children}</Styled.Layout>
      {/* <BackToTop /> */}
      <Contact />
    </>
  );
};

export default Layout;
