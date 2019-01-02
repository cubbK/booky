import * as React from "react";
import { Drawer, Paper, Typography, Button } from "@material-ui/core";
import { Link } from "../../../redux/reducers/linksReducer";
import styled from "styled-components";
import closeIcon from "./images/iconmonstr-x-mark-2.svg";
import favoriteIcon from "./images/iconmonstr-star-2.svg";
import deleteIcon from "./images/iconmonstr-trash-can-2.svg";
import { PopupAlert } from "../../../components/PopupAlert";

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

const Icon = styled.div<{ icon: string }>`
  margin-right: 20px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  mask: url(${props => props.icon}) no-repeat center;
  mask-size: contain;
  background-color: ${(props: any) =>
    props.color === "primary" ? props.theme.primary : "#000"};
` as any;

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
  link: Link | null;
  handleFavorite: () => any;
  handleDelete: () => any;
  [type: string]: any;
}

export const LinkDrawer = (props: Props) => {
  const [deleteAlertOpen, setDeleteAlertOpen] = React.useState(false);

  const handleDeleteAlertOpen = (state: boolean) => () => {
    setDeleteAlertOpen(state);
  };

  const handleFinalDelete = () => {
    console.log(props.toggleDrawer)
    props.toggleDrawer(false)();
    setDeleteAlertOpen(false);
    props.handleDelete();
  };

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
            <ActionButton
              fullWidth={true}
              size="large"
              onClick={props.handleFavorite}
              color={props.link && props.link.isFavorite ? "primary" : null}
            >
              <Icon
                icon={favoriteIcon}
                color={props.link && props.link.isFavorite ? "primary" : null}
              />
              {props.link && props.link.isFavorite ? "Unfavorite" : "Favorite"}
            </ActionButton>
            <ActionDelimiter />
            <ActionButton
              fullWidth={true}
              size="large"
              onClick={handleDeleteAlertOpen(true)}
            >
              <Icon icon={deleteIcon} />
              Delete
            </ActionButton>
          </ActionsContainer>
        </CardsContainer>
      </Container>
      <PopupAlert
        open={deleteAlertOpen}
        handleClose={handleDeleteAlertOpen(false)}
        title="The link will be deleted forever"
        description="You won't be able to undo this action"
      >
        <PopupAlert.Action onClick={handleDeleteAlertOpen(false)}>
          Cancel
        </PopupAlert.Action>
        <PopupAlert.Action color="secondary" onClick={handleFinalDelete}>
          Delete Link
        </PopupAlert.Action>
      </PopupAlert>
    </Drawer>
  );
};
