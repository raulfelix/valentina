import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import { Col, Grid, Row } from "../styles/grid.styles";
import { SEO } from "../components/seo";
import { Image } from "../components/blog/image";
import * as Styled from "../components/about.styles";

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
                  <StaticImage
                    src={"../about/white-rabbit.jpeg"}
                    alt="white rabbit"
                    width={200}
                  />
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
