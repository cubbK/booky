import * as React from "react";
import { List } from "../../components/List";
import { Link } from "@reach/router";
import { fetchWithAuth } from "../../helpers/fetchWithAuth";
import { API_URL } from "../../constants";

interface Props {
  [type: string]: any;
}

export const GroupsList = (props: Props) => {
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetchWithAuth({ url: `${API_URL}/links/groups` }).then(
      response => {
        setData(response.data);
        setLoading(false);
      },
      err => {
        setError(err);
        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    console.log(error);
    return <div>Error</div>
  }

  return <List>{mapListItems(data || [])}</List>;
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
