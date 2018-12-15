import * as React from "react";
import { Header } from "../../components/Header";
import { connect } from "react-redux";
import { setJwt } from "../../redux/actions";
import { Button } from "@material-ui/core";

interface Props {
  setJwt: (jwt: any) => void;
  [type: string]: any;
}

export const AppHeader = connect(
  null,
  { setJwt }
)((props: Props) => {
  function handleLogout() {
    try {
      props.setJwt(null);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Header>
      <Button onClick={handleLogout}>Logout</Button>
    </Header>
  );
});
