import * as React from "react";
import { Paper } from "@material-ui/core"

interface Props {
  [type: string] : any;
}

export const List = (props: Props) => <Paper {...props}>{props.children}</Paper>