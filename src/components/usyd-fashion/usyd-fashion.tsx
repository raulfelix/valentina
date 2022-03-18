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
            <Styled.UsydBladeTitle>usyd fAshion</Styled.UsydBladeTitle>
            <Styled.UsydBladeHashTag
              href="https://www.instagram.com/usydfashion/"
              target="_blank"
            >
              #usydfashion
            </Styled.UsydBladeHashTag>
            <Styled.UsydBladeText>
              Describe the project briefly here. How is started and what tools
              you used to get it all going. Where it is at today and what comes
              next....
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
