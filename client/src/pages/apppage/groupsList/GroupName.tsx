import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 98%;
`;

export const GroupName = (props: any) => <Container>{props.children}</Container>
