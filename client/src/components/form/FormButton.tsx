import * as React from "react";
import { Button } from "@material-ui/core";

interface Props {
  disabled: boolean;
  [type: string]: any;
}

export const FormButton = (props: Props) => (
  <Button type="submit" variant="contained" size="large" color="primary" {...props}>
    {props.children}
  </Button>
);
