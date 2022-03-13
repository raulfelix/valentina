import React from "react";
import { Col, Grid, Row } from "../../styles/grid.styles";

import * as Styled from "./usyd-fashion.styles";
import usyd1 from "./usyd1.jpeg";
import usyd2 from "./usyd2.jpeg";
import usyd3 from "./usyd3.jpeg";
import usyd4 from "./usyd4.jpg";

export const UsydFashion = () => (
  <Styled.UsydBlade>
    <Grid>
      <Row>
        <Col>
          <Styled.UsydBladeContent>
            <Styled.UsydBladeText>Personal project</Styled.UsydBladeText>
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
                <img src={usyd1} alt="" />
              </div>
              <div>
                <img src={usyd2} alt="" />
              </div>
              <div>
                <img src={usyd3} alt="" />
              </div>
              <div>
                <img src={usyd4} alt="" />
              </div>
            </Styled.UsydBladeImages>
          </Styled.UsydBladeContent>
        </Col>
      </Row>
    </Grid>
  </Styled.UsydBlade>
);
