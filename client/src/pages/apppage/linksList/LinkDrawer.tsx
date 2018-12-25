import * as React from "react";
import { Drawer } from "@material-ui/core";
import { Link } from "../../../redux/reducers/linksReducer";
import styled from "styled-components";

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
        <div
          tabIndex={0}
          role="button"
          onClick={props.toggleDrawer(false)}
          onKeyDown={props.toggleDrawer(false)}
        >
          Close
        </div>
        {props.children}
      </Container>
    </Drawer>
  );
};

const Container = styled.div`
  width: 300px;
  padding: 10px 5px;
`;
