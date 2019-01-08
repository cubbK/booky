import * as React from "react";
import { BackButton } from "./BackButton";
import { LinksListTitle } from "./LinksListTitle";
import styled from "styled-components";

interface Props {
  groupName: string;
  [type: string]: any;
}

const LayoutToCombineWithList = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 90%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  margin: 20px 0 25px;

  .back-button {
    align-self: center;
    @media (max-width: 680px) {
      margin-top: -2px;
    }
  }

  .title {
    text-overflow: ellipsis;
    height: 53px;
    overflow: hidden;
    @media (max-width: 680px) {
      font-size: 2rem;
      height: auto;
    }
  }
`;

export const LinksListUpper = (props: Props) => (
  <LayoutToCombineWithList>
    <Container>
      <BackButton className="back-button" />

      <LinksListTitle className="title">{props.groupName}</LinksListTitle>

      {/* <div className="title">LongTextLongTextLongTextLongTextLongTextLongText</div> */}
    </Container>
  </LayoutToCombineWithList>
);
