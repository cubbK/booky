import * as React from "react";
import { List } from "../List";
import { ListItem } from "./ListItem";
import ContentLoader, { Facebook } from "react-content-loader";

const ListItemLoading = () => (
  <ListItem button={false}>
    <ContentLoader width={1500} height={80} style={{height: "100%", width: "100%"}}>
      {/* Pure SVG */}
      <rect x="0" y="0" rx="4" ry="4" width="1500" height="30" />
      <rect x="0" y="50" rx="4" ry="4" width="1000" height="20" />
    </ContentLoader>
  </ListItem>
);

export const ListLoading = () => {
  return (
    <List >
      <ListItemLoading />
      <ListItemLoading />
      <ListItemLoading />
    </List>
  );
};
