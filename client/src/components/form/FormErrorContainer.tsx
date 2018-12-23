import * as React from "react";
import styled from "styled-components";
import { WrapperResponsive } from "../WrapperResponsive";

const Container = styled(WrapperResponsive)`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

interface Props {
  [type: string]: any;
}

export const FormErrorContainer = (props: Props) => (
  <Container {...props}>{props.children}</Container>
);
