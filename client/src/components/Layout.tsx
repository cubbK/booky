import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1170px;
  margin: 0 auto;
`;

interface Props {
  [type: string]: any;
}

export const Layout = (props: Props) => (
  <Container {...props}>{props.children}</Container>
);
