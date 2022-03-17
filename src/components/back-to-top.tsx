import React from "react";

import { Col, Grid, Row } from "../styles/grid.styles";
import * as Styled from "./back-to-top.styles";

export const BackToTop = () => (
  <Grid>
    <Row>
      <Col>
        <Styled.BackToTop>
          <Styled.BackToTopButton
            type="button"
            onClick={() => {
              document.getElementById("header")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            bAck to top
          </Styled.BackToTopButton>
        </Styled.BackToTop>
      </Col>
    </Row>
  </Grid>
);
