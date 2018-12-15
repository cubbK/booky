import * as React from "react";
import { connect } from "react-redux";
import { List } from "../../components/List";
import { CombinedReducers } from "../../redux/reducers";
import { Link } from "@reach/router";
import { fetchWithAuth } from "../../helpers/fetchWithAuth";
import { API_URL } from "../../constants";
import { useFetch } from "../../hooks/useFetch";

interface Props {
  [type: string]: any;
}

export const GroupsList = (props: Props) => {
  const [data, error, loading] = useFetch({ url: `${API_URL}/links/groups` });

  console.log(data, loading, error);

  return <List>{mapListItems([])}</List>;
};

function mapListItems(categories: Array<{ name: string; linksCount: number }>) {
  return categories.map((category, id) => (
    <Link to={`/group/${category.name}`} key={id}>
      <List.Item button={true}>
        {category.name}({category.linksCount})
      </List.Item>
    </Link>
  ));
}
