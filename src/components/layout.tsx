import * as React from "react";

import { GlobalStyle } from "../styles/global.styles";
import { Header } from "./header";
import { Contact } from "./contact";
import { BackToTop } from "./back-to-top";
import * as Styled from "./layout.styles";

type Props = {
  children: React.ReactNode;
  withSmallHeader?: boolean;
  bannerText?: string;
};

const Layout = ({ children, withSmallHeader, bannerText }: Props) => {
  return (
    <>
      <GlobalStyle />
      <Header isSmall={withSmallHeader} bannerText={bannerText} />
      <Styled.Layout>{children}</Styled.Layout>
      {/* <BackToTop /> */}
      <Contact />
      <script src="https://substackapi.com/widget.js" async></script>
    </>
  );
};

export default Layout;
