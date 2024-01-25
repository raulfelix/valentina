import React from "react";

import * as Styled from "./substack.styles";

export const SubStack = () => {
  return (
    <Styled.SubStack
      href="https://goodtimesawfulposture.substack.com/"
      target="_blank"
      aria-label="Subscribe to my Sub stack: Good Times Awful Posture"
    >
      <Styled.SubStackInner>
        <Styled.SubStackTitle>Good Times Awful Posture</Styled.SubStackTitle>
        <Styled.SubStackText>
          Subscribe to receive the latest articles, essays and blog posts
          directly to your inbox
        </Styled.SubStackText>
        <Styled.SubStackInputWrapper>
          <Styled.SubStackInput>Enter your email...</Styled.SubStackInput>
          <Styled.SubStackJoin>Join</Styled.SubStackJoin>
        </Styled.SubStackInputWrapper>
      </Styled.SubStackInner>
    </Styled.SubStack>
  );
};
