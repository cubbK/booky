import * as React from "react";
import { GoogleButton } from "../../components/GoogleButton";
import { API_URL } from "../../constants";

export class GoogleButtonContainer extends React.Component {
  onClick = () => {
    window.location.href = `${API_URL}/auth/google`;
  };

  render() {
    return <GoogleButton onClick={this.onClick} />;
  }
}
