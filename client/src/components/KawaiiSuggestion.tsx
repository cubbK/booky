import * as React from "react";
import { Cat } from "react-kawaii";
import { Layout } from "./Layout";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const LayoutCentered = styled(Layout)`
  && {
    margin: 15px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

interface Props {
  message: any;
  mood?:
    | "sad"
    | "shocked"
    | "happy"
    | "blissful"
    | "lovestruck"
    | "excited"
    | "ko";
  [type: string]: any;
}

export const KawaiiSuggestion = (props: Props) => {
  return (
    <LayoutCentered {...props}>
      <Cat size={280} mood={props.mood} color="#E0E4E8" />
      <Typography variant="h5" gutterBottom>
        {props.message}
      </Typography>
    </LayoutCentered>
  );
};

KawaiiSuggestion.defaultProps = {
  mood: "sad"
};
