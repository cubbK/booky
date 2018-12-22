import * as React from "react";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import { Inbox as InboxIcon } from "@material-ui/icons";

interface Props {
  onClick?: () => any;
  [type: string]: any;
}

export const ListItem = (props: Props) => (
  <ListItem onClick={props.onClick} {...props}>
    <ListItemIcon>
      <InboxIcon />
    </ListItemIcon>
    <ListItemText primary="Inbox" />
  </ListItem>
);
