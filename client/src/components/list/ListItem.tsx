import * as React from "react";
import { ListItem as ListItemComponent, Divider } from "@material-ui/core";
import { Theme } from "../../hocs/withStyledComponentsTheme";
import styled from "styled-components";

interface Props {
  button?: boolean;
  [type: string]: any;
}

const ListItemComponentStyled = styled(ListItemComponent)`
  && {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
  }
` as any;

const FatDivider = styled(Divider)`
  && {
    height: 2px;
  }
` as any;

export const ListItem: React.StatelessComponent<Props> = (props: Props) => (
  <React.Fragment>
    <ListItemComponentStyled button={props.button} {...props}>
      {props.children}
    </ListItemComponentStyled>
    <FatDivider />
  </React.Fragment>
);

ListItem.defaultProps = { button: true };
