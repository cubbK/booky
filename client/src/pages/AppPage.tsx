import * as React from "react";
import { Footer } from "../components/Footer";
import { GroupsList } from "./apppage/GroupsList";
import { AppHeader } from "./apppage/AppHeader";
import styled from "styled-components";
import { Router, navigate } from "@reach/router";
import { LinksList } from "./apppage/LinksList";
import { connect } from "react-redux";
import { CombinedReducers } from "../redux/reducers";
import { AddLinkForm } from "./apppage/AddLinkForm";

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

interface Props {
  [type: string]: any;
}

export const AppPage = connect(
  (state: CombinedReducers) => ({ jwt: state.jwt }),
  {}
)((props: Props) => {
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
        <AddLinkForm />
        <Router>
          <GroupsList path="/" />
          <LinksList path="group/:group" />
        </Router>
      </main>
      <Footer />
    </Container>
  );
});
