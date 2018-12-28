import * as React from "react";
import { List } from "../../../components/List";
import { ListItemText } from "@material-ui/core";
import styled from "styled-components";
import { darken } from "polished";

const ListItemStyled = styled(List.Item)`
  &&{
    padding-right: 0;
  }
`

const Link = styled.a`
  && {
    display: block;
    max-width: max-content;
    color: ${props => props.theme.primary} !important;
    overflow: hidden;
    text-overflow: ellipsis;
    :hover,
    :active,
    :focus {
      color: ${props => darken(0.2, props.theme.primary)};
      text-decoration: underline;
    }
  }
`;

const Title = styled.div`
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

interface Props {
  primary: any;
  secondary: any;
  onClick: any;
  [type: string]: any;
}

export const LinkListItem = (props: Props) => (
  <List.Item onClick={props.onClick}>
    <ListItemText
      primary={<Title>{props.primary}</Title>}
      secondary={
          <Link href={props.secondary} target="_blank">
            {props.secondary}
          </Link>
      }
    />
    123
  </List.Item>
);
