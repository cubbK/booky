import * as React from "react";
import { ListItemIcon, ListItemText } from "@material-ui/core";

interface Props {
  onClick: () => any;
}

export const ListItem = (props: Props) => (
  <ListItem button={true} onClick={props.onClick}>
    <ListItemIcon>
      <InboxIcon />
    </ListItemIcon>
    <ListItemText primary="Inbox" />
  </ListItem>
);
