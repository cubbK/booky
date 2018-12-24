import * as React from "react";
import { ListItem as ListItemComponent, Divider } from "@material-ui/core";
import { Theme } from "../../hocs/withStyledComponentsTheme";
import styled from "styled-components";

interface Props {
  [type: string]: any;
}

const ListItemComponentStyled = styled(ListItemComponent)`
  && {
    display: flex;
    justify-content: space-between;
  }
` as any;

const FatDivider = styled(Divider)`
  && {
    height: 2px;
  }
` as any;

export const ListItem = (props: Props) => (
  <React.Fragment>
    <ListItemComponentStyled button={true} {...props}>
      {props.children}
    </ListItemComponentStyled>
    <FatDivider />
  </React.Fragment>
);
