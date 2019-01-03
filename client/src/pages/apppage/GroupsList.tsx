import * as React from "react";
import { List } from "../../components/List";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import { CombinedReducers } from "../../redux/reducers";
import { AddLinkForm } from "./AddLinkForm";
import { Group, Groups } from "../../redux/reducers/groupsReducer";
import { fetchGroups, fetchFavoriteLinksCount } from "../../redux/actions";
import produce from "immer";
import { sortBy } from "lodash";
import { Divider } from "@material-ui/core";
import { NumberIndicator } from "./groupsList/NumberIndicator";
import { GroupName } from "./groupsList/GroupName";
import { Count } from "../../redux/reducers/favoritesReducer";
import { FavoriteItem } from "./groupsList/FavoriteItem";

interface Props {
  groups: Groups;
  favoriteLinksCount: Count;
  fetchGroups: () => void;
  fetchFavoriteLinksCount: () => void;
  [type: string]: any;
}

export const GroupsList = connect(
  mapStateToProps,
  { fetchGroups, fetchFavoriteLinksCount }
)((props: Props) => {
  React.useEffect(() => {
    props.fetchGroups();
    props.fetchFavoriteLinksCount();
  }, []);

  if (props.groups.error) {
    return (
      <React.Fragment>
        <AddLinkForm />
        <div>Error</div>
      </React.Fragment>
    );
  }

  if (props.groups.data.length === 0 && props.groups.loading === true) {
    return (
      <React.Fragment>
        <AddLinkForm />
        <List.Loading />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <AddLinkForm />
      <List>
        <FavoriteItem count={props.favoriteLinksCount} />
        {mapListItems(props.groups.data)}
      </List>
    </React.Fragment>
  );
});

function mapListItems(groups: Array<Group>) {
  return groups.map((group, id) => (
    <Link to={`/group/${group.name}`} key={id}>
      <List.Item button={true}>
        <GroupName>{group.name}</GroupName>
        <NumberIndicator>{group.linksCount}</NumberIndicator>
      </List.Item>
    </Link>
  ));
}

function mapStateToProps(state: CombinedReducers) {
  return {
    groups: sortAsc(state.groups),
    favoriteLinksCount: state.favorites.count
  };
}

function sortAsc(groups: Groups) {
  return produce(groups, draftGroups => {
    const sortedData = sortBy(draftGroups.data, ["name"]);
    draftGroups.data = sortedData;
  });
}
