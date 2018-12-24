import * as React from "react";
import { Paper, List as MaterialList } from "@material-ui/core";
import styled from "styled-components";
import { ListItem } from "./list/ListItem";

interface Props {
  [type: string]: any;
}

const PaperFixedWidth = styled(Paper)`
  && {
    width: 920px;
    margin: 0 auto;
    min-height: 100%;
    @media (max-width: 1200px) {
      width: 90%;
    }
    a {
      text-decoration: none;
      color: #222;
    }
  }
` as any;

export class List extends React.Component {
  static Item = ListItem;

  render() {
    return (
      <PaperFixedWidth {...this.props}>
        <MaterialList>{this.props.children}</MaterialList>
      </PaperFixedWidth>
    );
  }
}
