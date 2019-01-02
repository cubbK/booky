import * as React from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";

export const PopupAlertAction = (props: ButtonProps) => {
  return (
    <Button {...props}>{props.children}</Button>
  )
}