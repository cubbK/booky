import * as React from "react";
import { connect } from "react-redux";
import { refreshJWT } from "../redux/actions";
import { CombinedReducers } from "../redux/reducers";

interface Props {
  refreshJWT: (jwt: string) => void;
  jwt: string;
}

export const withRefreshJwt = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {

  class withRefreshJwt extends React.Component<Props> {
    componentDidMount() {
      this.props.refreshJWT(this.props.jwt);
    }

    render() {
      return <WrappedComponent />;
    }
  }
  
  return connect((state: CombinedReducers) => ({
    jwt: state.jwt
  }), { refreshJWT })(withRefreshJwt as any);
};
