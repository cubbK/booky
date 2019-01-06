import * as React from "react";
import { Footer } from "../components/Footer";
import { GroupsList } from "./apppage/GroupsList";
import { AppHeader } from "./apppage/AppHeader";
import styled, { css } from "styled-components";
import { Router, navigate } from "@reach/router";
import { LinksList } from "./apppage/LinksList";
import { connect } from "react-redux";
import { CombinedReducers } from "../redux/reducers";
import { Paper } from "@material-ui/core";
import { fetchWithAuth } from "../helpers/fetchWithAuth";
import { API_URL } from "../constants";
import { refreshJwt } from "../redux/actions";

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const RouterFullHeight = styled(Router)`
  min-height: 100%;
`;

interface Props {
  [type: string]: any;
}

export const AppPage = connect(
  (state: CombinedReducers) => ({ jwt: state.jwt }),
  { refreshJwt }
)((props: Props) => {
  React.useEffect(() => {
    console.log(props.jwt);
    try {
      fetchWithAuth({ url: `${API_URL}/auth/refresh/${props.jwt}` }).then(
        response => {
          const newJwt = response.data;

          props.refreshJwt(newJwt);
        }
      );
    } catch (err) {
      navigate("/landing");
    }
  }, []);

  React.useEffect(
    () => {
      if (!props.jwt) {
        navigate("/landing");
      }
    },
    [props.jwt]
  );

  return (
    <Container>
      <AppHeader />
      <main>
        <RouterFullHeight>
          <GroupsList path="/" />
          <LinksList path="group/:group" />
          <LinksList path="favorites" />
        </RouterFullHeight>
      </main>
      <Footer />
    </Container>
  );
});
