import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1170px;
  margin: 0 auto;
  @media(max-width: 1300px) {
    width: auto;
    padding: 0 40px;
  }
  @media(max-width: 350px) {
    padding: 0 20px;
  }
`;

interface Props {
  [type: string]: any;
}

export const Layout = (props: Props) => (
  <Container {...props}>{props.children}</Container>
);
