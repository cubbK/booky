import * as React from "react";
import { List } from "../../components/List";
import { CombinedReducers } from "../../redux/reducers";
import { fetchLinks } from "../../redux/actions";
import { connect } from "react-redux";
import { Links, Link as ILink, Link } from "../../redux/reducers/linksReducer";
import { filterLinksByGroupSelector } from "../../redux/selectors/filterLinksByGroupSelector";
import produce from "immer";
import { BackButton } from "./linksList/BackButton";
import { LinkListItem } from "./linksList/LinkListItem";
import { LinkDrawer } from "./linksList/LinkDrawer";

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

  const [drawerState, setDrawerState] = React.useState({
    open: false,
    link: null
  });

  const toggleDrawer = (toClose: boolean) => () => {
    setDrawerState({
      open: toClose,
      link: null
    });
  };

  const onItemClick = (link: Link) => () => {
    setDrawerState({
      open: true,
      link: link as any
    });
  };

  function mapListItems(links: Array<ILink>) {
    return links.map((link, id) => (
      <LinkListItem
        key={link.id}
        primary={link.title}
        secondary={link.url}
        onClick={onItemClick(link)}
      />
    ));
  }

  if (props.links.error) {
    return <div>Error</div>;
  }

  return (
    <React.Fragment>
      <LinkDrawer
        open={drawerState.open}
        toggleDrawer={toggleDrawer}
        link={drawerState.link}
      />
      <BackButton />
      {props.loading ? "Loading" : null}
      <List>{mapListItems(props.links.data)}</List>
    </React.Fragment>
  );
});

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
