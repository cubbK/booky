import * as React from "react";
import { Footer } from "../components/Footer";
import { GroupsList } from "./apppage/GroupsList";
import { useRedirectIfUnauthorized } from "../hooks/useRedirectIfUnauthorizer";
import { AppHeader } from "./apppage/AppHeader";
import styled from "styled-components";
import { Router } from "@reach/router";
import { LinksList } from "./apppage/LinksList";

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

interface Props {
  [type: string]: any;
}

export const AppPage = (props: Props) => {
  const isAuthorized = useRedirectIfUnauthorized();
  return (
    <Container>
      <AppHeader />
      <main>
        <Router>
          <GroupsList path="/" />
          <LinksList path="group/:group" />
        </Router>
      </main>
      <Footer />
    </Container>
  );
};
