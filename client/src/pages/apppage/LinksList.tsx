import * as React from "react";
import { List } from "../../components/List";
import { CombinedReducers } from "../../redux/reducers";
import { fetchLinks } from "../../redux/actions";
import { connect } from "react-redux";
import { Links, Link } from "../../redux/reducers/linksReducer";
import { filterLinksByGroupSelector } from "../../redux/selectors/filterLinksByGroupSelector";
import produce from "immer";

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
      {props.loading ? "Loading" : null}
      <List>{mapListItems(props.links.data)}</List>
    </React.Fragment>
  );
});

function mapListItems(links: Array<Link>) {
  return links.map((link, id) => (
    <List.Item key={link.id}>
      <a href={link.url} target="_blank">
        {link.url}
      </a>
    </List.Item>
  ));
}

function mapStateToProps(state: CombinedReducers, props: any) {
  return {
    links: filterLinks(state.links, props.group)
  };
}

function filterLinks (links: Links, group: string) {
  return produce(links, draftLinks => {
    draftLinks.data = draftLinks.data.filter(link => link.group === group)
  })
}
