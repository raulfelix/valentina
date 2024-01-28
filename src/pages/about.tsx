import * as React from "react";
import { MDXProvider } from "@mdx-js/react";

import Layout from "../components/layout";
import { Col, Grid, Row } from "../styles/grid.styles";
import { SEO } from "../components/seo";
import { Image } from "../components/blog/image";
import * as Styled from "./about.styles";

import whiteRabbit from "../about/white-rabbit.jpeg";
import AboutText from "../about/about.mdx";

export default function About() {
  return (
    <Layout withSmallHeader>
      <MDXProvider components={{ Image }}>
        <Grid>
          <Row>
            <Col>
              <Styled.AboutPage>
                <Styled.AboutImage>
                  <img src={whiteRabbit} width="200" height="200" centre />
                </Styled.AboutImage>
                <AboutText />
              </Styled.AboutPage>
            </Col>
          </Row>
        </Grid>
      </MDXProvider>
    </Layout>
  );
}

export const Head = () => (
  <SEO title="About - Valentina Carrizo, Journalist, Writer" />
);
