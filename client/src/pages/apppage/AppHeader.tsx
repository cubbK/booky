import * as React from "react";
import { Header } from "../../components/Header";
import { connect } from "react-redux";
import { setJwt } from "../../redux/actions";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { ButtonProps } from "@material-ui/core/Button";

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
      <WhiteButton onClick={handleLogout}>Logout</WhiteButton>
    </Header>
  );
});

const WhiteButton = styled(Button)`
  && {
    color: #fafafa;
    :hover {
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.08);
    }
  }
` as any;
