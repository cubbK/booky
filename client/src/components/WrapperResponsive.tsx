import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 920px;
  margin: 0 auto;
  min-height: 100%;
  @media (max-width: 1200px) {
    width: 90%;
  }
`;

export const WrapperResponsive = (props: any) => (
  <Container {...props}>{props.children}</Container>
);
