import * as React from "react";
import { List } from "../../components/List";
import { CombinedReducers } from "../../redux/reducers";
import { fetchLinks } from "../../redux/actions";
import { connect } from "react-redux";
import { Links, Link as ILink } from "../../redux/reducers/linksReducer";
import { filterLinksByGroupSelector } from "../../redux/selectors/filterLinksByGroupSelector";
import produce from "immer";
import { BackButton } from "./linksList/BackButton";
import { LinkListItem } from "./linksList/LinkListItem";

interface Props {
  links: Links;
  fetchLinks: (group: string) => void;
  [type: string]: any;
}

export const LinksList = connect(
  mapStateToProps,
  { fetchLinks }
)((props: Props) => {
  React.useEffect(() => {
    props.fetchLinks(props.group);
  }, []);

  if (props.links.error) {
    return <div>Error</div>;
  }

  return (
    <React.Fragment>
      <BackButton />
      {props.loading ? "Loading" : null}
      <List>{mapListItems(props.links.data)}</List>
    </React.Fragment>
  );
});

function mapListItems(links: Array<ILink>) {
  return links.map((link, id) => (
    <LinkListItem key={link.id} primary={link.title} secondary={link.url} />
  ));
}

function mapStateToProps(state: CombinedReducers, props: any) {
  return {
    links: filterLinks(state.links, props.group)
  };
}

function filterLinks(links: Links, group: string) {
  return produce(links, draftLinks => {
    draftLinks.data = draftLinks.data.filter(link => link.group === group);
  });
}
