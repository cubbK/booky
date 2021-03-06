import * as React from "react";
import { List } from "../../../components/List";
import { ListItemText } from "@material-ui/core";
import styled from "styled-components";
import { darken } from "polished";
import { FaRegStar } from "react-icons/fa";

const ListItemStyled = styled(List.Item)`
  && {
    padding-right: 0;
  }
`;

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
  font-size: 1.15rem;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

const FavoriteIcon = styled(FaRegStar)`
  color: ${props => props.theme.primary};
  height: 20px;
  width: 20px;
  min-width: 20px;
`;

interface Props {
  primary: any;
  secondary: any;
  onClick: any;
  isFavorite: boolean;
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
    {props.isFavorite ? <FavoriteIcon /> : null}
  </List.Item>
);
