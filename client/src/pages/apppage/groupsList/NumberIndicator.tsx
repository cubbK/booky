import * as React from "react";
import styled from "styled-components";

const Indicator = styled.div`
  font-weight: 700;
  color: ${props => props.theme.primary};
`;

interface Props {
  [type: string]: any;
}

export const NumberIndicator = (props: Props) => (
  <Indicator>{props.children}</Indicator>
);
