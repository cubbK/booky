import * as React from "react";
import { Drawer, Paper } from "@material-ui/core";
import { Link } from "../../../redux/reducers/linksReducer";
import styled from "styled-components";
import closeIcon from "./images/iconmonstr-x-mark-2.svg";

const Container = styled.div`
  box-sizing: border-box;
  width: 300px;
  padding: 10px 5px;
  background-color: #f8f8f8;
  min-height: 100%;
`;

const CloseBtn = styled.div`
  margin-right: 0;
  margin-left: auto;
  width: 20px;
  height: 20px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin: 10px 0;
  }
`;

const InfoContainer = styled(Paper)`

` as any;

const ActionsContainer = styled(Paper)`` as any;

interface Props {
  open: boolean;
  toggleDrawer: any;
  link: Link | null;
  [type: string]: any;
}

export const LinkDrawer = (props: Props) => {
  console.log(props.link);
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={props.toggleDrawer(false)}
    >
      <Container>
        <CloseBtn
          tabIndex={0}
          role="button"
          onClick={props.toggleDrawer(false)}
          onKeyDown={props.toggleDrawer(false)}
        >
          <img src={closeIcon} alt="X" />
        </CloseBtn>
        <CardsContainer>
          <InfoContainer>123</InfoContainer>
          <ActionsContainer>actions</ActionsContainer>
        </CardsContainer>
      </Container>
    </Drawer>
  );
};
