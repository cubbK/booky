import * as React from "react";
import { LinkDrawer } from "./LinkDrawer";
import { Link } from "../../../redux/reducers/linksReducer";
import { setFavoriteLink, deleteLink } from "../../../redux/actions";
import { connect } from "react-redux";

interface Props {
  open: boolean;
  toggleDrawer: any;
  link: Link | null;
  [type: string]: any;
}

const Component = (props: Props) => {
  const handleFavorite = () => {
    props.setFavoriteLink(
      props.link && props.link.id,
      props.link && !props.link.isFavorite
    );
  };

  const handleDelete = () => {
    props.deleteLink(props.link && props.link.id);
  };

  return (
    <LinkDrawer
      {...props}
      handleFavorite={handleFavorite}
      handleDelete={handleDelete}
    />
  );
};

export const LinkDrawerContainer = connect(
  null,
  { setFavoriteLink, deleteLink }
)(Component);
