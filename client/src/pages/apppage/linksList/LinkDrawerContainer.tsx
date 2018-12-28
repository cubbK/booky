import * as React from "react";
import { LinkDrawer } from "./LinkDrawer";
import { Link } from "../../../redux/reducers/linksReducer";

interface Props {
  open: boolean;
  toggleDrawer: any;
  link: Link | null;
  [type: string]: any;
}

export const LinkDrawerContainer = (props: Props) => {
  

  return (<LinkDrawer {...props} />)
}