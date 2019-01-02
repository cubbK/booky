import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { PopupAlertAction } from "./popupAlert/PopupAlertAction";

interface Props {
  open: boolean;
  handleClose : (...props: any) => void;
  title: string | any;
  description: string | any;
  [type: string]: any;
}

export const PopupAlert = (props: Props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={props.className}
    >
      <DialogTitle id="alert-dialog-title">
        {props.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {props.children}
      </DialogActions>
    </Dialog>
  );
};

PopupAlert.Action = PopupAlertAction;
