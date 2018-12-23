import * as React from "react";
import { Chip, Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "./iconmonstr-x-mark-1.svg";
import styled from "styled-components";

interface Props {
  handleClose: (...props: any) => void;
  open: boolean;
  message: string | null;
  [type: string]: any;
}

// filter is a way to set color to svg https://codepen.io/sosuke/pen/Pjoqqp
const CloseIconWhite = styled.img`
  && {
    filter: invert(100%) sepia(0%) saturate(1138%) hue-rotate(293deg)
      brightness(120%) contrast(100%);
  }
`;

export const FormError = (props: Props) => (
  <Snackbar
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left"
    }}
    autoHideDuration={6000}
    open={props.open}
    onClose={props.handleClose}
    ContentProps={{
      "aria-describedby": "message-id"
    }}
    message={<span id="message-id">{props.message}</span>}
    action={
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={props.handleClose}
      >
        <CloseIconWhite src={CloseIcon} alt="" />
      </IconButton>
    }
  />
);
