import * as React from "react";
import { Layout } from "../../../components/Layout";
import { BackButton } from "./BackButton";
import { LinksListTitle } from "./LinksListTitle";
import styled from "styled-components";

interface Props {
  groupName: string;
  [type: string]: any;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  grid-template-columns: auto 1fr;
  margin: 15px 0 25px;

  .back-button {
    align-self: center;
  }

  .title {
    margin-left: 10px;
    flex: 1;
    min-width: 0; /* or some value */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const LinksListUpper = (props: Props) => (
  <Layout>
    <Container>
      <BackButton className="back-button" />
      <LinksListTitle className="title">{props.groupName}</LinksListTitle>
    </Container>
  </Layout>
);
