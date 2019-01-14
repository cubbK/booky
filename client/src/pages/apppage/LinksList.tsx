import * as React from "react";
import { List } from "../../components/List";
import { CombinedReducers } from "../../redux/reducers";
import { fetchLinks, fetchFavorites } from "../../redux/actions";
import { connect } from "react-redux";
import { compose } from "redux";
import { Links, Link as ILink, Link } from "../../redux/reducers/linksReducer";
import { filterLinksByGroupSelector } from "../../redux/selectors/filterLinksByGroupSelector";
import produce from "immer";
import { BackButton } from "./linksList/BackButton";
import { LinkListItem } from "./linksList/LinkListItem";
import { LinkDrawer } from "./linksList/LinkDrawer";
import { LinkDrawerContainer } from "./linksList/LinkDrawerContainer";
import { LinksListUpper } from "./linksList/LinksListUpper";
import { KawaiiSuggestion } from "../../components/KawaiiSuggestion";
import { withSnackbar, InjectedNotistackProps } from "notistack";

interface Props {
  links: Links;
  fetchLinks: (group: string) => void;
  fetchFavorites: () => void;
  enqueueSnackbar: InjectedNotistackProps["enqueueSnackbar"];
  group: string;
  [type: string]: any;
}

const Component: React.FunctionComponent<Props> = (props: Props) => {
  const [startedFetching, setStartedFetching] = React.useState(false);

  React.useEffect(() => {
    setStartedFetching(true);
    if (props.path === "favorites") {
      props.fetchFavorites();
    } else {
      props.fetchLinks(props.group);
    }
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
    for (const link of props.links.data) {
      if (link.id === drawerState.linkId) {
        return link;
      }
    }
    return null; //if no link is found return null
  }

  const title = props.path === "favorites" ? "Favorites" : props.group;

  if (props.links.error) {
    const err = props.links.error;
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message;
    props.enqueueSnackbar(message, { variant: "error" });
  }

  if (props.links.loading && props.links.data.length === 0) {
    return (
      <React.Fragment>
        <LinksListUpper title={title} />
        <List.Loading />
      </React.Fragment>
    );
  }

  if (props.links.data.length === 0 && startedFetching) {
    return (
      <React.Fragment>
        <LinksListUpper title={title} />
        <KawaiiSuggestion message="The list is empty" mood="sad" />
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
      <LinksListUpper title={title} />
      <List>{mapListItems(props.links.data)}</List>
    </React.Fragment>
  );
};

function mapStateToProps(state: CombinedReducers, props: any) {
  if (props.path === "favorites") {
    return {
      links: filterFavoriteLinks(state.links)
    };
  } else {
    return {
      links: filterLinks(state.links, props.group)
    };
  }
}

function filterLinks(links: Links, group: string) {
  return produce(links, draftLinks => {
    draftLinks.data = draftLinks.data.filter(link => link.group === group);
  });
}

function filterFavoriteLinks(links: Links) {
  return produce(links, draftLinks => {
    draftLinks.data = draftLinks.data.filter(link => link.isFavorite === true);
  });
}

export const LinksList = compose(
  connect(
    mapStateToProps,
    { fetchLinks, fetchFavorites }
  ),
  withSnackbar
)(Component) as React.FunctionComponent<{ [type: string]: any }>;
