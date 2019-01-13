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
import { NumberIndicator } from "./groupsList/NumberIndicator";
import { GroupName } from "./groupsList/GroupName";
import { FavoriteItem } from "./groupsList/FavoriteItem";
import { KawaiiSuggestion } from "../../components/KawaiiSuggestion";
import { InjectedNotistackProps, withSnackbar } from "notistack";
import { compose } from "redux";

interface Props {
  groups: Groups;
  favoritesCount: number;
  fetchGroups: () => void;
  fetchFavoriteLinksCount: () => void;
  enqueueSnackbar: InjectedNotistackProps["enqueueSnackbar"];
  [type: string]: any;
}

const Component: React.FunctionComponent<Props> = (props: Props) => {
  React.useEffect(() => {
    props.fetchGroups();
    props.fetchFavoriteLinksCount();
  }, []);

  if (props.groups.error) {
    const err = props.groups.error;
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message;
    props.enqueueSnackbar(message, { variant: "error" });
  }

  if (props.groups.data.length === 0 && props.groups.loading === true) {
    return (
      <React.Fragment>
        <AddLinkForm />
        <List.Loading />
      </React.Fragment>
    );
  }

  if (props.groups.data.length === 0) {
    return (
      <React.Fragment>
        <AddLinkForm />
        <List>
          <FavoriteItem count={props.favoriteLinksCount} />
        </List>
        <KawaiiSuggestion message="Try adding some urls" mood="excited" />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <AddLinkForm />
      <List>
        <FavoriteItem count={props.favoritesCount} />
        {mapListItems(props.groups.data)}
      </List>
    </React.Fragment>
  );
};

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
    favoritesCount: state.favoritesCount
  };
}

function sortAsc(groups: Groups) {
  return produce(groups, draftGroups => {
    const sortedData = sortBy(draftGroups.data, ["name"]);
    draftGroups.data = sortedData;
  });
}

export const GroupsList = compose(
  connect(
    mapStateToProps,
    { fetchGroups, fetchFavoriteLinksCount }
  ),
  withSnackbar
)(Component) as React.FunctionComponent<{ [type: string]: any }>;
