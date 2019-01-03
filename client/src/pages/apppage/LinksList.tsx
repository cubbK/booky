import * as React from "react";
import { List } from "../../components/List";
import { CombinedReducers } from "../../redux/reducers";
import { fetchLinks } from "../../redux/actions";
import { connect } from "react-redux";
import { compose } from "redux";
import { Links, Link as ILink, Link } from "../../redux/reducers/linksReducer";
import { filterLinksByGroupSelector } from "../../redux/selectors/filterLinksByGroupSelector";
import produce from "immer";
import { BackButton } from "./linksList/BackButton";
import { LinkListItem } from "./linksList/LinkListItem";
import { LinkDrawer } from "./linksList/LinkDrawer";
import { LinkDrawerContainer } from "./linksList/LinkDrawerContainer";


interface Props {
  links: Links;
  fetchLinks: (group: string) => void;
  [type: string]: any;
}

const Component = (props: Props) => {
  React.useEffect(() => {
    props.fetchLinks(props.group);
  }, []);

  const [drawerState, setDrawerState] = React.useState({
    open: false,
    linkId: -1 // ids don't consist of negative numbers,
    // thus it's safe to assume than -1 would not match anything
  });

  const toggleDrawer = (toClose: boolean) => () => {
    setDrawerState({
      open: toClose,
      linkId: -1
    });
  };

  const onItemClick = (link: Link) => () => {
    setDrawerState({
      open: true,
      linkId: link.id
    });
  };

  function mapListItems(links: Array<ILink>) {
    return links.map((link, id) => (
      <LinkListItem
        key={link.id}
        primary={link.title}
        secondary={link.url}
        onClick={onItemClick(link)}
        isFavorite={link.isFavorite}
      />
    ));
  }

  function getSelectedLink(): Link | null {
    console.log(drawerState);
    for (const link of props.links.data) {
      if (link.id === drawerState.linkId) {
        return link;
      }
    }
    return null; //if no link is found return null
  }

  if (props.links.error) {
    return <div>Error</div>;
  }

  if (props.links.loading && props.links.data.length === 0) {
    return (
      <React.Fragment>
        <BackButton />
        <List.Loading />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <LinkDrawerContainer
        open={drawerState.open}
        toggleDrawer={toggleDrawer}
        link={getSelectedLink()}
      />
      <BackButton />
      {props.links.loading ? "Loading" : null}
      <List>{mapListItems(props.links.data)}</List>
    </React.Fragment>
  );
};

export const LinksList = compose(
  connect(
    mapStateToProps,
    { fetchLinks }
  )
)(Component);

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
