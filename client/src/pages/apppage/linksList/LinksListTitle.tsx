import * as React from "react";
import { Typography } from "@material-ui/core";
import { Layout } from "../../../components/Layout";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const LinksListTitle = (props: Props) => (
  <Typography variant="h3" component="h1" {...props}>
    {props.children}
  </Typography>
);
