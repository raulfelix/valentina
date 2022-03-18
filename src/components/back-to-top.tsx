import React from "react";

import { Col, Grid, Row } from "../styles/grid.styles";
import * as Styled from "./back-to-top.styles";

export const BackToTop = () => (
  <Styled.BackToTop>
  <Grid>
    <Row>
      <Col>
          <Styled.BackToTopButton
            type="button"
            onClick={() => {
              document.getElementById("header")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            BACK TO TOP
          </Styled.BackToTopButton>
      </Col>
    </Row>
  </Grid>
  </Styled.BackToTop>
);
