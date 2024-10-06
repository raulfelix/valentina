import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Col, Grid, Row } from "../../styles/grid.styles";
import * as Styled from "./usyd-fashion.styles";

export const UsydFashion = () => (
  <Styled.UsydBlade>
    <Grid>
      <Row>
        <Col>
          <Styled.UsydBladeContent>
            <Styled.UsydBladeHashTag
              href="https://www.instagram.com/usydfashion/"
              target="_blank"
            >
              #usydfashion
            </Styled.UsydBladeHashTag>
            <Styled.UsydBladeText>
              I lead a team of creatives in photographing the best outfits on
              campus and bringing these to a wider audience.
            </Styled.UsydBladeText>
            <Styled.UsydBladeImages>
              <div>
                <StaticImage src="./usyd1.jpeg" alt="" />
              </div>
              <div>
                <StaticImage src="./usyd2.jpeg" alt="" />
              </div>
              <div>
                <StaticImage src="./usyd3.jpeg" alt="" />
              </div>
              <div>
                <StaticImage src="./usyd4.jpg" alt="" />
              </div>
            </Styled.UsydBladeImages>
          </Styled.UsydBladeContent>
        </Col>
      </Row>
    </Grid>
  </Styled.UsydBlade>
);
