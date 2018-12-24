import * as React from "react";
import { List } from "../../../components/List";
import { ListItemText } from "@material-ui/core";
import styled from "styled-components";
import { darken } from "polished";

const Link = styled.a`
  && {
    color: ${props => props.theme.primary} !important;
    :hover,
    :active,
    :focus {
      color: ${props => darken(0.2, props.theme.primary)};
      text-decoration: underline;
    }
  }
`;

interface Props {
  primary: any;
  secondary: any;
}

export const LinkListItem = (props: Props) => (
  <List.Item>
    <ListItemText
      primary={props.primary}
      secondary={
        <Link href={props.secondary} target="_blank">
          {props.secondary}
        </Link>
      }
    />
  </List.Item>
);
