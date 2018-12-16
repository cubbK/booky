import * as React from "react";
import { fetchWithAuth } from "../../helpers/fetchWithAuth";
import { API_URL } from "../../constants";
import { List } from "../../components/List";
import { Link } from "@reach/router";

interface Props {
  group? :string;
  [type: string]: any;
}

export const LinksList = (props: Props) => {
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetchWithAuth({ url: `${API_URL}/links/group/${props.group}` }).then(
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


function mapListItems(links: Array<any>) {
  return links.map((link, id) => (
      <List.Item key={link.id}>
        <a href={link.url} target="_blank">{link.url}</a>
      </List.Item>
  ));
}