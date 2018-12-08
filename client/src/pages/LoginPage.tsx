import * as React from "react";
import { connect } from "react-redux";
import { setJwt } from "../redux/actions";
import { redirectTo } from "@reach/router";

interface Props {
  status?: string;
  jwt?: string;
  [type: string]: any;
}

@(connect(
  null,
  { setJwt }
) as any)
export class LoginPage extends React.Component<Props> {
  componentDidMount() {
    this.props.jwt && this.props.setJwt(this.props.jwt);
    redirectTo("/app")
  }

  render() {
    return null;
  }
}
