import * as React from "react";
import { Drawer, Paper, Typography, Button } from "@material-ui/core";
import { Link } from "../../../redux/reducers/linksReducer";
import styled from "styled-components";
import closeIcon from "./images/iconmonstr-x-mark-2.svg";
import favoriteIcon from "./images/iconmonstr-star-2.svg";
import deleteIcon from "./images/iconmonstr-trash-can-2.svg";


const Container = styled.div`
  box-sizing: border-box;
  width: 300px;
  background-color: #f8f8f8;
  padding: 10px;
  height: 100%;
`;

const CloseBtn = styled.div`
  margin-right: 0;
  margin-left: auto;
  width: 20px;
  height: 20px;
  cursor: pointer;
  mask: url(${closeIcon}) no-repeat center;
  background-color: #fff;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin: 10px 0;
  }
`;

const InfoContainer = styled(Paper)`
  padding: 25px 20px;
` as any;

const ActionsContainer = styled(Paper)`` as any;

const TopBar = styled.div`
  background-color: ${props => props.theme.primary};
  padding: 13px 10px;
`;

const Title = styled(Typography)`
  && {
    line-height: 1.3;
    margin-bottom: 15px;
  }
` as any;

const Href = styled.a`
  text-decoration: none;
  color: #1c77c3 !important;
  word-break: break-all;
  :hover,
  :active,
  :focus {
    text-decoration: underline;
  }
`;

const Icon = styled.img`
  margin-right: 20px;
  width: 15px;
`;

const ActionButton = styled(Button)`
  && {
    padding: 15px 20px;
    position: relative;
    justify-content: flex-start;
  }
` as any;

const ActionDelimiter = styled.div`
  width: 80%;
  margin: 0 0 0 auto;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.12);
`;

interface Props {
  open: boolean;
  toggleDrawer: any;
  link: Link | null;
  [type: string]: any;
}

export const LinkDrawer = (props: Props) => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={props.toggleDrawer(false)}
    >
      <TopBar>
        <CloseBtn
          tabIndex={0}
          role="button"
          onClick={props.toggleDrawer(false)}
          onKeyDown={props.toggleDrawer(false)}
        />
      </TopBar>
      <Container>
        <CardsContainer>
          <InfoContainer>
            <Title variant="h6">{props.link && props.link.title}</Title>
            <Href href={(props.link && props.link.url) || ""} target="_blank">
              {props.link && props.link.url}
            </Href>
          </InfoContainer>
          <ActionsContainer>
            <ActionButton fullWidth={true} size="large">
              <Icon src={favoriteIcon} alt="Favorite" />
              Favorite
            </ActionButton>
            <ActionDelimiter />
            <ActionButton fullWidth={true} size="large">
              <Icon src={deleteIcon} alt="Delete" />
              Delete
            </ActionButton>
          </ActionsContainer>
        </CardsContainer>
      </Container>
    </Drawer>
  );
};
