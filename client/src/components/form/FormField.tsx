import * as React from "react";
import { TextField } from "@material-ui/core";

interface Props {
  label: string;
  name: string;
  onChange: (e: any) => void;
  onBlur: (e: any) => void;
  value: any;
  error: boolean;
  [type: string] : any;
}

export const FormField = (props: Props) => (
  <TextField
    label="Label"
    margin="normal"
    variant="outlined"
    type="text"
    {...props}
  />
);
