import * as React from "react";
import { connect } from "react-redux";
import { getLinks } from "../../redux/actions";
import { List } from "../../components/List";
import { CombinedReducers } from "../../redux/reducers";
import { Link } from "@reach/router";

interface Props {
  [type: string]: any;
  links: Array<any>;
}

export const CategoryList = connect(
  (state: CombinedReducers) => ({
    data: state.links.data,
    loading: state.links.loading
  }),
  { getLinks }
)((props: Props) => {
  React.useEffect(() => {
    props.getLinks();
  }, []);

  const categories = React.useMemo(() => getCategoriesFromLinks(props.data), [
    props.data
  ]);

  console.log(categories);

  if (props.loading) {
    return "Loading";
  }

  if (props.error) {
    return props.error;
  }

  return <List>{mapListItems(categories)}</List>;
});

function mapListItems(categories: Array<{ name: string; linksCount: number }>) {
  return categories.map((category, id) => (
    <Link to={`/group/${category.name}`} key={id}>
      <List.Item button={true}>
        {category.name}({category.linksCount})
      </List.Item>
    </Link>
  ));
}

function getCategoriesFromLinks(links: any) {
  const categories: Array<{ name: string; linksCount: number }> = [];

  for (const link of links) {
    const categoryIndex = categories.findIndex(
      category => category.name === link.group
    );
    if (categoryIndex === -1) {
      categories.push({
        name: link.group,
        linksCount: 1
      });
    } else {
      categories[categoryIndex].linksCount += 1;
    }
  }

  return categories;
}
