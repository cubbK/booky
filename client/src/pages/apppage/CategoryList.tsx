import * as React from "react";
import { connect } from "react-redux";
import { getLinks } from "../../redux/actions";

interface Props {
  [type: string]: any;
}

@(connect(
  null,
  { getLinks }
) as any)
export class CategoryList extends React.Component<Props> {
  componentDidMount() {
    this.props.getLinks();
  }
  render() {
    return <div>CategoryList</div>;
  }
}
