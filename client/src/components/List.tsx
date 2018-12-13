import * as React from "react";
import { Paper, ListItem } from "@material-ui/core";

interface Props {
  [type: string]: any;
}

export class List extends React.Component {
  static Item = ListItem;
  
  render() {
    return <Paper {...this.props}>{this.props.children}</Paper>;
  }
}
