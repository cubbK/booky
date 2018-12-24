import * as React from "react";
import { List } from "../../components/List";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import { CombinedReducers } from "../../redux/reducers";
import { AddLinkForm } from "./AddLinkForm";
import { Group, Groups } from "../../redux/reducers/groupsReducer";
import { fetchGroups } from "../../redux/actions";
import produce from "immer";
import { sortBy } from "lodash";

interface Props {
  groups: Groups;
  fetchGroups: () => void;
  [type: string]: any;
}

export const GroupsList = connect(
  mapStateToProps,
  { fetchGroups }
)((props: Props) => {
  React.useEffect(() => {
    props.fetchGroups();
  }, []);

  if (props.groups.error) {
    return (
      <React.Fragment>
        <AddLinkForm />
        <div>Error</div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <AddLinkForm />
      {props.groups.loading ? "Loading" : null}
      <List>{mapListItems(props.groups.data)}</List>
    </React.Fragment>
  );
});

function mapListItems(groups: Array<Group>) {
  return groups.map((group, id) => (
    <Link to={`/group/${group.name}`} key={id}>
      <List.Item button={true} onClick={() => console.log("click")}>
        {group.name}({group.linksCount})
      </List.Item>
    </Link>
  ));
}

function mapStateToProps(state: CombinedReducers) {
  return {
    groups: sortAsc(state.groups)
  };
}

function sortAsc(groups: Groups) {
  return produce(groups, draftGroups => {
    const sortedData = sortBy(draftGroups.data, ["name"]);
    draftGroups.data = sortedData;
  });
}
