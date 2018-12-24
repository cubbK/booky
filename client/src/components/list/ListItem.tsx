import * as React from "react";
import { ListItem as ListItemComponent, Divider } from "@material-ui/core";
import { Theme } from "../../hocs/withStyledComponentsTheme";
import styled from "styled-components";


interface Props {
  [type: string]: any;
}



export const ListItem = (props: Props) => (
  <ListItemComponent button={true} {...props}>
    {props.children}
    <Divider />
  </ListItemComponent>
);
