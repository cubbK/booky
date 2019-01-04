import * as React from "react";
import { Ghost } from "react-kawaii";
import { Layout } from "./Layout";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const LayoutCentered = styled(Layout)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

interface Props {
  message: any;
  [type: string]: any;
}

export const ErrorKawaii = (props: Props) => {
  return (
    <LayoutCentered {...props}>
      <Ghost size={280} mood="sad" color="#E0E4E8" />
      <Typography variant="h5" gutterBottom>
        {props.message}
      </Typography>
    </LayoutCentered>
  );
};
